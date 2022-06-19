import request from "@/api/request"

export const brandList = () => {
    return request({
        url: '/goods/brand/list',
        method: 'get',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImFsbCJdLCJleHAiOjE2NTU2MTU2MzQsImF1dGhvcml0aWVzIjpbIkFETUlOIl0sImp0aSI6IjZkMDFhYTZjLTIzNDItNDYxMi05NTA1LWYwMGU2MDI4Y2I0MiIsImNsaWVudF9pZCI6Im1hbmFnZW1lbnQiLCJ1c2VybmFtZSI6ImFkbWluIn0.oUSTbDyTcuP0VslytQxwu5EiFVC2MO9Aw2LucgC9INU-BLlrEqAdKRUDSOoqONpHF2HlHBRIB1bxIV_h5u6cbkwHwCrHAovxz6Vj-FAh1Z1g143GkJf-JulxpRY3H394Mn7XOcDfzCsz8dQAt847V31eMaxDPGCgAmbQgEWu3tp7EzpfyHqCgg3DRyARSBVzoyBSn_QNYqL6gmSL7noSxz7rwydQy0cjYe1prZrpb_DPtJqHKk1B1EY9GKvW0QDSJ0RZcVYSqMtPHmVv44rt3imAH4eWPaJeMWKHzJUVHFSSe9JyLt18ngB3jeZv7iowef_aybe8JiQtFNBgoMLO0Q'
        }
    })
}
