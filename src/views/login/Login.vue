<template>
    <div class="login-container">
        <el-form class="login-form" ref="form" :model="formParams" :rules="rules">
            <div class="title-container">
                <h3 class="title">后台管理系统</h3>
            </div>
            <!-- 账号 -->
            <el-form-item prop="username">
                <el-icon class="icon-container" :size="20">
                    <User/>
                </el-icon>
                <el-input v-model="formParams.username" @keyup.enter.native="handleLogin"/>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password">
                <el-icon class="icon-container" :size="20">
                    <Lock/>
                </el-icon>
                <el-input v-model="formParams.password" :type="passwordInputType"
                          @keyup.enter.native="handleLogin">
                    <template #suffix>
                        <el-icon
                            class="show-password-icon-container"
                            v-if="showPassword" @click="handleShowPassword(false)">
                            <View/>
                        </el-icon>
                        <el-icon
                            class="show-password-icon-container"
                            v-else @click="handleShowPassword(true)">
                            <Hide/>
                        </el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <!-- 验证码 -->
            <el-form-item prop="code">
                <el-row style="width: 100%" :span="24">
                    <el-col :span="18">
                        <el-icon class="icon-container" :size="20">
                            <PictureRounded/>
                        </el-icon>
                        <el-input v-model="formParams.code" @keyup.enter.native="handleLogin"/>
                    </el-col>
                    <el-col :span="6">
                        <img class="captcha-image" :src="captchaImage" alt="refresh"
                             @click="handleGetCaptcha"/>
                    </el-col>
                </el-row>
            </el-form-item>
            <!-- 登录按钮 -->
            <el-button class="login-button" type="primary" @click="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import router from '@/router'
import { useTokenStore } from '@/store/token'
import { login } from '@/api/login'
import { createCaptchaOne } from '@/api/security/captcha'
import { jwkPublicKey } from '@/api/security/jwk'
import { ElForm, ElMessage } from 'element-plus'
import JSEncrypt from 'jsencrypt'

// 获取 Pinia 仓库
const tokenStore = useTokenStore()

// 是否显示密码
let showPassword = ref(false)

// 密码输入框类型
let passwordInputType = ref('password')

const handleShowPassword = (show) => {
    // 根据是否显示密码, 设置密码输入框的类型
    if (show) {
        passwordInputType.value = 'text'
    } else {
        passwordInputType.value = 'password'
    }
    showPassword.value = show
}

// 验证码图片
const captchaImage = ref('')

// 获取验证码
const handleGetCaptcha = async () => {
    // 发送请求生成验证码
    let result = await createCaptchaOne()
    // 将返回的验证码数据绑定到对应的属性中
    captchaImage.value = result.data.data.image
    formParams.key = result.data.data.key
}

// 进入页面时获取验证码
handleGetCaptcha()

// 登录表单请求参数
const formParams = reactive({
    username: '',
    password: '',
    key: '',
    code: ''
})

// 表单校验规则
const rules = reactive({
    username: [
        {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
        }
    ],
    code: [
        {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
        }
    ]
})

// 新建 JSEncrypt 对象
const crypt = new JSEncrypt()

// 获取密码加密公钥
const handleGetJWKPublicKey = async () => {
    let result = await jwkPublicKey()
    crypt.setPublicKey(result.data.data)
}

// 执行获取密码加密公钥请求
handleGetJWKPublicKey()

// 登录表单
const form = ref(ElForm)

// 登录处理
const handleLogin = () => {
    // 请求参数
    const params = new URLSearchParams()
    // 授权模式
    params.append('grant_type', 'captcha')
    params.append('username', formParams.username)
    // 加密用户输入的密码, 防止泄露
    params.append('password', crypt.encrypt(formParams.password) as string)
    params.append('key', formParams.key)
    params.append('code', formParams.code)

    // 校验登录表单
    form.value.validate(async (valid: boolean) => {
        if (valid) {
            // 如果校验通过, 发起登录请求
            await login(params)
                .then(result => {
                    // 将 token 保存到 Pinia Store 中
                    tokenStore.$patch({
                        // Access Token (需要添加前缀)
                        accessToken: result.data.data.tokenPrefix + result.data.data.accessToken,
                        // Refresh Token
                        refreshToken: result.data.data.refreshToken,
                        // 当前时间戳 + Access Token 过期时长 == Access Token 过期时间
                        expiresIn: Date.now() + result.data.data.expiresIn
                    })
                    // 跳转到首页
                    router.replace('/')
                    ElMessage.success({ message: '登录成功', center: true })
                })
                .catch(error => {
                    // 重新获取验证码
                    handleGetCaptcha()
                    ElMessage.error({ message: '登录失败', center: true })
                })
        } else {
            ElMessage.error({ message: '请输入完整的登录信息', center: true })
        }
    })
}
</script>

<style scoped lang="scss">
@import "src/style/login";
</style>
