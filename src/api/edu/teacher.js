import request from '@/utils/request'
const api_name = '/eduservice/teacher'

export default {
  /**
   * 1讲师列表（条件查询分页）
   * @param {*} current 当前页
   * @param {*} limit 每页记录数
   * @param {*} teacherQuery 条件对象
   */
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      url: `${api_name}/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      // teacherQuery条件对象，后端使用RequestBody获取数据
      // data表示吧对象转换json进行传递到接口里面
      data: teacherQuery
    })
  },

  /**
   * 删除讲师
   * @param {*} id 讲师id
   */
  deleteTeacherById(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },

  /**
   * 添加讲师
   * @param {*} teacher 讲师对象
   */
  addTeacher(teacher) {
    return request({
      url: `${api_name}/addTeacher`,
      method: 'post',
      data: teacher
    })
  },

  /**
   * 根据id获取讲师信息
   * @param {*} id 讲师id
   */
  getTeacher(id) {
    return request({
      url: `${api_name}/getTeacher/${id}`,
      method: 'get'
    })
  },

  /**
   * 根据讲师信息update
   * @param {*} teacher 讲师信息
   */
  updateTeacherInfo(teacher) {
    return request({
      url: `${api_name}/updateTeacher`,
      method: 'post',
      data: teacher
    })
  },
  /**
   * 获取所有讲师信息
   * @param {*} teacher 讲师信息
   */
  getListTeacher() {
    return request({
      url: `${api_name}/findAll`,
      method: 'get'
    })
  }
}
