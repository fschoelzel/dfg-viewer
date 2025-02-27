/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csstransforms3d-csstransitions-objectfit-touchevents-domprefixes-prefixed-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function a(e,t){return typeof e===t}function i(){var e,t,n,i,o,r,s;for(var l in $)if($.hasOwnProperty(l)){if(e=[],t=$[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=a(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)r=e[o],s=r.split("."),1===s.length?C[s[0]]=i:(!C[s[0]]||C[s[0]]instanceof Boolean||(C[s[0]]=new Boolean(C[s[0]])),C[s[0]][s[1]]=i),b.push((i?"":"no-")+s.join("-"))}}function o(e){var t=k.className,n=C._config.classPrefix||"";if(S&&(t=t.baseVal),C._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}C._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?k.className.baseVal=t:k.className=t)}function r(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,n){return t+n.toUpperCase()})).replace(/^-/,"")}function s(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function d(){var e=t.body;return e||(e=l(S?"svg":"body"),e.fake=!0),e}function c(e,n,a,i){var o,r,s,c,u="modernizr",f=l("div"),p=d();if(parseInt(a,10))for(;a--;)s=l("div"),s.id=i?i[a]:u+(a+1),f.appendChild(s);return o=l("style"),o.type="text/css",o.id="s"+u,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",c=k.style.overflow,k.style.overflow="hidden",k.appendChild(p)),r=n(f,e),p.fake?(p.parentNode.removeChild(p),k.style.overflow=c,k.offsetHeight):f.parentNode.removeChild(f),!!r}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],a(i,"function")?u(i,n||t):i);return!1}function p(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function m(t,n,a){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;if(null!==i)a&&(i=i.getPropertyValue(a));else if(o){var r=o.error?"error":"log";o[r].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[a];return i}function g(t,a){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(p(t[i]),a))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+p(t[i])+":"+a+")");return o=o.join(" or "),c("@supports ("+o+") { #modernizr { position: absolute; } }",(function(e){return"absolute"==m(e,null,"position")}))}return n}function v(e,t,i,o){function d(){u&&(delete D.style,delete D.modElem)}if(o=a(o,"undefined")?!1:o,!a(i,"undefined")){var c=g(e,i);if(!a(c,"undefined"))return c}for(var u,f,p,m,v,h=["modernizr","tspan","samp"];!D.style&&h.length;)u=!0,D.modElem=l(h.shift()),D.style=D.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],v=D.style[m],s(m,"-")&&(m=r(m)),D.style[m]!==n){if(o||a(i,"undefined"))return d(),"pfx"==t?m:!0;try{D.style[m]=i}catch(e){}if(D.style[m]!=v)return d(),"pfx"==t?m:!0}return d(),!1}function h(e,t,n,i,o){var r=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+j.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?v(s,t,i,o):(s=(e+" "+z.join(r+" ")+r).split(" "),f(s,t,n))}function w(e,t,a){return h(e,n,n,t,a)}var b=[],$=[],x={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){$.push({name:e,fn:t,options:n})},addAsyncTest:function(e){$.push({name:null,fn:e})}},C=function(){};C.prototype=x,C=new C;var y=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=y;var k=t.documentElement,S="svg"===k.nodeName.toLowerCase(),T="Moz O ms Webkit",z=x._config.usePrefixes?T.toLowerCase().split(" "):[];x._domPrefixes=z;var _="CSS"in e&&"supports"in e.CSS,M="supportsCSS"in e;C.addTest("supports",_||M);var j=x._config.usePrefixes?T.split(" "):[];x._cssomPrefixes=j;var E=function(t){var a,i=y.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),a=t.replace(/-/g,"_").toUpperCase()+"_RULE",a in o)return"@"+t;for(var r=0;i>r;r++){var s=y[r],l=s.toUpperCase()+"_"+a;if(l in o)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=E;var F=x.testStyles=c;C.addTest("touchevents",(function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var a=["@media (",y.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");F(a,(function(e){n=9===e.offsetTop}))}return n}));var P={elem:l("modernizr")};C._q.push((function(){delete P.elem}));var D={style:P.elem.style};C._q.unshift((function(){delete D.style}));x.testProp=function(e,t,a){return v([e],n,t,a)};x.testAllProps=h;var q=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=r(e)),t?h(e,t,n):h(e,"pfx"))};x.testAllProps=w,C.addTest("csstransforms3d",(function(){var e=!!w("perspective","1px",!0),t=C._config.usePrefixes;if(e&&(!t||"webkitPerspective"in k.style)){var n,a="#modernizr{width:0;height:0}";C.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",F(a+n,(function(t){e=7===t.offsetWidth&&18===t.offsetHeight}))}return e})),C.addTest("csstransitions",w("transition","all",!0)),C.addTest("objectfit",!!q("objectFit"),{aliases:["object-fit"]}),i(),o(b),delete x.addTest,delete x.addAsyncTest;for(var A=0;A<C._q.length;A++)C._q[A]();e.Modernizr=C}(window,document);(function(e,t){typeof exports==="object"&&typeof module!=="undefined"?module.exports=t():typeof define==="function"&&define.amd?define(t):(e=e||self,function(){var n=e.Cookies;var a=e.Cookies=t();a.noConflict=function(){e.Cookies=n;return a}}())})(this,(function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n){e[a]=n[a]}}return e}var t={read:function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function n(a,i){function o(t,n,o){if(typeof document==="undefined"){return}o=e({},i,o);if(typeof o.expires==="number"){o.expires=new Date(Date.now()+o.expires*864e5)}if(o.expires){o.expires=o.expires.toUTCString()}t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);n=a.write(n,t);var r="";for(var s in o){if(!o[s]){continue}r+="; "+s;if(o[s]===true){continue}r+="="+o[s].split(";")[0]}return document.cookie=t+"="+n+r}function r(e){if(typeof document==="undefined"||arguments.length&&!e){return}var n=document.cookie?document.cookie.split("; "):[];var i={};for(var o=0;o<n.length;o++){var r=n[o].split("=");var s=r.slice(1).join("=");if(s[0]==='"'){s=s.slice(1,-1)}try{var l=t.read(r[0]);i[l]=a.read(s,l);if(e===l){break}}catch(e){}}return e?i[e]:i}return Object.create({set:o,get:r,remove:function(t,n){o(t,"",e({},n,{expires:-1}))},withAttributes:function(t){return n(this.converter,e({},this.attributes,t))},withConverter:function(t){return n(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(a)}})}var a=n(t,{path:"/"});return a}));$(document).ready((function(){$("#tx-dfgviewer-sru-form").submit((function(e){e.preventDefault();$("#tx-dfgviewer-sru-results-loading").show();$("#tx-dfgviewer-sru-results-clearing").hide();$.post("/",{middleware:"dfgviewer/sru",q:$("input[name='tx_dlf[query]']").val(),L:$("input[name='tx_dfgviewer[L]']").val(),id:$("input[name='tx_dfgviewer[id]']").val(),sru:$("input[name='tx_dfgviewer[sru]']").val(),action:$("input[name='tx_dfgviewer[action]']").val()},(function(e){var t=[];var n=$('<div class="sru-results-active-indicator"></div><ul>');if(e.error){$("<li/>",{class:"noresult",text:$("#tx-dfgviewer-sru-label-noresult").text()}).appendTo(n)}else{for(var a=0;a<e.length;a++){var i=$(location).attr("href");var o=i.substring(0,i.indexOf("?"));var r=i.substring(o.length+1,i.length);var s=r.match(/id=(\d)*/g);if(s){r=s+"&"}else{r="&"}var l=o+"?"+(r+"tx_dlf[id]="+e[a].link+"&tx_dlf[origimage]="+e[a].origImage+"&tx_dlf[highlight]="+encodeURIComponent(e[a].highlight)+"&tx_dlf[page]="+e[a].page);if(e[a].previewImage){$("<li/>").append($("<a/>",{href:l,text:e[a].previewImage})).appendTo(n)}if(e[a].previewText){$("<li/>").append($("<a/>",{href:l,text:e[a].previewText})).appendTo(n)}}if(t.length===0){$("<li/>",{class:"noresult",text:$("#tx-dfgviewer-sru-label-noresult").text()}).appendTo(n)}}$("#tx-dfgviewer-sru-results").empty().append(n)}),"json").done((function(e){$("#tx-dfgviewer-sru-results-loading").hide();$("#tx-dfgviewer-sru-results-clearing").show()}))}));$("#tx-dfgviewer-sru-results-clearing").click((function(){$("#tx-dfgviewer-sru-results ul").remove();$(".sru-results-active-indicator").remove();$("#tx-dfgviewer-sru-query").val("")}))}));
/*!

    Custom scripts
    ------------------------
    DFG viewer script for cookies, sidebar adaption eg.

!*/
window.DfgViewer=function(e){e.isInTheaterMode=function(){return $("body.fullscreen").length>0};e.toggleTheaterMode=function(t){if(e.isInTheaterMode()){exitFullscreen(t)}else{enterFullscreen(t)}};return e}(window.DfgViewer||{});$(document).ready((function(){function e(){var e=false;(function(t){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))e=true})(navigator.userAgent||navigator.vendor||window.opera);return e}var t=e()?"touchend":"click";$(".offcanvas-toggle").on(t,(function(e){$(this).parent().toggleClass("open")}));$(".document-functions li.submenu > a").on(t,(function(e){$("li.submenu.open a").not(this).parent().removeClass("open");$(this).parent().toggleClass("open");return false}));$(".control-bar .control-bar-container h3").on("click",(function(){$(this).parent().toggleClass("section-hidden")}));if($(".control-bar .metadata-basic dl.tx-dlf-metadata-titledata").length>1){var n=$('html[lang^="de"]')[0]?"mehr Metadaten anzeigen":"more Metadata";var a=$('html[lang^="de"]')[0]?"weniger Metadaten anzeigen":"less Metadata";$(".control-bar .metadata-basic").append('<div class="metadata-toggle">'+n+"</div>");if(Cookies.get("tx-dlf-allmetadata")==="true"){$(".control-bar .metadata-basic").addClass("all-metadata").find(".metadata-toggle").text(a);$(".control-bar .metadata-basic").find("dl.tx-dlf-metadata-titledata:nth-child(n+3)").show()}$(".metadata-toggle").on("click",(function(){if(!$(".control-bar .metadata-basic").hasClass("all-metadata")){Cookies.set("tx-dlf-allmetadata","true",{sameSite:"lax"});$(this).text(a)}else{Cookies.remove("tx-dlf-allmetadata");$(this).text(n)}$(".control-bar .metadata-basic").toggleClass("all-metadata").find("dl.tx-dlf-metadata-titledata:nth-child(n+3)").slideToggle()}))}$(".tx-dlf-metadata dl.tx-dlf-metadata-titledata dd.tx-dlf-title")[0]&&$(".tx-dlf-metadata").prepend('<div class="metadata-title"><h2>'+$(".tx-dlf-metadata dl.tx-dlf-metadata-titledata").first().find("dd.tx-dlf-title").text()+"</h2></div>");$("dl.tx-dlf-metadata-titledata dd > dl").each((function(){$(this).parent().addClass("has-submetadata").prepend('<span class="submetadata-toggle">+'+$(this).find("dt").length+($('html[lang^="de"]')[0]?" weitere":" more")+"</span>").prev().addClass("has-submetadata")}));$(".submetadata-toggle").on("click",(function(){$(this).parent().toggleClass("open")}));$("dl.tx-dlf-metadata-titledata dt").each((function(){$(this).after($(this).next("dt").length>0&&$("<dd/>"))}));$("nav .nav-toggle").on(t,(function(e){$(this).toggleClass("active");$("nav .viewer-nav").toggleClass("open")}));$(".calendar-view .contains-issues").on(t,(function(e){$(".calendar-view table td.open").not($(this).parent()).removeClass("open");$(this).parent().toggleClass("open")}));$(".tx-dfgviewer-newspaper-calendar").parents("body").addClass("calendar");$(".tx-dfgviewer-newspaper-years").parents("body").addClass("calendar");$(".tx-dfgviewer-newspaper-calendar .calendar-list-selection a.select-calendar-view, .tx-dfgviewer-newspaper-calendar .calendar-view").addClass("active");$(".tx-dfgviewer-newspaper-calendar .calendar-list-selection a").on(t,(function(e){if(!$(this).hasClass("active")){var t="."+$(this).attr("class").replace("select-","");$(".tx-dfgviewer-newspaper-calendar .active").removeClass("active");$(this).addClass("active");$(t).addClass("active")}}));$(".provider img").each((function(){if(typeof this.naturalWidth!="undefined"&&this.naturalWidth==0||this.readyState=="uninitialized"){$(this).parents(".document-functions").addClass("missing-provider-image")}}));if($(".pages select option[selected]")[0]){const e=$(".pages select option[selected]").text();$("dl.mobile-meta").append('<dt class="mobile-page-number">No.</dt><dd class="mobile-page-number"></dd>');$("dl.mobile-meta dd.mobile-page-number").text(e)}$(".provider").append('<div class="mobile-controls" />');$(".view-functions .pages form, .view-functions .zoom a.fullscreen, .fulltext-search-toggle").clone().appendTo(".provider .mobile-controls");if($('.dlf-shaka[data-mode="audio"], .dlf-shaka[data-mode="video"]').length){$(".document-view .document-functions > ul").clone().addClass("tx-dlf-media-submenu").prependTo(".provider .mobile-controls");$(".document-view .provider .mobile-controls").addClass("tx-dlf-media-mobile-controls");$(".document-view .document-functions > ul").addClass("tx-dlf-media-submenu-hidden");$(".document-view .document-functions .provider .mobile-meta").addClass("tx-dlf-media-mobile-meta");$(".tx-dlf-media-submenu li.submenu > a").on(t,(function(e){$("li.submenu.open a").not(this).parent().removeClass("open");$(this).parent().toggleClass("open");return false}))}shortenMobileMetaElement=$(".provider dl.mobile-meta dd.tx-dlf-title a");shortenMobileMetaTitle=shortenMobileMetaElement.text();if(shortenMobileMetaTitle.length>140){shortenMobileMetaTitle=shortenMobileMetaTitle.substr(0,140)+"...";shortenMobileMetaElement.text(shortenMobileMetaTitle)}if(!$(".submenu.downloads ul li")[0]){$("#tab-downloads").replaceWith((function(){return $("<span/>",{title:$(this).attr("title"),class:$(this).attr("class"),id:$(this).attr("id"),text:$(this).html()})}))}if(Cookies.get("tx-dlf-pageview-zoomFullscreen")==="true"){$("body").addClass("fullscreen static");$("a.fullscreen").addClass("active")}$("a.fullscreen").on(t,(function(){window.DfgViewer.toggleTheaterMode()}));if(Modernizr.touchevents){$(".fwds, .backs").on("touchstart",(function(){$(this).addClass("over").siblings("[class$="+$(this).attr("class").split(" ")[0].slice(1)+"]").addClass("over");triggeredElement=$(this);setTimeout((function(){triggeredElement.addClass("enable-touchevent")}),250)})).on("touchend",(function(){localStorage.txDlfFromPage=$(this).attr("class").split(" ")[0]}));$("body").on("touchstart",(function(e){target=$(e.target);if(!target.closest(".page-control")[0]){$(".fwds, .backs").removeClass("over enable-touchevent").siblings("[class$="+$(this).attr("class").split(" ")[0].slice(1)+"]").removeClass("over");localStorage.clear()}}));if(localStorage.txDlfFromPage){$("."+localStorage.txDlfFromPage).addClass("no-transition over enable-touchevent");localStorage.clear()}}else{$(".fwds, .backs").on("mouseenter",(function(){$(this).addClass("over").siblings("[class$="+$(this).attr("class").split(" ")[0].slice(1)+"]").addClass("over")})).on("mouseleave",(function(){$(this).removeClass("over").siblings(".measureBacks, .measureFwds").removeClass("over")})).on("click",(function(){localStorage.txDlfFromPage=$(this).attr("class").split(" ")[0];showLoadingAnimation()}));if(localStorage.txDlfFromPage){$("."+localStorage.txDlfFromPage).addClass("no-transition over");localStorage.clear()}}$(".measureBacks, .measureFwds").on("click",(function(e){showLoadingAnimation()}));if(Cookies.get("tx-dlf-pageview-hidebrowseralert")==="true"){$("#browser-hint").addClass("hidden")}setTimeout((function(){localStorage.clear();$(".fwds, .backs").removeClass("no-transition");$("body").removeClass("static")}),1e3)}));$(document).keyup((function(e){if(e.keyCode==27){if(window.DfgViewer.isInTheaterMode()){return exitFullscreen()}if($(".document-functions .search.open")[0]){$(".document-functions .search").removeClass("open")}}if(e.keyCode==70&&!$("#tx-dfgviewer-sru-query").is(":focus")){return enterFullscreen()}}));function enterFullscreen(e){e=e===undefined?true:e;setTimeout((function(){window.dispatchEvent(new Event("resize"))}),220);$("body").addClass("fullscreen");$("a.fullscreen").addClass("active");Cookies.set("tx-dlf-pageview-zoomFullscreen","true",{sameSite:"lax"})}function exitFullscreen(e){e=e===undefined?true:e;setTimeout((function(){window.dispatchEvent(new Event("resize"))}),220);$("body").removeClass("fullscreen");$("a.fullscreen").removeClass("active");if(e){Cookies.remove("tx-dlf-pageview-zoomFullscreen")}}function hideBrowserAlert(){$("#browser-hint").addClass("hidden");Cookies.set("tx-dlf-pageview-hidebrowseralert","true",{sameSite:"lax"})}function showLoadingAnimation(){$("#overlay").fadeIn(300)}window.addEventListener("dlf-theater-mode",(e=>{if(e.detail===undefined){console.warn("dlf-theater-mode: No parameter given");return}switch(e.detail.action){case"toggle":window.DfgViewer.toggleTheaterMode(e.detail.persist);break}}));