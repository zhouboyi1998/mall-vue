<template>
    <div class="login-container">
        <el-form class="login-form" ref="formRef" :model="form" :rules="rules">
            <div class="title-container">
                <h3 class="title">后台管理系统</h3>
            </div>
            <el-form-item prop="username">
                <el-icon class="svg-container" :size="20">
                    <User/>
                </el-icon>
                <el-input v-model="form.username"/>
            </el-form-item>
            <el-form-item prop="password">
                <el-icon class="svg-container" :size="20">
                    <Lock/>
                </el-icon>
                <el-input
                    type="password" show-password
                    v-model="form.password"
                    @keyup.enter.native="handleLogin"
                />
            </el-form-item>
            <el-button class="login-button" type="primary" @click="handleLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import router from '@/router'
import { login } from '@/api/login'
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

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
    // 添加请求参数
    const params = new URLSearchParams()
    params.append('username', form.username)
    params.append('password', form.password)

    // 发送登录请求
    formRef.value.validate(async (valid) => {
        if (valid) {
            await login(params)
                .then(res => {
                    success(res)
                })
                .catch(error => {
                    ElMessage.error('登录失败')
                })
        } else {
            ElMessage.error('请输入账号和密码')
        }
    })
}

// 登录成功处理
const success = (res) => {
    // 将登录成功返回的 token 相关信息保存到 Local Storage 中
    // 令牌前缀 + 访问令牌
    localStorage.setItem('token', res.data.tokenPrefix + res.data.token)
    // 刷新令牌 (刷新令牌不需要带令牌前缀)
    localStorage.setItem('refreshToken', res.data.refreshToken)
    // 访问令牌过期时间
    localStorage.setItem('expiresIn', res.data.expiresIn)
    // 跳转到首页
    router.replace('/')
    // 登录成功提示
    ElMessage({ message: '登录成功', type: 'success' })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
    min-height: 100%;
    width: 100%;
    background-color: $bg;
    overflow: hidden;

    .login-form {
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;

        /* 密码框 view 显示密码按钮居中 */
        :deep(.el-input__suffix-inner) {
            align-items: center;
        }

        :deep(.el-form-item) {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
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
                color: $light_gray;
                height: 47px;
                caret-color: $cursor;
            }
        }

        .login-button {
            width: 100%;
            box-sizing: border-box;
        }
    }

    .tips {
        font-size: 16px;
        line-height: 28px;
        color: #fff;
        margin-bottom: 10px;

        span {
            &:first-of-type {
                margin-right: 16px;
            }
        }
    }

    .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
    }

    .title-container {
        position: relative;

        .title {
            font-size: 26px;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }

        :deep(.lang-select) {
            position: absolute;
            top: 4px;
            right: 0;
            background-color: white;
            font-size: 22px;
            padding: 4px;
            border-radius: 4px;
            cursor: pointer;
        }
    }

    .show-pwd {
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
    }
}
</style>
