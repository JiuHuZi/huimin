// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'huimin-0g32955d4c18337a'
})

// 云函数入口函数
exports.main = async (event, context) => {
  const categories = cloud.database().collection('categories'),
    res = await categories.get()
  return res.data
}