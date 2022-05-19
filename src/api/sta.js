import request from '@/utils/request'
const api_name = '/staservice/sta'
export default {
  // 生成统计数据
  createStatistics(day) {
    return request({
      url: `${api_name}/registerCount/${day}`,
      method: 'post'
    })
  },
  showChart(searchObj) {
    return request({
      url: `${api_name}/showChart/${searchObj.begin}/${searchObj.end}/${searchObj.type}`,
      method: 'get'
    })
  }
}
