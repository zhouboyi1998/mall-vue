import instance from '@/api/request'

// 分页查询角色
export const selectRolePage = (params) => {
    return instance({
        url: '/mall-user/role/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.role
    })
}

// 更新单个角色
export const updateRole = (role) => {
    return instance({
        url: '/mall-user/role/update',
        method: 'put',
        data: role
    })
}
