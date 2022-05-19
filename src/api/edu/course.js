import request from '@/utils/request'
const api_name = '/eduservice/course'
export default {
  /**
   * 添加课程信息
   * @param {*} courseInfo 课程信息对象Vo
   */
  saveCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/addCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },

  /**
   * 根据课程id查询课程信息
   * @param {*} courseId 课程Id
   */
  getCourseInfoById(courseId) {
    return request({
      url: `${api_name}/getCourseInfo/${courseId}`,
      method: 'get'
    })
  },

  /**
   * 更新课程信息
   * @param {*} courseInfoVo 课程信息对象Vo
   */
  updateCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/updateCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },

  /**
   * 课程确认信息显示
   * @param {*} id 课程id
   */
  getCoursePublishInfo(id) {
    return request({
      url: `${api_name}/getCoursePublishInfo/${id}`,
      method: 'get'
    })
  },

  /**
   * 发布课程
   */
  publishCourseById(id) {
    return request({
      url: `${api_name}/publishCourse/${id}`,
      method: 'post'
    })
  },

  // 获取所有课程信息
  getListCourse() {
    return request({
      url: `${api_name}/getCourseList`,
      method: 'get'
    })
  },

  // 分页列表展示
  getPageList(page, limit, searchObj) {
    return request({
      url: `${api_name}/pageCourse/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },

  // 根据id删除课程
  removeCourseById(id) {
    return request({
      url: `${api_name}/deleteCourse/${id}`,
      method: 'delete'
    })
  }
}
