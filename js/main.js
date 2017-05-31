 var target = 0;   

$(document).ready(function () { 
   
    var $botones = $(".control");
    var $anterior = $(".previous");
    var $siguiente = $(".next");
    
    $botones.click(cambiarImagen);
    $anterior.click(anteriorImagen);
    $siguiente.click(siguienteImagen);
})

function cambiarImagen() {
    target = (event.currentTarget.dataset.target);         
    mostarImagen(target);       
}  

var mostarImagen = function (target) {
	var lastSlide = $("div.active");
	var slide = $("div[data-slide='" + target + "']");
	lastSlide.removeClass("active");
	slide.addClass("active");
};
var anteriorImagen = function (e) {
	e.preventDefault();
	target = target - 1;
	target = (target < 0) ? 3 : target;
	mostarImagen(target);
	console.log(target);
};

var siguienteImagen = function (e) {
	e.preventDefault();
	target = target + 1;
	target = (target > 3) ? 0 : target;
	mostarImagen(target);
	console.log(target);
};
console.log(target);