import instance from '@/api/request'

// 分页查询菜单
export const selectMenuPage = (params: any) => {
    return instance({
        url: '/mall-user/menu/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.menu
    })
}

// 更新单个菜单
export const updateMenu = (menu: any) => {
    return instance({
        url: '/mall-user/menu/update',
        method: 'put',
        data: menu
    })
}

// 获取菜单树
export const selectMenuTree = () => {
    return instance({
        url: '/mall-user/menu/tree',
        method: 'get'
    })
}
