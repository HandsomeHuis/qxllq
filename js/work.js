/*
* @Author: admin
* @Date:   2018-08-16 16:11:58
* @Last Modified by:   admin
* @Last Modified time: 2018-08-20 14:59:09
*/
$(function(){
   var num=0
   var timer
   var pt
$('.music').click(function(event) {
	var a=$(this).hasClass('music')
	$(this).toggleClass('music')
	if(a==false){
    $('audio')[0].play()
     
	}
	if(a==true){
    $('audio')[0].pause()
	}
	
});


$('.aside li').click(function(event) {
    num=$(this).index()
	$(this).addClass('current').siblings('li').removeClass('current')
	$('section').animate({'top':-num*100+'%'}, 800)
    $('.txt').eq(num).removeClass('change').parent().siblings().children('.txt').addClass('change')
});

$(document).mousewheel(function(e,d){
	clearTimeout(timer)
	timer=setTimeout(function(){
	num=num-d
	if(num>6){
		num=6
	}
	if(num<0){
		num=0
	}
    $('section').css('top', -num*100+'%');
    $('.aside li').eq(num).addClass('current').siblings('li').removeClass('current')
    $('.txt').eq(num).removeClass('change').parent().siblings().children('.txt').addClass('change')
	},200)
	
   

})
   $('.screen4 .ballon').mouseenter(function(event) {
      $(this).css({
      	top: '-150px',
      	left: 20+'%'
      }); 
          })
   $('.screen4 .ballon').mouseleave(function(event) {
   
   	$(this).css({
   		top: '-10px',
   		left: 54+'%'
   	});
   });


 $('.screen1 .txt').removeClass('change')
 
 





})