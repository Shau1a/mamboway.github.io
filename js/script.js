
/*----preloader------------*/
$(document).ready(function(){
	$('.preloader').fadeOut('slow');
})



/*------Sticky nav && icon to top --all pages------*/

$(function () {
	createSticky ($("#nav"));
})


function createSticky (sticky) {
	if (sticky) {
		var position = sticky.offset().top, // переменная = верхняя граница элемента
			win = $(window);

		win.on("scroll", function(){
			win.scrollTop() >= position ? 
			sticky.addClass("sticky-nav") && $('.submenu').addClass("sbm-step-2") && $("#to-top").addClass("top-active")
			: sticky.removeClass("sticky-nav") && $('.submenu').removeClass("sbm-step-2") && $("#to-top").removeClass("top-active");
		});
	}
}

/*-----------------------------*/



/* ------------------ menu icon 'burger' ----- all pages------------*/

var menuBurger = document.getElementById("menu-icon");
menuBurger.onclick = function (event) {
	event.preventDefault();
	
	var nav = document.getElementById("nav-background");
	var shadowHeader = document.getElementById("dark");
	
	if (nav.className === "topnav") {
		nav.className += " responsive";
		shadowHeader.classList.add('dark');
		
	} 

	else{
		nav.className = "topnav";
		shadowHeader.classList.remove('dark');
	}
}

/*-----------------------------*/



/*---------hide and show schedule------about and price pages----*/

$(document).ready(function() {
	$('.st-weekend').hide();
});  // прячет блоки выходного дня сразу после загрузки страницы

$(function(){
    $('#weekend').click(function(){
        $('#weekdays').removeClass('ts-active');
        if (!$('#weekend').hasClass('ts-active')) {
        	$('#weekend').addClass('ts-active');
	        $('.st-weekdays').slideToggle(600);
	        $('.st-weekend').fadeIn(1300);
         }}); 
    $('#weekdays').click(function(){
    	if (!$('#weekdays').hasClass('ts-active')) {
    		$('#weekend').removeClass('ts-active');
	        $('#weekdays').addClass('ts-active');
	        $('.st-weekend').slideToggle(1000);
	        $('.st-weekdays').slideToggle(1000);
     }});
});

/*-----------------------------*/



/*--------------page 'teachers' photo-description animation---------------*/

$(function(){
	$('.teacherPhoto').hover(function(){
		$(this).find('.descript').fadeToggle('slow');
	})
})

/*-----------------------------*/


/*------------ slider - galley page ---------------*/

var slides = document.querySelectorAll('#gallerySlides .gallery-slider__item');//с помощью querySelectorAll получаем все слайды из контейнера
var currentSlide = 0;//создаем переменную для получения текущего слайда.
var slideInterval = setInterval(nextSlide,2000); //задаем интервал в две секунды для следующего слайда (2000ms).


	function nextSlide() {
	 	goToSlide(currentSlide+1);
	}
	function previousSlide() {
		goToSlide(currentSlide-1);
	}

	function goToSlide(n) {
	    slides[currentSlide].className = 'gallery-slider__item'; //меняем класс для текущего слайда, чтобы спрятать его. Свойство transition автоматически обрабатывает плавное затухание.
	    currentSlide = (n+slides.length)%slides.length; //добавляем класс к текущему слайду. Мы используем оператор % на случай, если это был последний слайд, чтобы вернуться к первому (работает корректно только с нечетным кол-ом слайдов)
	    slides[currentSlide].className = 'gallery-slider__item showing'; //После получения индекса слайда мы меняем класс и показываем новый. И опять прозрачность обрабатывается свойством transition.
	}

// навигация для сладера
var playing = true;
var pauseButton = document.getElementById('gallerySlides');
var navText = document.getElementById('stop-play-text');
	
	function pauseSlideshow() {
	    playing = false;
	    clearInterval(slideInterval);
	    navText.innerHTML = '<i class="fas fa-play"></i>';
	}

	function playSlideshow() {
	    playing = true;
	    slideInterval = setInterval(nextSlide,3000);
	    navText.innerHTML = '<i class="fas fa-grip-lines-vertical"></i>';
	}

	pauseButton.onclick = function() {
		    if(playing) {
		    pauseSlideshow();
		  } else {
		    playSlideshow();
		  }
};

	
var next = document.getElementById('nav-next');
var previous = document.getElementById('nav-prev');
 
next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};


/*------------ end of slider ----------------*/


// галерея - выведение картинок на экран над модальным окном

function showHideImage(pic) {
	if (document.getElementById('darkLayer') == null || undefined) {
	var darkLayer = document.createElement('div'); // слой затемнения
                darkLayer.id = 'shadow'; // id чтобы подхватить стиль
                document.body.appendChild(darkLayer); // включаем затемнение

 
 	var modalPic = pic.cloneNode(true);
 				document.body.appendChild(modalPic);
 				modalPic.style.display = 'block'; // "включаем" его
 				modalPic.classList.add('big-scale');
 	};

    darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет

    	modalPic.classList.add('hidden');
    	darkLayer.classList.add('hidden');
        setTimeout(
    		function() {
    		document.body.removeChild(darkLayer); // удаляем затемнение
        	document.body.removeChild(modalPic); 
        	return false;
        }, 600
    		);

    };
    modalPic.onclick = function () {  // при клике на слой затемнения все исчезнет

    	modalPic.classList.add('hidden');
    	darkLayer.classList.add('hidden');
   	setTimeout(
    		function() {
    		document.body.removeChild(darkLayer); // удаляем затемнение
        	document.body.removeChild(modalPic); 
        	return false;
        }, 600
    		);
       
    };
}


