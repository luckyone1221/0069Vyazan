// @fancyapps/ui/Panzoom v4.0.0-alpha.4
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?a(t):e}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=r(t);if(e){var o=r(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return h(this,i)}}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,o,r=[],s=!0,a=!1;try{for(i=i.call(t);!(s=(n=i.next()).done)&&(r.push(n.value),!e||r.length!==e);s=!0);}catch(t){a=!0,o=t}finally{try{s||null==i.return||i.return()}finally{if(a)throw o}}return r}(t,e)||d(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(t){if("string"==typeof t)return f(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function p(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=d(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,a=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,r=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw r}}}}var v=function(t){return"object"===e(t)&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t)},g=function t(){for(var i=!1,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];"boolean"==typeof o[0]&&(i=o.shift());var s=o[0];if(!s||"object"!==e(s))throw new Error("extendee must be an object");for(var a=o.slice(1),h=a.length,c=0;c<h;c++){var l=a[c];for(var u in l)if(l.hasOwnProperty(u)){var d=l[u];if(i&&(Array.isArray(d)||v(d))){var f=Array.isArray(d)?[]:{};s[u]=t(!0,s.hasOwnProperty(u)?s[u]:f,d)}else s[u]=d}}return s},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return t=parseFloat(t)||0,Math.round((t+Number.EPSILON)*e)/e},m="undefined"!=typeof window&&window.ResizeObserver||function(){function t(e){i(this,t),this.observables=[],this.boundCheck=this.check.bind(this),this.boundCheck(),this.callback=e}return o(t,[{key:"observe",value:function(t){if(!this.observables.some((function(e){return e.el===t}))){var e={el:t,size:{height:t.clientHeight,width:t.clientWidth}};this.observables.push(e)}}},{key:"unobserve",value:function(t){this.observables=this.observables.filter((function(e){return e.el!==t}))}},{key:"disconnect",value:function(){this.observables=[]}},{key:"check",value:function(){var t=this.observables.filter((function(t){var e=t.el.clientHeight,i=t.el.clientWidth;if(t.size.height!==e||t.size.width!==i)return t.size.height=e,t.size.width=i,!0})).map((function(t){return t.el}));t.length>0&&this.callback(t),window.requestAnimationFrame(this.boundCheck)}}]),t}(),b=function t(e){return!(!e||e.classList.contains("carousel__track")||e===document.body)&&(function(t){var e=window.getComputedStyle(t)["overflow-y"],i=window.getComputedStyle(t)["overflow-x"],n=("scroll"===e||"auto"===e)&&Math.abs(t.scrollHeight-t.clientHeight)>1,o=("scroll"===i||"auto"===i)&&Math.abs(t.scrollWidth-t.clientWidth)>1;return n||o}(e)?e:t(e.parentNode))},w=function(t){var e=0;return t&&(e=t instanceof SVGElement?Math.min(t.getClientRects()[0].height,t.height.baseVal.value):Math.max(t.offsetHeight,t.scrollHeight)),e},P={panOnlyZoomed:!1,lockAxis:!1,friction:.72,decelFriction:.92,zoomFriction:.72,bounceForce:.1,baseScale:1,minScale:1,maxScale:2,step:.5,zoomInCentered:!0,pinchToZoom:!0,textSelection:!0,click:"toggleZoom",clickDelay:250,doubleClick:!1,wheel:"zoom",wheelFactor:30,wheelLimit:3,touch:!0,draggableClass:"is-draggable",draggingClass:"is-dragging"},x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(n,t);var e=c(n);function n(t){var o,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(this,n),r=g(!0,{},P,r),o=e.call(this,r),!(t instanceof HTMLElement))throw new Error("Viewport not found");o.state="init",o.$viewport=t;for(var s=0,h=["onPointerDown","onPointerMove","onPointerUp","onWheel","onClick"];s<h.length;s++){var c=h[s];o[c]=o[c].bind(a(o))}if(o.$content=o.option("content"),o.$content||(o.$content=o.$viewport.querySelector(".panzoom__content")),!o.$content)throw new Error("Content not found");if(!1===o.option("textSelection")&&o.$viewport.classList.add("not-selectable"),o.resetValues(),o.attachPlugins(n.Plugins),o.trigger("init"),o.handleContent(),o.attachEvents(),o.trigger("ready"),"init"===o.state){var l=o.option("baseScale");1===l?(o.state="ready",o.handleCursor()):o.panTo({scale:l,friction:0})}return o}return o(n,[{key:"handleContent",value:function(){var t=this;if(this.$content instanceof HTMLImageElement){var e=function(){var e=t.$content.naturalWidth;t.maxScale=t.option("maxScale"),t.options.maxScale=function(){var t=this.contentDim.width;return e>0&&t>0?e/t*this.maxScale:this.maxScale},t.updateMetrics(),t.trigger(e>0?"load":"error")};!0!==this.$content.complete?(this.$content.onload=function(){return e()},this.$content.onerror=function(){return e()}):e()}else this.updateMetrics()}},{key:"resetValues",value:function(){this.viewportDim={top:0,left:0,width:0,height:0},this.contentDim={width:0,height:0},this.friction=this.option("friction"),this.current={x:0,y:0,scale:1},this.velocity={x:0,y:0,scale:0},this.pan={x:0,y:0,scale:1},this.drag={startTime:null,firstPosition:null,startPosition:null,startPoint:null,startDistance:null,endPosition:null,endPoint:null,distance:0,distanceX:0,distanceY:0,elapsedTime:0},this.lockAxis=null,this.pendingAnimateUpdate=null,this.pendingResizeUpdate=null,this.pointers=[]}},{key:"updateMetrics",value:function(){var t,e,i=this.$viewport.getBoundingClientRect(),n=i.top,o=i.left,r=i.width,s=i.height,a=window.getComputedStyle(this.$viewport);r-=parseFloat(a.paddingLeft)+parseFloat(a.paddingRight),s-=parseFloat(a.paddingTop)+parseFloat(a.paddingBottom),this.viewportDim={top:n,left:o,width:r,height:s},this.contentDim={width:this.option("width",(t=this.$content,e=0,t&&(e=t instanceof SVGElement?Math.min(t.getClientRects()[0].width,t.width.baseVal.value):Math.max(t.offsetWidth,t.scrollWidth)),e)),height:this.option("hidth",w(this.$content))},this.trigger("updateMetrics"),this.updateBounds()}},{key:"updateBounds",value:function(t){var e={from:0,to:0},i={from:0,to:0};if(t||(t=this.velocity.scale?this.pan.scale:this.current.scale),t<1)return[e,i];var n=this.contentDim,o=this.viewportDim,r=n.width*t,s=n.height*t;return e.to=y(.5*(r-n.width)),n.width>o.width?e.from=y(e.to+o.width-r):e.from=y(-1*e.to),i.to=y(.5*(s-n.height)),n.height>o.height?i.from=y(i.to+o.height-s):i.from=y(-1*i.to),this.boundX=e,this.boundY=i,this.trigger("updateBounds",t),[this.boundX,this.boundY]}},{key:"zoomIn",value:function(t){this.zoomTo(this.current.scale+(t||this.option("step")))}},{key:"zoomOut",value:function(t){this.zoomTo(this.current.scale-(t||this.option("step")))}},{key:"toggleZoom",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.option("maxScale"),i=this.option("baseScale");this.zoomTo(this.current.scale>i+.5*(e-i)?i:e,t)}},{key:"zoomTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.x,n=void 0===i?null:i,o=e.y,r=void 0===o?null:o,s=e.friction,a=void 0===s?this.option("zoomFriction"):s;t||(t=this.option("baseScale")),t=Math.max(Math.min(t,this.option("maxScale")),this.option("minScale"));var h=this.contentDim.width,c=this.contentDim.height,l=h*this.current.scale,u=c*this.current.scale,d=h*t,f=c*t;null===n&&(n=.5*l),null===r&&(r=.5*u),!1===this.option("zoomInCentered")&&(n<.5*l&&(n=l),n>l&&(n=0),r<0&&(r=u),r>u&&(r=0));var p=l>0?n/l:0,v=u>0?r/u:0,g=(d-l)*(p-.5),y=(f-u)*(v-.5);Math.abs(g)<1&&(g=0),Math.abs(y)<1&&(y=0),n=this.current.x-g,r=this.current.y-y,this.panTo({x:n,y:r,scale:t,friction:a})}},{key:"panTo",value:function(t){var e=t.x,i=void 0===e?0:e,n=t.y,o=void 0===n?0:n,r=t.scale,s=void 0===r?this.current.scale:r,a=t.friction,h=void 0===a?this.option("friction"):a,c=t.ignoreBounds,u=void 0!==c&&c;if(h||this.stopMoving(),!0!==u){var d=l(this.updateBounds(s),2),f=d[0],p=d[1];f&&(i=Math.max(Math.min(i,f.to),f.from)),p&&(o=Math.max(Math.min(o,p.to),p.from))}return h>0&&(Math.abs(i-this.current.x)>.1||Math.abs(o-this.current.y)>.1||Math.abs(s-this.current.scale)>.1)?(this.state="panning",this.friction=h,this.pan={x:i,y:o,scale:s},this.velocity={x:(1/this.friction-1)*(i-this.current.x),y:(1/this.friction-1)*(o-this.current.y),scale:(1/this.friction-1)*(s-this.current.scale)},this.animate(),this):(this.pendingAnimateUpdate&&(cancelAnimationFrame(this.pendingAnimateUpdate),this.pendingAnimateUpdate=null),this.state="ready",this.stopMoving(),this.current={x:i,y:o,scale:s},this.transform(),this.handleCursor(),this.trigger("afterAnimate",!0),this)}},{key:"animate",value:function(){var t=this;if(!this.pendingAnimateUpdate){if(this.applyBoundForce(),this.applyDragForce(),this.velocity.x*=this.friction,this.velocity.y*=this.friction,this.velocity.scale*=this.friction,this.current.x+=this.velocity.x,this.current.y+=this.velocity.y,this.current.scale+=this.velocity.scale,"dragging"==this.state||"pointerdown"==this.state||Math.abs(this.velocity.x)>.05||Math.abs(this.velocity.y)>.05||Math.abs(this.velocity.scale)>.05)return this.transform(),void(this.pendingAnimateUpdate=requestAnimationFrame((function(){t.pendingAnimateUpdate=null,t.animate()})));this.current.x=y(this.current.x+this.velocity.x/(1/this.friction-1)),this.current.y=y(this.current.y+this.velocity.y/(1/this.friction-1)),Math.abs(this.current.x)<.5&&(this.current.x=0),Math.abs(this.current.y)<.5&&(this.current.y=0),this.current.scale=y(this.current.scale+this.velocity.scale/(1/this.friction-1),1e4),Math.abs(this.current.scale-1)<.01&&(this.current.scale=1),this.state="ready",this.stopMoving(),this.transform(),this.handleCursor(),this.trigger("afterAnimate")}}},{key:"handleCursor",value:function(){var t=this.option("draggableClass");t&&this.option("touch")&&(this.contentDim.width<=this.viewportDim.width&&1==this.option("panOnlyZoomed")&&this.current.scale<=this.option("baseScale")?this.$viewport.classList.remove(t):this.$viewport.classList.add(t))}},{key:"isMoved",value:function(){return 0!==this.current.x||0!==this.current.y||1!==this.current.scale||this.velocity.x>0||this.velocity.y>0||this.velocity.scale>0}},{key:"stopMoving",value:function(){this.velocity={x:0,y:0,scale:0}}},{key:"transform",value:function(){this.trigger("beforeTransform");var t=y(this.current.x,100),e=y(this.current.y,100),i=y(this.current.scale,1e4);Math.abs(t)<=.1&&Math.abs(e)<=.1&&Math.abs(i-1)<=.1?this.$content.style.transform="":this.$content.style.transform="translate(".concat(t,"px, ").concat(e,"px) scale(").concat(i,")"),this.trigger("afterTransform")}},{key:"applyBoundForce",value:function(){if("decel"===this.state){var t,e,i,n,o={x:0,y:0},r=this.option("bounceForce"),s=this.boundX,a=this.boundY;if(s&&(t=this.current.x<s.from,e=this.current.x>s.to),a&&(i=this.current.y<a.from,n=this.current.y>a.to),t||e){var h=(t?s.from:s.to)-this.current.x,c=h*r,l=this.current.x+(this.velocity.x+c)/(1/this.friction-1);t&&l<s.from||e&&l>s.to||(c=h*r-this.velocity.x),o.x=c}if(i||n){var u=(i?a.from:a.to)-this.current.y,d=u*r,f=this.current.y+(this.velocity.y+d)/(1/this.friction-1);i&&f<a.from||n&&f>a.to||(d=u*r-this.velocity.y),o.y=d}this.velocity.x+=o.x,this.velocity.y+=o.y}}},{key:"applyDragForce",value:function(){"dragging"===this.state&&(this.velocity={x:(1/this.friction-1)*(this.drag.endPosition.x-this.current.x),y:(1/this.friction-1)*(this.drag.endPosition.y-this.current.y),scale:(1/this.friction-1)*(this.drag.endPosition.scale-this.current.scale)})}},{key:"attachEvents",value:function(){var t=this,e=this.$viewport;this.resizeObserver=this.resizeObserver||new m((function(e){t.pendingResizeUpdate=t.pendingResizeUpdate||setTimeout((function(){var i=e&&e[0].contentRect;!i&&t.$viewport&&(i=t.$viewport.getBoundingClientRect()),i&&(Math.abs(i.width-t.viewportDim.width)>1||Math.abs(i.height-t.viewportDim.height)>1)&&t.updateMetrics(),t.pendingResizeUpdate=null}),t.option("updateRate",250))})),this.resizeObserver.observe(e),e.addEventListener("click",this.onClick,{passive:!1}),e.addEventListener("wheel",this.onWheel,{passive:!1}),this.option("touch")&&(window.PointerEvent?(e.addEventListener("pointerdown",this.onPointerDown,{passive:!1}),e.addEventListener("pointermove",this.onPointerMove,{passive:!1}),e.addEventListener("pointerup",this.onPointerUp),e.addEventListener("pointercancel",this.onPointerUp)):(e.addEventListener("touchstart",this.onPointerDown,{passive:!1}),e.addEventListener("touchmove",this.onPointerMove,{passive:!1}),e.addEventListener("touchend",this.onPointerUp),e.addEventListener("touchcancel",this.onPointerUp),e.addEventListener("mousedown",this.onPointerDown)))}},{key:"detachEvents",value:function(){this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeObserver=null,this.pendingResizeUpdate&&(clearTimeout(this.pendingResizeUpdate),this.pendingResizeUpdate=null);var t=this.$viewport;window.PointerEvent?(t.removeEventListener("pointerdown",this.onPointerDown,{passive:!1}),t.removeEventListener("pointermove",this.onPointerMove,{passive:!1}),t.removeEventListener("pointerup",this.onPointerUp),t.removeEventListener("pointercancel",this.onPointerUp)):(t.removeEventListener("touchstart",this.onPointerDown,{passive:!1}),t.removeEventListener("touchmove",this.onPointerMove,{passive:!1}),t.removeEventListener("touchend",this.onPointerUp),t.removeEventListener("touchcancel",this.onPointerUp),t.removeEventListener("mousedown",this.onPointerDown)),t.removeEventListener("click",this.onClick,{passive:!1}),t.removeEventListener("wheel",this.onWheel,{passive:!1})}},{key:"copyPointer",value:function(t){return{pointerId:t.pointerId,clientX:t.clientX,clientY:t.clientY}}},{key:"findPointerIndex",value:function(t){for(var e=this.pointers.length;e--;)if(this.pointers[e].pointerId===t.pointerId)return e;return-1}},{key:"addPointer",value:function(t){var e=0;if(t.touches&&t.touches.length){var i,n=p(t.touches);try{for(n.s();!(i=n.n()).done;){var o=i.value;o.pointerId=e++,this.addPointer(o)}}catch(t){n.e(t)}finally{n.f()}}else(e=this.findPointerIndex(t))>-1&&this.pointers.splice(e,1),this.pointers.push(t)}},{key:"removePointer",value:function(t){if(t.touches)for(;this.pointers.length;)this.pointers.pop();else{var e=this.findPointerIndex(t);e>-1&&this.pointers.splice(e,1)}}},{key:"getMiddlePoint",value:function(){var t=u(this.pointers),e=(t=t.sort((function(t,e){return e.pointerId-t.pointerId}))).shift(),i=t.shift();return i?{clientX:.5*(e.clientX-i.clientX)+i.clientX,clientY:.5*(e.clientY-i.clientY)+i.clientY}:{clientX:e?e.clientX:0,clientY:e?e.clientY:0}}},{key:"getDistance",value:function(t,e){if(!(t=(t=t||u(this.pointers)).slice())||t.length<2)return 0;var i=(t=t.sort((function(t,e){return e.pointerId-t.pointerId}))).shift(),n=t.shift(),o=Math.abs(n.clientX-i.clientX);if("x"===e)return o;var r=Math.abs(n.clientY-i.clientY);return"y"===e?r:Math.sqrt(Math.pow(o,2)+Math.pow(r,2))}},{key:"resetDragState",value:function(){var t=this.$content.getClientRects()[0],e=t.left,i=t.top,n=this.getMiddlePoint(),o={top:i,left:e,x:this.current.x,y:this.current.y,scale:this.current.scale};g(this.drag,{startPosition:g({},o),startPoint:g({},n),startDistance:this.getDistance(),endPosition:g({},o),endPoint:g({},n),distance:0,distanceX:0,distanceY:0}),"pointerdown"===this.state&&(this.lockAxis=null,this.drag.startTime=new Date,this.drag.firstPosition=Object.assign({},o)),this.stopMoving(),this.friction=this.option("friction")}},{key:"onPointerDown",value:function(t){if(t&&!(t.button&&t.button>0))if(this.option("panOnlyZoomed")&&this.velocity.scale)t.preventDefault();else{if(this.resetDragState(),!this.pointers.length){if(-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(t.target.nodeName))return;if(this.option("textSelection")&&function(t,e,i){for(var n=t.childNodes,o=document.createRange(),r=0;r<n.length;r++){var s=n[r];if(s.nodeType===Node.TEXT_NODE){o.selectNodeContents(s);var a=o.getBoundingClientRect();if(e>=a.left&&i>=a.top&&e<=a.right&&i<=a.bottom)return s}}return!1}(t.target,t.clientX,t.clientY))return;if(b(t.target))return}var e;if((e=window.getSelection?window.getSelection():document.selection)&&e.rangeCount&&e.getRangeAt(0).getClientRects().length&&(e.removeAllRanges?e.removeAllRanges():e.empty&&e.empty()),this.pointers.length>1||this.pointers.length&&this.lockAxis)t.preventDefault();else if(!1!==this.trigger("touchStart",t))if(t.preventDefault(),this.state="pointerdown",this.addPointer(this.copyPointer(t)),this.resetDragState(),window.PointerEvent)try{t.target.setPointerCapture(t.pointerId)}catch(t){}else document.addEventListener("mousemove",this.onPointerMove,{passive:!1}),document.addEventListener("mouseup",this.onPointerUp,{passive:!1})}}},{key:"onPointerMove",value:function(t){if(!(t.targetTouches&&t.targetTouches.length>1||"pointerdown"!==this.state&&"dragging"!==this.state))if(0!=this.trigger("touchMove",t)){if(this.addPointer(this.copyPointer(t)),!(this.pointers.length>1&&!1===this.option("pinchToZoom")))if(1==this.option("panOnlyZoomed")&&this.current.scale===this.option("baseScale")&&this.pointers.length<2)t.preventDefault();else{var e=this.getMiddlePoint(),i=[e,this.drag.startPoint];this.drag.distance=this.getDistance(i);var n=this.events.click&&this.events.click.length||this.events.doubleClick&&this.events.doubleClick.length||this.option.click||this.option.doubleClick;if(!(this.drag.distance<6&&(n||this.option("lockAxis")&&!this.lockAxis))&&("pointerdown"==this.state&&(this.state="dragging"),"dragging"===this.state)){var o=this.option("lockAxis");if(!this.lockAxis&&o)if("xy"===o){var r=this.getDistance(i,"x"),s=this.getDistance(i,"y"),a=Math.abs(180*Math.atan2(s,r)/Math.PI);this.lockAxis=a>45&&a<135?"y":"x"}else this.lockAxis=o;t.preventDefault(),t.stopPropagation(),this.$viewport.classList.add(this.option("draggingClass")),this.animate();var h=this.current.scale,c=0,l=0;if(this.current.scale===this.option("baseScale")&&"y"===this.lockAxis||(c=e.clientX-this.drag.startPoint.clientX),this.current.scale===this.option("baseScale")&&"x"===this.lockAxis||(l=e.clientY-this.drag.startPoint.clientY),this.drag.endPosition.x=this.drag.startPosition.x+c,this.drag.endPosition.y=this.drag.startPosition.y+l,this.pointers.length>1){this.drag.middlePoint=e,h=this.drag.startPosition.scale*this.getDistance()/this.drag.startDistance,h=Math.max(Math.min(h,2*this.option("maxScale")),.5*this.option("minScale"));var u=this.$content.width,d=this.$content.height,f=u*this.drag.startPosition.scale,p=d*this.drag.startPosition.scale,v=d*h,g=(u*h-f)*((this.drag.startPoint.clientX-this.drag.startPosition.left)/f-.5),y=(v-p)*((this.drag.startPoint.clientY-this.drag.startPosition.top)/p-.5);this.drag.endPosition.x-=g,this.drag.endPosition.y-=y,this.drag.endPosition.scale=h,this.updateBounds(h)}this.applyDragResistance()}}}else t.preventDefault()}},{key:"onPointerUp",value:function(t){if(this.removePointer(t),window.PointerEvent)try{t.target.releasePointerCapture(t.pointerId)}catch(t){}else document.removeEventListener("mousemove",this.onPointerMove,{passive:!1}),document.removeEventListener("mouseup",this.onPointerUp,{passive:!1});if(this.pointers.length>0)return t.preventDefault(),void this.resetDragState();if("pointerdown"===this.state||"dragging"===this.state){this.$viewport.classList.remove(this.option("draggingClass"));var e=this.$content.getClientRects()[0],i=e.top,n=e.left,o=this.drag;if(g(!0,o,{elapsedTime:new Date-o.startTime,distanceX:o.endPosition.x-o.firstPosition.x,distanceY:o.endPosition.y-o.firstPosition.y,endPosition:{top:i,left:n}}),o.distance=Math.sqrt(Math.pow(o.distanceX,2)+Math.pow(o.distanceY,2)),this.state="decel",this.friction=this.option("decelFriction"),this.pan={x:this.current.x+this.velocity.x/(1/this.friction-1),y:this.current.y+this.velocity.y/(1/this.friction-1),scale:this.current.scale+this.velocity.scale/(1/this.friction-1)},!1!==this.trigger("touchEnd",t)&&"decel"===this.state){var r=this.option("minScale");if(this.current.scale<r)this.zoomTo(r,{friction:.64});else{var s=this.option("maxScale");if(this.current.scale-s>.01){var a={friction:.64};o.middlePoint&&(a.x=o.middlePoint.clientX-n,a.y=o.middlePoint.clientY-i),this.zoomTo(s,a)}}}}}},{key:"applyDragResistance",value:function(){var t,e,i,n,o=this.boundX,r=this.boundY;if(o&&(t=this.drag.endPosition.x<o.from,e=this.drag.endPosition.x>o.to),r&&(i=this.drag.endPosition.y<r.from,n=this.drag.endPosition.y>r.to),t||e){var s=t?o.from:o.to,a=this.drag.endPosition.x-s;this.drag.endPosition.x=s+.3*a}if(i||n){var h=i?r.from:r.to,c=this.drag.endPosition.y-h;this.drag.endPosition.y=h+.3*c}}},{key:"onWheel",value:function(t){!1!==this.trigger("wheel",t)&&"zoom"==this.option("wheel",t)&&this.zoomWithWheel(t)}},{key:"zoomWithWheel",value:function(t){void 0===this.changedDelta&&(this.changedDelta=0);var e=this.current.scale,i=Math.max(-1,Math.min(1,-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail));if(i<0&&e<=this.option("minScale")||i>0&&e>=this.option("maxScale")){if(this.changedDelta+=Math.abs(i),this.changedDelta>this.option("wheelLimit"))return}else this.changedDelta=0;e=e*(100+i*this.option("wheelFactor"))/100,t.preventDefault();var n=this.$content.getClientRects()[0],o=n.top,r=n.left,s=t.clientX-r,a=t.clientY-o;this.zoomTo(e,{x:s,y:a})}},{key:"onClick",value:function(t){var e=this;if(!t.defaultPrevented){if(window.getSelection().toString().length)return t.stopPropagation(),void t.stopImmediatePropagation();if(this.drag.startPosition&&this.drag.endPosition&&(Math.abs(this.drag.endPosition.top-this.drag.startPosition.top)>1||Math.abs(this.drag.endPosition.left-this.drag.startPosition.left)>1))return t.stopPropagation(),void t.stopImmediatePropagation();if(this.drag.distance>(this.lockAxis?6:1))return t.preventDefault(),t.stopPropagation(),void t.stopImmediatePropagation();var i=null,n=null;void 0!==t.clientX&&void 0!==t.clientY&&(i=t.clientX-this.$content.getClientRects()[0].left,n=t.clientY-this.$content.getClientRects()[0].top);var o=this.options.doubleClick;if(!o&&this.events.doubleClick&&this.events.doubleClick.length&&(o=!0),o){if(!this.clickTimer)return this.lastClickEvent=t,void(this.clickTimer=setTimeout((function(){e.clickTimer=null,!1!==e.trigger("click",t)&&"toggleZoom"===e.option("click")&&e.toggleZoom({x:i,y:n})}),this.option("clickDelay")));this.getDistance([t,this.lastClickEvent])>=6||(clearTimeout(this.clickTimer),this.clickTimer=null,!1!==this.trigger("doubleClick",t)&&"toggleZoom"===this.option("doubleClick")&&this.toggleZoom({x:i,y:n}))}else{if(!1===this.trigger("click",t))return;"toggleZoom"===this.option("click")&&this.toggleZoom({x:i,y:n})}}}},{key:"destroy",value:function(){"destroy"!==this.state&&(this.state="destroy",this.$viewport.classList.remove("not-selectable"),this.$content instanceof HTMLImageElement&&!this.$content.complete&&(this.$content.onload=null,this.$content.onerror=null),this.pendingAnimateUpdate&&(cancelAnimationFrame(this.pendingAnimateUpdate),this.pendingAnimateUpdate=null),this.clickTimer&&(clearTimeout(this.clickTimer),this.clickTimer=null),this.detachEvents(),this.pointers=[],this.resetValues(),this.$viewport=null,this.$content=null,this.options={},this.events={})}}]),n}(function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.options=g(!0,{},e),this.plugins=[],this.events={};for(var n=0,o=["on","once"];n<o.length;n++)for(var r=o[n],s=0,a=Object.entries(this.options[r]||{});s<a.length;s++){var h=a[s];this[r].apply(this,u(h))}}return o(t,[{key:"option",value:function(t,e){t=String(t);var i,n,o=(i=t,n=this.options,i.split(".").reduce((function(t,e){return t[e]}),n));return"function"==typeof o&&(o=o.call(this,t)),void 0===o?e:o}},{key:"localize",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,(function(t,n,o){var r=!1;if(!(r=o?e.option("".concat(n[0]+n.toLowerCase().substring(1),".l10n.").concat(o)):e.option("l10n.".concat(n))))return n;for(var s=0;s<i.length;s++)r=r.split(i[s][0]).join(i[s][1]);return r}))}},{key:"on",value:function(t,e){var i=this;if(v(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var r=o[n];this.on.apply(this,u(r))}return this}return String(t).split(" ").forEach((function(t){var n=i.events[t]=i.events[t]||[];-1==n.indexOf(e)&&n.push(e)})),this}},{key:"once",value:function(t,e){var i=this;if(v(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var r=o[n];this.once.apply(this,u(r))}return this}return String(t).split(" ").forEach((function(t){var n=function n(){i.off(t,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];e.call.apply(e,[i,i].concat(r))};n._=e,i.on(t,n)})),this}},{key:"off",value:function(t,e){var i=this;if(!v(t))return t.split(" ").forEach((function(t){var n=i.events[t];if(!n||!n.length)return i;for(var o=-1,r=0,s=n.length;r<s;r++){var a=n[r];if(a&&(a===e||a._===e)){o=r;break}}-1!=o&&n.splice(o,1)})),this;for(var n=0,o=Object.entries(t);n<o.length;n++){var r=o[n];this.off.apply(this,u(r))}}},{key:"trigger",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var o,r=p(u(this.events[t]||[]).slice());try{for(r.s();!(o=r.n()).done;){var s=o.value;if(s&&!1===s.call.apply(s,[this,this].concat(i)))return!1}}catch(t){r.e(t)}finally{r.f()}var a,h=p(u(this.events["*"]||[]).slice());try{for(h.s();!(a=h.n()).done;){var c=a.value;if(c&&!1===c.call.apply(c,[this,t,this].concat(i)))return!1}}catch(t){h.e(t)}finally{h.f()}return!0}},{key:"attachPlugins",value:function(t){for(var e={},i=0,n=Object.entries(t||{});i<n.length;i++){var o=l(n[i],2),r=o[0],s=o[1];!1!==this.options[r]&&(this.options[r]=g({},s.defaults||{},this.options[r]),e[r]=new s(this))}for(var a=0,h=Object.entries(e);a<h.length;a++){var c=l(h[a],2);c[0],c[1].attach(this)}return this.plugins=Object.assign({},this.plugins,e),this}},{key:"detachPlugins",value:function(){for(var t in this.plugins){var e=void 0;(e=this.plugins[t])&&"function"==typeof e.detach&&e.detach(this)}return this.plugins={},this}}]),t}());x.version="4.0.0-alpha.4",x.Plugins={},t.Panzoom=x}));
