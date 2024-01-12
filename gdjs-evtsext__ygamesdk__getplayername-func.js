
if (typeof gdjs.evtsExt__YGameSDK__GetPlayerName !== "undefined") {
  gdjs.evtsExt__YGameSDK__GetPlayerName.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YGameSDK__GetPlayerName = {};

gdjs.evtsExt__YGameSDK__GetPlayerName.conditionTrue_0 = {val:false};
gdjs.evtsExt__YGameSDK__GetPlayerName.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__YGameSDK__GetPlayerName.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__YGameSDK__GetPlayerName.userFunc0xf36520 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var playerName = runtimeScene.getGame().getVariables().get(eventsFunctionContext.getArgument("PlayerName"));
var name = window.player_ysdk.getName();
playerName.setString(name);
};
gdjs.evtsExt__YGameSDK__GetPlayerName.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YGameSDK__GetPlayerName.userFunc0xf36520(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__YGameSDK__GetPlayerName.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YGameSDK__GetPlayerName.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__YGameSDK__GetPlayerName.condition0IsTrue_0.val = gdjs.evtsExt__YGameSDK__IsInitPlayer.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__YGameSDK__GetPlayerName.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__YGameSDK__GetPlayerName.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__YGameSDK__GetPlayerName.func = function(runtimeScene, PlayerName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PlayerName") return PlayerName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YGameSDK__GetPlayerName.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__YGameSDK__GetPlayerName.registeredGdjsCallbacks = [];