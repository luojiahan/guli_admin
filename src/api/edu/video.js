import request from '@/utils/request'
const api_name = '/eduservice/video'

export default {

  /**
   * 添加课时
   */
  addVideo(videoInfo) {
    return request({
      url: `${api_name}/addVideo`,
      method: 'post',
      data: videoInfo
    })
  },

  /**
   * 根据课时ID获取课时
   */
  getVideoInfoById(videoId) {
    return request({
      url: `${api_name}/getVideoInfo/${videoId}`,
      method: 'get'
    })
  },

  /**
   * 修改课时
   */
  updateVideoInfoById(videoInfo) {
    return request({
      url: `${api_name}/updateVideo`,
      method: 'post',
      data: videoInfo
    })
  },

  /**
   * 删除课时
   */
  deleteVideoInfoById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  }
}
