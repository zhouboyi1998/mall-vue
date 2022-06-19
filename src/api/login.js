import request from "@/api/request"

export const login = (data) => {
    return request({
        url: '/security/oauth/token',
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': '*/*'
        },
        data
    })
}
