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
    },function(){
      $(this).removeClass('hover');
    });

   } else {
    thisul.fadeOut('fast');
   }
 });

});
