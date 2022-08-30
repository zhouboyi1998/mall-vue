import instance from "@/api/request"

export const selectAdminPage = (params) => {
    return instance({
        url: '/admin/admin/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.admin
    })
}
