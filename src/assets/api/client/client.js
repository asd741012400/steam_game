import fetch from '@/assets/api'
/**
 * demo  获取门店-某种角色下的员工
 * @param params
 */
export function customerList(params) {
    return fetch({
        method: 'get',
        url: `/weather_mini`,
        params,
    })
}

