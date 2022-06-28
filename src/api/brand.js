import request from "@/api/request"

export const selectBrandList = () => {
    return request({
        url: '/goods/brand/list',
        method: 'get',
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    })
}
