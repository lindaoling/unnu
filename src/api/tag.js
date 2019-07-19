import request from '@/utils/request'

const TAG = '/v1/tag'
export function getTagList (params) {
  return request({
    url: TAG,
    method: 'get',
    params
  })
}
