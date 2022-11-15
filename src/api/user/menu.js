import instance from '@/api/request'

// 分页查询菜单
export const selectMenuPage = (params) => {
    return instance({
        url: '/user/menu/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.menu
    })
}

// 更新单个菜单
export const updateMenu = (menu) => {
    return instance({
        url: '/user/menu/update',
        method: 'put',
        data: menu
    })
}
