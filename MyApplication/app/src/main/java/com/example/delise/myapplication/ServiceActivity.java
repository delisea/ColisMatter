/*
  Copyright © 2013-> Nordic ID
  NORDIC ID DEMO SOFTWARE DISCLAIMER

  You are about to use Nordic ID Demo Software ("Software").
  It is explicitly stated that Nordic ID does not give any kind of warranties,
  expressed or implied, for this Software. Software is provided "as is" and with
  all faults. Under no circumstances is Nordic ID liable for any direct, special,
  incidental or indirect damages or for any economic consequential damages to you
  or to any third party.

  The use of this software indicates your complete and unconditional understanding
  of the terms of this disclaimer.

  IF YOU DO NOT AGREE OF THE TERMS OF THIS DISCLAIMER, DO NOT USE THE SOFTWARE.
*/

package com.example.delise.myapplication;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

import com.nordicid.nurapi.NurApi;
import com.nordicid.nurapi.NurApiListener;
import com.nordicid.nurapi.NurApiUiThreadRunner;
import com.nordicid.nurapi.NurApiUsbAutoConnect;
import com.nordicid.nurapi.NurEventClientInfo;
import com.nordicid.nurapi.NurEventDeviceInfo;
import com.nordicid.nurapi.NurEventFrequencyHop;
import com.nordicid.nurapi.NurEventIOChange;
import com.nordicid.nurapi.NurEventInventory;
import com.nordicid.nurapi.NurEventNxpAlarm;
import com.nordicid.nurapi.NurEventProgrammingProgress;
import com.nordicid.nurapi.NurEventTraceTag;
import com.nordicid.nurapi.NurEventTriggeredRead;
import com.nordicid.nurapi.NurTag;
import com.nordicid.nurapi.NurTagStorage;
/**
 * @author Nordic ID
 */
public class ServiceActivity extends Activity
{

    // String variable for debug messages and which are sented by log.d() and viewed by LogCat view.
    public static final String TAG = null;
    // NurApi Object.
    private NurApi mApi;
    // USB auto connect Object for NurApi.
    private NurApiUsbAutoConnect mUsbAC;
    // Tag storage Object.
    private static NurTagStorage mStorage;
    // Indicates streaming inventory.
    private boolean mInventoryIsRunning = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.service_activity);

        mStorage = new NurTagStorage();
        mApi = new NurApi();


        // Set NurApiListener for NurApi Object.
        mApi.setListener(new NurApiListener()
        {
            @Override
            public void connectedEvent() {
                Log.d(TAG, "NurApi coco bongo");
                Log.d(TAG, "NurApi connected");
                Log.d(TAG, "NurApi coco bongo");
                //enableItems(true);// TAG:COCO
                performInventory();
                Log.d(TAG, "NurApi coco bongo");
            }

            @Override
            public void inventoryStreamEvent(NurEventInventory notify)
            {
                if(notify.tagsAdded > 0) {
                    Log.d(TAG, "POP");//inventory(true);

                    String li = "";

                    synchronized (mApi.getStorage())    {
                        // Get inventory round result to the tag storage variable.
                        NurTagStorage tagStorage = mApi.getStorage(); // Notice: this returns instance for Nur Api's tag storage
                        for (int n = 0; n < tagStorage.size(); n++) {
                            NurTag tag = tagStorage.get(n);
                            li = li + "\\" + tag.getEpcString();
                        }

                    }
                    li += "!";

                    Log.d(TAG, "aaaa");
                    Log.d(TAG, li);
                    Log.d(TAG, "bbbb");
                    finish();

                }

                // the notify can also statye that the inventory stream has stopped due to timeout
                // that is approximately 20 seconds.
                // In this case the user needs to restart the ivnentory stream.
                if (notify.stopped && mInventoryIsRunning)
                {
                    try
                    {
                        mApi.startInventoryStream();
                    }
                    catch (Exception e)
                    {
                        e.printStackTrace();
                    }
                }
            }

            @Override public void logEvent(int level, String txt) {  }
            @Override public void disconnectedEvent() {}
            @Override public void bootEvent(String event) {  }
            @Override public void IOChangeEvent(NurEventIOChange event) {  }
            @Override public void traceTagEvent(NurEventTraceTag event) {  }
            @Override public void triggeredReadEvent(NurEventTriggeredRead event) {  }
            @Override public void frequencyHopEvent(NurEventFrequencyHop event) {  }
            @Override public void debugMessageEvent(String event) {  }
            @Override public void inventoryExtendedStreamEvent(NurEventInventory event) {  }
            @Override public void programmingProgressEvent(NurEventProgrammingProgress event) {  }
            @Override public void deviceSearchEvent(NurEventDeviceInfo event) {  }
            @Override public void clientConnectedEvent(NurEventClientInfo event) {  }
            @Override public void clientDisconnectedEvent(NurEventClientInfo event) {  }
            @Override public void nxpEasAlarmEvent(NurEventNxpAlarm event) {  }
        });

        mApi.setUiThreadRunner(new NurApiUiThreadRunner()
        {
            public void runOnUiThread(Runnable r)
            {
                ServiceActivity.this.runOnUiThread(r);
            }
        });

        mUsbAC = new NurApiUsbAutoConnect(this, mApi);
        mUsbAC.setEnabled(true);
    }

    /** This method is called for single read / inventory stream
     */
    private void performInventory()
    {
        if(mApi.isConnected())
        {
            try {
                mInventoryIsRunning = true;
                mStorage.clear();
                mApi.startInventoryStream(); // Start inventory streaming
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    protected void onDestroy()
    {
        super.onDestroy();
        Log.d(TAG, "onDestroy");
        if(mUsbAC != null) {
            mUsbAC.onDestroy(); // Tell Android USB Autoconnection object to do onDestroy things
        }
        if(mApi != null )
        {
            if(mApi.isConnected()) {
                try {
                    mApi.stopAllContinuousCommands(); // We don't want to let any streams open when closing activity
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            mApi.dispose();
        }
    }

}
