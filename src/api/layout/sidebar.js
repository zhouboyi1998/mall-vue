import instance from "@/api/request"

export const selectMenuTree = () => {
    return instance({
        url: '/admin/menu/listMenuTree',
        method: 'get'
    })
}
