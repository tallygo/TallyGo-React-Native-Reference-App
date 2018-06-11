package com.referenceapp;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.tallygo.tallygoandroid.sdk.TGMapView;


public class ReactMapManager extends SimpleViewManager<TGMapView> {

    public static final String REACT_CLASS = "REFMap";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public TGMapView createViewInstance(final ThemedReactContext co) {
        final TGMapView view = new TGMapView(co);
        view.getViewTreeObserver().dispatchOnGlobalLayout();
        view.onCreate(null);
        view.onStart();
        view.onResume();

        return view;
    }

    @ReactProp(name = "zoomLevel")
    public void setZoomLevel(TGMapView view, double zoomLevel) {
        //ignore
    }
}
