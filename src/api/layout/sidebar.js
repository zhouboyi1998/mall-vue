import request from "@/api/request"

export const selectMenuTree = () => {
    return request({
        url: '/admin/menu/listMenuTree',
        method: 'get',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
}
