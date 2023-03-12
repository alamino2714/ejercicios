//alert('Hola Yuniel1');


function X() {
  var x = Math.round(Math.random() * 10);
  return x;
}
function Y() {
  var y = Math.round(Math.random() * 10);
  return y;
}

function metodo(c) {
  console.log("Metodo C");
  alert(Y());
  alert(X());
}


function Calcula(operacion) { 
   
    var x1 = document.getElementById("id-inputX1");
    var op1 = document.getElementById("id-inputOP1");
    var y1 = document.getElementById("id-inputY1");
    var xy1 = document.getElementById("id-inputXY1");
    AsignarValor(x1, op1, y1, xy1, operacion);       
  
}

function AsignarValor(idx, idOp, idy, idxy, operacion) {
 
  if(operacion=="suma")
  {
    idOp.value="+";
    idx.value = X()*X(); 
    idy.value =Y()*Y();
  }

  if(operacion=="resta")
  {
    idOp.value="-";
    idx.value = X()*X(); 
    idy.value = Y()*Y();

    if(idx.value < idy.value)
    {
      var moment = idx.value;
      idx.value =  idy.value;
      idy.value = moment;
    }
  }

  if(operacion=="multiplica")
  {
    idOp.value="*";
    idx.value = X();
    idy.value =Y();
  }

  if(operacion=="divide")
  {
    idOp.value="/";
    
    idy.value = 0;
    var y = 0;
    while(y == 0)
    {
      y = Y();     
    }
    idy.value = y;
    idxy.value= X()*X();
    idx.value = idy.value * idxy.value;   
  }

   idxy.value = "";
   
}

function NuevoCalculo() {

  var x1 = document.getElementById("id-inputX1");
  var op1 = document.getElementById("id-inputOP1");
  var y1 = document.getElementById("id-inputY1");
  var xy1 = document.getElementById("id-inputXY1"); 
  
 
  if(op1.value =='+')
  {   
    if (parseInt(x1.value) + parseInt(y1.value) == parseInt(xy1.value)) 
    {         
      AdicionarCampos(true, x1, op1, y1, xy1);            
      AsignarValor(x1, op1, y1, xy1, 'suma');     
    }
    else
    {    
      AdicionarCampos(false, x1, op1, y1, xy1);    
      AsignarValor(x1, op1, y1, xy1, 'suma');   
    }  
  }

  if(op1.value =='*')
  {   
    if (parseInt(x1.value) * parseInt(y1.value) == parseInt(xy1.value)) 
    {         
      AdicionarCampos(true, x1, op1, y1, xy1);            
      AsignarValor(x1, op1, y1, xy1, 'multiplica');     
    }
    else
    {    
      AdicionarCampos(false, x1, op1, y1, xy1);    
      AsignarValor(x1, op1, y1, xy1, 'multiplica');   
    }  
  }

  if(op1.value =='-')
  {   
    if (parseInt(x1.value) - parseInt(y1.value) == parseInt(xy1.value)) 
    {         
      AdicionarCampos(true, x1, op1, y1, xy1);            
      AsignarValor(x1, op1, y1, xy1, 'resta');     
    }
    else
    {    
      AdicionarCampos(false, x1, op1, y1, xy1);    
      AsignarValor(x1, op1, y1, xy1, 'resta');   
    }  
  }

  if(op1.value =='/')
  {   
    if (parseInt(x1.value) / parseInt(y1.value) == parseInt(xy1.value)) 
    {  
             
      AdicionarCampos(true, x1, op1, y1, xy1);            
      AsignarValor(x1, op1, y1, xy1, 'divide');     
    }
    else
    {    
      AdicionarCampos(false, x1, op1, y1, xy1);    
      AsignarValor(x1, op1, y1, xy1, 'divide');   
    }  
  }

}

function AdicionarCampos(listo, x1p, op1p, y1p, xy1p) {

  
  var idSection = document.getElementById("id-section-suma2-1").parentNode;
  var iddivI = document.getElementById("id-section-suma2-1");

  var iddiv = document.createElement("div");
  var inputTextX = document.createElement("input");
  var inputTextOP = document.createElement("input");
  var inputTextY = document.createElement("input");
  var inputTextXY = document.createElement("input");

  inputTextX.type = "text";
  inputTextOP.type = "text";
  inputTextY.type = "text";
  inputTextXY.type = "text";
  

  inputTextY.className = "id-calculos";
  inputTextX.className = "id-calculos";
  inputTextOP.className = "id-calculador";
  inputTextXY.className = "id-resultados";
  

  inputTextX.value = x1p.value;
  inputTextOP.value = op1p.value;
  inputTextY.value = y1p.value;
  inputTextXY.value = xy1p.value;

  inputTextX.readOnly = true;
  inputTextOP.readOnly = true;
  inputTextY.readOnly = true;
  inputTextXY.readOnly = true;

  if (listo) {
    inputTextXY.style.backgroundColor = "green";
  }
  else {
     inputTextXY.style.backgroundColor = "red";
  }

  idSection.insertBefore(iddiv, iddivI);
  iddiv.appendChild(inputTextX);
  iddiv.appendChild(inputTextOP);
  iddiv.appendChild(inputTextY);
  iddiv.appendChild(inputTextXY);

 

}

function Resultado ()
{
  var Resultado = document.getElementsByClassName('id-resultados');
  alert(Resultado.length);
}


function valor() {

  var valor = document.getElementById('id-art-3');
  alert(valor.textContent);
  valor.textContent = "Articulo 2.1";
  valor.style.color = "red";

}

function Persona() {
  var x = document.getElementById('btnx');
  alert(_x.innerText);

}

function Calculo() {
  const _x = document.getElementById('btnx');
  const _y = document.getElementById('btny');
  const _xy = document.getElementById('btnxy');
  _xy.innerText = _x.ariaValueText + _y.ariaValueText;

}


function GenerarBasicos() {

  var i = 4;


  var miDiv = document.getElementById("idiv");
  const filas = document.createElement("tr"); // <div></div>
  filas.id = "idFila";
  miDiv.appendChild(filas);

  while (i > 0) {

    var t = 0;

    const tb = document.createElement("td");
    tb.id = "tb" + i.toString();

    filas.appendChild(tb);
    while (t < 20) {


      const hx = document.createElement("h2");
      hx.id = "hh" + i.toString() + t.toString();

      if (i == 1) {

        if (t == 0) {
          hx.innerText = "MULTIPLICA";
        } else {
          hx.innerText = "" + t.toString() + ")--->" + Math.round(Math.random() * 10) + " * " + Math.round(Math.random() * 10) + "     ";
        }

      } else if (i == 2) {


        if (t == 0) {
          hx.innerText = "SUMA";
        } else {
          hx.innerText = "" + t.toString() + ")--->" + Math.round(Math.random() * 50) + " + " + Math.round(Math.random() * 50) + "     ";
        }


      }
      else if (i == 3) {

        if (t == 0) {
          hx.innerText = "RESTA";
        } else {
          var r1 = Math.round(Math.random() * 100);
          var r2 = Math.round(Math.random() * 100);
          if (r1 > r2) {
            hx.innerText = "" + t.toString() + ")--->" + r1 + " - " + r2 + "     ";
          } else {
            hx.innerText = "" + t.toString() + ")--->" + r2 + " - " + r1 + "     ";
          }

        }


      }

      else if (i == 4) {

        if (t == 0) {
          hx.innerText = "DIVIDE";
        }
        else {

          var d1 = Math.round(Math.random() * 10);
          while (d1 == 0) {
            d1 = Math.round(Math.random() * 10);
          }

          var d2 = Math.round(Math.random() * 10);
          var d12 = d1 * d2;

          hx.innerText = "" + t.toString() + ")--->" + d12 + " / " + d1 + "     ";


        }


      }



      tb.appendChild(hx);
      t++;

    }


    i--;

  }

}
