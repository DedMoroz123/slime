
gdjs.evtsExt__Flash__Flash = gdjs.evtsExt__Flash__Flash || {};

/**
 * Behavior generated from Flash visibility (blink)
 */
gdjs.evtsExt__Flash__Flash.Flash = class Flash extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Flash__Flash.Flash.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.HalfPeriodTime = behaviorData.HalfPeriodTime !== undefined ? behaviorData.HalfPeriodTime : Number("0.1") || 0;
    this._behaviorData.IsFlashing = false;
    this._behaviorData.FlashDuration = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.HalfPeriodTime !== newBehaviorData.HalfPeriodTime)
      this._behaviorData.HalfPeriodTime = newBehaviorData.HalfPeriodTime;
    if (oldBehaviorData.IsFlashing !== newBehaviorData.IsFlashing)
      this._behaviorData.IsFlashing = newBehaviorData.IsFlashing;
    if (oldBehaviorData.FlashDuration !== newBehaviorData.FlashDuration)
      this._behaviorData.FlashDuration = newBehaviorData.FlashDuration;

    return true;
  }

  // Properties:
  
  _getHalfPeriodTime() {
    return this._behaviorData.HalfPeriodTime !== undefined ? this._behaviorData.HalfPeriodTime : Number("0.1") || 0;
  }
  _setHalfPeriodTime(newValue) {
    this._behaviorData.HalfPeriodTime = newValue;
  }
  _getIsFlashing() {
    return this._behaviorData.IsFlashing !== undefined ? this._behaviorData.IsFlashing : false;
  }
  _setIsFlashing(newValue) {
    this._behaviorData.IsFlashing = newValue;
  }
  _getFlashDuration() {
    return this._behaviorData.FlashDuration !== undefined ? this._behaviorData.FlashDuration : Number("0") || 0;
  }
  _setFlashDuration(newValue) {
    this._behaviorData.FlashDuration = newValue;
  }
}

/**
 * Shared data generated from Flash visibility (blink)
 */
gdjs.evtsExt__Flash__Flash.Flash.SharedData = class FlashSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Flash__Flash.Flash.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Flash_FlashSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Flash_FlashSharedData = new gdjs.evtsExt__Flash__Flash.Flash.SharedData(
      initialData
    );
  }
  return instanceContainer._Flash_FlashSharedData;
}

// Methods:
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects3= [];

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95Flash_95_95Flash_46Flash_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2);


gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].getTimerElapsedTimeInSecondsOrNaN("Flash_Visibility_Timer") > (gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getHalfPeriodTime()) ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2 */
{gdjs.evtsExt__Flash__ToggleVisibility.func(runtimeScene, gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.mapOfGDgdjs_46evtsExt_95_95Flash_95_95Flash_46Flash_46prototype_46doStepPreEventsContext_46GDObjectObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2[i].resetTimer("Flash_Visibility_Timer");
}
}}

}


};gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1 */

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlashDuration() > 0 ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Flash_Visibility_Duration_Timer") > (gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFlashDuration()) ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing() ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects2= [];

gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.mapOfGDgdjs_46evtsExt_95_95Flash_95_95Flash_46Flash_46prototype_46FlashContext_46GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1});
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1);

gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsFlashing((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1 */
{gdjs.evtsExt__Flash__ToggleVisibility.func(runtimeScene, gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.mapOfGDgdjs_46evtsExt_95_95Flash_95_95Flash_46Flash_46prototype_46FlashContext_46GDObjectObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlashing(true);
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].resetTimer("Flash_Visibility_Timer");
}
}}

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].resetTimer("Flash_Visibility_Duration_Timer");
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFlashDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("FlashDuration")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__Flash__Flash.Flash.prototype.Flash = function(FlashDuration, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "FlashDuration") return FlashDuration;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.FlashContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects2= [];

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1);

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing() ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashing = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.IsFlashingContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects2= [];

gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Stop((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext = {};
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1= [];
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects2= [];

gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1);

gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsFlashing() ) {
        gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[k] = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsFlashing(false);
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].removeTimer("Flash_Visibility_Timer");
}
}{for(var i = 0, len = gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1[i].removeTimer("Flash_Visibility_Duration_Timer");
}
}}

}


};

gdjs.evtsExt__Flash__Flash.Flash.prototype.Stop = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Flash__Flash.Flash.prototype.StopContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("Flash::Flash", gdjs.evtsExt__Flash__Flash.Flash);
