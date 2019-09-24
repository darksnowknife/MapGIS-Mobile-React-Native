/**
 * @content 实现对三维坐标点序列的相关操作功能组件
 * @author fjl 2019-6-14 下午2:52:36
 */
import { NativeModules } from "react-native";
let DS3D = NativeModules.JSDots3D;

import Dot3D from "./Dot3D.js"

/**
 * @class Dots3D
 * @description 实现对三维坐标点的类型定义
 */
export default class Dots3D {

    /**
     * 构造一个新的Dots3D对象
     * @memberof Dots3D
     * @returns {Promise<Dots3D>}
     */
    async createObj(){
        try {
            let {Dots3DId} = await DS3D.createObj();
            let Dots3D = new Dots3D();
            Dots3D._MGDots3DId = Dots3DId;
            return Dots3D; 
        } catch (e) {
            console.error(e);
        }
    }

    /**
	 * 返回数目
	 * @memberof Dots3D
	 * @return 数目
	 */
	async size()
	{
		try {
            return await DS3D.size(this._MGDots3DId);
          } catch (e) {
            console.error(e);
          }
	}

	/**
	 * 添加一个点
	 * @memberof Dots3D
	 * @param {object:Dot3D} dot3D 待添加的点对象
	 * @return 新添加点的索引，小于0失败
	 */
	async appendDot3D(dot3D)
	{
		try {
            return await DS3D.append(this._MGDots3DId, dot3D._MGDot3DId);
          } catch (e) {
            console.error(e);
          }
	}

	/**
	 * 将另一个Dots3D的点添加到尾端
	 * @memberof Dots3D
	 * @param {object:Dots3D}dots3D 待添加的点序列对象
	 * @return 大于0成功，否则失败
	 */
	async appendDots3D(dots3D)
	{
		try {
            let x = await DS3D.append(this._MGDots3DId, dots3D._MGDots3DId);
            return x;
          } catch (e) {
            console.error(e);
          }
	}

	/**
	 * 删除索引处的点
	 * @memberof Dots3D
	 * @param index 待删除的点索引
	 * @return 大于0成功，否则失败
	 */
	async remove(index)
	{
		try {
            return await DS3D.remove(this._MGDots3DId, index);
          } catch (e) {
            console.error(e);
          }
	}

	/**
	 * 清空
	 * @memberof Dots3D
	 * @return 大于0成功，否则失败
	 */
	async clear()
	{
		try {
            return await DS3D.clear(this._MGDots3DId);
          } catch (e) {
            console.error(e);
          }
	}

	/**
	 * 返回索引处的点
	 * @memberof Dots3D
	 * @param index 待查找的索引号
	 * @return 索引处的点
	 */
	async  get(index)
	{
		try {
            let {Dot3DId} = await DS3D.get(this._MGDots3DId, index);
            var dot3D = new Dot3D();
            dot3D._MGDot3DId = Dot3DId;
            return dot3D;
          } catch (e) {
            console.error(e);
          }
	}
}