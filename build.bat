set name=Chas-Correct
set filename=bin\%name%.user.js
set deploypath=c:\Users\roshka.BANK\AppData\Roaming\Mozilla\Firefox\Profiles\fuayxrq8.default\gm_scripts\Chas-Correct\
type gm\userscript.meta> %filename%
type gm\apiwrapper.js>> %filename%
type chrome\dictionary.js>> %filename%
type chrome\prepareDictionary.js>> %filename%
type chrome\content.js>> %filename%

copy %filename% "%deploypath%%name%.user.js"
 