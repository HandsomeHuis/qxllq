/*
* @Author: admin
* @Date:   2018-08-20 16:32:21
* @Last Modified by:   admin
* @Last Modified time: 2018-08-23 16:04:28
*/

$(function(){
var num=0
var timer
clearInterval(timer)
  timer=setInterval(function(){
  	num++
  	if(num>3){
  		num=0
  	}
   $('.banner .right ul li').eq(num).addClass('ts').siblings('.banner .right ul li').removeClass('ts')


  },3000)



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
  
   $('.head ul li a').mouseenter(function(event) {
   	$(this).addClass('sp').parent().siblings('li').children('a').removeClass('sp')
   });

})





