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