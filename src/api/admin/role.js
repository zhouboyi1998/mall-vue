import request from "@/api/request"

export const selectRolePage = (params) => {
    return request({
        url: '/admin/role/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.role
    })
}
