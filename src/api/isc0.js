import { axios } from '@/utils/request'

const api = {
  nodeInfo: '/node_info',
}

export default api

// 获取 node_info
export function getNodeInfo () {
  return axios({
    url: api.nodeInfo,
    method: 'get'
  })
}
