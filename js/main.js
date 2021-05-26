var btn = document.querySelector('#btn');
btn.onclick = function () {
	
document.querySelector('#h1').classList.add('header1_color');
}


	$(window).scroll(function() {
	    $('.content1').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});

var btn2 = document.querySelector('#btn2')
btn2.onclick = function(){

	document.querySelector('#btn2').classList.add('zoomIn')
}
	
	$(window).scroll(function() {
	    $('.future').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});