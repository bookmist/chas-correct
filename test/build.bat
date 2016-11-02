@Echo Off
rem ����, �� �������� ����� ����� ������� ���� ������� � ����� ����������� ��� ���� � �����
Set outfolder=%appdata%\Mozilla\Firefox
rem ���� � ini �����, �� �������� ����� ��������� �������� ����� �������
Set pathini=%appdata%\Mozilla\Firefox\profiles.ini
rem ������ �������� ����� ������� �� ini �����
For /f "tokens=2 delims==" %%i In ('FindStr /b "Path=" "%pathini%"') Do Set fPath=%%i
rem �������� ������ ���� ����� ������� � ������ � ��� ������ ���� �� ��������
Set fPath=%outfolder%\%fPath:/=\%
Echo %fPath%
rem ��������� ������� ����� �������, � ���� � ���, �� �������
If Not Exist "%fPath%" goto :exit

set name=Chas-Correct-test
set filename=build\%name%.user.js
set deploypath=%fPath%\gm_scripts\Chas-Correct-test-1\
type ..\gm\userscript.meta|findstr /i /v /C:"/UserScript=="|findstr /i /v /C:"name"> %filename%
echo // @require	file:///D:\github\chas-correct\test\qunit-1.23.1.js>> %filename%
echo // @grant	GM_deleteValue>> %filename%
echo // @name	Chas-Correct-test>> %filename%
echo // ==/UserScript==>> %filename%
type ..\gm\apiwrapper.js>> %filename%

type ..\chrome\dictionary.js>> %filename%
type ..\chrome\prepareDictionary.js>> %filename%

type test.js>> %filename%

type ..\chrome\content.js>> %filename%
type ..\chrome\settings.js>> %filename%


copy %filename% "%deploypath%%name%.user.js"

:exit
