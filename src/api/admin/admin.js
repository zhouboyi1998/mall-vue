import instance from '@/api/request'

// 分页查询管理员
export const selectAdminPage = (params) => {
    return instance({
        url: '/admin/admin/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.admin
    })
}

// 更新单个管理员
export const updateAdmin = (admin) => {
    return instance({
        url: '/admin/admin/update',
        method: 'put',
        data: admin
    })
}
