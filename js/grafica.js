// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature

//var srtActual = window.location.hostname;
//alert(srtActual);



var chart;
$(document).ready(function () {
  

    console.log('Alamino Alaminador');
    console.log(window.location.pathname);     
    let url = window.location.pathname;
    
    if(url.includes('layout.html'))    {    
      cargarPagina();        
      $('#id-area-izquierda-art').append(Tabla2());        
      Grafica2 (); 
      $('#id-art-1').append(Tabla1());  
      Grafica1 (); 
    }

    else{

      cargarPagina1();
       Botones();
       Textos();
       MiFormulario();  
       Grafica1 ();   
       Grafica2 ();
       printNumbers();
     }
   
});


function Tabla2() {

  console.log('t1');     
  var tabla2 = '<figure class="highcharts-figure">  <div id="container2"> <p class="highcharts-description"> G2 </p> </div>  </figure> ';
  console.log('t2'); 
  return tabla2;

}
function Tabla1() {

  console.log('t1');     
  var tabla2 = '<figure class="highcharts-figure">  <div id="container1"> <p class="highcharts-description"> G2 </p> </div>  </figure> ';
  console.log('t2'); 
  return tabla2;

}



function Grafica1 () { 

    var datos1 = [];
    var datos2 = [];
    var datos3 = [];

   // LlenarDatos(datos1,datos2);
   DataArreglo(datos1);
   DataArreglo(datos2);
   DataArreglo(datos3);

    Highcharts.chart('container1', {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Monthly Average Temperature'
        },
        subtitle: {
          text: 'Source: ' +
            '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
            'target="_blank">Wikipedia.com</a>'
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          title: {
            text: 'Temperature (°C)'
          }
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true
            },
            enableMouseTracking: true
          }
        },
        series: [{
            name: 'C',
           // data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
            //  22.0, 17.8
            //]
            data: datos3
          },
          {
          name: 'A',
         // data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
          //  22.0, 17.8
          //]
          data: datos2
        },
         {
          name: 'B',
         // data: [-2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
        //    2.0, -0.9
         // ]
         data: datos1
        }]
      });
 }

 function Grafica2 () { 

    var datos1 = [];
    var datos2 = [];
    LlenarDatos(datos1,datos2);
    chart = new Highcharts.Chart('container2', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Monthly Average Temperature'
      },
      subtitle: {
        text: 'Source: ' +
          '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
          'target="_blank">Wikipedia.com</a>'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: {
          text: 'Temperature (°C)'
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: true
        }
      },
      series: [{
        name: 'Reggane',
       // data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
        //  22.0, 17.8
        //]
        data: datos2
      }, {
        name: 'Tallinn',
       // data: [-2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
      //    2.0, -0.9
       // ]
       data: datos1
      }]
    });
 }


function Botones()
{
  var parrafo = $('#micontenido1 p');

  $('.btn-primary').click(function () {   
    parrafo.addClass('display-4');
  });

  $('.btn-danger').click(function () {    
    parrafo.removeClass('display-4');    
  });

  $('.btn-warning').click(function () {    
    parrafo.toggleClass('display-5');    
  });

}

function Textos()
{
    var input1  = $('#nombre');
    var input2 = $('#nombre2');

    input1.keyup(function () { 
       
        console.log(input1.val());
         
        input2.html(input1.val());
        
        if (input1.val()==="") {
            input2.html('Espero...');
        }

    });
}

function MiFormulario()
{
 
    $('#formulario').submit(function (e) { 
        e.preventDefault();
       
       console.log( $('#nombre3').val());        
    });


}

function LlenarDatos (datos1, datos2) {

    
    datos1.splice(0, datos1.lenght)
    datos2.splice(0, datos1.lenght)
    let i = 0;
    while (i<12) {        
        datos1.push(Math.round( Math.random()*100));
        datos2.push(Math.round( Math.random()*100));
        i++;
    }
  
  }


  function renderPorOrigen(matriz){

    Highcharts.chart('container', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'UEFA CL top scorers by season'
      },
      xAxis: {
        categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17']
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Goals'
        }
      },
      legend: {
        reversed: true
      },
      plotOptions: {
        series: {
          stacking: 'normal',
          dataLabels: {
            enabled: true
          }
        }
      },
      series: [{
        name: 'Cristiano Ronaldo',
        data: [4, 4, 6, 15, 12]
      }, {
        name: 'Lionel Messi',
        data: [5, 3, 12, 6, 11]
      }, {
        name: 'Robert Lewandowski',
        data: [5, 15, 8, 5, 8]
      }]
    });
    }



  function DataArreglo (datos) {
  
    datos.splice(0, datos.lenght);
    let i = 0;
   while (i<12) {        
        datos.push(Math.round( Math.random()*100));
        i++;
    }
  
  }



  function printNumbers() {
	for (let i = 0; i < 10; i++) {
		setTimeout(
      function printer() {
	      console.log(i);
	    },
			100 * i
		);
	}

}

function cargarPagina() {   
 
  $("<link rel='stylesheet' href='/ccs/graficos.css'>").appendTo("head");      
  $("<link rel='stylesheet' href='/ccs/bootstrap.min.css' type='text/css'>").appendTo("head");
  $("<link rel='stylesheet' href='/ccs/estilobase.css' type='text/css'>").appendTo("head"); 
  $('<script />', { type : 'text/javascript', src : "/js/metodos.js"}).appendTo('head');   
  $('<script />', { type : 'text/javascript', src : "/js/highcharts/highcharts.js"}).appendTo('head');   
  $('<script />', { type : 'text/javascript', src : "/js/highcharts/exporting.js"}).appendTo('head'); 
  $('<script />', { type : 'text/javascript', src : "/js/highcharts/export-data.js"}).appendTo('head'); 
  $('<script />', { type : 'text/javascript', src : "/js/highcharts/accessibility.js"}).appendTo('head');
   

}
function cargarPagina1() {   
     
  $("<link rel='stylesheet' href='ccs/graficos.css'>").appendTo("head");    
  $("<link rel='stylesheet' href='ccs/estilo.css' type='text/css'>").appendTo("head");   
  $("<link rel='stylesheet' href='ccs/bootstrap.min.css' type='text/css'>").appendTo("head");
  $('<script />', { type : 'text/javascript', src : "/js/metodos.js"}).appendTo('head');   
  $('<script />', { type : 'text/javascript', src : "js/highcharts/highcharts.js"}).appendTo('head');   
  $('<script />', { type : 'text/javascript', src : "js/highcharts/exporting.js"}).appendTo('head'); 
  $('<script />', { type : 'text/javascript', src : "js/highcharts/export-data.js"}).appendTo('head'); 
  $('<script />', { type : 'text/javascript', src : "js/highcharts/accessibility.js"}).appendTo('head');  
  
}


