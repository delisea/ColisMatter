package com.rfid.example.fakesensor;

import android.app.Service;
import android.content.Intent;
import android.os.Handler;
import android.os.IBinder;
import android.os.Message;
import android.os.Messenger;
import android.os.RemoteException;
import android.util.Log;

import java.util.ArrayList;
import java.util.Random;
import java.util.TimerTask;

/**
 * @author Nordic ID
 */
public class FirstService extends Service   {

    private static String TAG = "OUTP";

    public static final int MSG_READY = 0;
    public static final int MSG_PUSH_TAG = 1;
    public static final int MSG_INTRODUCING = 3;
    public static final int MSG_STOP = 2;
    public static final int MSG_RESET = 4;


    final Messenger messenger = new Messenger(new IncomingHandler());
    private static ArrayList<Messenger> clients = new ArrayList<>();
    private static class IncomingHandler extends Handler {
        @Override
        public void handleMessage(Message msg) {
            switch (msg.what) {
                case MSG_INTRODUCING:
                    Log.d(TAG, "Adding client: " + msg.replyTo);
                    clients.add(msg.replyTo);
                    // If sensor is off and not initializing
                    _FS.initSensor(false);
                break;
                case MSG_STOP:
                    Log.d(null, "Client querry to stop sensor.");
                    //FirstService.DONE();
                    _FS.stopSensor();
                    _FS._ready = false;
                    _FS.notify_clients(MSG_STOP, null);
                break;
                case MSG_RESET:
                    Log.d(null, "Client querry to restart sensor.");
                    //FirstService.DONE();
                    _FS.initSensor(true);
                    break;
                default:
                    super.handleMessage(msg);
                    break;
            }
        }
    }

    private void notify_clients(int MSG, Object Param) {
        for (int i = 0; i < clients.size(); i++) {
            try {
                clients.get(i).send(Message.obtain(null, MSG, Param));
            } catch (RemoteException e) {
                Log.d(null, "Removing client: " + clients.get(i));
                clients.remove(i);
            }
        }
    }


    // Indicates streaming inventory.
    private static Random sensorDelay = new Random();
    private static Random sensorData = new Random();
    private TimerTask initSensorTask = null;
    private TimerTask followingTask = null;
    private boolean _ready = false;

    private void delayedFireSensor() {
        new java.util.Timer().schedule(
                newSensorTask(),
                (sensorDelay.nextInt(9)+1)*1000
        );
    }
    private TimerTask newSensorTask() {
        followingTask = new TimerTask() {
            @Override
            public void run() {
                byte[]  tagreaded = new byte[24];
                sensorData.nextBytes(tagreaded);
                StringBuilder sb = new StringBuilder(tagreaded.length * 2);
                for(byte b: tagreaded)
                    sb.append(String.format("%02x", b));
                Log.d(TAG, "PUSH:"+sb.toString());
                notify_clients(MSG_PUSH_TAG, sb.toString());
                delayedFireSensor();
            }
        };
        return followingTask;
    }
    private void initSensor(boolean force_reset) {
        if(_ready == false && initSensorTask == null) {
            Log.d(TAG, "Sensor initialization start.");
            initSensorTask = new TimerTask() {
                @Override
                public void run() {
                    Log.d(TAG, "Sensor initialized.");
                    _ready = true;
                    notify_clients(MSG_READY, null);
                    delayedFireSensor();
                }
            };
            new java.util.Timer().schedule(
                    initSensorTask,
                    (sensorDelay.nextInt(9) + 1) * 1000
            );
        }
        else if(force_reset) {
            _FS.notify_clients(MSG_RESET, null);
        }
    }
    private void stopSensor() {
        if(_FS.followingTask != null) {
            _FS.followingTask.cancel();
            _FS.followingTask = null;
        }
        if(_FS.initSensorTask != null) {
            _FS.initSensorTask.cancel();
            _FS.initSensorTask = null;
        }
    }

    @Override
    public IBinder onBind(Intent arg0) {
        return messenger.getBinder();
    }

    private static FirstService _FS;

    public static void DONE() {
        _FS.notify_clients(MSG_STOP, null);
        _FS.stopSelf();
    }
    public static void SET(FirstService fs) {
        _FS = fs;
    }

    @Override
    public void onStart(Intent intent, int startId) {
        super.onStart(intent, startId);
        SET(this);

        //delayedFireSensor();
    }

    @Override
    public void onDestroy()
    {
        super.onDestroy();
        stopSensor();
        //messenger.getBinder().linkToDeath();
        //new IncomingHandler().removeCallbacks();
        _FS = null;
        Log.d(TAG, "onDestroy");
    }

}
