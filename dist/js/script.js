
/*----preloader------------*/
$(document).ready(function(){
	setTimeout($('.preloader').fadeOut('slow'), 500);
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
