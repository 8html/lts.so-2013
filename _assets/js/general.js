// JavaScript Document

// JScroll Pane
$(document).ready(function(){
	//jScrollPane
	if('#scroll'){		
		$('#scroll').jScrollPane({showArrows:true});
	}
	if('#projects_list'){		
		$('#projects_list').jScrollPane({showArrows:true});
	}
//Random quote	
	randomtip = function(){
		var length = $("#quote ul li").length;
		var ran = Math.floor(Math.random()*length) + 1;
		$("#quote ul li:nth-child(" + ran + ")").show();
	};
	randomtip();
});