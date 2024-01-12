gdjs.pauseCode = {};
gdjs.pauseCode.GDnazadObjects1= [];
gdjs.pauseCode.GDnazadObjects2= [];
gdjs.pauseCode.GDnazadObjects3= [];
gdjs.pauseCode.GDnazadObjects4= [];
gdjs.pauseCode.GDzvukObjects1= [];
gdjs.pauseCode.GDzvukObjects2= [];
gdjs.pauseCode.GDzvukObjects3= [];
gdjs.pauseCode.GDzvukObjects4= [];
gdjs.pauseCode.GDenterObjects1= [];
gdjs.pauseCode.GDenterObjects2= [];
gdjs.pauseCode.GDenterObjects3= [];
gdjs.pauseCode.GDenterObjects4= [];

gdjs.pauseCode.conditionTrue_0 = {val:false};
gdjs.pauseCode.condition0IsTrue_0 = {val:false};
gdjs.pauseCode.condition1IsTrue_0 = {val:false};
gdjs.pauseCode.condition2IsTrue_0 = {val:false};
gdjs.pauseCode.conditionTrue_1 = {val:false};
gdjs.pauseCode.condition0IsTrue_1 = {val:false};
gdjs.pauseCode.condition1IsTrue_1 = {val:false};
gdjs.pauseCode.condition2IsTrue_1 = {val:false};


gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDnazadObjects2Objects = Hashtable.newFrom({"nazad": gdjs.pauseCode.GDnazadObjects2});
gdjs.pauseCode.eventsList0 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.pauseCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nazad"), gdjs.pauseCode.GDnazadObjects2);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDnazadObjects2Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.pauseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDenterObjects2Objects = Hashtable.newFrom({"enter": gdjs.pauseCode.GDenterObjects2});
gdjs.pauseCode.eventsList2 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{


{
}

}


};gdjs.pauseCode.eventsList3 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enter"), gdjs.pauseCode.GDenterObjects2);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDenterObjects2Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.pauseCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
gdjs.pauseCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Pause") > 0.3;
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Theme_town_00.ogg", 17, false, 40, 1);
}}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDenterObjects2Objects = Hashtable.newFrom({"enter": gdjs.pauseCode.GDenterObjects2});
gdjs.pauseCode.eventsList4 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


};gdjs.pauseCode.eventsList5 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enter"), gdjs.pauseCode.GDenterObjects2);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDenterObjects2Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.pauseCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDenterObjects2Objects = Hashtable.newFrom({"enter": gdjs.pauseCode.GDenterObjects2});
gdjs.pauseCode.eventsList6 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


};gdjs.pauseCode.eventsList7 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enter"), gdjs.pauseCode.GDenterObjects2);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDenterObjects2Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.pauseCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDenterObjects2Objects = Hashtable.newFrom({"enter": gdjs.pauseCode.GDenterObjects2});
gdjs.pauseCode.eventsList8 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


};gdjs.pauseCode.eventsList9 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enter"), gdjs.pauseCode.GDenterObjects2);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDenterObjects2Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.pauseCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDnazadObjects2Objects = Hashtable.newFrom({"nazad": gdjs.pauseCode.GDnazadObjects2});
gdjs.pauseCode.eventsList10 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.pauseCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nazad"), gdjs.pauseCode.GDnazadObjects2);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDnazadObjects2Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.pauseCode.eventsList10(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDzvukObjects2Objects = Hashtable.newFrom({"zvuk": gdjs.pauseCode.GDzvukObjects2});
gdjs.pauseCode.eventsList12 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").add(1);
}}

}


{

/* Reuse gdjs.pauseCode.GDzvukObjects2 */

gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.pauseCode.GDzvukObjects2.length;i<l;++i) {
    if ( gdjs.pauseCode.GDzvukObjects2[i].isVisible() ) {
        gdjs.pauseCode.condition0IsTrue_0.val = true;
        gdjs.pauseCode.GDzvukObjects2[k] = gdjs.pauseCode.GDzvukObjects2[i];
        ++k;
    }
}
gdjs.pauseCode.GDzvukObjects2.length = k;}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
{gdjs.pauseCode.conditionTrue_1 = gdjs.pauseCode.condition1IsTrue_0;
gdjs.pauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16459108);
}
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
}

}


};gdjs.pauseCode.eventsList13 = function(runtimeScene) {

{


gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 0;
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
{gdjs.pauseCode.conditionTrue_1 = gdjs.pauseCode.condition1IsTrue_0;
gdjs.pauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16459708);
}
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("zvuk"), gdjs.pauseCode.GDzvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 50);
}{for(var i = 0, len = gdjs.pauseCode.GDzvukObjects2.length ;i < len;++i) {
    gdjs.pauseCode.GDzvukObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 1;
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
{gdjs.pauseCode.conditionTrue_1 = gdjs.pauseCode.condition1IsTrue_0;
gdjs.pauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16460716);
}
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("zvuk"), gdjs.pauseCode.GDzvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.pauseCode.GDzvukObjects2.length ;i < len;++i) {
    gdjs.pauseCode.GDzvukObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
gdjs.pauseCode.condition1IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 2;
}if ( gdjs.pauseCode.condition0IsTrue_0.val ) {
{
{gdjs.pauseCode.conditionTrue_1 = gdjs.pauseCode.condition1IsTrue_0;
gdjs.pauseCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16461604);
}
}}
if (gdjs.pauseCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").setNumber(0);
}}

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
}

}


};gdjs.pauseCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("zvuk"), gdjs.pauseCode.GDzvukObjects2);

gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.pauseCode.mapOfGDgdjs_46pauseCode_46GDzvukObjects2Objects, runtimeScene, true, false);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.pauseCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.pauseCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.pauseCode.userFunc0x901888 = function(runtimeScene) {
"use strict";
function handleVisibilityChange() {
    if (document.hidden) {
  runtimeScene.getSoundManager().setGlobalVolume(0);
  sound && sound.pause();
    
  } else {
    runtimeScene.getSoundManager().setGlobalVolume(50);
    if (sound && !sound.playing()) sound.play();
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);
};
gdjs.pauseCode.eventsList15 = function(runtimeScene) {

{


gdjs.pauseCode.eventsList1(runtimeScene);
}


{


gdjs.pauseCode.eventsList3(runtimeScene);
}


{


gdjs.pauseCode.eventsList5(runtimeScene);
}


{


gdjs.pauseCode.eventsList7(runtimeScene);
}


{


gdjs.pauseCode.eventsList9(runtimeScene);
}


{


gdjs.pauseCode.eventsList11(runtimeScene);
}


{


gdjs.pauseCode.eventsList14(runtimeScene);
}


{


gdjs.pauseCode.userFunc0x901888(runtimeScene);

}


{


gdjs.pauseCode.condition0IsTrue_0.val = false;
{
gdjs.pauseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.pauseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


{
}

}


};

gdjs.pauseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.pauseCode.GDnazadObjects1.length = 0;
gdjs.pauseCode.GDnazadObjects2.length = 0;
gdjs.pauseCode.GDnazadObjects3.length = 0;
gdjs.pauseCode.GDnazadObjects4.length = 0;
gdjs.pauseCode.GDzvukObjects1.length = 0;
gdjs.pauseCode.GDzvukObjects2.length = 0;
gdjs.pauseCode.GDzvukObjects3.length = 0;
gdjs.pauseCode.GDzvukObjects4.length = 0;
gdjs.pauseCode.GDenterObjects1.length = 0;
gdjs.pauseCode.GDenterObjects2.length = 0;
gdjs.pauseCode.GDenterObjects3.length = 0;
gdjs.pauseCode.GDenterObjects4.length = 0;

gdjs.pauseCode.eventsList15(runtimeScene);

return;

}

gdjs['pauseCode'] = gdjs.pauseCode;
