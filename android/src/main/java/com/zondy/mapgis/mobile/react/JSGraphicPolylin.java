package com.zondy.mapgis.mobile.react;

import android.graphics.Bitmap;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.zondy.mapgis.android.graphic.GraphicPolylin;


/**
 * @author fjl 2019-6-30 下午2:52:36
 * @content 线图形对象Native组件
 */
public class JSGraphicPolylin extends JSGraphicMultiPoint {
    public static final String REACT_CLASS = "JSGraphicPolylin";

    public JSGraphicPolylin(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactMethod
    public void createObj(Promise promise) {
        try {
            GraphicPolylin GraphicPolylin = new GraphicPolylin();
            String GraphicPolylinId = registerId(GraphicPolylin);

            WritableMap map = Arguments.createMap();
            map.putString("GraphicPolylinId", GraphicPolylinId);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }


    @ReactMethod
    public void setLineWidth(String GraphicPolylinId, float width, Promise promise) {
        try {
            GraphicPolylin graphicPolylin = (GraphicPolylin) getObjFromList(GraphicPolylinId);
            graphicPolylin.setLineWidth(width);
            promise.resolve(true);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getLineWidth(String GraphicPolylinId, Promise promise) {
        try {
            GraphicPolylin GraphicPolylin = (GraphicPolylin) getObjFromList(GraphicPolylinId);
            float lineWidth = GraphicPolylin.getLineWidth();

            promise.resolve(lineWidth);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getLength(String GraphicPolylinId, Promise promise) {
        try {
            GraphicPolylin GraphicPolylin = (GraphicPolylin) getObjFromList(GraphicPolylinId);
            double length = GraphicPolylin.getLength();

            promise.resolve(length);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setFillTexture(String GraphicPolylinId, String imageID, Promise promise) {
        try {
            GraphicPolylin graphicPolylin = (GraphicPolylin) getObjFromList(GraphicPolylinId);
            Bitmap bitmap = JSImage.getObjFromList(imageID);
            graphicPolylin.setFillTexture(bitmap);
            promise.resolve(true);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

}
