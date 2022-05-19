import request from '@/utils/request'
const api_name = '/eduvod/video'

export default {
  removeAliVideoById(id) {
    return request({
      url: `${api_name}/removeAliVod/${id}`,
      method: 'delete'
    })
  }
}
