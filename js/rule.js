/*
* @Author: admin
* @Date:   2018-08-23 15:14:32
* @Last Modified by:   admin
* @Last Modified time: 2018-08-23 15:18:26
*/
$(function(){
	$('div ul li a').mouseenter(function(event) {
		$(this).addClass('ts').parent().siblings('li').children('a').removeClass('ts')
	});






})