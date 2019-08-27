import request from '@/utils/request'

const ATRICLE = 'v1/porn'
export function getList (params) {
  return request({
    url: ATRICLE,
    method: 'get',
    params: params
  })
}
