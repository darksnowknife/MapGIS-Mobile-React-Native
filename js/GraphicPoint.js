/**
 * @content 点对象功能组件
 * @author fjl 2019-6-24 下午2:52:36
 */
import { NativeModules } from 'react-native';
import Graphic from './Graphic';
import Dot from './Dot';
import ObjectUtils from './components/ObjectUtils';
let GP = NativeModules.JSGraphicPoint;
/**
 * @constructor GraphicPoint
 */
export default class GraphicPoint extends Graphic {
  constructor() {
    super();
    Object.defineProperty(this, '_MGGraphicPointId', {
      get: function() {
        return this._MGGraphicId;
      },
      set: function(_MGGraphicPointId) {
        this._MGGraphicId = _MGGraphicPointId;
      },
    });
  }

  /**
   * 构造一个新的 GraphicPoint 对象。
   * @memberOf GraphicPoint
   * @returns {Promise.<GraphicPoint>}
   */
  async createObj() {
    try {
      var { GraphicPointId } = await GP.createObj();
      var graphicPoint = new GraphicPoint();
      graphicPoint._MGGraphicPointId = GraphicPointId;
      return graphicPoint;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置点的位置
   * @memberOf GraphicPoint
   * @param {Dot} point 点的位置
   * @returns {Promise<void>}
   */
  async setPoint(point) {
    try {
      if(this.isValid() && ObjectUtils.isValidObject(point) && point.isValid()){
        await GP.setPoint(this._MGGraphicPointId, point._MGDotId);
      } else {
        console.log('GraphicPoint or point is invalid !');
      }
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取点的位置
   * @memberOf GraphicPoint
   * @returns {Promise<Dot>}
   */
  async getPoint() {
    try {
      if(this.isValid()){
        let { pointID } = await GP.getPoint(this._MGGraphicPointId);
        var dot = new Dot();
        dot._MGDotId = pointID;
  
        return dot;
      } else {
        console.log('GraphicPoint is invalid !');
      }
      
    } catch (e) {
      console.error(e);
    }
  }

  /**
   *设置点的大小
   * @memberOf GraphicPoint
   * @param {Number} size
   * @returns {Promise<void>}
   */
  async setSize(size) {
    try {
      if(this.isValid()){
        await GP.setSize(this._MGGraphicPointId, size);
      } else {
        console.log('GraphicPoint is invalid !');
      }
    } catch (e) {
      console.error(e);
    }
  }
  /**
   * 获取点的大小
   * @memberOf GraphicPoint
   * @returns {Promise<Number>}
   */
  async getSize() {
    try {
      if(this.isValid()){
        let pointSize = await GP.getSize(this._MGGraphicPointId);
        
        return pointSize;
      } else {
        console.log('GraphicPoint is invalid !');
      }
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置点的位置及大小
   *  @memberOf GraphicPoint
   * @param {Dot} point
   * @param {Number} size
   * @returns {Promise<void>}
   */
  async setPointAndSize(point, size) {
    try {
      if(this.isValid() && ObjectUtils.isValidObject(point) && point.isValid()){
        await GP.setPointAndSize(this._MGGraphicPointId, point._MGDotId, size);
      } else {
        console.log('GraphicPoint or point is invalid !');
      }
    } catch (e) {
      console.error(e);
    }
  }
}
