import instance from '@/api/request'

// 退出登录
export const logout = () => {
    return instance({
        url: '/mall-security/oauth/logout',
        method: 'delete'
    })
}
