package com.zondy.mapgis.mobile.react;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.zondy.mapgis.core.attr.Field;
import com.zondy.mapgis.core.attr.Fields;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

public class JSFields extends ReactContextBaseJavaModule {
    private static final String REACT_CLASS = "JSFields";
    private static Map<String, Fields> mFieldsList = new HashMap<String, Fields>();

    public JSFields(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    public static Fields getObjFromList(String id) {
        return mFieldsList.get(id);
    }

    public static String registerId(Fields obj) {
        for (Map.Entry entry : mFieldsList.entrySet()) {
            if (obj.equals(entry.getValue())) {
                return (String) entry.getKey();
            }
        }
        String id = UUID.randomUUID().toString().substring(24);
        mFieldsList.put(id, obj);
        return id;
    }

    @ReactMethod
    public void createObj(Promise promise) {
        try {
            Fields fields = new Fields();
            String fieldsId = registerId(fields);
            WritableMap map = Arguments.createMap();
            map.putString("FieldsId", fieldsId);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getField(String fieldsId, int index, Promise promise)
    {
        try {
            Fields fields = getObjFromList(fieldsId);
            Field field = fields.getField((short)index);
            String  fieldId = JSField.registerId(field);
            WritableMap map = Arguments.createMap();
            map.putString("FieldId", fieldId);
            promise.resolve(map);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setField(String fieldsId, int index, String fieldId, Promise promise)
    {
        try {
            Fields fields = getObjFromList(fieldsId);
            Field field = JSField.getObjFromList(fieldId);
            int iVal = fields.setField((short)index, field);
            promise.resolve(iVal);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void appendField(String fieldsId, String fieldId, Promise promise)
    {
        try {
            Fields fields = getObjFromList(fieldsId);
            Field field = JSField.getObjFromList(fieldId);
            int iVal = fields.appendField(field);
            promise.resolve(iVal);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

   @ReactMethod
    public void insertField(String fieldsId, int position, String fieldId, Promise promise)
    {
        try {
            Fields fields = getObjFromList(fieldsId);
            Field field = JSField.getObjFromList(fieldId);
            int iVal = fields.insertField((short)position, field);
            promise.resolve(iVal);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void deleteField(String fieldsId, String fldName, Promise promise)
    {
        try {
            Fields fields = getObjFromList(fieldsId);
            int iVal = fields.deleteField(fldName);
            promise.resolve(iVal);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

   @ReactMethod
    public void deleteField(String fieldsId, int index, Promise promise)
    {
        try {
            Fields fields = getObjFromList(fieldsId);
            int iVal = fields.deleteField((short)index);
            promise.resolve(iVal);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getFieldCount(String fieldsId, Promise promise)
    {
        try {
            Fields fields = getObjFromList(fieldsId);
            int iCount = fields.getFieldCount();
            promise.resolve(iCount);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void calLengthOffset(String fieldsId, Promise promise)
    {
        try {
            Fields fields = getObjFromList(fieldsId);
            int iVal = fields.calLengthOffset();
            promise.resolve(iVal);
        } catch (Exception e) {
            promise.reject(e);
        }
    }

    @ReactMethod
    public void calSize(String fieldsId, Promise promise)
    {
        try {
            Fields fields = getObjFromList(fieldsId);
            int iVal = fields.calSize();
            promise.resolve(iVal);
        } catch (Exception e) {
            promise.reject(e);
        }
    }
}
