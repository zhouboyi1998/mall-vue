import request from "@/api/request"

export const selectAdminPage = (params) => {
    return request({
        url: '/admin/admin/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.admin
    })
}
