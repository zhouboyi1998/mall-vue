import instance from '@/api/request'

export const selectMenuTree = () => {
    return instance({
        url: '/user/menu/listMenuTree',
        method: 'get'
    })
}
