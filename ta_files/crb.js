function CitedRefBlocks(A){var e=jQuery;var r=50;var E=4000;var j=e("div.pmc_para_cit");var R=j.length;var h=e("div.portlet").not("div.pmc_para_cit");var P=o();h.find("a.portlet_shutter").click(g);var x=-1;var p;var K=null;j.find("li").hoverIntent({over:l,out:a,sensitivity:1,interval:150});j.mouseover(q);j.mouseleave(C);var J=0;var f=3;var M=e("a.bibr[rid]");var Q=M.length;var I=0;var w=10;var N=e("#body-link-poppers");var O={};D();function D(){for(var T=0;T<f;++T){if(J>=R){break}i(e(j[J]));J++}if(J<R){setTimeout(D,1)}else{setTimeout(z,1)}}function z(){for(var T=0;T<w;++T){if(I>=Q){break}u(e(M[I]));I++}if(I<Q){setTimeout(z,1)}else{}}function F(){e("a.bibr[rid]").hoverIntent({over:S,out:m,sensitivity:1,interval:150})}function i(ai){var ah=ai.attr("rid");var U=e("#"+ah);if(U.length!=1){ai.hide();ai.data("myTop",0);return}ai.data("myParagraph",U);var ac=parseInt(U.position().top)+parseInt(U.css("marginTop"))-7;ai.data("myTop",ac);var ad=ai.find("li");ad.each(function(){var ak=e(this);var al=ak.height();var ao=ak.attr("reference_id");var an=U.find('a.bibr[rid="'+ao+'"]');an.data("myCrbLink",ak);var am=e('a.bibr[rid="'+ao+'"]');ak.data({myCrb:ai,expandedHeight:al,myBodyLinks:am})});ad.each(function(){var ak=e(this);ak.removeClass("expanded").removeClass("highlight").addClass("two_line");ak.data("isCollapsed",true);if(x==-1){x=ak.height();p=ak.outerHeight(true)}});var ag=U.height();var aj=ad.length;var ab=Math.floor(ag/p);var aa=Math.min(r,ab);if(aj>aa){var Z=ai.height();var af=e("<a href='' class='seemore'>See more ...</a>");ai.find("div.portlet_content").append(af);af.click(t);var W=ai.height();var V=ai.height()-Z;var ae=Math.max(0,Math.floor((ag-V)/p));for(var Y=ae;Y<aj;Y++){e(ad[Y]).hide().data("isExtra",true)}if(ae<=0){af.text("See links ...")}var X=ai.height();ai.data({expandedHeight:W,collapsedHeight:X,collapsedNumLinks:ae})}ai.data({isCollapsed:true,autoCollapseTimerId:-1});var T=ai.css("width");ai.css({position:"absolute",visibility:"visible",width:T,top:ac});if(ac<=P){ai.hide()}}function l(U){var T=e(this);v(T,false)}function v(V,T){var W=V.data("myCrb");W.addClass("stretched");W.css("z-index",1);c(W);if(T&&V.data("isExtra")&&W.data("isCollapsed")){H(W)}var U=V.data("expandedHeight");V.data("isCollapsed",false);V.animate({height:U},{complete:function(){W.css({height:"auto"})},duration:"fast"});V.removeClass("two_line").addClass("expanded");s(V)}function a(U){var T=e(this);y(T)}function y(T){var U=T.data("myCrb");T.removeClass("expanded").addClass("two_line");k(T);T.animate({height:x},{complete:function(){T.data("isCollapsed",true);B(U);U.css({height:"auto"})},duration:"fast"})}function S(V){console.info("hoverOverBodyLink");var U=e(this);var T=U.data("ncbipopper");if(T){T.open()}}function m(W){console.info("hoverOutBodyLink");var V=e(this);var T=V.data("myCrbLink");if(T){k(T);var X=T.data("myCrb");b(X)}var U=V.data("ncbipopper");if(U){U.close()}}function s(T){console.info("highlightLink");T.addClass("highlight");T.data("myBodyLinks").addClass("highlight")}function k(T){console.info("unhighlightLink");T.removeClass("highlight");T.data("myBodyLinks").removeClass("highlight")}function B(U){console.info("checkStretched");if(!U.data("isCollapsed")){return}var T=false;U.find("li").each(function(){if(!e(this).data("isCollapsed")){T=true}});if(T){return}U.removeClass("stretched");U.css("z-index",0)}function t(T){console.info("moreLinkClick");var V=e(this);var U=V.parents("div.pmc_para_cit");if(U.data("isCollapsed")){H(U)}else{L(U)}return false}function H(X){c(X);X.data("isCollapsed",false);K=X;X.addClass("stretched");X.css("z-index",1);X.find(".seemore").text("See less ...");var W=X.data();X.animate({height:W.expandedHeight},{complete:function(){X.css({height:"auto"})},duration:"fast"});var V=X.find("ul li.two_line");var U=V.length;for(var T=W.collapsedNumLinks;T<U;++T){e(V[T]).show()}}function L(X){var W=X.data();var T=W.collapsedNumLinks>0?"See more ...":"See links ...";X.find(".seemore").text(T);var V=X.find("ul li");var U=V.length;X.animate({height:W.collapsedHeight},{complete:function(){V.each(function(){var Y=e(this);Y.removeClass("expanded").removeClass("highlight").addClass("two_line");Y.data("isCollapsed",true);if(Y.data("isExtra")){Y.hide()}});X.data("isCollapsed",true);X.removeClass("stretched");X.css("z-index",0);X.css({height:"auto"})},duration:"fast"});K=null}function C(T){b(e(this))}function b(U){if(U.data("isCollapsed")){return}var T=window.setTimeout(function(){L(U)},E);U.data("autoCollapseTimerId",T)}function q(T){n(e(this))}function n(U){var T=U.data("autoCollapseTimerId");if(T==-1){return}window.clearTimeout(T);U.data("autoCollapseTimerId",-1)}function c(T){if(K&&K.attr("id")!=T.attr("id")){L(K)}}function g(T){setTimeout(G,200)}function G(){var T=o();j.each(function(){var U=e(this);if(U.data("myTop")<=T){U.hide()}else{U.show()}})}function o(){var T=0;h.each(function(){var W=e(this);var V=parseInt(W.position().top)+parseInt(W.css("marginTop"));var U=V+W.height();T=Math.max(T,U)});return T}var d=0;function u(Z){if(N.length<1){return}var af=Z.attr("rid");var ab=af.replace(/:/g,"\\:").replace(/\./g,"\\.").replace(/Â·/g,"\\Â·");var ak="body-link-popper-"+af;var aj="body-link-popper-"+ab;d++;var ah=O[af];if(!ah){ah=e("<div/>",{id:ak,"class":"body-link-popper",style:"display: none"});var ae=Z.data("myCrbLink");if(ae){ah.append(ae.children("a").contents().clone());ah.append(ae.children(".alt-note").children().clone());var Y=ae.find("a[href *= 'pubmed']");var U=Y.length>0?"[<a href='"+Y.attr("href")+"' ref='"+Y.attr("ref")+"'>PubMed</a>] ":"";ah.append("<p>"+U+"[<a href='"+Z.attr("href")+"'>Ref list</a>]</p>")}else{var ad=e("#"+ab);if(ad.length>0){var ac=ad.html();var W=e.trim(ac);if(Z.attr("href").charAt(0)=="#"){W+=' [<a href="'+Z.attr("href")+'">Ref list</a>]'}}ah.append(W)}N.append(ah);O[af]=ah}var aa=window.location.href;var T=aa.substring(aa.indexOf("?")+1);var ai=T.split(/&/);var V=ai.length;var X=false;for(var ag=0;ag<V;++ag){if(ai[ag]=="__autoadjust"){X=true}}X=true;var al=X?"autoAdjust":"none";Z.ncbipopper({destSelector:"#"+aj,isTriggerElementCloseClick:false,hasArrow:true,width:"400",adjustFit:al,triggerPosition:"center auto",destPosition:"top auto"})}}jQuery(document).ready(function(){CitedRefBlocks()});