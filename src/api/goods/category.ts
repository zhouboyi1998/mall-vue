import instance from '@/api/request'

// 分页查询分类
export const selectCategoryPage = (params: any) => {
    return instance({
        url: '/mall-goods/category/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.category
    })
}

// 更新单个分类
export const updateCategory = (category: any) => {
    return instance({
        url: '/mall-goods/category/update',
        method: 'put',
        data: category
    })
}
