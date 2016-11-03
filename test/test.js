QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test( "Exists GM_getValue", function( assert ) {
  GM_getValue('zzz','');
  assert.ok( 1 == "1", "Passed!!!" );
});

QUnit.test( "Exists GM_setValue", function( assert ) {
  GM_setValue('zzz','');
  assert.ok( 1 == "1", "Passed!!!" );
  GM_deleteValue('zzz');
});

QUnit.test( "Exists GM_deleteValue", function( assert ) {
  GM_deleteValue('zzz');
  assert.ok( 1 == "1", "Passed!!!" );
});

QUnit.test( "Exists GM_registerMenuCommand", function( assert ) {
  GM_registerMenuCommand('zzz',function(){});
  assert.ok( 1 == "1", "Passed!!!" );
});

QUnit.test( "test storageWrapper.getKey", function( assert ) {
  GM_deleteValue('zzz');
  assert.ok( storageWrapper.getKey('zzz','test string') === 'test string', "Passed!!!" );
});

QUnit.test( "test storageWrapper.setKey", function( assert ) {
  storageWrapper.setKey('zzz','test string')
  assert.ok( storageWrapper.getKey('zzz','default string') === 'test string', "Passed!!!" );
  GM_deleteValue('zzz');
});

QUnit.test( "test storageWrapper.getKey obj", function( assert ) {
  GM_deleteValue('zzz');
  assert.ok( storageWrapper.getKey('zzz',{str:'test string'}).str === 'test string', "Passed!!!" );
});

QUnit.test( "test storageWrapper.setKey obj", function( assert ) {
  storageWrapper.setKey('zzz',{str:'test string'})
  assert.ok( storageWrapper.getKey('zzz','default string').str === 'test string', "Passed!!!" );
  GM_deleteValue('zzz');
});

QUnit.test( "test forceTypo exists", function( assert ) {  
  assert.equal( typeof forceTypo, 'function', 'forceTypo is function' );
});
                                      /*
QUnit.test( "test actionArrayCopy", function( assert ) {  
  assert.equal( Array.isArray(actionArrayCopy), true, 'actionArrayCopy is array' );
  assert.equal( actionArrayCopy.length, 1029, 'actionArrayCopy fully created' );
});                                     */
//RegExp.prototype.toJSON = function (){return [this.source,this.flags]};
//RegExp.prototype.toString;

function saveActionArray(){
  storageWrapper.setKey('actionArrayCopy',actionArrayCopy);
};
/*
function loadActionArray2(){

  var actionArrayCopy2 = storageWrapper.getKey('actionArrayCopy','error',function(key,value){
    if (Array.isArray(value)){
      if (value.length===2) {
        return new RegExp(value[0],value[1]);
      }
    };
    return value;
  });
  return actionArrayCopy2;
};
*//*
function loadActionArray2(){
  var actionArrayCopy2 = storageWrapper.getKey('actionArrayCopy','error');
  var actionArrayCopy3=Array(actionArrayCopy2.length);
  actionArrayCopy2.forEach(function(item, i, arr){
    actionArrayCopy3[i]=Array(item.length);
    actionArrayCopy3[i][0] = new RegExp(actionArrayCopy2[i][0][0],actionArrayCopy2[i][0][1]);
    actionArrayCopy3[i][1] = item[1];
    actionArrayCopy3[i][2] = new RegExp(actionArrayCopy2[i][2][0],actionArrayCopy2[i][2][1]);
    if (!!item[3]) { actionArrayCopy3[i][3] = item[3];};
  });
  return actionArrayCopy3;
};  */
                    /*
function loadActionArray2(){
  var actionArrayCopy3 = storageWrapper.getKey('actionArrayCopy','error');
  actionArrayCopy3.forEach(function(item){
    item[0] = new RegExp(item[0][0],item[0][1]);
    item[2] = new RegExp(item[2][0],item[2][1]);
  });
  return actionArrayCopy3;
};
/*
function loadActionArray2(){
  var actionArrayCopy3 = storageWrapper.getKey('actionArrayCopy','error');
  actionArrayCopy3.forEach(function(item){
    item[0] = new RegExp(item[0].source,item[0].flags);
    item[2] = new RegExp(item[2].source,item[2].flags);
  });
  return actionArrayCopy3;
};*/

function debugLog(msg){
  var div = document.getElementById('chas-correct-log');
  div.innerHTML = div.innerHTML + '<br>' + msg;
};
              /*
QUnit.test( "test save actionArrayCopy to storage", function( assert ) {  
var oldb,olde,newb,newe,newm;
var actionArrayCopy3;

oldb = Date.now();
prepareActionArray();
olde = Date.now();
  storageWrapper.setKey('actionArrayCopy',actionArrayCopy,function(key,value){
    if (value instanceof RegExp) {
      return [value.source,value.flags];
    };
    return value;
  });
  assert.ok( storageWrapper.getKey('actionArrayCopy','error') !== 'error' , 'actionArrayCopy successfully saved' );
  newb = Date.now();
  actionArrayCopy3 = loadActionArray2();
  newe = Date.now();

  assert.equal( JSON.stringify( actionArrayCopy3), JSON.stringify( actionArrayCopy) , 'actionArrayCopy successfully saved and loaded' );
  assert.equal( Array.isArray(actionArrayCopy), true, 'actionArrayCopy is array' );
  assert.equal( actionArrayCopy.length, 1029, 'actionArrayCopy fully created' );
  assert.equal( Array.isArray(actionArrayCopy3), true, 'actionArrayCopy3 is array' );
  assert.equal( actionArrayCopy3.length, 1029, 'actionArrayCopy3 fully created' );
  assert.equal( typeof actionArrayCopy3[0][0], 'object','Array of regexps');
  assert.ok( actionArrayCopy3[0][0] instanceof RegExp,'Array of regexps');
  //debugLog(JSON.stringify( actionArrayCopy3));
  assert.ok( (olde-oldb)>(newe-newb), "New is faster!!! old:"+ (olde-oldb) + " new:" +(newe-newb) ); // +" load:"+(newm-newb)+ " parce:"+(newe-newm) );
  GM_deleteValue('actionArrayCopy');
});
/*          
QUnit.test( "test json regexp", function( assert ) {
  var x = new RegExp('text'); 
  assert.equal( JSON.parse(JSON.stringify(x)), x, 'success' );
});
*/

QUnit.test( "test showConfig", function( assert ) {
  showConfig();
  assert.ok( true, "Passed!!!" );
});
