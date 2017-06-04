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
$(document).ready(function(){
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

//--------------------------------------------   
/* 
1. изменение класса по клику. 
2. добавление класса выбранным эелементам. ( порядок изменений  - элементы   с  1 - по  4)
3. добавление еще класса выбранным элементам. ( порядок изменений  - элементы   с  4 - по  1)
4. удаление классов у выбранных элементов.  ( порядок изменений - элементы   с  1 - по  4)
5. изменения по таймеру.
*/
$(document).ready(function(){
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


//--------------------------------------

/* ----  задание аналогичное предыдущему - еще добавлен один цикл изменений  ------ */
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
















