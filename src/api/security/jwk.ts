import instance from '@/api/request'

// 获取密码加密公钥 (Base64 格式)
export const jwkPublicKey = () => {
    return instance({
        url: '/mall-security/jwk/base64',
        method: 'get'
    })
}
