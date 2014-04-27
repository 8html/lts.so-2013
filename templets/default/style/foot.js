function f_filterResults(a,b,c){a=a?a:0;if(b&&(!a||a>b))a=b;return c&&(!a||a>c)?c:a}function f_scrollTop(){return f_filterResults(window.pageYOffset?window.pageYOffset:0,document.documentElement?document.documentElement.scrollTop:0,document.body?document.body.scrollTop:0)};
function stick() {
	$('.zxkf').clearQueue().animate({top:f_scrollTop()+50});
	$('.mp').clearQueue().animate({top:f_scrollTop()+350});
}
$('.zxkf').hoverIntent({over: function(){$('.zxkf').animate({width:133, left:$(window).width()-133}, 200);
}, out: function(){$('.zxkf').animate({width:33, left:$(window).width()-33}, 200);}, timeout: 500});
$('.mp').hoverIntent({over: function(){$('.mp').animate({width:185, left:$(window).width()-185}, 200);
}, out: function(){$('.mp').animate({width:35, left:$(window).width()-35}, 200);}, timeout: 500});
$(window).scroll(function(){stick();});
$(document).ready(function(){
	$('.zxkf').show().css({'top':0, 'left':$(window).width()-33, 'width':33, 'position':'absolute', 'z-index':9999});
	$('.mp').show().css({'top':0, 'left':$(window).width()-35, 'width':35, 'position':'absolute', 'z-index':9999});
	stick();
});
$(window).load(function(){
	$('.zxkf').show().css({'left':$(window).width()-33});
	$('.mp').show().css({'left':$(window).width()-35});
});
$(window).resize(function(){
	$('.zxkf').show().css({'left':$(window).width()-33, 'width':33, 'position':'absolute', 'z-index':9999});
	$('.mp').show().css({'left':$(window).width()-35, 'width':35, 'position':'absolute', 'z-index':9999});
	stick();
});