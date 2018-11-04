var arr = new Array();

function changeText(){
/*  var b = document.getElementById('filtrInput').value;
  var nameField = document.createElement('filtrInput');
  var br = document.createElement('br');
  var doc = document.createTextNode(b);
  nameField.appendChild(doc);
  nameField.appendChild(br);
  document.body.appendChild(nameField);*/


  var x = document.getElementById('filtrInput').value;
         var e =  document.createElement('d');
         e.className = "c1";
         var menudisplay = 0;
var button = document.createElement("button");
  var menu = document.createElement('d');
//  menu.className("menuclass");
  var ul = document.createElement('ul');
    var li = document.createElement('li');
    var del = document.createTextNode("Delete");
    var edt = document.createTextNode("Edit");
    var l = document.createElement('li');
    li.appendChild(del);
    ul.appendChild(li);
    li.onclick = function(){e.remove();};

    l.appendChild(edt);
    ul.appendChild(l);
    l.onclick = function()
    {
      document.getElementById("filtrInput").value=par.innerHTML;
     }
            menu.appendChild(ul);
            e.onclick = function ()
            {
              if(menudisplay==0)
                 menu.style.display='block';
              else
               menu.style.display='none';
                menudisplay= !menudisplay;
            }

  button.className = "dots";
  var par = document.createElement('p');
  par.className =  "pa";
  var y = document.createTextNode(x);
  par.appendChild(y);

              e.appendChild(par);
              e.appendChild(button);
              e.appendChild(menu);
              document.getElementById("d").appendChild(e);
              document.getElementById("filtrInput").value="";

}
