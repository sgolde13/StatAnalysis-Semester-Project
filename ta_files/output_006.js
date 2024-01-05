(function($){$.fn.ncbipopup=function(options){var settings=$.extend({},$.fn.ncbipopup.defaults,options);return this.each(function(){var $popupTrigger=$(this);var overlay=null;$popupTrigger.attr('aria-haspopup','true');var $ariaControl=$('#'+$popupTrigger.attr('aria-controls'));if(!$ariaControl.length){throw('ncbipopup: No elements matched #'+$popupTrigger.attr('aria-controls'))}
if(settings.showOverlay){overlay=new ncbi.nwds.Overlay();$(document).on('overlay-dismissed',function(event){hidePopup($ariaControl);});}
init($ariaControl);$popupTrigger.on('click',function(e){if(getAttributeValue($ariaControl,'aria-hidden')==='true'){showPopup($ariaControl);if(settings.showOverlay===true){overlay.show();}}else{hidePopup($ariaControl);if(settings.showOverlay===true){overlay.hide();}}});$ariaControl.on('click','.ncbi-close-button',function(e){if(settings.showOverlay===true){overlay.hide();}else{hidePopup($ariaControl);}
$popupTrigger.focus();});focusTrap($ariaControl,{onKeyESC:function(event){$ariaControl.find('.ncbi-close-button').trigger('click');$popupTrigger.focus();event.stopPropagation();}});function init($ariaControl){$ariaControl.attr('tabindex',-1);if(settings.showOverlay){$ariaControl.attr('aria-modal','true')}
if(getAttributeValue($ariaControl,'aria-hidden')==='true'){hidePopup($ariaControl);}else{showPopup($ariaControl);}}
function hidePopup($ariaControl){$ariaControl.hide().attr('aria-hidden','true');$popupTrigger.attr('aria-expanded','false');settings.onHidden.call();}
function showPopup($ariaControl){$ariaControl.show().attr('aria-hidden','false');$popupTrigger.attr('aria-expanded','true');$ariaControl.find('.ncbi-close-button').focus();settings.onShown.call();}});function getAttributeValue($elem,attrName){return typeof $elem.attr(attrName)==='undefined'?'':$elem.attr(attrName);}};$.fn.ncbipopup.defaults={showOverlay:true,onHidden:function(){},onShown:function(){},};var focusTrap=function($container,options){var settings=$.extend({},{onKeyTab:function(e){},onKeyESC:function(e){}},options);var focusableElementsString="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";var KEY={TAB:9,SHIFT:16,ESC:27};$container.on('keydown',function(event){if(event.keyCode===KEY.TAB){var children=$container.find('*');var focusableItems=children.filter(focusableElementsString).filter(':visible');var focusedItem=$(document.activeElement);var numberOfFocusableItems=focusableItems.length;var focusedItemIndex=focusableItems.index(focusedItem);if(!event.shiftKey&&(focusedItemIndex==numberOfFocusableItems-1)){focusableItems.get(0).focus();event.preventDefault();}
if(event.shiftKey&&focusedItemIndex==0){focusableItems.get(numberOfFocusableItems-1).focus();event.preventDefault();}
settings.onKeyTab.call(this,event);}});$(document).on('keydown',function(event){if(event.keyCode==KEY.ESC){settings.onKeyESC.call(this,event);}});};})(jQuery);;