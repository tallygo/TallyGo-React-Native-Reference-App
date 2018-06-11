package com.referenceapp;

import android.os.Bundle;
import android.support.annotation.Nullable;

import com.facebook.react.ReactActivity;
import com.tallygo.tallygoandroid.sdk.TallyGo;
import com.tallygo.tallygoandroid.utils.TGToastHelper;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReferenceApp";
    }

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        TallyGo.initializeFromMetaData(this, new TallyGo.InitializeCallback() {
            @Override
            public void onSuccess() {
                TGToastHelper.showShort(getBaseContext(), "Ready to proceed");
            }

            @Override
            public void onFailure(Exception e) {
                TGToastHelper.showLong(getBaseContext(), "Failure to init TallyGo");
            }

            @Override
            public void onRetryInit(long l) {
                TGToastHelper.showShort(getBaseContext(), "Do you have internet?");
            }
        });
    }
}
