package com.auth.network;

import android.content.Context;
import android.net.wifi.ScanResult;
import android.net.wifi.WifiManager;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.List;

public class NetworkModule extends ReactContextBaseJavaModule {

    private Context context;
    private WifiManager wifiManager;
    private List<ScanResult> wifiList;

    public NetworkModule(ReactApplicationContext reactContext){
        super(reactContext);
        context = reactContext;
    }

    @Override
    public String getName() {
        return "Network";
    }

    @ReactMethod
    public void Scan(Callback callback){
        this.wifiManager = (WifiManager)context.getSystemService(context.WIFI_SERVICE);
        this.wifiManager.startScan();
        this.wifiList = this.wifiManager.getScanResults();

        callback.invoke(null, wifiList.toString());
    }

}
