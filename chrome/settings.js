/*Настройки скрипта для GreaseMonkey*/
/*
Copyright Nikolay Avdeev aka NickKolok aka Николай Авдеев 2015
Copyright Dmitry Roshka aka Bookmist aka Дмитрий рошка 2016

Всем привет из снежного Воронежа! 

This file is part of CHAS-CORRECT.

    CHAS-CORRECT is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    CHAS-CORRECT is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Foobar.  If not, see <http://www.gnu.org/licenses/>.

  (Этот файл — часть CHAS-CORRECT.

   CHAS-CORRECT - свободная программа: вы можете перераспространять её и/или
   изменять её на условиях Стандартной общественной лицензии GNU в том виде,
   в каком она была опубликована Фондом свободного программного обеспечения;
   либо версии 3 лицензии, либо (по вашему выбору) любой более поздней
   версии.

   CHAS-CORRECT распространяется в надежде, что она будет полезной,
   но БЕЗО ВСЯКИХ ГАРАНТИЙ; даже без неявной гарантии ТОВАРНОГО ВИДА
   или ПРИГОДНОСТИ ДЛЯ ОПРЕДЕЛЕННЫХ ЦЕЛЕЙ. Подробнее см. в Стандартной
   общественной лицензии GNU.

   Вы должны были получить копию Стандартной общественной лицензии GNU
   вместе с этой программой. Если это не так, см.
   <http://www.gnu.org/licenses/>.)
*/

function showConfig(){
  //создаем окно
  var div = document.createElement('div');
  div.textContent = 'Hello, world!';
  div.style.border = '2px solid gray';
  //расположение по центру
  div.style.position='absolute';
  div.style.align = 'center';
  div.style.width = '800px';
  div.style.height = '800px';
  div.style.top = 0;
  div.style.right = 0;
  div.style.bottom = 0;
  div.style.left = 0;
  div.style.margin = 'auto';  
  //конец расположения по центру
  div.style.background = 'white';
  var tblDiv = document.createElement('div');
  tblDiv.style.overflow = 'auto';
  tblDiv.style.width = 700;
  tblDiv.style.height = 700;
  div.appendChild( tblDiv );
  var tblBody = document.createElement('table');
  tblBody.style.width = 600;
  tblBody.style.border = '1px solid gray';
  var tblRow = document.createElement('tr');
  tblBody.appendChild(tblRow);
  var tblCell = document.createElement('td');
  tblCell.style.border = '1px solid gray';
  tblCell.textContent = 'left cell';
  tblRow.appendChild(tblCell);
  tblCell = document.createElement('td');
  tblCell.style.border = '1px solid gray';
  tblCell.textContent = 'right cell';
  tblRow.appendChild(tblCell);
  
  tblDiv.appendChild( tblBody );
  //выводим настройки
  //приклеиваем окно к странице
  document.body.appendChild(div);
};

GM_registerMenuCommand('Показать настройки',showConfig);