import instance from "@/api/request"

export const selectRolePage = (params) => {
    return instance({
        url: '/admin/role/page/' + params.current + '/' + params.size,
        method: 'post',
        data: params.role
    })
}
