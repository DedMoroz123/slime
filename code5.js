gdjs.Level2Code = {};
gdjs.Level2Code.GDPlayerObjects1= [];
gdjs.Level2Code.GDPlayerObjects2= [];
gdjs.Level2Code.GDPlayerObjects3= [];
gdjs.Level2Code.GDPlayerObjects4= [];
gdjs.Level2Code.GDplatformObjects1= [];
gdjs.Level2Code.GDplatformObjects2= [];
gdjs.Level2Code.GDplatformObjects3= [];
gdjs.Level2Code.GDplatformObjects4= [];
gdjs.Level2Code.GDblockObjects1= [];
gdjs.Level2Code.GDblockObjects2= [];
gdjs.Level2Code.GDblockObjects3= [];
gdjs.Level2Code.GDblockObjects4= [];
gdjs.Level2Code.GDmoonObjects1= [];
gdjs.Level2Code.GDmoonObjects2= [];
gdjs.Level2Code.GDmoonObjects3= [];
gdjs.Level2Code.GDmoonObjects4= [];
gdjs.Level2Code.GDplatform2Objects1= [];
gdjs.Level2Code.GDplatform2Objects2= [];
gdjs.Level2Code.GDplatform2Objects3= [];
gdjs.Level2Code.GDplatform2Objects4= [];
gdjs.Level2Code.GDplatform3Objects1= [];
gdjs.Level2Code.GDplatform3Objects2= [];
gdjs.Level2Code.GDplatform3Objects3= [];
gdjs.Level2Code.GDplatform3Objects4= [];
gdjs.Level2Code.GDstrela_95verhObjects1= [];
gdjs.Level2Code.GDstrela_95verhObjects2= [];
gdjs.Level2Code.GDstrela_95verhObjects3= [];
gdjs.Level2Code.GDstrela_95verhObjects4= [];
gdjs.Level2Code.GDstrela_95vnizObjects1= [];
gdjs.Level2Code.GDstrela_95vnizObjects2= [];
gdjs.Level2Code.GDstrela_95vnizObjects3= [];
gdjs.Level2Code.GDstrela_95vnizObjects4= [];
gdjs.Level2Code.GDgribObjects1= [];
gdjs.Level2Code.GDgribObjects2= [];
gdjs.Level2Code.GDgribObjects3= [];
gdjs.Level2Code.GDgribObjects4= [];
gdjs.Level2Code.GDtrava1Objects1= [];
gdjs.Level2Code.GDtrava1Objects2= [];
gdjs.Level2Code.GDtrava1Objects3= [];
gdjs.Level2Code.GDtrava1Objects4= [];
gdjs.Level2Code.GDtrava2Objects1= [];
gdjs.Level2Code.GDtrava2Objects2= [];
gdjs.Level2Code.GDtrava2Objects3= [];
gdjs.Level2Code.GDtrava2Objects4= [];
gdjs.Level2Code.GDneboObjects1= [];
gdjs.Level2Code.GDneboObjects2= [];
gdjs.Level2Code.GDneboObjects3= [];
gdjs.Level2Code.GDneboObjects4= [];
gdjs.Level2Code.GDtuchkaObjects1= [];
gdjs.Level2Code.GDtuchkaObjects2= [];
gdjs.Level2Code.GDtuchkaObjects3= [];
gdjs.Level2Code.GDtuchkaObjects4= [];
gdjs.Level2Code.GDmonetaObjects1= [];
gdjs.Level2Code.GDmonetaObjects2= [];
gdjs.Level2Code.GDmonetaObjects3= [];
gdjs.Level2Code.GDmonetaObjects4= [];
gdjs.Level2Code.GDmoneta2Objects1= [];
gdjs.Level2Code.GDmoneta2Objects2= [];
gdjs.Level2Code.GDmoneta2Objects3= [];
gdjs.Level2Code.GDmoneta2Objects4= [];
gdjs.Level2Code.GDmoneta3Objects1= [];
gdjs.Level2Code.GDmoneta3Objects2= [];
gdjs.Level2Code.GDmoneta3Objects3= [];
gdjs.Level2Code.GDmoneta3Objects4= [];
gdjs.Level2Code.GDdverObjects1= [];
gdjs.Level2Code.GDdverObjects2= [];
gdjs.Level2Code.GDdverObjects3= [];
gdjs.Level2Code.GDdverObjects4= [];
gdjs.Level2Code.GDstrela_95vpravoObjects1= [];
gdjs.Level2Code.GDstrela_95vpravoObjects2= [];
gdjs.Level2Code.GDstrela_95vpravoObjects3= [];
gdjs.Level2Code.GDstrela_95vpravoObjects4= [];
gdjs.Level2Code.GDsvetokObjects1= [];
gdjs.Level2Code.GDsvetokObjects2= [];
gdjs.Level2Code.GDsvetokObjects3= [];
gdjs.Level2Code.GDsvetokObjects4= [];
gdjs.Level2Code.GDsunObjects1= [];
gdjs.Level2Code.GDsunObjects2= [];
gdjs.Level2Code.GDsunObjects3= [];
gdjs.Level2Code.GDsunObjects4= [];
gdjs.Level2Code.GDkushachkaObjects1= [];
gdjs.Level2Code.GDkushachkaObjects2= [];
gdjs.Level2Code.GDkushachkaObjects3= [];
gdjs.Level2Code.GDkushachkaObjects4= [];

gdjs.Level2Code.conditionTrue_0 = {val:false};
gdjs.Level2Code.condition0IsTrue_0 = {val:false};
gdjs.Level2Code.condition1IsTrue_0 = {val:false};
gdjs.Level2Code.condition2IsTrue_0 = {val:false};
gdjs.Level2Code.condition3IsTrue_0 = {val:false};
gdjs.Level2Code.condition4IsTrue_0 = {val:false};
gdjs.Level2Code.conditionTrue_1 = {val:false};
gdjs.Level2Code.condition0IsTrue_1 = {val:false};
gdjs.Level2Code.condition1IsTrue_1 = {val:false};
gdjs.Level2Code.condition2IsTrue_1 = {val:false};
gdjs.Level2Code.condition3IsTrue_1 = {val:false};
gdjs.Level2Code.condition4IsTrue_1 = {val:false};


gdjs.Level2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Pause") > 0.3;
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


};gdjs.Level2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("kushachka"), gdjs.Level2Code.GDkushachkaObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDkushachkaObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDkushachkaObjects2[i].getVariableNumber(gdjs.Level2Code.GDkushachkaObjects2[i].getVariables().get("walk")) == 1 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDkushachkaObjects2[k] = gdjs.Level2Code.GDkushachkaObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDkushachkaObjects2.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{

gdjs.copyArray(runtimeScene.getObjects("kushachka"), gdjs.Level2Code.GDkushachkaObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDkushachkaObjects1.length;i<l;++i) {
    if ( gdjs.Level2Code.GDkushachkaObjects1[i].getVariableNumber(gdjs.Level2Code.GDkushachkaObjects1[i].getVariables().get("walk")) == 0 ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDkushachkaObjects1[k] = gdjs.Level2Code.GDkushachkaObjects1[i];
        ++k;
    }
}
gdjs.Level2Code.GDkushachkaObjects1.length = k;}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


};gdjs.Level2Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{/* Unknown object - skipped. */}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.Level2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDkushachkaObjects2Objects = Hashtable.newFrom({"kushachka": gdjs.Level2Code.GDkushachkaObjects2});
gdjs.Level2Code.asyncCallback16536532 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}
gdjs.Level2Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Level2Code.GDPlayerObjects2) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level2Code.asyncCallback16536532(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDkushachkaObjects2Objects = Hashtable.newFrom({"kushachka": gdjs.Level2Code.GDkushachkaObjects2});
gdjs.Level2Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("kushachka"), gdjs.Level2Code.GDkushachkaObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDkushachkaObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("Flash").Flash(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Level2Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("kushachka"), gdjs.Level2Code.GDkushachkaObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDkushachkaObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16537580);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Hit4.wav", 8, false, 40, 1);
}}

}


{


{
}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDmonetaObjects2Objects = Hashtable.newFrom({"moneta": gdjs.Level2Code.GDmonetaObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDmoneta2Objects2Objects = Hashtable.newFrom({"moneta2": gdjs.Level2Code.GDmoneta2Objects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDmoneta3Objects2Objects = Hashtable.newFrom({"moneta3": gdjs.Level2Code.GDmoneta3Objects2});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level2Code.GDPlayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDdverObjects1Objects = Hashtable.newFrom({"dver": gdjs.Level2Code.GDdverObjects1});
gdjs.Level2Code.asyncCallback16543628 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("dver"), gdjs.Level2Code.GDdverObjects2);

{for(var i = 0, len = gdjs.Level2Code.GDdverObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDdverObjects2[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}{gdjs.evtTools.storage.writeStringInJSONFile("Level", "Fase2", "Ok");
}}
gdjs.Level2Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Level2Code.GDdverObjects1) asyncObjectsList.addObject("dver", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.2), (runtimeScene) => (gdjs.Level2Code.asyncCallback16543628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level2Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("moneta"), gdjs.Level2Code.GDmonetaObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDmonetaObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_1.val ) {
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("haskey1")) != 1;
}}
gdjs.Level2Code.conditionTrue_1.val = true && gdjs.Level2Code.condition0IsTrue_1.val && gdjs.Level2Code.condition1IsTrue_1.val;
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDmonetaObjects2 */
{runtimeScene.getVariables().get("haskey1").setNumber(1);
}{for(var i = 0, len = gdjs.Level2Code.GDmonetaObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDmonetaObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Blip2.wav", 7, false, 80, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("moneta2"), gdjs.Level2Code.GDmoneta2Objects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDmoneta2Objects2Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_1.val ) {
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("haskey2")) != 1;
}}
gdjs.Level2Code.conditionTrue_1.val = true && gdjs.Level2Code.condition0IsTrue_1.val && gdjs.Level2Code.condition1IsTrue_1.val;
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDmoneta2Objects2 */
{runtimeScene.getVariables().get("haskey2").setNumber(1);
}{for(var i = 0, len = gdjs.Level2Code.GDmoneta2Objects2.length ;i < len;++i) {
    gdjs.Level2Code.GDmoneta2Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Blip2.wav", 7, false, 80, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("moneta3"), gdjs.Level2Code.GDmoneta3Objects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects2Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDmoneta3Objects2Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_1.val ) {
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("haskey3")) != 1;
}}
gdjs.Level2Code.conditionTrue_1.val = true && gdjs.Level2Code.condition0IsTrue_1.val && gdjs.Level2Code.condition1IsTrue_1.val;
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDmoneta3Objects2 */
{runtimeScene.getVariables().get("haskey3").setNumber(1);
}{for(var i = 0, len = gdjs.Level2Code.GDmoneta3Objects2.length ;i < len;++i) {
    gdjs.Level2Code.GDmoneta3Objects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Blip2.wav", 7, false, 80, 1);
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("dver"), gdjs.Level2Code.GDdverObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
gdjs.Level2Code.condition2IsTrue_1.val = false;
gdjs.Level2Code.condition3IsTrue_1.val = false;
{
gdjs.Level2Code.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("haskey1")) == 1;
}if ( gdjs.Level2Code.condition0IsTrue_1.val ) {
{
gdjs.Level2Code.condition1IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("haskey2")) == 1;
}if ( gdjs.Level2Code.condition1IsTrue_1.val ) {
{
gdjs.Level2Code.condition2IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("haskey3")) == 1;
}if ( gdjs.Level2Code.condition2IsTrue_1.val ) {
{
gdjs.Level2Code.condition3IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDPlayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDdverObjects1Objects, false, runtimeScene, false);
}}
}
}
gdjs.Level2Code.conditionTrue_1.val = true && gdjs.Level2Code.condition0IsTrue_1.val && gdjs.Level2Code.condition1IsTrue_1.val && gdjs.Level2Code.condition2IsTrue_1.val && gdjs.Level2Code.condition3IsTrue_1.val;
}
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16544924);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Level Complete.wav", 7, false, 80, 1);
}
{ //Subevents
gdjs.Level2Code.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.Level2Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.Level2Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].playAnimation();
}
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimationName("Walk");
}
}}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        gdjs.Level2Code.condition1IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimationName("Idel");
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].flipX(true);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level2Code.GDPlayerObjects2);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level2Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level2Code.condition0IsTrue_0.val = true;
        gdjs.Level2Code.GDPlayerObjects2[k] = gdjs.Level2Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDPlayerObjects2.length = k;}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16550188);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDPlayerObjects2 */
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Jump3.ogg", 1, false, 40, 1);
}{for(var i = 0, len = gdjs.Level2Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDPlayerObjects2[i].setAnimationName("Idel");
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Level2Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


{
}

}


};gdjs.Level2Code.eventsList9 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").add(1);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16554060);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
}

}


};gdjs.Level2Code.eventsList10 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 0;
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16554660);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 50);
}{/* Unknown object - skipped. */}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 1;
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16555668);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}{/* Unknown object - skipped. */}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Mute")) == 2;
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition1IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16556556);
}
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("Mute").setNumber(0);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
}

}


};gdjs.Level2Code.eventsList11 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}
{ //Subevents
gdjs.Level2Code.eventsList9(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.Level2Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Level2Code.eventsList12 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(16558228);
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.Level2Code.userFunc0x91d928 = function(runtimeScene) {
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
gdjs.Level2Code.eventsList13 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Pause") > 0.3;
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "pause");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Pause");
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
}

}


};gdjs.Level2Code.eventsList14 = function(runtimeScene) {

{


gdjs.Level2Code.eventsList0(runtimeScene);
}


{


gdjs.Level2Code.eventsList2(runtimeScene);
}


{


gdjs.Level2Code.eventsList4(runtimeScene);
}


{


gdjs.Level2Code.eventsList6(runtimeScene);
}


{


gdjs.Level2Code.eventsList8(runtimeScene);
}


{


gdjs.Level2Code.eventsList11(runtimeScene);
}


{


gdjs.Level2Code.eventsList12(runtimeScene);
}


{


gdjs.Level2Code.userFunc0x91d928(runtimeScene);

}


{


gdjs.Level2Code.eventsList13(runtimeScene);
}


{


{
}

}


};

gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDPlayerObjects1.length = 0;
gdjs.Level2Code.GDPlayerObjects2.length = 0;
gdjs.Level2Code.GDPlayerObjects3.length = 0;
gdjs.Level2Code.GDPlayerObjects4.length = 0;
gdjs.Level2Code.GDplatformObjects1.length = 0;
gdjs.Level2Code.GDplatformObjects2.length = 0;
gdjs.Level2Code.GDplatformObjects3.length = 0;
gdjs.Level2Code.GDplatformObjects4.length = 0;
gdjs.Level2Code.GDblockObjects1.length = 0;
gdjs.Level2Code.GDblockObjects2.length = 0;
gdjs.Level2Code.GDblockObjects3.length = 0;
gdjs.Level2Code.GDblockObjects4.length = 0;
gdjs.Level2Code.GDmoonObjects1.length = 0;
gdjs.Level2Code.GDmoonObjects2.length = 0;
gdjs.Level2Code.GDmoonObjects3.length = 0;
gdjs.Level2Code.GDmoonObjects4.length = 0;
gdjs.Level2Code.GDplatform2Objects1.length = 0;
gdjs.Level2Code.GDplatform2Objects2.length = 0;
gdjs.Level2Code.GDplatform2Objects3.length = 0;
gdjs.Level2Code.GDplatform2Objects4.length = 0;
gdjs.Level2Code.GDplatform3Objects1.length = 0;
gdjs.Level2Code.GDplatform3Objects2.length = 0;
gdjs.Level2Code.GDplatform3Objects3.length = 0;
gdjs.Level2Code.GDplatform3Objects4.length = 0;
gdjs.Level2Code.GDstrela_95verhObjects1.length = 0;
gdjs.Level2Code.GDstrela_95verhObjects2.length = 0;
gdjs.Level2Code.GDstrela_95verhObjects3.length = 0;
gdjs.Level2Code.GDstrela_95verhObjects4.length = 0;
gdjs.Level2Code.GDstrela_95vnizObjects1.length = 0;
gdjs.Level2Code.GDstrela_95vnizObjects2.length = 0;
gdjs.Level2Code.GDstrela_95vnizObjects3.length = 0;
gdjs.Level2Code.GDstrela_95vnizObjects4.length = 0;
gdjs.Level2Code.GDgribObjects1.length = 0;
gdjs.Level2Code.GDgribObjects2.length = 0;
gdjs.Level2Code.GDgribObjects3.length = 0;
gdjs.Level2Code.GDgribObjects4.length = 0;
gdjs.Level2Code.GDtrava1Objects1.length = 0;
gdjs.Level2Code.GDtrava1Objects2.length = 0;
gdjs.Level2Code.GDtrava1Objects3.length = 0;
gdjs.Level2Code.GDtrava1Objects4.length = 0;
gdjs.Level2Code.GDtrava2Objects1.length = 0;
gdjs.Level2Code.GDtrava2Objects2.length = 0;
gdjs.Level2Code.GDtrava2Objects3.length = 0;
gdjs.Level2Code.GDtrava2Objects4.length = 0;
gdjs.Level2Code.GDneboObjects1.length = 0;
gdjs.Level2Code.GDneboObjects2.length = 0;
gdjs.Level2Code.GDneboObjects3.length = 0;
gdjs.Level2Code.GDneboObjects4.length = 0;
gdjs.Level2Code.GDtuchkaObjects1.length = 0;
gdjs.Level2Code.GDtuchkaObjects2.length = 0;
gdjs.Level2Code.GDtuchkaObjects3.length = 0;
gdjs.Level2Code.GDtuchkaObjects4.length = 0;
gdjs.Level2Code.GDmonetaObjects1.length = 0;
gdjs.Level2Code.GDmonetaObjects2.length = 0;
gdjs.Level2Code.GDmonetaObjects3.length = 0;
gdjs.Level2Code.GDmonetaObjects4.length = 0;
gdjs.Level2Code.GDmoneta2Objects1.length = 0;
gdjs.Level2Code.GDmoneta2Objects2.length = 0;
gdjs.Level2Code.GDmoneta2Objects3.length = 0;
gdjs.Level2Code.GDmoneta2Objects4.length = 0;
gdjs.Level2Code.GDmoneta3Objects1.length = 0;
gdjs.Level2Code.GDmoneta3Objects2.length = 0;
gdjs.Level2Code.GDmoneta3Objects3.length = 0;
gdjs.Level2Code.GDmoneta3Objects4.length = 0;
gdjs.Level2Code.GDdverObjects1.length = 0;
gdjs.Level2Code.GDdverObjects2.length = 0;
gdjs.Level2Code.GDdverObjects3.length = 0;
gdjs.Level2Code.GDdverObjects4.length = 0;
gdjs.Level2Code.GDstrela_95vpravoObjects1.length = 0;
gdjs.Level2Code.GDstrela_95vpravoObjects2.length = 0;
gdjs.Level2Code.GDstrela_95vpravoObjects3.length = 0;
gdjs.Level2Code.GDstrela_95vpravoObjects4.length = 0;
gdjs.Level2Code.GDsvetokObjects1.length = 0;
gdjs.Level2Code.GDsvetokObjects2.length = 0;
gdjs.Level2Code.GDsvetokObjects3.length = 0;
gdjs.Level2Code.GDsvetokObjects4.length = 0;
gdjs.Level2Code.GDsunObjects1.length = 0;
gdjs.Level2Code.GDsunObjects2.length = 0;
gdjs.Level2Code.GDsunObjects3.length = 0;
gdjs.Level2Code.GDsunObjects4.length = 0;
gdjs.Level2Code.GDkushachkaObjects1.length = 0;
gdjs.Level2Code.GDkushachkaObjects2.length = 0;
gdjs.Level2Code.GDkushachkaObjects3.length = 0;
gdjs.Level2Code.GDkushachkaObjects4.length = 0;

gdjs.Level2Code.eventsList14(runtimeScene);

return;

}

gdjs['Level2Code'] = gdjs.Level2Code;
