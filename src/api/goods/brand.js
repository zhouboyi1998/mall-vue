import instance from "@/api/request"

export const selectBrandPage = (params) => {
    return instance({
        url: '/goods/brand/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.brand
    })
}
