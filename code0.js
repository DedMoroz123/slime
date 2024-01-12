gdjs.MainCode = {};
gdjs.MainCode.GDfonObjects1= [];
gdjs.MainCode.GDfonObjects2= [];
gdjs.MainCode.GDfonObjects3= [];
gdjs.MainCode.GDfonObjects4= [];
gdjs.MainCode.GDnachat_95igruObjects1= [];
gdjs.MainCode.GDnachat_95igruObjects2= [];
gdjs.MainCode.GDnachat_95igruObjects3= [];
gdjs.MainCode.GDnachat_95igruObjects4= [];
gdjs.MainCode.GDpticiObjects1= [];
gdjs.MainCode.GDpticiObjects2= [];
gdjs.MainCode.GDpticiObjects3= [];
gdjs.MainCode.GDpticiObjects4= [];
gdjs.MainCode.GDengObjects1= [];
gdjs.MainCode.GDengObjects2= [];
gdjs.MainCode.GDengObjects3= [];
gdjs.MainCode.GDengObjects4= [];
gdjs.MainCode.GDrusObjects1= [];
gdjs.MainCode.GDrusObjects2= [];
gdjs.MainCode.GDrusObjects3= [];
gdjs.MainCode.GDrusObjects4= [];
gdjs.MainCode.GDzvukObjects1= [];
gdjs.MainCode.GDzvukObjects2= [];
gdjs.MainCode.GDzvukObjects3= [];
gdjs.MainCode.GDzvukObjects4= [];
gdjs.MainCode.GDmeteoritObjects1= [];
gdjs.MainCode.GDmeteoritObjects2= [];
gdjs.MainCode.GDmeteoritObjects3= [];
gdjs.MainCode.GDmeteoritObjects4= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};
gdjs.MainCode.conditionTrue_1 = {val:false};
gdjs.MainCode.condition0IsTrue_1 = {val:false};
gdjs.MainCode.condition1IsTrue_1 = {val:false};
gdjs.MainCode.condition2IsTrue_1 = {val:false};


gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDzvukObjects2Objects = Hashtable.newFrom({"zvuk": gdjs.MainCode.GDzvukObjects2});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").add(1);
}}

}


{

/* Reuse gdjs.MainCode.GDzvukObjects2 */

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MainCode.GDzvukObjects2.length;i<l;++i) {
    if ( gdjs.MainCode.GDzvukObjects2[i].isVisible() ) {
        gdjs.MainCode.condition0IsTrue_0.val = true;
        gdjs.MainCode.GDzvukObjects2[k] = gdjs.MainCode.GDzvukObjects2[i];
        ++k;
    }
}
gdjs.MainCode.GDzvukObjects2.length = k;}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16353108);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
}

}


};gdjs.MainCode.eventsList1 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 0;
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16353708);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("zvuk"), gdjs.MainCode.GDzvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 50);
}{for(var i = 0, len = gdjs.MainCode.GDzvukObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDzvukObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 1;
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16354716);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("zvuk"), gdjs.MainCode.GDzvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.MainCode.GDzvukObjects2.length ;i < len;++i) {
    gdjs.MainCode.GDzvukObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 2;
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16355604);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").setNumber(0);
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
}

}


};gdjs.MainCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("zvuk"), gdjs.MainCode.GDzvukObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDzvukObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.MainCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.MainCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.MainCode.eventsList3 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
/* Unknown instruction - skipped. */}if (gdjs.MainCode.condition0IsTrue_0.val) {
}

}


};gdjs.MainCode.eventsList4 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MainCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
/* Unknown instruction - skipped. */}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
{gdjs.MainCode.conditionTrue_1 = gdjs.MainCode.condition1IsTrue_0;
gdjs.MainCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16358276);
}
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDnachat_9595igruObjects2Objects = Hashtable.newFrom({"nachat_igru": gdjs.MainCode.GDnachat_95igruObjects2});
gdjs.MainCode.eventsList5 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ViborLvl", false);
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDnachat_9595igruObjects2Objects = Hashtable.newFrom({"nachat_igru": gdjs.MainCode.GDnachat_95igruObjects2});
gdjs.MainCode.eventsList6 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ViborLvl", false);
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDrusObjects2Objects = Hashtable.newFrom({"rus": gdjs.MainCode.GDrusObjects2});
gdjs.MainCode.eventsList7 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDengObjects2Objects = Hashtable.newFrom({"eng": gdjs.MainCode.GDengObjects2});
gdjs.MainCode.eventsList8 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_eng", false);
}}

}


};gdjs.MainCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nachat_igru"), gdjs.MainCode.GDnachat_95igruObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDnachat_9595igruObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.MainCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("nachat_igru"), gdjs.MainCode.GDnachat_95igruObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDnachat_9595igruObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.MainCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rus"), gdjs.MainCode.GDrusObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDrusObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.MainCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("eng"), gdjs.MainCode.GDengObjects2);

gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDengObjects2Objects, runtimeScene, true, false);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.MainCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.MainCode.userFunc0x8eef98 = function(runtimeScene) {
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
gdjs.MainCode.eventsList10 = function(runtimeScene) {

{


gdjs.MainCode.eventsList2(runtimeScene);
}


{


gdjs.MainCode.eventsList4(runtimeScene);
}


{


gdjs.MainCode.eventsList9(runtimeScene);
}


{


gdjs.MainCode.userFunc0x8eef98(runtimeScene);

}


{


{
}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDfonObjects1.length = 0;
gdjs.MainCode.GDfonObjects2.length = 0;
gdjs.MainCode.GDfonObjects3.length = 0;
gdjs.MainCode.GDfonObjects4.length = 0;
gdjs.MainCode.GDnachat_95igruObjects1.length = 0;
gdjs.MainCode.GDnachat_95igruObjects2.length = 0;
gdjs.MainCode.GDnachat_95igruObjects3.length = 0;
gdjs.MainCode.GDnachat_95igruObjects4.length = 0;
gdjs.MainCode.GDpticiObjects1.length = 0;
gdjs.MainCode.GDpticiObjects2.length = 0;
gdjs.MainCode.GDpticiObjects3.length = 0;
gdjs.MainCode.GDpticiObjects4.length = 0;
gdjs.MainCode.GDengObjects1.length = 0;
gdjs.MainCode.GDengObjects2.length = 0;
gdjs.MainCode.GDengObjects3.length = 0;
gdjs.MainCode.GDengObjects4.length = 0;
gdjs.MainCode.GDrusObjects1.length = 0;
gdjs.MainCode.GDrusObjects2.length = 0;
gdjs.MainCode.GDrusObjects3.length = 0;
gdjs.MainCode.GDrusObjects4.length = 0;
gdjs.MainCode.GDzvukObjects1.length = 0;
gdjs.MainCode.GDzvukObjects2.length = 0;
gdjs.MainCode.GDzvukObjects3.length = 0;
gdjs.MainCode.GDzvukObjects4.length = 0;
gdjs.MainCode.GDmeteoritObjects1.length = 0;
gdjs.MainCode.GDmeteoritObjects2.length = 0;
gdjs.MainCode.GDmeteoritObjects3.length = 0;
gdjs.MainCode.GDmeteoritObjects4.length = 0;

gdjs.MainCode.eventsList10(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
