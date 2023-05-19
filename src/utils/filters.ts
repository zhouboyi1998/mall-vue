// 日期时间格式化过滤器
const datetimeFormatFilter = (datetime: string) => {
    if (isDatetimeNull(datetime)) {
        // 如果时间为空, 返回 --
        return '--'
    } else {
        // 如果时间不为空, 将 date 和 time 之间的 T 替换成空格
        return datetime.replace('T', ' ')
    }
}

// 判断时间字符串是否为空
export const isDatetimeNull = (datetime: string) => {
    if (!datetime) {
        return true
    } else if (JSON.stringify(datetime) === '{}') {
        return true
    } else if (JSON.stringify(datetime) === '[]') {
        return true
    }
}

// 导出过滤器
export default (app: any) => {
    app.config.globalProperties.$filters = {
        datetimeFormatFilter
    }
}
