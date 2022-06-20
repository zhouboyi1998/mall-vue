import request from "@/api/request"

export const brandList = () => {
    return request({
        url: '/goods/brand/list',
        method: 'get',
        headers: {
            'Authorization': 'Bearer '
        }
    })
}
