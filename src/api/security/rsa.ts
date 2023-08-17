import instance from '@/api/request'

// 获取 RSA 公钥
export const rsaPublicKey = () => {
    return instance({
        url: '/mall-security/rsa/public-key',
        method: 'get'
    })
}
