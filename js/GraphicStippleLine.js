/**
 * @content 虚线线对象功能组件
 * @author fjl 2019-6-24 下午2:52:36
 */
import { NativeModules } from 'react-native';
import Graphic from './Graphic';
import Dot from './Dot';
import ObjectUtils from './components/ObjectUtils';
let GS = NativeModules.JSGraphicStippleLine;

/**
 * @class GraphicStippleLine
 */
export default class GraphicStippleLine extends Graphic {
  constructor() {
    super();
    Object.defineProperty(this, '_MGGraphicStippleLineId', {
      get: function() {
        return this._MGGraphicId;
      },
      set: function(_MGGraphicStippleLineId) {
        this._MGGraphicId = _MGGraphicStippleLineId;
      },
    });
  }

  /**
   * 构造一个新的 GraphicStippleLine 对象。
   * @memberOf GraphicStippleLine
   * @param {Dot} startPoint 起点
   * @param {Dot} endPoint 终点
   * @returns {Promise.<GraphicStippleLine>}
   */
  async createObj(startPoint, endPoint) {
    try {
      var { GraphicStippleLineId } = await GS.createObj(startPoint._MGDotId, endPoint._MGDotId);
      var graphicStippleLine = new GraphicStippleLine();
      graphicStippleLine._MGGraphicStippleLineId = GraphicStippleLineId;
      return graphicStippleLine;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置起点
   * @memberOf GraphicStippleLine
   * @param {Dot} point 起点
   * @returns {Promise<void>}
   */
  async setStartPoint(point) {
    try {
      if(this.isValid() && ObjectUtils.isValidObject(point) && point.isValid()){
        await GS.setStartPoint(this._MGGraphicStippleLineId, point._MGDotId);
      }else{
        console.log('GraphicStippleLine or point is invalid !');
      }
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置终点
   * @memberOf GraphicStippleLine
   * @param {Dot} point 终点
   * @returns {Promise<void>}
   */
  async setEndPoint(point) {
    try {
      if(this.isValid() && ObjectUtils.isValidObject(point) && point.isValid()){
        await GS.setEndPoint(this._MGGraphicStippleLineId, point._MGDotId);
      }else{
        console.log('GraphicStippleLine or point is invalid !');
      }
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置线宽
   * @memberOf GraphicStippleLine
   * @param {Number} width 线宽 (Double类型的number)
   * @returns {Promise<void>}
   */
  async setLineWidth(width) {
    try {
      if(this.isValid()){
        await GS.setLineWidth(this._MGGraphicStippleLineId, width);
      }else{
        console.log('GraphicStippleLine is invalid !');
      }
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置虚线段长度
   * @memberOf GraphicStippleLine
   * @param {Number} len 虚线段长度 (int类型的Number)
   * @returns {Promise<void>}
   */
  async setSegLength(len) {
    try {
      if(this.isValid()){
        await GS.setSegLength(this._MGGraphicStippleLineId, len);
      }else{
        console.log('GraphicStippleLine is invalid !');
      }
     
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置虚线间隔长度
   * @memberOf GraphicStippleLine
   * @param {Number} len 虚线间隔长度 (int类型的Number)
   * @returns {Promise<void>}
   */
  async setIntervalLength(len) {
    try {
      if(this.isValid()){
        await GS.setIntervalLength(this._MGGraphicStippleLineId, len);
      }else{
        console.log('GraphicStippleLine is invalid !');
      }
      
    } catch (e) {
      console.error(e);
    }
  }
  /**
   *获取起点的坐标点
   * @memberOf GraphicStippleLine
   * @returns {Promise<Dot>} 起点的坐标点
   */
  async getStartPoint() {
    try {
      if(this.isValid()){
        let { DotId } = await GS.getStartPoint(this._MGGraphicStippleLineId);
        let dot = new Dot();
        dot._MGDotId = DotId;
        return dot;
      }else{
        console.log('GraphicStippleLine is invalid !');
      }
      
    } catch (e) {
      console.error(e);
    }
  }

  /**
   *获取终点的坐标点
   * @memberOf GraphicStippleLine
   * @returns {Promise<Dot>} 终点的坐标点
   */
  async getEndPoint() {
    try {
      if(this.isValid()){
        let { DotId } = await GS.getEndPoint(this._MGGraphicStippleLineId);
        let dot = new Dot();
        dot._MGDotId = DotId;
        return dot;
      }else{
        console.log('GraphicStippleLine is invalid !');
      }

    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取线的宽度
   * @memberOf GraphicStippleLine
   * @returns {Number} 线的宽度 (Double类型的number)
   */
  async getLineWidth() {
    try {
      if(this.isValid()){
        let lineWidth = await GS.getLineWidth(this._MGGraphicStippleLineId);
        return lineWidth;
      }else{
        console.log('GraphicStippleLine is invalid !');
      }
      
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取虚线长度
   * @memberOf GraphicStippleLine
   * @returns {Number} 虚线长度 (int类型的number)
   */
  async getSegLength() {
    try {
      if(this.isValid()){
        let SegLength = await GS.getSegLength(this._MGGraphicStippleLineId);
        return SegLength;
      }else{
        console.log('GraphicStippleLine is invalid !');
      }

    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取虚线间隔长度
   * @memberOf GraphicStippleLine
   * @returns {Number} 虚线间隔长度 (int类型的number)
   */
  async getIntervalLength() {
    try {
      if(this.isValid()) {
        let intervalLength = await GS.getIntervalLength(
          this._MGGraphicStippleLineId
        );
        return intervalLength;
      } else {
        console.log('GraphicStippleLine is invalid !');
      }
      
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取线长度
   * @memberOf GraphicStippleLine
   * @returns {Number} 线长度 (Double类型的number)
   */
  async getLength() {
    try {
      if(this.isValid()) {
        let length = await GS.getLength(this._MGGraphicStippleLineId);
        return length;
      } else {
        console.log('GraphicStippleLine is invalid !');
      }
      
    } catch (e) {
      console.error(e);
    }
  }
}
