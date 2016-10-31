$(document).ready(function(){

  $('.select-box input').click(function(){

    var thisinput = $(this);
    var thisul = $(this).parent().find('.select-ul');

    if( thisul.css('display') == 'none' ){

      if( thisul.height() > 200 ){
        thisul.css({ height: '200'+'px', 'overflow-y': 'scroll' })
      };
      thisul.fadeIn('100');
      thisul.hover(function(){},function(){thisul.fadeOut('100');})
      thisul.find('.select-li').click(function(){
        thisinput.val($(this).text());
        thisul.fadeOut('100');
        }).hover(function(){
          $(this).addClass('hover');
        }, function(){
          $(this).removeClass('hover');
        });

    } else {
      thisul.fadeOut('fast');
    }
  });

  var p=0;
  var t=0;  

  $(window).scroll(function(){  
    p = $(this).scrollTop();

    if(t<=p){  //下滚  
      $('.header').css({
        top: '-60px'
      });
    } else{  //上滚  
      $('.header').css({
        position: 'fixed',
        top: '0'
      });  
    }

    setTimeout(function(){
      t = p;
    }, 0);         
  });  



$('.two-btn').click(function(){
  $('.inner-div-two').css('display', 'inline');
  $('.inner-div-one, .inner-div-three').css('display', 'none');
  $('.two-btn').css('background', '#B3B3B3');
  $('.one-btn, .three-btn').css('background', 'white');
});

$('.three-btn').click(function(){
  $('.inner-div-three').css('display', 'inline');
  $('.inner-div-one, .inner-div-two').css('display', 'none');
  $('.three-btn').css('background', '#B3B3B3');
  $('.one-btn, .two-btn').css('background', 'white');
});

$('.one-btn').click(function(){
  $('.inner-div-one').css('display', 'inline');
  $('.inner-div-two, .inner-div-three').css('display', 'none');
  $('.one-btn').css('background', '#B3B3B3');
  $('.two-btn, .three-btn').css('background', 'white');
});

  $('.totop').click(function(evt) {

    var top = $('.' + evt.target.dataset.to)[0].offsetTop;

    $('html,body').animate({
      scrollTop : top + 'px'
    }, 500);
  });

});