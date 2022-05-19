import request from '@/utils/request'
const api_name = '/eduservice/subject'

export default {
  /**
   * 获取所有的课程分类
   */
  getAllSubject() {
    return request({
      url: `${api_name}/getAllSubject/`,
      method: 'get'
    })
  }
}
