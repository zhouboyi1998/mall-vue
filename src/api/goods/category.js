import instance from "@/api/request"

export const selectCategoryPage = (params) => {
    return instance({
        url: '/goods/category/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.category
    })
}
