import instance from '@/api/request'

// 分页查询资源
export const selectResourcePage = (params: any) => {
    return instance({
        url: '/mall-user/resource/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.resource
    })
}

// 更新单个资源
export const updateResource = (resource: any) => {
    return instance({
        url: '/mall-user/resource/update',
        method: 'put',
        data: resource
    })
}

// 获取菜单树
export const selectMenuTreeList = () => {
    return instance({
        url: '/mall-user/resource/menu-tree-list',
        method: 'get'
    })
}
