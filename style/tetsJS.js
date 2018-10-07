$(function(){

      $(window).scroll(function() {
      //появление логотипа на верхней панели
          if ($(this).scrollTop() >= 170) {
              $('div.logo').addClass('top');
          }
          else {
              $('div.logo').removeClass('top');
          }

      //подчеркивание в меню навигации в зависимости от прокрутки
      if (($(this).scrollTop() < $('div.about').position().top - 65)) {
        $('#n1').removeClass('current');
        $('#n2').removeClass('current');
        $('#n3').removeClass('current');
        $('#n4').removeClass('current');
      }
      else if (($(this).scrollTop() >= $('div.about').position().top - 65) && ($(this).scrollTop() < $('div.objects').position().top - 65)) {
        $('#n1').addClass('current');
        $('#n2').removeClass('current');
        $('#n3').removeClass('current');
        $('#n4').removeClass('current');
      }
      else if (($(this).scrollTop() >= $('div.objects').position().top - 65) && ($(this).scrollTop() < $('div.employees').position().top - 65)) {
        $('#n1').removeClass('current');
        $('#n2').addClass('current');
        $('#n3').removeClass('current');
        $('#n4').removeClass('current');
      }
      else if (($(this).scrollTop() >= $('div.employees').position().top - 65) && ($(this).scrollTop() < $('div.contacts').position().top - 65) && ($(window).scrollTop()+$(window).height() < $(document).height())) {
        $('#n1').removeClass('current');
        $('#n2').removeClass('current');
        $('#n3').addClass('current');
        $('#n4').removeClass('current');
      }
      else if (($(this).scrollTop() >= $('div.contacts').position().top - 65) || ($(window).scrollTop()+$(window).height() >= $(document).height())) {
        $('#n1').removeClass('current');
        $('#n2').removeClass('current');
        $('#n3').removeClass('current');
        $('#n4').addClass('current');
      }
      });
  });

  
  //адаптация под размер окна браузера
  $(function(){
    var minWidth1 = 1200;
    var minWidth2 = 1000;
      $(window).resize(function() {
          if ($(this).width() <= minWidth2) {
        $('p.txt_left').removeClass('squeeze1');
              $('div.img_right').removeClass('ext1');
              $('p.txt_left').addClass('squeeze2');
        $('div.img_right').addClass('ext2');

        $('p.txt_width').addClass('squeeze');
        $('h1.txt_width').addClass('squeeze');
          }
          else if ($(this).width() <= minWidth1) {
        $('p.txt_left').removeClass('squeeze2');
              $('div.img_right').removeClass('ext2');
              $('p.txt_left').addClass('squeeze1');
        $('div.img_right').addClass('ext1');

        $('p.txt_width').addClass('squeeze');
        $('h1.txt_width').addClass('squeeze');
          }
      else  {
        $('p.txt_left').removeClass('squeeze2');
              $('div.img_right').removeClass('ext2');
              $('p.txt_left').removeClass('squeeze1');
        $('div.img_right').removeClass('ext1');

        $('p.txt_width').removeClass('squeeze');
        $('h1.txt_width').removeClass('squeeze');
          }

      if ($(this).width() <= 1100) {
        $('.projects div').addClass('squeeze');
		$('.projects_names div').addClass('squeeze');
        $('div.projects_back').addClass('squeeze');
		
          }
      else  {
        $('.projects div').removeClass('squeeze');
		$('.projects_names div').removeClass('squeeze');
        $('div.projects_back').removeClass('squeeze');
      }		
      });
  });

  $(function(){
    var minWidth1 = 1200;
    var minWidth2 = 1000;
      $(window).load(function() {
          if ($(this).width() <= minWidth2) {
        $('p.txt_left').removeClass('squeeze1');
              $('div.img_right').removeClass('ext1');
              $('p.txt_left').addClass('squeeze2');
        $('div.img_right').addClass('ext2');

        $('p.txt_width').addClass('squeeze');
        $('h1.txt_width').addClass('squeeze');
          }
          else if ($(this).width() <= minWidth1) {
        $('p.txt_left').removeClass('squeeze2');
              $('div.img_right').removeClass('ext2');
              $('p.txt_left').addClass('squeeze1');
        $('div.img_right').addClass('ext1');

        $('p.txt_width').addClass('squeeze');
        $('h1.txt_width').addClass('squeeze');
          }
      else  {
        $('p.txt_left').removeClass('squeeze2');
              $('div.img_right').removeClass('ext2');
              $('p.txt_left').removeClass('squeeze1');
        $('div.img_right').removeClass('ext1');

        $('p.txt_width').removeClass('squeeze');
        $('h1.txt_width').removeClass('squeeze');
          }

      if ($(this).width() <= 1100) {
        $('.projects div').addClass('squeeze');
		$('.projects_names div').addClass('squeeze');
        $('div.projects_back').addClass('squeeze');
          }
      else  {
        $('.projects div').removeClass('squeeze');
		$('.projects_names div').removeClass('squeeze');
        $('div.projects_back').removeClass('squeeze');
      }	
      });
  });

  $(function() {
  
  	$('div.logo').click(function() {
	if ($(window).scrollTop() >= 170) {
      $("html, body").animate({
       scrollTop: "0px"
      }, {
       duration: 300,
       easing: "swing"
      });
      return false;
	}
    });
	
  
    $("#n1").click(function() {
      $("html, body").animate({
       scrollTop: ($('div.about').position().top - 64) + "px"
      }, {
       duration: 300,
       easing: "swing"
      });
      return false;
    });

    $("#n2").click(function() {
        $("html, body").animate({
           scrollTop: ($('div.objects').position().top - 64) + "px"
        }, {
           duration: 300,
           easing: "swing"
        });
        return false;
     });
    
    $("#n3").click(function() {
        $("html, body").animate({
           scrollTop: ($('div.employees').position().top - 64) + "px"
        }, {
           duration: 300,
           easing: "swing"
        });
        return false;
     });
    
    $("#n4").click(function() {
        $("html, body").animate({
           scrollTop: ($('div.contacts').position().top - 64) + "px"
        }, {
           duration: 300,
           easing: "swing"
        });
        return false;
     });

});