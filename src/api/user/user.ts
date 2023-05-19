import instance from '@/api/request'

// 分页查询管理员
export const selectUserPage = (params: any) => {
    return instance({
        url: '/mall-user/user/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.user
    })
}

// 更新单个管理员
export const updateUser = (user: any) => {
    return instance({
        url: '/mall-user/user/update',
        method: 'put',
        data: user
    })
}
