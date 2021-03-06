/*
 * @Description: In User Settings Edit
 * @Author: xiaoying
 * @Date: 2019-09-02 19:28:54
 * @LastEditTime: 2019-09-23 15:31:23
 * @LastEditors: mayuanye
 */
import { NativeModules } from 'react-native';
import SRefData from './SRefData.js';
import Rect from './Rect.js';
import ServerLayer from './ServerLayer.js';
let MS = NativeModules.JSMapServer;

/**
 * @class MapServer
 * @description 地图服务对象，此类中定义服务类型的字符串常量，例：MAPSERVER_TYPE_TDF等
 *
 *
 * @property {String} MapServerType.MAPSERVER_TYPE_TDF - MapGISHDF 。
 * @property {String} MapServerType.MAPSERVER_TYPE_MBTILES - MBTiles 。
 * @property {String} MapServerType.MAPSERVER_TYPE_TPKTILE - TPKTile 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GEOPACKAGETILE - GeoPackageTile 。
 *
 * @property {String} MapServerType.MAPSERVER_TYPE_IGSERVER_TILE - MapGISIGServerTile 。
 * @property {String} MapServerType.MAPSERVER_TYPE_IGSERVER_VECTOR - MapGISIGServerVector 。
 * @property {String} MapServerType.MAPSERVER_TYPE_IGSERVER_VECTORTILE - MapGISIGServerVectorTile 。
 * @property {String} MapServerType.MAPSERVER_TYPE_IGSERVER_SCENE - MapGISIGServerScene 。
 *
 * @property {String} MapServerType.MAPSERVER_TYPE_OGC_WMS - OGCWMS 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OGC_WMTS - OGCWMTS 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OGC_WFS - OGCWFS 。
 *
 * @property {String} MapServerType.MAPSERVER_TYPE_TIANDITU - Tianditu 。
 * @property {String} MapServerType.MAPSERVER_TYPE_TIANDITU_EMAP - TianDiTuEMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_TIANDITU_ANNMAP - TianDiTuAnnMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_TIANDITU_SATELLITEMAP - TianDiTuSatelliteMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_TIANDITU_SATELLITEANNMAP - TianDiTuSatelliteAnnMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_TIANDITU_MERCATOR_EMAP - TianDiTuMercatorEMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_TIANDITU_MERCATOR_ANNMAP - TianDiTuMercatorAnnMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_TIANDITU_MERCATOR_SATELLITEMAP - TianDiTuMercatorSatelliteMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_TIANDITU_MERCATOR_SATELLITEANNMAP - TianDiTuMercatorSatelliteAnnMap 。
 *
 * @property {String} MapServerType.MAPSERVER_TYPE_OPENSTREET_STANDARD - OpenStreetStandard 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OPENSTREET_CYCLE - OpenStreetCycle 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OPENSTREET_TRANSPORT - OpenStreetTransport 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OPENSTREET_MAPQUESTOPEN - OpenStreetMapQuestOpen 。
 * @property {String} MapServerType.MAPSERVER_TYPE_OPENSTREET_HUNAMITARIAN - OpenStreetHunamitarian 。
 *
 * @property {String} MapServerType.MapServerType.MAPSERVER_TYPE_BING_MAP - BingMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_BING_SATELLITEMAP - BingSatelliteMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_BING_HYBRIDMAP - BingHybridMap 。
 *
 * @property {String} MapServerType.MAPSERVER_TYPE_YAHOO_MAP - YahooMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_YAHOO_MAPSATELLITE - YahooMapSatellite 。
 * @property {String} MapServerType.MAPSERVER_TYPE_YAHOO_MAPVECTOR - YahooMapVector 。
 * @property {String} MapServerType.MAPSERVER_TYPE_YAHOO_MAPHYBRID - YahooMapHybrid 。
 *
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_MAP - GoogleMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_SATELLITEMAP - GoogleSatelliteMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_MAPVECTOR - GoogleMapVector 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_MAPHYBRID - GoogleMapHybrid 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_MAPTERRAIN - GoogleMapTerrain 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_CHINA_MAP - GoogleChinaMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_CHINA_MAPSATELLITE - GoogleChinaMapSatellite 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_CHINA_MAPVECTOR - GoogleChinaMapVector 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_CHINA_MAPHYBRID - GoogleChinaMapHybrid 。
 * @property {String} MapServerType.MAPSERVER_TYPE_GOOGLE_CHINA_MAPTERRAIN - GoogleChinaMapTerrain 。
 *
 * @property {String} MapServerType.MAPSERVER_TYPE_BAIDU_MAP - BaiduMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_BAIDU_MAPSATELLITE - BaiduMapSatellite 。
 * @property {String} MapServerType.MAPSERVER_TYPE_BAIDU_MAPVECTOR - BaiduMapVector 。
 * @property {String} MapServerType.MAPSERVER_TYPE_BAIDU_MAPHYBRID - BaiduMapHybrid 。
 *
 * @property {String} MapServerType.MAPSERVER_TYPE_TMC_MAPABCMAP - TMCMapABCMap 。
 * @property {String} MapServerType.MAPSERVER_TYPE_TMC_SOSOMAP - TMCSOSOMap 。
 *
 * @property {String} MapServerType.MAPSERVER_TYPE_AMAP_MERCATOR_EMAP - AMapMercatorEMap 高德电子地图 。
 * @property {String} MapServerType.MAPSERVER_TYPE_AMAP_MERCATOR_SATELLITEMAP - AMapMercatorSatelliteMap 高德卫星图 。
 * @property {String} MapServerType.MAPSERVER_TYPE_AMAP_MERCATOR_SATELLITEANNMAP - AMapMercatorSatelliteAnnMap 高德卫星图 。
 *
 */

export default class MapServer {
  /**
   * 构建一个新的MapServer对象
   *
   * @memberof MapServer
   * @returns {Promise<MapServer>} 地图服务对象
   */
  async createObj() {
    try {
      var { MapServerId } = await MS.createObj();
      var mapServer = new MapServer();
      mapServer._MGMapServerId = MapServerId;
      return mapServer;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取服务类型
   *
   * @memberof MapServer
   * @returns {String} 服务类型
   */
  async getType() {
    try {
      let type = await MS.getType(this._MGMapServerId);
      return type;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取地图浏览类型
   *
   * @memberof MapServer
   * @returns {Number} 地图浏览类型（int类型的Number） 例：0-MapServerBrowseType.MapTile
   */
  async getMapBrowseType() {
    try {
      let mapBrowserType = await MS.getMapBrowseType(this._MGMapServerId);
      return mapBrowserType;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置具体服务名称
   *
   * @memberof MapServer
   * @param {String} name 具体服务名称
   * @returns {Promise<Void>}
   */
  async setName(name) {
    try {
      await MS.setName(this._MGMapServerId, name);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取具体服务名称
   *
   * @memberof MapServer
   * @returns {String} 具体服务名称
   */
  async getName() {
    try {
      let name = await MS.getName(this._MGMapServerId);
      return name;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置服务地址URL
   *
   * @memberof MapServer
   * @param {String} URL 服务地址URL
   * @returns {Promise<Void>}
   */
  async setURL(URL) {
    try {
      await MS.setURL(this._MGMapServerId, URL);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取服务地址URL
   *
   * @memberof MapServer
   * @returns {String}
   */
  async getURL() {
    try {
      let URL = await MS.getURL(this._MGMapServerId);
      return URL;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 连接数据 (真实地连接数据源，可以获取服务返回相关信息 如HDF瓦片信息。)
   *
   * @memberof MapServer
   * @returns {Number} 1-成功； 0-失败 （int类型的Number）
   */
  async connectData() {
    try {
      let result = await MS.connectData(this._MGMapServerId);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 判断服务地址URL是否有效性
   *
   * @memberof MapServer
   * @returns {boolean} true-服务地址有效； false-服务地址无效
   */
  async getIsValid() {
    try {
      let isValid = await MS.getIsValid(this._MGMapServerId);
      return isValid;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取地图服务的源参照系
   *
   * @memberof MapServer
   * @returns {Object} SRefData 参照系
   */
  async getSRS() {
    try {
      var { SRefDataId } = await MS.getSRS(this._MGMapServerId);
      var sRefData = new SRefData();
      sRefData._MGSRefDataId = SRefDataId;
      return sRefData;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取全图范围（数据范围）
   *
   * @memberof MapServer
   * @returns {Object} Rect 范围
   */
  async getEntireExtent() {
    try {
      var { RectId } = await MS.getEntireExtent(this._MGMapServerId);
      var rect = new Rect();
      rect._MGRectId = RectId;
      return rect;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 返回服务对象个数 获得本服务对象下的服务对象列表,主要针对混合服务图层由多个服务对象组成。 eg.
   * CGGoogleHybridMapServer谷歌混合地图由CGGoogleSatelliteMapServer卫星地图和CGGoogleVectorMapServer矢量地图组成
   *
   * @memberof MapServer
   * @returns {Number} 服务对象个数 （int类型的Number）
   */
  async getMapServerCount() {
    try {
      let mapServerCount = await MS.getMapServerCount(this._MGMapServerId);
      return mapServerCount;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取索引对应的地图服务对象
   *
   * @memberof MapServer
   * @param {Number} index 索引 （int类型的Number）
   * @returns {Object} 返回地图服务对象
   *
   */
  async getMapServer(index) {
    try {
      var { MapServerId, MapBrowseType, Type } = await MS.getMapServer(
        this._MGMapServerId,
        index
      );
      let mapServer = ServerLayer.createMapServerByIdAndType(
        MapServerId,
        MapBrowseType,
        Type
      );

      return mapServer;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   *  设置服务版权
   *
   * @memberof MapServer
   * @param {String}  strCopyright 服务版权
   * @returns {Number} 1-成功 ； 0-失败 （int类型的Number）
   */
  async setCopyright(strCopyright) {
    try {
      let result = await MS.setCopyright(this._MGMapServerId, strCopyright);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取服务版权
   *
   * @memberof MapServer
   * @returns {String} 服务版权
   */
  async getCopyright() {
    try {
      let copyRight = await MS.getCopyright(this._MGMapServerId);
      return copyRight;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置用户名和密码认证信息
   *
   * @memberof MapServer
   * @param {String} strUser  用户名
   * @param {String} strPwd  密码（或Token）,可用来设置Token验证码.
   * @returns {Number} 1-成功 ；0-失败 （int类型的Number）
   */
  async setAuthentication(strUser, strPwd) {
    try {
      let result = await MS.setAuthentication(
        this._MGMapServerId,
        strUser,
        strPwd
      );
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取用户名
   *
   * @memberof MapServer
   * @returns {String} 用户名
   */
  async getAuthenticUser() {
    try {
      let authenticUser = await MS.getAuthenticUser(this._MGMapServerId);
      return authenticUser;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获密码或验证码（比如token验证码）
   *
   * @memberof MapServer
   * @returns {String} 密码或验证码
   */
  async getAuthenticPassword() {
    try {
      let authenticPassword = await MS.getAuthenticPassword(
        this._MGMapServerId
      );
      return authenticPassword;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   *  获取服务所支持的版本列表
   *
   * @memberof MapServer
   * @returns {Number} 服务版本个数 （int类型的Number）
   * @description 我们认为所有服务都存在一个“Default version”默认版本
   */
  async getVersionCount() {
    try {
      let versionCount = await MS.getVersionCount(this._MGMapServerId);
      return versionCount;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取索引对应的版本名称
   *
   * @memberof MapServer
   * @param {Number} index  索引 （int类型的Number）
   * @returns {String} 版本名称
   */
  async getVersion(index) {
    try {
      let version = await MS.getVersion(this._MGMapServerId, index);
      return version;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 设置服务的当前版本
   *
   * @memberof MapServer
   * @param {String} strVersion  当前版本
   * @returns {Number} 1-成功 ； 0-失败 （int类型的Number）
   */
  async setCurrentVersion(strVersion) {
    try {
      let result = await MS.setCurrentVersion(this._MGMapServerId, strVersion);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * 获取服务的当前版本
   *
   * @memberof MapServer
   * @returns {String} 返回当前版本
   */
  async getCurrentVersion() {
    try {
      let currentVersion = await MS.getCurrentVersion(this._MGMapServerId);
      return currentVersion;
    } catch (e) {
      console.error(e);
    }
  }
}

MapServer.MapServerType = {
  MAPSERVER_TYPE_TDF: 'MapGISHDF',
  MAPSERVER_TYPE_MBTILES: 'MBTiles',
  MAPSERVER_TYPE_TPKTILE: 'TPKTile',
  MAPSERVER_TYPE_GEOPACKAGETILE: 'GeoPackageTile',

  MAPSERVER_TYPE_IGSERVER_TILE: 'MapGISIGServerTile',
  MAPSERVER_TYPE_IGSERVER_VECTOR: 'MapGISIGServerVector',
  MAPSERVER_TYPE_IGSERVER_VECTORTILE: 'MapGISIGServerVectorTile',
  MAPSERVER_TYPE_IGSERVER_SCENE: 'MapGISIGServerScene',

  MAPSERVER_TYPE_OGC_WMS: 'OGCWMS',
  MAPSERVER_TYPE_OGC_WMTS: 'OGCWMTS',
  MAPSERVER_TYPE_OGC_WFS: 'OGCWFS',

  MAPSERVER_TYPE_TIANDITU: 'Tianditu',
  MAPSERVER_TYPE_TIANDITU_EMAP: 'TianDiTuEMap',
  MAPSERVER_TYPE_TIANDITU_ANNMAP: 'TianDiTuAnnMap',
  MAPSERVER_TYPE_TIANDITU_SATELLITEMAP: 'TianDiTuSatelliteMap',
  MAPSERVER_TYPE_TIANDITU_SATELLITEANNMAP: 'TianDiTuSatelliteAnnMap',
  MAPSERVER_TYPE_TIANDITU_MERCATOR_EMAP: 'TianDiTuMercatorEMap',
  MAPSERVER_TYPE_TIANDITU_MERCATOR_ANNMAP: 'TianDiTuMercatorAnnMap',
  MAPSERVER_TYPE_TIANDITU_MERCATOR_SATELLITEMAP: 'TianDiTuMercatorSatelliteMap',
  MAPSERVER_TYPE_TIANDITU_MERCATOR_SATELLITEANNMAP:
    'TianDiTuMercatorSatelliteAnnMap',

  MAPSERVER_TYPE_OPENSTREET_STANDARD: 'OpenStreetStandard',
  MAPSERVER_TYPE_OPENSTREET_CYCLE: 'OpenStreetCycle',
  MAPSERVER_TYPE_OPENSTREET_TRANSPORT: 'OpenStreetTransport',
  MAPSERVER_TYPE_OPENSTREET_MAPQUESTOPEN: 'OpenStreetMapQuestOpen',
  MAPSERVER_TYPE_OPENSTREET_HUNAMITARIAN: 'OpenStreetHunamitarian',

  MAPSERVER_TYPE_BING_MAP: 'BingMap',
  MAPSERVER_TYPE_BING_SATELLITEMAP: 'BingSatelliteMap',
  MAPSERVER_TYPE_BING_HYBRIDMAP: 'BingHybridMap',

  MAPSERVER_TYPE_YAHOO_MAP: 'YahooMap',
  MAPSERVER_TYPE_YAHOO_MAPSATELLITE: 'YahooMapSatellite',
  MAPSERVER_TYPE_YAHOO_MAPVECTOR: 'YahooMapVector',
  MAPSERVER_TYPE_YAHOO_MAPHYBRID: 'YahooMapHybrid',

  MAPSERVER_TYPE_GOOGLE_MAP: 'GoogleMap',
  MAPSERVER_TYPE_GOOGLE_SATELLITEMAP: 'GoogleSatelliteMap',
  MAPSERVER_TYPE_GOOGLE_MAPVECTOR: 'GoogleMapVector',
  MAPSERVER_TYPE_GOOGLE_MAPHYBRID: 'GoogleMapHybrid',
  MAPSERVER_TYPE_GOOGLE_MAPTERRAIN: 'GoogleMapTerrain',
  MAPSERVER_TYPE_GOOGLE_CHINA_MAP: 'GoogleChinaMap',
  MAPSERVER_TYPE_GOOGLE_CHINA_MAPSATELLITE: 'GoogleChinaMapSatellite',
  MAPSERVER_TYPE_GOOGLE_CHINA_MAPVECTOR: 'GoogleChinaMapVector',
  MAPSERVER_TYPE_GOOGLE_CHINA_MAPHYBRID: 'GoogleChinaMapHybrid',
  MAPSERVER_TYPE_GOOGLE_CHINA_MAPTERRAIN: 'GoogleChinaMapTerrain',

  MAPSERVER_TYPE_BAIDU_MAP: 'BaiduMap',
  MAPSERVER_TYPE_BAIDU_MAPSATELLITE: 'BaiduMapSatellite',
  MAPSERVER_TYPE_BAIDU_MAPVECTOR: 'BaiduMapVector',
  MAPSERVER_TYPE_BAIDU_MAPHYBRID: 'BaiduMapHybrid',

  MAPSERVER_TYPE_TMC_MAPABCMAP: 'TMCMapABCMap',
  MAPSERVER_TYPE_TMC_SOSOMAP: 'TMCSOSOMap',

  MAPSERVER_TYPE_AMAP_MERCATOR_EMAP: 'AMapMercatorEMap',
  MAPSERVER_TYPE_AMAP_MERCATOR_SATELLITEMAP: 'AMapMercatorSatelliteMap',
  MAPSERVER_TYPE_AMAP_MERCATOR_SATELLITEANNMAP: 'AMapMercatorSatelliteAnnMap',
};
