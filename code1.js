gdjs.Main_95engCode = {};
gdjs.Main_95engCode.GDfonObjects1= [];
gdjs.Main_95engCode.GDfonObjects2= [];
gdjs.Main_95engCode.GDfonObjects3= [];
gdjs.Main_95engCode.GDfonObjects4= [];
gdjs.Main_95engCode.GDnachat_95igruObjects1= [];
gdjs.Main_95engCode.GDnachat_95igruObjects2= [];
gdjs.Main_95engCode.GDnachat_95igruObjects3= [];
gdjs.Main_95engCode.GDnachat_95igruObjects4= [];
gdjs.Main_95engCode.GDpticiObjects1= [];
gdjs.Main_95engCode.GDpticiObjects2= [];
gdjs.Main_95engCode.GDpticiObjects3= [];
gdjs.Main_95engCode.GDpticiObjects4= [];
gdjs.Main_95engCode.GDengObjects1= [];
gdjs.Main_95engCode.GDengObjects2= [];
gdjs.Main_95engCode.GDengObjects3= [];
gdjs.Main_95engCode.GDengObjects4= [];
gdjs.Main_95engCode.GDrusObjects1= [];
gdjs.Main_95engCode.GDrusObjects2= [];
gdjs.Main_95engCode.GDrusObjects3= [];
gdjs.Main_95engCode.GDrusObjects4= [];
gdjs.Main_95engCode.GDzvukObjects1= [];
gdjs.Main_95engCode.GDzvukObjects2= [];
gdjs.Main_95engCode.GDzvukObjects3= [];
gdjs.Main_95engCode.GDzvukObjects4= [];
gdjs.Main_95engCode.GDmeteorittObjects1= [];
gdjs.Main_95engCode.GDmeteorittObjects2= [];
gdjs.Main_95engCode.GDmeteorittObjects3= [];
gdjs.Main_95engCode.GDmeteorittObjects4= [];

gdjs.Main_95engCode.conditionTrue_0 = {val:false};
gdjs.Main_95engCode.condition0IsTrue_0 = {val:false};
gdjs.Main_95engCode.condition1IsTrue_0 = {val:false};
gdjs.Main_95engCode.condition2IsTrue_0 = {val:false};
gdjs.Main_95engCode.conditionTrue_1 = {val:false};
gdjs.Main_95engCode.condition0IsTrue_1 = {val:false};
gdjs.Main_95engCode.condition1IsTrue_1 = {val:false};
gdjs.Main_95engCode.condition2IsTrue_1 = {val:false};


gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDzvukObjects2Objects = Hashtable.newFrom({"zvuk": gdjs.Main_95engCode.GDzvukObjects2});
gdjs.Main_95engCode.eventsList0 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").add(1);
}}

}


{

/* Reuse gdjs.Main_95engCode.GDzvukObjects2 */

gdjs.Main_95engCode.condition0IsTrue_0.val = false;
gdjs.Main_95engCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_95engCode.GDzvukObjects2.length;i<l;++i) {
    if ( gdjs.Main_95engCode.GDzvukObjects2[i].isVisible() ) {
        gdjs.Main_95engCode.condition0IsTrue_0.val = true;
        gdjs.Main_95engCode.GDzvukObjects2[k] = gdjs.Main_95engCode.GDzvukObjects2[i];
        ++k;
    }
}
gdjs.Main_95engCode.GDzvukObjects2.length = k;}if ( gdjs.Main_95engCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_95engCode.conditionTrue_1 = gdjs.Main_95engCode.condition1IsTrue_0;
gdjs.Main_95engCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16375676);
}
}}
if (gdjs.Main_95engCode.condition1IsTrue_0.val) {
}

}


};gdjs.Main_95engCode.eventsList1 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
gdjs.Main_95engCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 0;
}if ( gdjs.Main_95engCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_95engCode.conditionTrue_1 = gdjs.Main_95engCode.condition1IsTrue_0;
gdjs.Main_95engCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16376276);
}
}}
if (gdjs.Main_95engCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("zvuk"), gdjs.Main_95engCode.GDzvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 50);
}{for(var i = 0, len = gdjs.Main_95engCode.GDzvukObjects2.length ;i < len;++i) {
    gdjs.Main_95engCode.GDzvukObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
gdjs.Main_95engCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 1;
}if ( gdjs.Main_95engCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_95engCode.conditionTrue_1 = gdjs.Main_95engCode.condition1IsTrue_0;
gdjs.Main_95engCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16377284);
}
}}
if (gdjs.Main_95engCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("zvuk"), gdjs.Main_95engCode.GDzvukObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{for(var i = 0, len = gdjs.Main_95engCode.GDzvukObjects2.length ;i < len;++i) {
    gdjs.Main_95engCode.GDzvukObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
gdjs.Main_95engCode.condition1IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 2;
}if ( gdjs.Main_95engCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_95engCode.conditionTrue_1 = gdjs.Main_95engCode.condition1IsTrue_0;
gdjs.Main_95engCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16378172);
}
}}
if (gdjs.Main_95engCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").setNumber(0);
}}

}


{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
}

}


};gdjs.Main_95engCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("zvuk"), gdjs.Main_95engCode.GDzvukObjects2);

gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDzvukObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Main_95engCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.Main_95engCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Main_95engCode.eventsList3 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
/* Unknown instruction - skipped. */}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{/* Unknown instruction - skipped. */}}

}


};gdjs.Main_95engCode.eventsList4 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Main_95engCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
gdjs.Main_95engCode.condition1IsTrue_0.val = false;
{
/* Unknown instruction - skipped. */}if ( gdjs.Main_95engCode.condition0IsTrue_0.val ) {
{
{gdjs.Main_95engCode.conditionTrue_1 = gdjs.Main_95engCode.condition1IsTrue_0;
gdjs.Main_95engCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16380844);
}
}}
if (gdjs.Main_95engCode.condition1IsTrue_0.val) {
{/* Unknown instruction - skipped. */}}

}


{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDnachat_9595igruObjects2Objects = Hashtable.newFrom({"nachat_igru": gdjs.Main_95engCode.GDnachat_95igruObjects2});
gdjs.Main_95engCode.eventsList5 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ViborLvl", false);
}}

}


};gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDnachat_9595igruObjects2Objects = Hashtable.newFrom({"nachat_igru": gdjs.Main_95engCode.GDnachat_95igruObjects2});
gdjs.Main_95engCode.eventsList6 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ViborLvl", false);
}}

}


};gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDrusObjects2Objects = Hashtable.newFrom({"rus": gdjs.Main_95engCode.GDrusObjects2});
gdjs.Main_95engCode.eventsList7 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDengObjects2Objects = Hashtable.newFrom({"eng": gdjs.Main_95engCode.GDengObjects2});
gdjs.Main_95engCode.eventsList8 = function(runtimeScene) {

{


gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_eng", false);
}}

}


};gdjs.Main_95engCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("nachat_igru"), gdjs.Main_95engCode.GDnachat_95igruObjects2);

gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDnachat_9595igruObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Main_95engCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("nachat_igru"), gdjs.Main_95engCode.GDnachat_95igruObjects2);

gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDnachat_9595igruObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Main_95engCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("rus"), gdjs.Main_95engCode.GDrusObjects2);

gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDrusObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Main_95engCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("eng"), gdjs.Main_95engCode.GDengObjects2);

gdjs.Main_95engCode.condition0IsTrue_0.val = false;
{
gdjs.Main_95engCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_95engCode.mapOfGDgdjs_46Main_9595engCode_46GDengObjects2Objects, runtimeScene, true, false);
}if (gdjs.Main_95engCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Main_95engCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.Main_95engCode.userFunc0x8f2e18 = function(runtimeScene) {
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
gdjs.Main_95engCode.eventsList10 = function(runtimeScene) {

{


gdjs.Main_95engCode.eventsList2(runtimeScene);
}


{


gdjs.Main_95engCode.eventsList4(runtimeScene);
}


{


gdjs.Main_95engCode.eventsList9(runtimeScene);
}


{


gdjs.Main_95engCode.userFunc0x8f2e18(runtimeScene);

}


{


{
}

}


};

gdjs.Main_95engCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_95engCode.GDfonObjects1.length = 0;
gdjs.Main_95engCode.GDfonObjects2.length = 0;
gdjs.Main_95engCode.GDfonObjects3.length = 0;
gdjs.Main_95engCode.GDfonObjects4.length = 0;
gdjs.Main_95engCode.GDnachat_95igruObjects1.length = 0;
gdjs.Main_95engCode.GDnachat_95igruObjects2.length = 0;
gdjs.Main_95engCode.GDnachat_95igruObjects3.length = 0;
gdjs.Main_95engCode.GDnachat_95igruObjects4.length = 0;
gdjs.Main_95engCode.GDpticiObjects1.length = 0;
gdjs.Main_95engCode.GDpticiObjects2.length = 0;
gdjs.Main_95engCode.GDpticiObjects3.length = 0;
gdjs.Main_95engCode.GDpticiObjects4.length = 0;
gdjs.Main_95engCode.GDengObjects1.length = 0;
gdjs.Main_95engCode.GDengObjects2.length = 0;
gdjs.Main_95engCode.GDengObjects3.length = 0;
gdjs.Main_95engCode.GDengObjects4.length = 0;
gdjs.Main_95engCode.GDrusObjects1.length = 0;
gdjs.Main_95engCode.GDrusObjects2.length = 0;
gdjs.Main_95engCode.GDrusObjects3.length = 0;
gdjs.Main_95engCode.GDrusObjects4.length = 0;
gdjs.Main_95engCode.GDzvukObjects1.length = 0;
gdjs.Main_95engCode.GDzvukObjects2.length = 0;
gdjs.Main_95engCode.GDzvukObjects3.length = 0;
gdjs.Main_95engCode.GDzvukObjects4.length = 0;
gdjs.Main_95engCode.GDmeteorittObjects1.length = 0;
gdjs.Main_95engCode.GDmeteorittObjects2.length = 0;
gdjs.Main_95engCode.GDmeteorittObjects3.length = 0;
gdjs.Main_95engCode.GDmeteorittObjects4.length = 0;

gdjs.Main_95engCode.eventsList10(runtimeScene);

return;

}

gdjs['Main_95engCode'] = gdjs.Main_95engCode;
