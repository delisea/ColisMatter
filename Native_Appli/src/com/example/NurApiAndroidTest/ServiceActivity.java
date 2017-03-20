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

package com.example.NurApiAndroidTest;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

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
import com.nordicid.nurapi.NurRespInventory;
import com.nordicid.nurapi.NurRespReaderInfo;
import com.nordicid.nurapi.NurSetup;
import com.nordicid.nurapi.NurTag;
import com.nordicid.nurapi.NurTagStorage;

import android.os.Bundle;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.text.Editable;
import android.text.TextWatcher;
import android.util.Base64;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.Spinner;
import android.widget.TabHost.OnTabChangeListener;
import android.widget.TextView;
import android.widget.TabHost;
import android.widget.AdapterView.OnItemSelectedListener;
import android.widget.TabHost.TabSpec;
import android.widget.Toast;
import android.widget.TableRow;
/**
 * @author Nordic ID
 */
public class ServiceActivity extends Activity 
{
	// Some compatibility issues...

	public static final int holo_green_light = 17170452;	// (0x01060014)
	public static final int holo_red_light = 17170454; 		// (0x01060016)
	public static final int holo_red_dark = 17170455; 		//(0x01060017) 
	
	// String variable for debug messages and which are sented by log.d() and viewed by LogCat view.
	public static final String TAG = null;
	// NurApi Object.
	private NurApi mApi;
	// USB auto connect Object for NurApi.
	private NurApiUsbAutoConnect mUsbAC;
	// Tag storage Object.
	private static NurTagStorage mStorage;

	// Statistic
	// Indicates streaming inventory. 
	private boolean mInventoryIsRunning = false;
	// Needed to count tag found %
	private int mInventoryRounds;
	private long mStartInventoryTime;
	private long mLastInventoryTime;
	private int mTagsCounter;
	// Tags Per Second
	private double mLastTPS = 0;
	// Max performance.
	private double mPeakTPS = 0;
	private int mTpsUpdateInterval = 100;
	
	// Lists for inventoried tag data
	static final ArrayList<HashMap<String, String>> inventoryTagList = new ArrayList<HashMap<String, String>>();
	static final ArrayList<HashMap<String, String>> writeTagList = new ArrayList<HashMap<String, String>>();
	
	// Object for NUR Reader information
	private NurRespReaderInfo mReaderInfo;
	
	// Home
	private TextView mStatusTextView;
	private SimpleAdapter mInventoryListViewAdapter;
	private SimpleAdapter mWriteListViewAdapter;
	private boolean mWriteDialogOpen = false;
	private String mTargetEpc = "";
	private String mNewEpc = "";
	
	// Settings
	private Spinner mRegionSpinner;
	private Spinner mTxLevelSpinner;
	private Spinner mLinkFrequencySpinner;
	private Spinner mRxDecodingSpinner;
	private Spinner mTxModulationSpinner;
	private Spinner mQSpinner;
	private Spinner mRoundsSpinner;
	private Spinner mSessionSpinner;
	private Spinner mTargetSpinner;
	
	private TabHost mTabHost;
	private String mPreviousTab = "Home";
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.service_activity);
		
		mStatusTextView = (TextView) findViewById(R.id.home_status_text);
		
		Button bt = new Button(this);
		bt.setText("Stop");
		((TableRow) findViewById(R.id.home_tableRow1)).addView(bt);
//		bt.setOnClickListener(new OnClickListener()
//		{
//			@Override
//			public void onClick(View v)
//			{
//				ArrayList<String> al = new ArrayList<String>();
//				/*Iterator<HashMap<String, String>> i = inventoryTagList.iterator();
//				for(HashMap<String, String> o = i.next(); i.hasNext(); o = i.next()) {
//					al.add(o.toString())
//				}*/
//				al.add("GROS");
//				al.add("PENIS");
//				al.add("!");
//				
//				
//				
//				
//				synchronized (mApi.getStorage())
//				{
//					// Get inventory round result to the tag storage variable.
//					NurTagStorage tagStorage = mApi.getStorage(); // Notice: this returns instance for Nur Api's tag storage
//					Log.d(TAG, "START");
//					for (int n = 0; n < tagStorage.size(); n++)
//					{
//						// Get the tag from the tag storage and put it in the tag variable.  
//						NurTag tag = tagStorage.get(n);
//						Log.d(TAG, tag.getEpcString());
//						al.add(tag.getEpcString());
//						/*HashMap<String, String> temp = new HashMap<String, String>();
//						temp.put("epc", tag.getEpcString());
//						if(inventoryListView) {
//							temp.put("rssi", "" + tag.getRssi());
//							temp.put("timestamp", "" + tag.getTimestamp());
//							temp.put("freq", "" + tag.getFreq() + " kHz (Ch: " + tag.getChannel() + ")");
//							temp.put("found", "1");
//							temp.put("foundpercent", "100");
//							tag.setUserdata(temp); // We need to do this for updating this specific tag data later
//							inventoryTagList.add(temp);
//						}*/
//					}
//				
//				}
//				
//				
//				
//				
//				
//				
//				//Intent result = new Intent("com.example.RESULT_ACTION", Uri.parse("content://GROSPENIS"));
//
//				String li = "";
//				 // serialize the object
//				 try {
//				     ByteArrayOutputStream bo = new ByteArrayOutputStream();
//				     ObjectOutputStream so = new ObjectOutputStream(bo);
//				     so.writeObject(al);
//				     so.flush();
//				     li = bo.toString();
//				 } catch (Exception e) {
//				     System.out.println(e);
//				 }
//				 
//				 
//				  
//				 
//				//Intent result = new Intent("com.example.RESULT_ACTION", Uri.parse(li));
//				Intent result = new Intent("com.example.RESULT_ACTION");
//				result.putExtra("lis", li);
//				setResult(Activity.RESULT_OK, result);
//				
//				finish();
//				
//			}
//		});
		bt.setOnClickListener(new OnClickListener()
		{
			@Override
			public void onClick(View v)
			{
				String li = "";
				
				synchronized (mApi.getStorage())
				{
					// Get inventory round result to the tag storage variable.
					NurTagStorage tagStorage = mApi.getStorage(); // Notice: this returns instance for Nur Api's tag storage
					Log.d(TAG, "START");
					for (int n = 0; n < tagStorage.size(); n++)
					{
						NurTag tag = tagStorage.get(n);
						li = li + "\\" + tag.getEpcString();
					}
				
				}
				
				
				 li += "!";
				//Intent result = new Intent("com.example.RESULT_ACTION", Uri.parse(li));
				Intent result = new Intent("com.example.RESULT_ACTION");
				result.putExtra("lis", li);
				setResult(Activity.RESULT_OK, result);
				
				finish();
			}
		});
		
		
		
		// Initialize NUR tag storage
		mStorage = new NurTagStorage();
		
		if (savedInstanceState != null) {
			  mPreviousTab = savedInstanceState.getString("previousTab");
			  mWriteDialogOpen = savedInstanceState.getBoolean("writeDialogOpen");
			  mTargetEpc = savedInstanceState.getString("targetEpc");
			  mNewEpc = savedInstanceState.getString("newEpc");
		}
		
		if(mWriteDialogOpen) {
			PrompWriteDialog();
		}
		
		// Initialize NurApi object
		mApi = new NurApi();
		
		
		// Set NurApiListener for NurApi Object.
		mApi.setListener(new NurApiListener()
		{
			/*
				Log event is a string that is received from the API.
				It can give information about internal operation of the API.
			*/
			@Override public void logEvent(int level, String txt) {  }

			/*
				Connection event.
				The event occurs when the transport layer to the module connects.
			*/
			@Override
			public void connectedEvent() {
				Log.d(TAG, "NurApi coco bongo");
				Log.d(TAG, "NurApi connected");
				Log.d(TAG, "NurApi coco bongo");
				enableItems(true);// TAG:COCO
				performInventory(false, true);
				Log.d(TAG, "NurApi coco bongo");
			}
			
			/*
				Discconnect event.
				The event occurs when the transport layer to the module disconnects.
			*/
			@Override
			public void disconnectedEvent() {
				Log.d(TAG, "NurApi disconnected");
				enableItems(false);
			}

			/*
				Boot event.
				The event occurs after "enter boot" is called.
			*/			
			@Override public void bootEvent(String event) {  }

			/*
				Inventory stream event.
				This event informs about the ongoing streamed inventory.
			*/			
			@Override
			public void inventoryStreamEvent(NurEventInventory notify)
			{
				CalcTPS(notify.tagsAdded); // Add tag count to tags per second counter
				mInventoryRounds += notify.roundsDone;
				
				if(notify.tagsAdded > 0) {
					Log.d(TAG, "POP");//inventory(true);
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
			
			/*
				I/O change event is triggered when
				- a GPIO hase been configured as an input
				- the same GPIO hase been configured to trigger an event upon state change (lo-hi, hi-lo)
			*/
			@Override public void IOChangeEvent(NurEventIOChange event) {  }
			/*
				This event occurs when the module has been configured to trace a certain tag.
				The tracing is usualle done by the tag's EPC value in order to find that tag
				in a larger population of tags.
			*/
			@Override public void traceTagEvent(NurEventTraceTag event) {  }
			/*
				This event occurs when a GPIO pin has been configured to scan a single tag upon a state change.
				Information contain the source antenna, RSSI (dBM), scaled RSSI (0...100%) and the tag's EPC.
			*/
			@Override public void triggeredReadEvent(NurEventTriggeredRead event) {  }
			/*
				The frequency hop event is sent from the module when it hops to 
				next frequency in the currently selected hoptable.
				To trigger this event it is also required to set the approppriate 
				operation flag in the module setup's opFlags (NurApi.OPFLAGS_EN_HOPEVENTS).
			*/
			@Override public void frequencyHopEvent(NurEventFrequencyHop event) {  }
			/*
				If the module has a debug FW installed into it then this event can used to tgrace
				the module's internal operations.
			*/
			@Override public void debugMessageEvent(String event) {  }
			/*
				This event is basically same thatn the inventory stream even, but it is sent
				after the inventory stream has been started as "extended" i.e. the stream
				has more parameters such as filters masking out certain tags.
			*/
			@Override public void inventoryExtendedStreamEvent(NurEventInventory event) {  }
			/*
				When the API programs new bootloader or application, this event informs 
				about the progress of the programming.
			*/
			@Override public void programmingProgressEvent(NurEventProgrammingProgress event) {  }
			/*
				This is Ethernet Sampo detection related event; not applicable here.
			*/
			@Override public void deviceSearchEvent(NurEventDeviceInfo event) {  }
			/*
				This is Ethernet Sampo client connection event; not applicable here.
			*/			
			@Override public void clientConnectedEvent(NurEventClientInfo event) {  }
			/*
				This is Ethernet Sampo client disconnect event; not applicable here.
			*/						
			@Override public void clientDisconnectedEvent(NurEventClientInfo event) {  }
			/*
				This is event is triggered after the NXP alarm stream has been started
				and the module detects a tag in RF field that hast the NXP alarm set.
			*/						
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

	// This method is used to set tags to tag lists and it's called when single inventory + fetchtags are called or inventory stream has found tags
	private void inventory(boolean inventoryListView)
	{
		synchronized (mApi.getStorage())
		{
			// Get inventory round result to the tag storage variable.
			NurTagStorage tagStorage = mApi.getStorage(); // Notice: this returns instance for Nur Api's tag storage
			boolean tagAdded = false;
			// Iterate each tags from round 
			for (int n = 0; n < tagStorage.size(); n++)
			{
				// Get the tag from the tag storage and put it in the tag variable.  
				NurTag tag = tagStorage.get(n);
				// Add tag to the storage.
				if (mStorage.addTag(tag)) // New tag found
				{
					HashMap<String, String> temp = new HashMap<String, String>();
					temp.put("epc", tag.getEpcString());
					if(inventoryListView) {
						temp.put("rssi", "" + tag.getRssi());
						temp.put("timestamp", "" + tag.getTimestamp());
						temp.put("freq", "" + tag.getFreq() + " kHz (Ch: " + tag.getChannel() + ")");
						temp.put("found", "1");
						temp.put("foundpercent", "100");
						tag.setUserdata(temp); // We need to do this for updating this specific tag data later
						inventoryTagList.add(temp);
					}
					else {
						writeTagList.add(temp);
					}
					tagAdded = true;
				} // Old tag updated
				else
				{
					if(inventoryListView) {
						tag = mStorage.getTag(tag.getEpc());
						@SuppressWarnings("unchecked")
						HashMap<String, String> temp = (HashMap<String, String>) tag.getUserdata(); // Get tag instance from the tag storage
						temp.put("rssi", "" + tag.getRssi());
						temp.put("timestamp", "" + tag.getTimestamp());
						temp.put("freq", "" + tag.getFreq() + " kHz (Ch: " + tag.getChannel() + ")");
						temp.put("found", "" + tag.getUpdateCount());
						temp.put("foundpercent", "" + (int) (((double) tag.getUpdateCount()) / (double) mInventoryRounds * 100));
						//tagAdded = true; // Actually epc did not change so we don't want to notify data changes for list adapters
					}
				}
			}
			tagStorage.clear(); // Clear NurApi tag storage (instance...)
			
			if(tagAdded) {
				if(inventoryListView) {
					mInventoryListViewAdapter.notifyDataSetChanged();
				}
				else {
					mWriteListViewAdapter.notifyDataSetChanged();
				}
			}
		}
	}
	
	/** This method is called for single read / inventory stream
	 * @param singleRead If TRUE call inventory once, otherwise call start/stop inventory stream
	 * @param inventoryListView 
	 */
	private void performInventory(boolean singleRead, boolean inventoryListView)
	{
		if(mApi.isConnected())
		{
			if(singleRead)
			{
				try {
					mStorage.clear(); // Clear tag storage
					if(inventoryListView) {
						if(inventoryTagList.size() > 0) {
							inventoryTagList.clear();
							mInventoryListViewAdapter.notifyDataSetChanged();
						}
					}
					else {
						if(writeTagList.size() > 0) {
							writeTagList.clear();
							mWriteListViewAdapter.notifyDataSetChanged();
						}
					}
					NurRespInventory inventoryResponse = mApi.inventory(); // Do one inventory
					
					if(inventoryResponse.numTagsFound > 0)
					{
						try {
							mApi.fetchTags(); // Get tags from NUR Module to NurApi, it also clear NUR Module internal tag storage
						} catch (Exception e) {
							e.printStackTrace();
						}
						inventory(inventoryListView);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			else
			{
				try {
					if(mInventoryIsRunning) {
						//mInventoryButton.setText(getString(R.string.start));
						mApi.stopInventoryStream(); // Stop inventory streaming
						mInventoryIsRunning = false;
					}
					else {
						mInventoryRounds = 0;
						mInventoryIsRunning = true;
						mStorage.clear();
						if(inventoryTagList.size() > 0) {
							inventoryTagList.clear();
							mInventoryListViewAdapter.notifyDataSetChanged();
						}
						//mInventoryButton.setText(getString(R.string.stop));
						mApi.startInventoryStream(); // Start inventory streaming
					}
				} catch (Exception e) {
					Toast.makeText(ServiceActivity.this, "failed" + e.getMessage(), Toast.LENGTH_SHORT).show();
					e.printStackTrace();
				}
			}
		}
	}
	
	/**
	 * This method will enable/disable buttons depending when NUR module is connected.
	 * It will also call some NurApi calls to get needed info such which region is set and so on..
	 * @param value connected/disconnected...
	 */
	private void enableItems(boolean value)
	{
		if(mApi.isConnected())
		{
			try {
				mReaderInfo = mApi.getReaderInfo(); // Get reader information
				
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		// Home
		if(value) {
			mStatusTextView.setText(R.string.connected);
			mStatusTextView.setTextColor(Color.GREEN);
		}
		else {
			mStatusTextView.setText(R.string.disconnected);
			//mStatusTextView.setTextColor(getResources().getColor(android.R.color.holo_red_dark));
			mStatusTextView.setTextColor(getResources().getColor(holo_red_dark));
		}
		
		
		if(mApi.isConnected()) {
			try {
				NurSetup setup = mApi.getModuleSetup(); // We can read whole module settings
				
				mRegionSpinner.setSelection(setup.regionId);
				mTxLevelSpinner.setSelection(setup.txLevel);
				mRxDecodingSpinner.setSelection(setup.rxDecoding);
				mTxModulationSpinner.setSelection(setup.txModulation);
				mQSpinner.setSelection(setup.inventoryQ);
				mRoundsSpinner.setSelection(setup.inventoryRounds);
				mSessionSpinner.setSelection(setup.inventorySession);
				
				mTargetSpinner.setSelection(setup.inventoryTarget);
				
				switch (setup.linkFreq)
				{
					case NurApi.LINK_FREQUENCY_160000 : mLinkFrequencySpinner.setSelection(0); break;
					case NurApi.LINK_FREQUENCY_256000 : mLinkFrequencySpinner.setSelection(1); break;
					case NurApi.LINK_FREQUENCY_320000 : mLinkFrequencySpinner.setSelection(2); break;
					default : break;
				}
				
				// Make sure that inventory stream will report also when tags not been found. Needed to update tags per second
				mApi.setSetupOpFlags(NurApi.OPFLAGS_INVSTREAM_ZEROS);
				
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
	
	protected void onSaveInstanceState(Bundle savedInstanceState)
	{
		  super.onSaveInstanceState(savedInstanceState);
		  Log.d(TAG, "onSaveInstanceState");
		  savedInstanceState.putString("previousTab", mTabHost.getCurrentTabTag());
		  savedInstanceState.putBoolean("writeDialogOpen", mWriteDialogOpen);
		  savedInstanceState.putString("targetEpc", mTargetEpc);
		  savedInstanceState.putString("newEpc", mNewEpc);
	}
	
	@Override
	protected void onStop() {
		super.onStop();
		Log.d(TAG, "onStop");
		if(mApi != null)
		{
			if(mApi.isInventoryStreamRunning()) {
				try {
					mApi.stopInventoryStream();
					mInventoryIsRunning = false;
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
	}
	
	@Override
	public void onPause() {
		super.onPause();
		Log.d(TAG, "onPause");
	}
	
	@Override
	public void onResume() {
	    super.onResume();
	    Log.d(TAG, "onResume");
	    if(mUsbAC != null) {
		    mUsbAC.onResume(); // Tell Android USB Autoconnection object to do resume things
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
	
	/**
	 *  Custom dialog for writing tags
	 */
	private void PrompWriteDialog()
	{
		mWriteDialogOpen = true;
		LayoutInflater li = LayoutInflater.from(this);
		View promptsView = li.inflate(R.layout.write_epc_dialog, null);
		
		AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(this);
		alertDialogBuilder.setView(promptsView);

		final EditText targetEpc = (EditText) promptsView.findViewById(R.id.target_epc_edit_text);
		final EditText newEpc = (EditText) promptsView.findViewById(R.id.new_epc_edit_text);
		//targetEpc.setText(mTargetEpc);
		//newEpc.setText(mNewEpc);
		
		if(mTargetEpc.length() % 4 == 0) {
			//targetEpc.setBackgroundColor(getResources().getColor(android.R.color.holo_green_light));
			targetEpc.setBackgroundColor(getResources().getColor(holo_green_light));
		}
		else {
			//targetEpc.setBackgroundColor(getResources().getColor(android.R.color.holo_red_light));
			targetEpc.setBackgroundColor(getResources().getColor(holo_red_light));
		}
		if(mNewEpc.length() % 4 == 0) {
			//newEpc.setBackgroundColor(getResources().getColor(android.R.color.holo_green_light));
			newEpc.setBackgroundColor(getResources().getColor(holo_green_light));
		}
		else {
			//newEpc.setBackgroundColor(getResources().getColor(android.R.color.holo_red_light));
			newEpc.setBackgroundColor(getResources().getColor(holo_red_light));
		}
		
		alertDialogBuilder.setCancelable(false).setPositiveButton(getString(R.string.write), new DialogInterface.OnClickListener() {
			    public void onClick(DialogInterface dialog,int id) {
			    	try {
			    		byte[] targetEpc = NurApi.hexStringToByteArray(mTargetEpc); // Convert hex string to byte array
						byte[] newEpc = NurApi.hexStringToByteArray(mNewEpc); // Convert hex string to byte array
			    		mApi.writeTagByEpc(targetEpc, targetEpc.length, newEpc.length, newEpc); // Write tag by singulating against target EPC memory bank
			    		Toast.makeText(ServiceActivity.this, "Tag write succeeded", Toast.LENGTH_SHORT).show();
			    	}
			    	catch (Exception e) { Toast.makeText(ServiceActivity.this, "Tag write failed miserably with " + e.toString(), Toast.LENGTH_SHORT).show(); }
			    	mWriteDialogOpen = false;
			    }
			  }).setNegativeButton(getString(R.string.cancel), new DialogInterface.OnClickListener() {
			    public void onClick(DialogInterface dialog,int id) { mWriteDialogOpen = false; dialog.cancel(); }
			  });

		final AlertDialog alertDialog = alertDialogBuilder.create();
		
		alertDialog.show();

		targetEpc.addTextChangedListener(new TextWatcher(){
	        public void afterTextChanged(Editable s) {
	        	String tmp = targetEpc.getText().toString().replaceAll("[^a-fA-F_0-9]", "");
	        	if(!tmp.equals(targetEpc.getText().toString())) {
	        		//targetEpc.setText(tmp);
	        		//targetEpc.setSelection(targetEpc.getText().length());
	        	}
	        	if(targetEpc.getText().toString().length() > 0 && targetEpc.getText().toString().length() % 4 == 0) {
	        		//targetEpc.setBackgroundColor(getResources().getColor(android.R.color.holo_green_light));
	        		targetEpc.setBackgroundColor(getResources().getColor(holo_green_light));
	        		if(newEpc.getText().toString().length() > 0 && newEpc.getText().toString().length() % 4 == 0) {
	        			alertDialog.getButton(RESULT_OK).setEnabled(true);
	        		}
	        	}
	        	else {
	        		//targetEpc.setBackgroundColor(getResources().getColor(android.R.color.holo_red_light));
	        		targetEpc.setBackgroundColor(getResources().getColor(holo_red_light));
	        		alertDialog.getButton(RESULT_OK).setEnabled(false);
	        	}
	        	mTargetEpc = targetEpc.getText().toString();
	        }
	        public void beforeTextChanged(CharSequence s, int start, int count, int after){}
	        public void onTextChanged(CharSequence s, int start, int before, int count){}
	    });
		
		newEpc.addTextChangedListener(new TextWatcher(){
	        public void afterTextChanged(Editable s) {
	        	String tmp = newEpc.getText().toString().replaceAll("[^a-fA-F_0-9]", "");
	        	if(!tmp.equals(newEpc.getText().toString())) {
	        		//newEpc.setText(tmp);
	        		//newEpc.setSelection(newEpc.getText().length());
	        	}
	        	if(newEpc.getText().toString().length() > 0 && newEpc.getText().toString().length() % 4 == 0) {
	        		//newEpc.setBackgroundColor(getResources().getColor(android.R.color.holo_green_light));
	        		newEpc.setBackgroundColor(getResources().getColor(holo_green_light));
	        		if(targetEpc.getText().toString().length() > 0 && targetEpc.getText().toString().length() % 4 == 0) {
	        			alertDialog.getButton(RESULT_OK).setEnabled(true);
	        		}
	        	}
	        	else {
	        		//newEpc.setBackgroundColor(getResources().getColor(android.R.color.holo_red_light));
	        		newEpc.setBackgroundColor(getResources().getColor(holo_red_light));
	        		alertDialog.getButton(RESULT_OK).setEnabled(false);
	        	}
	        	mNewEpc = newEpc.getText().toString();
	        }
	        public void beforeTextChanged(CharSequence s, int start, int count, int after){}
	        public void onTextChanged(CharSequence s, int start, int before, int count){}
	    });
		
		if(mTargetEpc.length() % 4 == 0 && mNewEpc.length() % 4 == 0) {
			alertDialog.getButton(RESULT_OK).setEnabled(true);
		} else {
			alertDialog.getButton(RESULT_OK).setEnabled(false);
		}
	}
	
	/**
	 * Calculate tags per second
	 * @param ft
	 */
	private void CalcTPS(int ft)
    {
    	mTagsCounter += ft;
        long elapsed = System.currentTimeMillis() - mLastInventoryTime;
        
        if (elapsed >= mTpsUpdateInterval)
        {
            mLastTPS = (double)mTagsCounter / (double)elapsed * 1000.0;
            if (mLastTPS > mPeakTPS) {
                mPeakTPS = mLastTPS;
            }
            elapsed = System.currentTimeMillis() - mStartInventoryTime;
            //mInventoryTPSTextView.setText("" + (int)mLastTPS + ", peak: " + (int)mPeakTPS);
            mLastInventoryTime = System.currentTimeMillis();
            mTagsCounter = 0;
        }
    }
}
