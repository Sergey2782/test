/*
1. change class name on click
2. for some elements change class name by click
3. change class name of element after some time, different times for each element
----
- on ready
- bind click on body
- start timer with setInterval
	- change style of 1st element
	- change style of 2nd element
	- change style of 3thd element
	...
----------------|---------------|----------------|---------------|
			    1- change 1st	2-change 2nd      
*/
/*$(document).ready(function(){
	var nIntervId;
	$(".start").click(function(){
		nIntervId = setInterval(changeStyles, 500)
	});
	var n=0; //0..9
	var prev_index=-1;  // 0..4
	var divs=$(".test div");

	function changeStyles() {

		
	
		if($(divs[prev_index]).hasClass("test_one")) {


			$(divs[prev_index]).removeClass("test_one");
		}
		else{
			prev_index = prev_index+1;
			$(divs[prev_index]).addClass("test_one");
		}
		
		n = n + 1;
		if (n == divs.length * 2)
	      	clearInterval(nIntervId);	



	}
	
	
});

*/
//
/*
$(document).ready(function(){
  
  $(".start").click(function(){
     setInterval("console.log(2)", 500)
  });
  
  function changeStyles() {
    console.log(1)
  }
  
});
*/

//--------------------------------------------   
/* 
1. изменение класса по клику. 
2. добавление класса выбранным эелементам. ( порядок изменений  - элементы   с  1 - по  4)
3. добавление еще класса выбранным элементам. ( порядок изменений  - элементы   с  4 - по  1)
4. удаление классов у выбранных элементов.  ( порядок изменений - элементы   с  1 - по  4)
5. изменения по таймеру.
*/
/*$(document).ready(function(){
	var go;
	$(".idiot").click(function(){
		go = setInterval(toggleStyles, 500)
	});

  var prev_index = -1;  //0..4
  var divs = $(".test_test");
  var n = divs.length*2;
  var y = divs.length - divs.length*3 - 1;
  var m = 0;

  function toggleStyles() {

   	prev_index = prev_index + 1;
   	if($(divs[prev_index]).hasClass("test_test")) {

   		$(divs[prev_index]).addClass("test_test1");
   	}

    n = n - 1;
    if($(divs[n]).hasClass("test_test1")) {

   		$(divs[n]).addClass("test_five");
   	}
   	
    y = y + 1;
    if($(divs[y]).hasClass("test_test1")) {

      $(divs[y]).removeClass("test_test1 test_five");
    }

    m = m + 1;
    if (m == divs.length*3)

          {clearInterval(go);
      }
  }

});
*/

//--------------------------------------

/* ----  задание аналогичное предыдущему - еще добавлен один цикл изменений  ------ */

/*
1. установить стили1 с 1..N через интеврал
  1.1 init
  1.2 do
  1.3 increment
  1.4 compare && continue
2. установить стиль2 с 1..N
3. удалить стили1 стиль2 с 1..N
*/
/*var divs = $(".test_test");
// do something with each element of array throw interval
function circle_by_items(func_item, onend){
  // 1.1 init
  var i = 0
  var interval = setInterval(function(){
    // item = ...
    var item = divs[i]

    // 1.2 do
    func_item(item)

    // 1.3 increment
    i++

    // 1.4 compare && continue
    if (i>=divs.length) {
      clearInterval(interval)
      onend()
    }
  }, 1000)
}

// 1. установить стили1 с 1..N через интеврал
function step1(){
  circle_by_items(function(item){
      $(item).addClass("test_four")
    },
    step2
  )
}

// 2. установить стиль2 с 1..N
function step2(){
  circle_by_items(function(item){
      $(item).addClass("test_five")
    },
    step3
  )
}

//3. удалить стили1 стиль2 с 1..N
function step3(){
  circle_by_items(function(item){
      $(item).removeClass("test_four test_five")
    },
    function(){
      console.log("done!")
    }
  )
}

step1()

/*

??? установка удаления стиля через интервал

$(".test").click(function(){

  $(this).addClass("class1")
})


var obj = {
  func: function(){
    // this == obj
  }
}




- while/for {
  console.log(2)
}
- setInterval("console.log(2)", 123)
-   function my_cirle(){
      console.log(2)
      my_cirle()
    }
    my_cirle() // start

-  function my_cirle(){ // == setInterval
      console.log(2)
      setTimeout(my_cirle, 123)
    }
    my_cirle() // start
- $.each


$(document).ready(function(){
	var doDo;

	$(".start_three").click(function() {
		doDo = setInterval(chStyles, 500)
	});

   var divs=$(".test_three");
   var previously_index = -1;
   var x = divs.length - divs.length*2 - 1;
   var m = divs.length - divs.length*3 - 1;
   var a = divs.length - divs.length*4 - 1;


   function chStyles() {
 
   	  previously_index = previously_index + 1;
   	  if($(divs[previously_index]).hasClass("test_three")) {

   		   $(divs[previously_index]).addClass("test_four");
   	}

   	  x = x + 1;
      if($(divs[x]).hasClass("test_four")) {

   		   $(divs[x]).addClass("test_five");
   	}

      m = m + 1;
      if($(divs[m]).hasClass("test_five")) {

     		  $(divs[m]).removeClass("test_five");
   	}

      a = a + 1;
      if($(divs[a]).hasClass("test_four")) {

   		    $(divs[a]).addClass("test_six"); // addClass  - не срабатывает - как правильно оформить?
   	}


      else if (a == divs.length)   //для чего вот этот блок?
    
           clearInterval(doDo);	// для чего и как правильно оформить?
   }
      

});



/* ----  задание аналогичное предыдущему - еще добавлен один цикл изменений  ------ */
/*$(document).ready(function(){
  var doDo;

  $(".start_three").click(function() {
    doDo = setInterval(chStyles, 500)
  });

  var divs=$(".test_three");
  var x = 0;


  function chStyles() {
 
     for(var previously_index = 0 ; previously_index < divs.length ; previously_index ++) {

        if($(divs[previously_index]).hasClass("test_four")) {

           $(divs[previously_index]).removeClass("test_four");
    }
   
        else{
            previously_index = previously_index-1;
            $(divs[previously_index]).addClass("test_four");
    }
      /*x = x + 1;
      if($(divs[x]).hasClass("test_four")) {

         $(divs[x]).addClass("test_five");
    } */
/*}

 /*     if (x == divs.length*2)   //для чего вот этот блок?
    
           clearInterval(doDo); // для чего и как правильно оформить?
   }
      

});*/


$(document).ready(function(){




  $('.start_three').click(function(){
       setInterval(chStyles, 500)
  });
   

   var divs
   function chStyles(){

   }







  })











