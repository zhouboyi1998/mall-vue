import instance from '@/api/request'

// 生成验证码
export const createCaptchaOne = () => {
    return instance({
        url: '/mall-security/captcha/one',
        method: 'get'
    })
}
