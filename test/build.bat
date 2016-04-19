set name=Chas-Correct-test
set filename=build\%name%.user.js
set deploypath=c:\Users\roshka.BANK\AppData\Roaming\Mozilla\Firefox\Profiles\fuayxrq8.default\gm_scripts\Chas-Correct-test-1\
type ..\gm\userscript.meta|findstr /i /v /C:"/UserScript=="|findstr /i /v /C:"name"> %filename%
echo // @require	file:///D:\github\chas-correct\test\qunit-1.23.1.js>> %filename%
echo // @grant	GM_deleteValue>> %filename%
echo // @name	Chas-Correct-test>> %filename%
echo // @include */Chas-Correct-test.html*
echo // ==/UserScript==>> %filename%
type ..\gm\apiwrapper.js>> %filename%

type ..\chrome\dictionary.js>> %filename%
type ..\chrome\prepareDictionary.js>> %filename%

type test.js>> %filename%

type ..\chrome\content.js>> %filename%


copy %filename% "%deploypath%%name%.user.js"