/*
 * Title: jQuery Etalage plugin
 * Author: Berend de Jong, Frique
 * Author URI: http://www.frique.me/
 * Version: 1.3.1 (20120705.1)
 */

;(function(a){a.fn.etalage=function(b){var c=a.extend({align:"left",thumb_image_width:300,thumb_image_height:400,source_image_width:900,source_image_height:1200,zoom_area_width:600,zoom_area_height:"justify",zoom_area_distance:10,zoom_easing:true,click_to_zoom:false,zoom_element:"auto",show_descriptions:true,description_location:"bottom",description_opacity:0.7,small_thumbs:3,smallthumb_inactive_opacity:0.4,smallthumb_hide_single:true,smallthumb_select_on_hover:false,smallthumbs_position:"bottom",magnifier_opacity:0.5,magnifier_invert:true,show_icon:true,icon_offset:20,hide_cursor:false,show_hint:true,hint_offset:15,speed:600,autoplay:true,autoplay_interval:6000,keyboard:true,right_to_left:false},b);
a.each(this,function(){var aD=a(this);if(aD.is("ul")&&aD.children("li").length&&aD.find("img.etalage_source_image").length){var ab,aa,O,G,an,s,f,aN,aH,at,aM=aD.attr("id"),aU=Math.floor(c.speed*0.7),az=Math.round(c.speed/100),af=false,y=false,W=false,e=false,al=true,z=false,w=0,ai=0,ah=0,X=0,V=0,aC="hori";if(typeof aM==="undefined"||!aM){aM="[no id]"}if(c.smallthumbs_position==="left"||c.smallthumbs_position==="right"){aC="vert"}if(a.browser.msie){W=true;al=false;if(a.browser.version<7){e=true}}aD.addClass("etalage").show();
var v=aD.children("li").addClass("etalage_thumb");v.first().show().addClass("etalage_thumb_active");var p=v.length,aF=c.autoplay;if(p<2){aF=false}if(c.align==="right"){aD.addClass("etalage_right")}a.each(v,function(aW){aW+=1;var aZ=a(this),j=aZ.find(".etalage_thumb_image").removeAttr("alt").show(),aY=aZ.find(".etalage_source_image"),aX=aZ.find("a");aZ.data("id",aW).addClass("thumb_"+aW);if(!j.length&&aY.length){aZ.prepend('<img class="etalage_thumb_image" src="'+aY.attr("src")+'" />')}else{if(!j.length&&!aY.length){aZ.remove()
}}if(aX.length){aZ.find(".etalage_thumb_image").data("anchor",aX.attr("href"))}});var ar=v.find(".etalage_thumb_image").css({width:c.thumb_image_width,height:c.thumb_image_height}).show();a.each(ar,function(){a(this).data("src",this.src)});v.children("a").hide();var aK=a('<li class="etalage_magnifier"><div><img /></div></li>').appendTo(aD),Z=aK.children("div"),h=Z.children("img");var D=a('<li class="etalage_icon">&nbsp;</li>').appendTo(aD);if(c.show_icon){D.show()}var q;if(c.show_hint){q=a('<li class="etalage_hint">&nbsp;</li>').appendTo(aD).show()
}var I,r=c.zoom_element;if(r!=="auto"&&r&&a(r).length){I=a(r).addClass("etalage_zoom_area").html('<div><img class="etalage_zoom_img" /></div>')}else{r="auto";I=a('<li class="etalage_zoom_area"><div><img class="etalage_zoom_img" /></div></li>').appendTo(aD)}var U=I.children("div"),ak;if(al){ak=a('<img class="etalage_zoom_preview" />').css({width:c.source_image_width,height:c.source_image_height,opacity:0.3}).prependTo(U).show()}var ay=U.children(".etalage_zoom_img").css({width:c.source_image_width,height:c.source_image_height});
var aw;if(c.show_descriptions){aw=a('<div class="etalage_description'+((c.right_to_left)?" rtl":"")+'"></div>').prependTo(I)}var aL,l,aQ,t,x,ag=c.small_thumbs;if(p>1||!c.smallthumb_hide_single){aL=a('<li class="etalage_small_thumbs"><ul></ul></li>').appendTo(aD);l=aL.children("ul");a.each(ar,function(){var i=a(this);O=i.data("src");G=i.parents(".etalage_thumb").data("id");a('<li><img class="etalage_small_thumb" src="'+O+'" /></li>').data("thumb_id",G).appendTo(l)});aQ=l.children("li").css({opacity:c.smallthumb_inactive_opacity});
if(ag<3){ag=3}if(p>ag){O=ar.eq(p-1).data("src");G=v.eq(p-1).data("id");a('<li class="etalage_smallthumb_first"><img class="etalage_small_thumb" src="'+O+'" /></li>').data("src",O).data("thumb_id",G).prependTo(l).css({opacity:c.smallthumb_inactive_opacity});O=ar.eq(0).data("src");G=v.eq(0).data("id");a('<li><img class="etalage_small_thumb" src="'+O+'" /></li>').data("src",O).data("thumb_id",G).appendTo(l).css({opacity:c.smallthumb_inactive_opacity});aQ=l.children("li");aQ.eq(ag-1).addClass("etalage_smallthumb_last");
aQ.eq(1).addClass("etalage_smallthumb_active").css({opacity:1})}else{aQ.eq(0).addClass("etalage_smallthumb_active").css({opacity:1})}a.each(aQ,function(j){a(this).data("id",(j+1))});t=aQ.children("img");x=aQ.length;if(aC==="vert"){aQ.addClass("vertical")}}if(c.magnifier_invert){an=1}else{an=c.magnifier_opacity}var aJ=parseInt(v.css("borderLeftWidth"),10)+parseInt(v.css("borderRightWidth"),10)+parseInt(ar.css("borderLeftWidth"),10)+parseInt(ar.css("borderRightWidth"),10),Y=parseInt(v.css("marginLeft"),10)+parseInt(v.css("marginRight"),10),A=parseInt(v.css("paddingLeft"),10)+parseInt(v.css("paddingRight"),10)+parseInt(ar.css("marginLeft"),10)+parseInt(ar.css("marginRight"),10)+parseInt(ar.css("paddingLeft"),10)+parseInt(ar.css("paddingRight"),10),L=c.thumb_image_width+aJ+Y+A,M=c.thumb_image_height+aJ+Y+A,aB=0,N=0,au=0,ae=0,aA=0,n=0,aE=0;
if(p>1||!c.smallthumb_hide_single){aB=parseInt(aQ.css("borderLeftWidth"),10)+parseInt(aQ.css("borderRightWidth"),10)+parseInt(t.css("borderLeftWidth"),10)+parseInt(t.css("borderRightWidth"),10);N=parseInt(aQ.css("marginTop"),10);au=parseInt(aQ.css("paddingLeft"),10)+parseInt(aQ.css("paddingRight"),10)+parseInt(t.css("marginLeft"),10)+parseInt(t.css("marginRight"),10)+parseInt(t.css("paddingLeft"),10)+parseInt(t.css("paddingRight"),10);if(aC==="vert"){aA=Math.round((M-((ag-1)*N))/ag)-(aB+au);ae=Math.round((c.thumb_image_width*aA)/c.thumb_image_height);
n=ae+aB+au;aE=aA+aB+au}else{ae=Math.round((L-((ag-1)*N))/ag)-(aB+au);aA=Math.round((c.thumb_image_height*ae)/c.thumb_image_width);n=ae+aB+au;aE=aA+aB+au}}var d=parseInt(I.css("borderTopWidth"),10),ax=parseInt(c.zoom_area_distance),H=parseInt(I.css("paddingTop"),10),R,aV;if((c.zoom_area_width-(d*2)-(H*2))>c.source_image_width){R=c.source_image_width}else{R=c.zoom_area_width-(d*2)-(H*2)}if(c.zoom_area_height==="justify"){aV=(M+N+aE)-(d*2)-(H*2)}else{aV=c.zoom_area_height-(d*2)-(H*2)}if(aV>c.source_image_height){aV=c.source_image_height
}var aS,ap,u,ao;if(c.show_descriptions){aS=parseInt(aw.css("borderLeftWidth"),10)+parseInt(aw.css("borderRightWidth"),10);ap=parseInt(aw.css("marginLeft"),10)+parseInt(aw.css("marginRight"),10);u=parseInt(aw.css("paddingLeft"),10)+parseInt(aw.css("paddingRight"),10);ao=R-aS-ap-u}var aI;if(e){aI=a('<iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="javascript:\'<html></html>\'"></iframe>').css({position:"absolute",zIndex:1}).prependTo(I)}var Q=parseInt(aK.css("borderTopWidth"),10),aG=parseInt(v.css("borderTopWidth"),10)+parseInt(v.css("marginTop"),10)+parseInt(v.css("paddingTop"),10)+parseInt(ar.css("borderTopWidth"),10)+parseInt(ar.css("marginTop"),10)-Q,aj=ar.offset().left-aD.offset().left-Q;
if(c.smallthumbs_position==="left"){aj=aj+n+N}var T=Math.round(R*(c.thumb_image_width/c.source_image_width)),P=Math.round(aV*(c.thumb_image_height/c.source_image_height)),K=aG+c.thumb_image_height-P,o=aj+c.thumb_image_width-T,ad=Math.round(T/2),ac=Math.round(P/2),F,B;if(c.show_hint){F=parseInt(c.hint_offset,10)+parseInt(q.css("marginTop"),10);B=parseInt(c.hint_offset,10)+parseInt(q.css("marginRight"),10);if(c.smallthumbs_position==="right"){B=B-n-N}}if(aC==="vert"){aN=L+N+n;aD.css({width:aN,height:M})
}else{aN=L;aD.css({width:aN,height:M+N+aE})}if(c.show_icon){at={top:M-D.outerHeight(true)-parseInt(c.icon_offset,10),left:parseInt(c.icon_offset,10)};if(c.smallthumbs_position==="left"){at.left=n+N+parseInt(c.icon_offset,10)}D.css(at)}if(c.show_hint){q.css({margin:0,top:-F,right:-B})}h.css({margin:0,padding:0,width:c.thumb_image_width,height:c.thumb_image_height});Z.css({margin:0,padding:0,width:T,height:P});aK.css({margin:0,padding:0,left:(o-aj)/2,top:(K-aG)/2}).hide();if(c.smallthumbs_position==="left"){aK.css({left:((o-aj)/2)+n+N})
}U.css({width:R,height:aV});if(c.align==="right"&&r==="auto"){I.css({left:-(R+(d*2)+(H*2)+ax)})}else{if(r==="auto"){I.css({left:aN+ax})}}I.css({margin:0}).css({opacity:0}).hide();if(c.show_descriptions){at={width:ao,bottom:H,left:H};if(!W){at.opacity=c.description_opacity}if(c.description_location==="top"){at.top=H;at.bottom="auto"}aw.css(at).hide()}if(p>1||!c.smallthumb_hide_single){if(aC==="vert"){if(c.smallthumbs_position==="left"){v.css({left:n+N})}else{aL.css({left:L+N})}aL.css({top:0,height:M});
l.css({height:(aE*x)+(x*N)});t.css({width:ae,height:aA}).attr("height",aA);aQ.css({margin:0,marginBottom:N})}else{aL.css({top:M+N,width:L});l.css({width:(n*x)+(x*N)});t.css({width:ae,height:aA}).attr("width",ae);aQ.css({margin:0,marginRight:N})}if(aC==="vert"){aH=((aE*ag)+((ag-1)*N))-M}else{aH=((n*ag)+((ag-1)*N))-L}if(aH>0){for(ab=1;ab<=(x-1);ab=ab+(ag-1)){aa=1;for(aa;aa<=aH;aa+=1){if(aC==="vert"){aQ.eq(ab+aa-1).css({marginBottom:(N-1)})}else{aQ.eq(ab+aa-1).css({marginRight:(N-1)})}}}}else{if(aH<0){for(ab=1;
ab<=(x-1);ab=ab+(ag-1)){aa=1;for(aa;aa<=(-aH);aa+=1){if(aC==="vert"){aQ.eq(ab+aa-1).css({marginBottom:(N+1)});l.css({height:parseInt(l.css("height"),10)+1})}else{aQ.eq(ab+aa-1).css({marginRight:(N+1)});l.css({width:parseInt(l.css("width"),10)+1})}}}}}}if(c.show_icon&&!c.magnifier_invert){aK.css({background:aK.css("background-color")+" "+D.css("background-image")+" center no-repeat"})}if(c.hide_cursor){aK.add(D).css({cursor:"none"})}if(e){aI.css({width:U.css("width"),height:U.css("height")})}var av=v.first().find(".etalage_thumb_image"),am=v.first().find(".etalage_source_image");
if(c.magnifier_invert){h.attr("src",av.data("src")).show()}if(al){ak.attr("src",av.data("src"))}ay.attr("src",am.attr("src"));if(c.show_descriptions){f=am.attr("title");if(typeof f!=="undefined"&&f){aw.html(f).show()}}var C=function(){if(s){clearInterval(s);s=false}};var k=function(){if(s){C()}s=setInterval(function(){aq()},c.autoplay_interval)};var S=function(){aK.stop().fadeTo(aU,an);D.stop().animate({opacity:0},aU);I.stop().show().animate({opacity:1},aU);if(c.magnifier_invert){av.stop().animate({opacity:c.magnifier_opacity},aU)
}if(aF){C()}};var aR=function(){aK.stop().fadeOut(c.speed);D.stop().animate({opacity:1},c.speed);I.stop().animate({opacity:0},c.speed,function(){a(this).hide()});if(c.magnifier_invert){av.stop().animate({opacity:1},c.speed,function(){if(c.click_to_zoom){z=false}})}clearTimeout(w);if(aF){k()}};var g=function(aY,aW){var i=aD.find(".etalage_smallthumb_active").removeClass("etalage_smallthumb_active");aY.addClass("etalage_smallthumb_active");aK.stop().hide();I.stop().hide();if(!aW){af=true;i.stop(true,true).animate({opacity:c.smallthumb_inactive_opacity},aU);
aY.stop(true,true).animate({opacity:1},aU,function(){af=false})}aD.find(".etalage_thumb_active").removeClass("etalage_thumb_active").stop().animate({opacity:0},c.speed,function(){a(this).hide()});var j=v.filter(".thumb_"+aY.data("thumb_id")).addClass("etalage_thumb_active").show().stop().css({opacity:0}).animate({opacity:1},c.speed);av=j.find(".etalage_thumb_image");am=j.find(".etalage_source_image");if(c.magnifier_invert){h.attr("src",av.data("src"))}if(al){ak.attr("src",av.data("src"))}ay.attr("src",am.attr("src"));
if(c.show_descriptions){f=am.attr("title");if(typeof f!=="undefined"&&f){aw.html(f).show()}else{aw.hide()}}if(aF){C();k()}if(typeof etalage_change_callback==="function"){var aX=aY.data("id");if(p>=ag){aX--}etalage_change_callback(aX,aM)}};var E=function(aX,j,i,aW){a.each(aQ,function(){var aZ=a(this),aY={opacity:c.smallthumb_inactive_opacity};if(aZ.data("id")===aW.data("id")){aY.opacity=1}if(aC==="vert"){aY.top="-="+aX}else{aY.left="-="+aX}aZ.animate(aY,aU,"swing",function(){if(af){aW.addClass("etalage_smallthumb_active");
af=false}})});g(aW,true)};var aT=function(){var aX=X-ai,aW=V-ah,j=-aX/az,i=-aW/az;ai=ai-j;ah=ah-i;if(aX<1&&aX>-1){ai=X}if(aW<1&&aW>-1){ah=V}ay.css({left:ai,top:ah});if(al){ak.css({left:ai,top:ah})}if(aX>1||aW>1||aX<1||aW<1){w=setTimeout(function(){aT()},25)}};var J=function(){var i;if(c.magnifier_invert){aD.find(".etalage_thumb_active").mouseleave()}if(!c.right_to_left){i=aD.find(".etalage_smallthumb_active").prev();if(!i.length){i=aQ.last()}}else{i=aD.find(".etalage_smallthumb_active").next();if(!i.length){i=aQ.first()
}}i.click()};var aq=function(){var i;if(c.magnifier_invert){aD.find(".etalage_thumb_active").mouseleave()}if(!c.right_to_left){i=aD.find(".etalage_smallthumb_active").next();if(!i.length){i=aQ.first()}}else{i=aD.find(".etalage_smallthumb_active").prev();if(!i.length){i=aQ.last()}}i.click()};var m=function(aX){if(p<=ag){aX=aX-1}var a1=aQ.eq(aX);if(a1.length&&!af){var a0=aD.find(".etalage_smallthumb_active"),aW=a0.data("id")-1,j;if(aW>aX){y=aW-aX;var aY=aD.find(".etalage_smallthumb_first"),a2=aY.data("id");
if(aX<a2){j=aW-a2;y=y-j;aY.click()}else{g(a1,false)}}else{if(aW<aX){y=aX-aW;var aZ=aD.find(".etalage_smallthumb_last"),i=aZ.data("id")-1;if(aX>=i){j=i-aW-1;y=y-j;aZ.click()}else{g(a1,false)}}}y=false}};window[aM+"_previous"]=function(){J()};window[aM+"_next"]=function(){aq()};window[aM+"_show"]=function(i){m(i)};v.add(aK).add(D).mouseenter(function(){if(c.show_hint){q.hide()}if(!c.click_to_zoom||z){S()}}).mouseleave(function(){aR()});var aP=-(c.source_image_width-R),aO=-(c.source_image_height-aV);
v.add(aK).add(D).mousemove(function(a0){var j=Math.round(a0.pageX-av.offset().left+aj),i=Math.round(a0.pageY-av.offset().top+aG);var aZ=(j-ad),aY=(i-ac);if(aZ<aj){aZ=aj}if(aZ>o){aZ=o}if(aY<aG){aY=aG}if(aY>K){aY=K}aK.css({left:aZ,top:aY});if(c.magnifier_invert){var aX=aZ-aj,aW=aY-aG;h.css({left:-aX,top:-aW})}X=-((aZ-aj)*(1/(c.thumb_image_width/c.source_image_width)));V=-((aY-aG)*(1/(c.thumb_image_height/c.source_image_height)));if(X<aP){X=aP}if(V<aO){V=aO}if(c.zoom_easing){clearTimeout(w);aT()}else{if(al){ak.css({left:X,top:V})
}ay.css({left:X,top:V})}});if(p>1||!c.smallthumb_hide_single){aD.delegate(".etalage_smallthumb_first","click",function(){if(!af||y){var a2=a(this),aW=1,j=0,aZ,a3,a0,a1,aY;if(y){aW=y}af=true;for(var aX=0;aX<aW;aX+=1){aZ=a2.removeClass("etalage_smallthumb_first");a3=aD.find(".etalage_smallthumb_last").removeClass("etalage_smallthumb_last");if(a2.prev().length){a0=aZ.prev().addClass("etalage_smallthumb_first");a1=a3.prev().addClass("etalage_smallthumb_last");aY=aZ}else{a0=aQ.eq(x-ag).addClass("etalage_smallthumb_first");
a1=aQ.eq(x-1).addClass("etalage_smallthumb_last");aY=a1.prev()}if(aC==="vert"){j=a0.position().top}else{j=a0.position().left}if(a2.prev().length){a2=a2.prev()}}E(j,a0,a1,aY)}});aD.delegate(".etalage_smallthumb_last","click",function(){if(!af||y){var a2=a(this),aW=1,j=0,aZ,a3,a0,a1,aY;if(y){aW=y}af=true;for(var aX=0;aX<aW;aX+=1){aZ=aD.find(".etalage_smallthumb_first").removeClass("etalage_smallthumb_first");a3=a2.removeClass("etalage_smallthumb_last");if(a2.next().length){a0=aZ.next().addClass("etalage_smallthumb_first");
a1=a3.next().addClass("etalage_smallthumb_last");aY=a3}else{a0=aQ.eq(0).addClass("etalage_smallthumb_first");a1=aQ.eq(ag-1).addClass("etalage_smallthumb_last");aY=a0.next()}if(aC==="vert"){j=a0.position().top}else{j=a0.position().left}if(a2.next().length){a2=a2.next()}}E(j,a0,a1,aY)}});aQ.click(function(){var i=a(this);if(!i.hasClass("etalage_smallthumb_first")&&!i.hasClass("etalage_smallthumb_last")&&!i.hasClass("etalage_smallthumb_active")&&!af){g(i,false)}});if(c.smallthumb_select_on_hover){aQ.hover(function(){a(this).click()
})}}if(c.click_to_zoom){v.click(function(){z=true;S()})}else{aK.click(function(){var i=av.data("anchor");if(typeof i!=="undefined"&&i){if(typeof etalage_click_callback==="function"){etalage_click_callback(i,aM)}else{window.location=i}}})}if(p>1&&c.keyboard){a(document).keydown(function(i){if(i.keyCode===39||i.keyCode==="39"){if(!c.right_to_left){aq()}else{J()}}if(i.keyCode===37||i.keyCode==="37"){if(!c.right_to_left){J()}else{aq()}}})}a(window).bind("load",function(){v.css({"background-image":"none"});
I.css({"background-image":"none"});if(al){al=false;ak.remove()}});if(aF){k()}}});return this}})(jQuery);