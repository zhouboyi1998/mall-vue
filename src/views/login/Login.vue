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
                    type="password" show-password
                    v-model="form.password"
                    @keyup.enter.native="handleLogin"
                />
            </el-form-item>
            <el-button class="login-button" type="primary" @click="handleLogin">
                登&nbsp;&nbsp;录
            </el-button>
        </el-form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import router from '@/router'
import { useTokenStore } from '@/store/token'
import { login } from '@/api/login'
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

// 获取 Pinia 仓库
const tokenStore = useTokenStore()

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
                .then(res => {
                    // 将 token 保存到 Pinia Store 中
                    tokenStore.$patch({
                        // Access Token (需要添加前缀)
                        accessToken: res.data.tokenPrefix + res.data.accessToken,
                        // Refresh Token
                        refreshToken: res.data.refreshToken,
                        // 当前时间戳 + Access Token 过期时长 == Access Token 过期时间
                        expiresIn: Date.now() + res.data.expiresIn
                    })
                    // 跳转到首页
                    router.replace('/')
                    ElMessage({ message: '登录成功', type: 'success' })
                })
                .catch(error => {
                    ElMessage.error('登录失败')
                })
        } else {
            ElMessage.error('请输入账号和密码')
        }
    })
}
</script>

<style lang="scss" scoped>
.login-container {
    min-height: 100%;
    width: 100%;
    background-color: $main-color;
    overflow: hidden;

    .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;

        // 密码框 view 显示密码按钮上下居中 (element-plus 默认的 css 没有对齐)
        :deep(.el-input__suffix-inner) {
            align-items: center;
        }

        :deep(.el-form-item) {
            border: 1px solid $dark-gray-color;
            background: $black-color-point;
            border-radius: 5px;
            color: $dark-gray-color;
        }

        :deep(.el-input) {
            display: inline-block;
            height: 47px;
            width: 85%;

            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: $light-gray-color;
                height: 47px;
                caret-color: $white-color;
            }
        }

        .login-button {
            width: 100%;
            box-sizing: border-box;
            font-weight: bold;
        }
    }

    .tips {
        font-size: 16px;
        line-height: 28px;
        color: $white-color;
        margin-bottom: 10px;

        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }

    .icon-container {
        padding: 6px 5px 6px 15px;
        color: $medium-light-gray-color;
        vertical-align: middle;
        display: inline-block;
    }

    .title-container {
        position: relative;

        .title {
            font-size: 26px;
            color: $light-gray-color;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }

        :deep(.lang-select) {
            position: absolute;
            top: 4px;
            right: 0;
            background-color: $white-color;
            font-size: 22px;
            padding: 4px;
            border-radius: 4px;
            cursor: pointer;
        }
    }

    .show-pwd {
        font-size: 16px;
        color: $medium-light-gray-color;
        cursor: pointer;
        user-select: none;
    }
}
</style>
