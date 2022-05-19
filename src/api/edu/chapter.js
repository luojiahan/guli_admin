import request from '@/utils/request'
const api_name = '/eduservice/chapter'

export default {
  /**
   * 根据课程id获取章节和小节数据列表
   * @param {*} courseId 课程id
   */
  getAllChapterVideo(courseId) {
    return request({
      url: `${api_name}/getChapterVideo/${courseId}`,
      method: 'get'
    })
  },

  /**
   * 添加章节
   * @param {*} chapter 章节
   */
  addChapter(chapter) {
    return request({
      url: `${api_name}/addChapter`,
      method: 'post',
      data: chapter
    })
  },

  /**
   * 根据章节ID获取章节
   * @param {*} chapterId 章节Id
   */
  getChapter(chapterId) {
    return request({
      url: `${api_name}/getChapterInfo/${chapterId}`,
      method: 'get'
    })
  },

  /**
   * 修改章节
   * @param {*} chapter 章节
   */
  updateChapter(chapter) {
    return request({
      url: `${api_name}/updateChapter`,
      method: 'post',
      data: chapter
    })
  },

  /**
   * 删除章节
   * @param {*} chapterId 章节id
   */
  deleteChapter(chapterId) {
    return request({
      url: `${api_name}/${chapterId}`,
      method: 'delete'
    })
  }
}
