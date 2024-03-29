import instance from '@/api/request'

// 分页查询品牌
export const selectBrandPage = (params: any) => {
    return instance({
        url: '/mall-goods/brand/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.brand
    })
}

// 更新单个品牌
export const updateBrand = (brand: any) => {
    return instance({
        url: '/mall-goods/brand/update',
        method: 'put',
        data: brand
    })
}
