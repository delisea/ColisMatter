package com.example.delise.myapplication;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.Handler;
import android.os.IBinder;
import android.os.Message;
import android.os.Messenger;
import android.os.RemoteException;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TableRow;

public class AndroidservicetutorialActivity extends Activity {
    /**
     * Called when the activity is first created.
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.service_activity);

        Button bt = new Button(this);
        bt.setText("Stop service");
        ((TableRow) findViewById(R.id.home_tableRow1)).addView(bt);

        bt.setOnClickListener(new View.OnClickListener() {
                                  @Override
                                  public void onClick(View v) {
                                      Message msg = Message.obtain(null, 2);//STOP
                                      try {
                                          networkService.send(msg);
                                      } catch (RemoteException e) {
                                          e.printStackTrace();
                                      }
                                  }
                              });

        startService(new Intent(this, FirstService.class));
        bindService(new Intent(this, FirstService.class), networkServiceConnection, Context.BIND_AUTO_CREATE);
    }

    /**
     * Defines callbacks for service binding, passed to bindService()
     */
    private ServiceConnection mConnection = new ServiceConnection() {

        //FirstService mService;
        boolean mBound = false;

        @Override
        public void onServiceConnected(ComponentName className,
                                       IBinder service) {
            // We've bound to LocalService, cast the IBinder and get LocalService instance
            FirstService binder = (FirstService) service;
            //mService = binder.getService();
            mBound = true;
        }

        @Override
        public void onServiceDisconnected(ComponentName arg0) {
            mBound = false;
        }
    };


    Messenger messenger = new Messenger(new IncomingHandler());

    private static class IncomingHandler extends Handler {
        @Override
        public void handleMessage(Message msg) {
            switch (msg.what) {
                case 0://RFID Service READY
                    Log.d(null, "READY");
                break;
                case 1://RFID Service PUSH #TAG
                    Log.d(null, "PUSH TAG: " + msg.obj.toString());
                break;
                case 2://RFID Service STOPPED
                    Log.d(null, "STOPPED");
                    break;
                case 3://RFID Service INTRODUCING
                    Log.d(null, "INTRODUCE" + msg.obj.toString());
                    break;
                default:
                    super.handleMessage(msg);
            }
        }
    }

    protected Messenger networkService;
    private ServiceConnection networkServiceConnection = new ServiceConnection() {
        public void onServiceConnected(ComponentName className, IBinder service) {
            networkService = new Messenger(service);
            try {
                Message msg = Message.obtain(null, 3);//INTRODUCING
                msg.replyTo = messenger;
                networkService.send(msg);
                Log.d(null, "Connected to service");

            } catch (RemoteException e) {
                // Here, the service has crashed even before we were able to connect
            }
        }

        @Override
        public void onServiceDisconnected(ComponentName name) {

        }
    };
}