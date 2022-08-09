import request from "@/api/request"

export const selectBrandPage = (params) => {
    return request({
        url: '/goods/brand/page/' + params.current + '/' + params.size,
        method: 'post',
        headers: {
            'Authorization': localStorage.getItem('token')
        },
        data: params.brand
    })
}
