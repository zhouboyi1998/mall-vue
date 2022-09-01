import instance from '@/api/request'

// 分页查询品牌
export const selectBrandPage = (params) => {
    return instance({
        url: '/goods/brand/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.brand
    })
}

// 更新单个品牌
export const updateBrand = (brand) => {
    return instance({
        url: '/goods/brand/update',
        method: 'put',
        data: brand
    })
}
