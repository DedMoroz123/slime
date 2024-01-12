
if (typeof gdjs.evtsExt__YGameSDK__IsInitPayments !== "undefined") {
  gdjs.evtsExt__YGameSDK__IsInitPayments.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__YGameSDK__IsInitPayments = {};

gdjs.evtsExt__YGameSDK__IsInitPayments.conditionTrue_0 = {val:false};
gdjs.evtsExt__YGameSDK__IsInitPayments.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__YGameSDK__IsInitPayments.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__YGameSDK__IsInitPayments.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__YGameSDK__IsInitPayments.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YGameSDK__IsInitPayments.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__YGameSDK__IsInitPayments.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("YGSDK_Payment_IsInit"), true);
}if (gdjs.evtsExt__YGameSDK__IsInitPayments.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__YGameSDK__IsInitPayments.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__YGameSDK__IsInitPayments.condition0IsTrue_0.val = false;
gdjs.evtsExt__YGameSDK__IsInitPayments.condition1IsTrue_0.val = false;
{
gdjs.evtsExt__YGameSDK__IsInitPayments.condition0IsTrue_0.val = gdjs.evtsExt__YGameSDK__IsInit.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.evtsExt__YGameSDK__IsInitPayments.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__YGameSDK__IsInitPayments.condition1IsTrue_0.val = gdjs.evtsExt__YGameSDK__IsInitPlayer.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
if (gdjs.evtsExt__YGameSDK__IsInitPayments.condition1IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__YGameSDK__IsInitPayments.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__YGameSDK__IsInitPayments.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__YGameSDK__IsInitPayments.eventsList1(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__YGameSDK__IsInitPayments.registeredGdjsCallbacks = [];