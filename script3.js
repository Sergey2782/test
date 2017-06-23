// function addClass with 1sec delay - using setTimeout;


$(document).ready(function(){

	$(".btn").click(function(){

		addClassByClick()

	})

})

var divs = $(".test_one");
var index = -1;

function addClassByClick(){
	
  index = index + 1;

	if($(divs[index]).hasClass("test_one")) {

   		   $(divs[index]).addClass("test_two");

   	}

		setTimeout(addClassByClick, 1000);


	}

// -- The function enlarges the image to the specified time delay  - and reducing Image back

	$(".btn_one").click(function(){
			resizeImage()
		}) 
	

function resizeImage(){

	var i = document.images[0]; // можно обратиться по имнени файла
	var normalWidth = 640;

	if(i.width < normalWidth){

		i.width *= 1.1;
		i.height *=1.1;

		setTimeout(resizeImage, 300);
	}
}

$(".btn_two").click(function(){
			reduceImage()
		}) 

function reduceImage(){

	var i = document.images[0];
	var normalWidth = 200;

	if(i.width > normalWidth){

		i.width *= 0.9;
		i.height *=0.9;

		setTimeout(reduceImage, 300);
	}
}

	