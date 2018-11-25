/*
* @Author: 辉哥
* @Date:   2018-08-21 23:15:31
* @Last Modified by:   admin
* @Last Modified time: 2018-08-24 09:38:13
*/
$(function(){
var num=0
var timer
$('.banner .right .one').click(function(event) {
	num++
	if(num>3){
		num=0
	}
	$('.banner .right ul li').eq(num).addClass('ts').siblings('.banner .right ul li').removeClass('ts')
});

$('.banner .right .two').click(function(event) {
	
	num--
	if(num<0){
	num=3
	}
	$('.banner .right ul li').eq(num).addClass('ts').siblings('.banner .right ul li').removeClass('ts')
});
  clearInterval(timer)
  timer=setInterval(function(){
  	num++
  	if(num>3){
  		num=0
  	}
   $('.banner .right ul li').eq(num).addClass('ts').siblings('.banner .right ul li').removeClass('ts')


  },3000)

  $('.head ul li a').mouseenter(function(event) {
  	$(this).addClass('sp').parent().siblings('li').children('a').removeClass('sp')
  });

  $('.p4 ul li a').mouseenter(function(event) {
  	
  	$(this).addClass('ts').parent().siblings('li').children('a').removeClass('ts')
  });



})