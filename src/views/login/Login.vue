<template>
    <div class="login-container">
        <el-form class="login-form" ref="formRef" :model="form" :rules="rules">
            <div class="title-container">
                <h3 class="title">后台管理系统</h3>
            </div>
            <el-form-item prop="username">
                <el-icon class="icon-container" :size="20">
                    <User/>
                </el-icon>
                <el-input v-model="form.username"/>
            </el-form-item>
            <el-form-item prop="password">
                <el-icon class="icon-container" :size="20">
                    <Lock/>
                </el-icon>
                <el-input
                    :type="passwordInputType"
                    v-model="form.password"
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
            <el-button class="login-button" type="primary" @click="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import router from '@/router'
import { useTokenStore } from '@/store/token'
import { login } from '@/api/login'
import { User, Lock, Hide, View } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

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

// 请求参数
const form = reactive({
    username: '',
    password: ''
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
    ]
})

const formRef = ref(null)

// 登录处理
const handleLogin = () => {
    // 请求参数
    const params = new URLSearchParams()
    // 密码模式登录
    params.append('grant_type', 'password')
    params.append('username', form.username)
    params.append('password', form.password)

    // 校验 form 表单
    formRef.value.validate(async (valid) => {
        if (valid) {
            // 如果校验通过, 发起登录请求
            await login(params)
                .then(result => {
                    // 将 token 保存到 Pinia Store 中
                    tokenStore.$patch({
                        // Access Token (需要添加前缀)
                        accessToken: result.data.tokenPrefix + result.data.accessToken,
                        // Refresh Token
                        refreshToken: result.data.refreshToken,
                        // 当前时间戳 + Access Token 过期时长 == Access Token 过期时间
                        expiresIn: Date.now() + result.data.expiresIn
                    })
                    // 跳转到首页
                    router.replace('/')
                    ElMessage.success({ message: '登录成功', center: true })
                })
                .catch(error => {
                    ElMessage.error({ message: '登录失败', center: true })
                })
        } else {
            ElMessage.error({ message: '请输入账号和密码', center: true })
        }
    })
}
</script>

<style lang="scss" scoped>
@import "src/assets/style/login";
</style>
