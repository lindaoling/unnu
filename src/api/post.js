import request from '@/utils/request'

const ATRICLE = 'v1/a'
export function getList (params) {
  return request({
    url: ATRICLE,
    method: 'get',
    params: params
  })
}
