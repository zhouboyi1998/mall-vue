import instance from "@/api/request"

export const selectMenuPage = (params) => {
    return instance({
        url: '/admin/menu/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.menu
    })
}
