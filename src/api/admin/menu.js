import request from "@/api/request"

export const selectMenuPage = (params) => {
    return request({
        url: '/admin/menu/page/' + params.current + '/' + params.size,
        method: 'post',
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        data: params.menu
    })
}