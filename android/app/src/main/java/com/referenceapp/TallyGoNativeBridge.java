package com.referenceapp;

import android.app.Activity;
import android.os.Handler;
import android.os.Looper;
import android.support.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.mapbox.mapboxsdk.geometry.LatLng;
import com.tallygo.tallygoandroid.sdk.TallyGo;
import com.tallygo.tallygoandroid.sdk.navigation.TGRouteRequest;
import com.tallygo.tallygoandroid.utils.TGLauncher;
import com.tallygo.tallygoandroid.utils.TGToastHelper;
import com.tallygo.tallygoandroid.utils.TGUtils;

import java.util.List;

public class TallyGoNativeBridge extends ReactContextBaseJavaModule {

    public TallyGoNativeBridge(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "TallyGoNativeBridge";
    }

    private TGRouteRequest createSimulatedRequest(@NonNull Activity activity) {
        List<LatLng> waypoints = TGUtils.simulatedWaypoints(2);

        TallyGo.getInstance(activity).enableSimulation(true, false, waypoints.get(0));

        return new TGRouteRequest.Builder(waypoints).build();
    }

    @ReactMethod
    public void runExample1() {
        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                Activity activity = getCurrentActivity();
                if (activity == null) {
                    TGToastHelper.showLong(getReactApplicationContext(), "Activity unavailable to start TallyGo");
                    return;
                }
                TGLauncher.startPreview(activity, createSimulatedRequest(activity));
            }
        });
    }

    @ReactMethod
    public void runExample2() {
        new Handler(Looper.getMainLooper()).post(new Runnable() {
            @Override
            public void run() {
                Activity activity = getCurrentActivity();
                if (activity == null) {
                    TGToastHelper.showLong(getReactApplicationContext(), "Activity unavailable to start TallyGo");
                    return;
                }
                TGLauncher.startTurnByTurn(activity, createSimulatedRequest(activity));
            }
        });
    }

}
