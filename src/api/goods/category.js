import request from "@/api/request"

export const selectCategoryPage = (params) => {
    return request({
        url: '/goods/category/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.category
    })
}
