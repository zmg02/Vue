import Mork from 'mockjs'
//webpack默认对外暴露，json数据、图片
import banner from './banner'
import floor from './floor'

//第一个参数请求地址，第二个参数返回数据
Mork.mock('/mock/banner', {code: 200, data: banner})
Mork.mock('/mock/floor', {code: 200, data: floor})
