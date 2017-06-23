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

*/