import instance from '@/api/request'

// 查询主题列表
export const selectThemeList = () => {
    return instance({
        url: '/mall-system/theme/list',
        method: 'get'
    })
}

// 分页查询主题
export const selectThemePage = (params: any) => {
    return instance({
        url: '/mall-system/theme/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.theme
    })
}

// 更新单个主题
export const updateTheme = (theme: any) => {
    return instance({
        url: '/mall-system/theme/update',
        method: 'put',
        data: theme
    })
}
