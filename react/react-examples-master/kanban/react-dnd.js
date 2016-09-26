!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):"object"==typeof exports?exports.ReactDND=e():t.ReactDND=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(32),i=r.HTML5,o=n(39);t.exports={DragDropMixin:o(i),ImagePreloaderMixin:n(34),DragLayerMixin:n(33),HorizontalDragAnchors:n(19),VerticalDragAnchors:n(20),NativeDragItemTypes:n(8),DropEffects:n(7)}},function(t){function e(t){return"number"==typeof t&&t>-1&&t%1==0&&n>=t}var n=Math.pow(2,53)-1;t.exports=e},function(t){function e(t){var e=typeof t;return"function"==e||t&&"object"==e||!1}t.exports=e},function(t,e,n){function r(t){return null==t?!1:f.call(t)==s?l.test(u.call(t)):o(t)&&a.test(t)||!1}var i=n(73),o=n(4),s="[object Function]",a=/^\[object .+?Constructor\]$/,c=Object.prototype,u=Function.prototype.toString,f=c.toString,l=RegExp("^"+i(f).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=r},function(t){function e(t){return t&&"object"==typeof t||!1}t.exports=e},function(t,e,n){var r=n(1),i=n(3),o=n(4),s="[object Array]",a=Object.prototype,c=a.toString,u=i(u=Array.isArray)&&u,f=u||function(t){return o(t)&&r(t.length)&&c.call(t)==s||!1};t.exports=f},function(t,e,n){"use strict";var r=n(17),i=r({DRAG_START:null,DRAG_END:null,DRAG:null,DROP:null});t.exports=i},function(t){"use strict";var e={COPY:"copy",MOVE:"move",LINK:"link"};t.exports=e},function(t){"use strict";var e={FILE:"__NATIVE_FILE__",URL:"__NATIVE_URL__"};t.exports=e},function(t,e,n){"use strict";var r=n(48).Dispatcher,i=n(15),o=i(new r,{handleAction:function(t){this.dispatch({action:t})}});t.exports=o},function(t,e,n){"use strict";var r=n(9),i=n(6),o=n(22),s=null,a=null,c=null,u=o({getInitialOffsetFromContainer:function(){return s},getInitialOffsetFromClient:function(){return a},getCurrentOffsetFromClient:function(){return c}});u.dispatchToken=r.register(function(t){var e=t.action;switch(e.type){case i.DRAG_START:s=e.offsetFromContainer,a=e.offsetFromClient,c=e.offsetFromClient,u.emitChange();break;case i.DRAG:c=e.offsetFromClient,u.emitChange();break;case i.DRAG_END:s=null,a=null,c=null,u.emitChange()}}),t.exports=u},function(t,e,n){"use strict";var r=n(9),i=n(6),o=n(10),s=n(22),a=null,c=null,u=null,f=null,l=s({isDragging:function(){return!!a},getEffectsAllowed:function(){return u},getDropEffect:function(){return f},getDraggedItem:function(){return a},getDraggedItemType:function(){return c}});l.dispatchToken=r.register(function(t){r.waitFor([o.dispatchToken]);var e=t.action;switch(e.type){case i.DRAG_START:f=null,a=e.item,c=e.itemType,u=e.effectsAllowed,l.emitChange();break;case i.DROP:f=e.dropEffect,l.emitChange();break;case i.DRAG_END:a=null,c=null,u=null,f=null,l.emitChange()}}),t.exports=l},function(t){"use strict";function e(){return!!window.safari}t.exports=e},function(t){function e(t,e){return t=+t,e=null==e?n:e,t>-1&&t%1==0&&e>t}var n=Math.pow(2,53)-1;t.exports=e},function(t,e,n){function r(t){var e=o(t)?t.length:void 0;return i(e)&&c.call(t)==s||!1}var i=n(1),o=n(4),s="[object Arguments]",a=Object.prototype,c=a.toString;t.exports=r},function(t){function e(t){if(null==t)throw new TypeError("Object.assign target cannot be null or undefined");for(var e=Object(t),n=Object.prototype.hasOwnProperty,r=1;r<arguments.length;r++){var i=arguments[r];if(null!=i){var o=Object(i);for(var s in o)n.call(o,s)&&(e[s]=o[s])}}return e}t.exports=e},function(t){"use strict";var e=function(t,e,n,r,i,o,s,a){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,s,a],f=0;c=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return u[f++]}))}throw c.framesToPop=1,c}};t.exports=e},function(t,e,n){"use strict";var r=n(16),i=function(t){var e,n={};r(t instanceof Object&&!Array.isArray(t));for(e in t)t.hasOwnProperty(e)&&(n[e]=e);return n};t.exports=i},function(t,e,n){"use strict";var r=n(9),i=n(6),o={startDragging:function(t,e,n,o,s){r.handleAction({type:i.DRAG_START,itemType:t,item:e,effectsAllowed:n,offsetFromClient:o,offsetFromContainer:s})},drag:function(t){r.handleAction({type:i.DRAG,offsetFromClient:t})},recordDrop:function(t){r.handleAction({type:i.DROP,dropEffect:t})},endDragging:function(){r.handleAction({type:i.DRAG_END})}};t.exports=o},function(t,e,n){"use strict";var r=n(17),i=r({LEFT:null,CENTER:null,RIGHT:null});t.exports=i},function(t,e,n){"use strict";var r=n(17),i=r({TOP:null,CENTER:null,BOTTOM:null});t.exports=i},function(t,e,n){"use strict";var r=function(t,e,n){e&&Object.defineProperties(t,e),n&&Object.defineProperties(t.prototype,n)},i=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=n(51),s=n(52),a=function(){function t(){i(this,t),this._entered=[]}return r(t,null,{enter:{value:function(t){return this._entered=o(this._entered.filter(function(e){return document.body.contains(e)&&(!e.contains||e.contains(t))}),[t]),1===this._entered.length},writable:!0,configurable:!0},leave:{value:function(t){return this._entered=s(this._entered.filter(function(t){return document.body.contains(t)}),t),0===this._entered.length},writable:!0,configurable:!0},reset:{value:function(){this._entered=[]},writable:!0,configurable:!0}}),t}();t.exports=a},function(t,e,n){"use strict";function r(t){var e=o({emitChange:function(){this.emit(s)},addChangeListener:function(t){this.on(s,t)},removeChangeListener:function(t){this.removeListener(s,t)}},t,i.prototype);return e.setMaxListeners(0),e}var i=n(77).EventEmitter,o=n(15),s="change";t.exports=r},function(t){"use strict";function e(t){if(!t.dataTransfer)return!1;var e=Array.prototype.slice.call(t.dataTransfer.types);return-1!==e.indexOf("Files")}t.exports=e},function(t,e,n){"use strict";function r(t){switch(t){case i.FILE:case i.URL:return!0;default:return!1}}var i=n(8);t.exports=r},function(t){"use strict";function e(t){var e=Array.prototype.slice.call(t.dataTransfer.types);return-1!==e.indexOf("Url")||-1!==e.indexOf("text/uri-list")}t.exports=e},function(t,e,n){function r(t,e,n){if(e!==e)return i(t,n);for(var r=n-1,o=t.length;++r<o;)if(t[r]===e)return r;return-1}var i=n(66);t.exports=r},function(t,e,n){function r(t,e){var n=t.data,r="string"==typeof e||i(e)?n.set.has(e):n.hash[e];return r?0:-1}var i=n(2);t.exports=r},function(t,e,n){(function(e){var r=n(53),i=n(74),o=n(3),s=o(s=e.Set)&&s,a=o(a=Object.create)&&a,c=a&&s?function(t){return new r(t)}:i(null);t.exports=c}).call(e,function(){return this}())},function(t,e,n){(function(e){var r=n(3),i=/\bthis\b/,o=Object.prototype,s=(s=e.window)&&s.document,a=o.propertyIsEnumerable,c={};!function(){c.funcDecomp=!r(e.WinRTError)&&i.test(function(){return this}),c.funcNames="string"==typeof Function.name;try{c.dom=11===s.createDocumentFragment().nodeType}catch(t){c.dom=!1}try{c.nonEnumArgs=!a.call(arguments,1)}catch(t){c.nonEnumArgs=!0}}(0,0),t.exports=c}).call(e,function(){return this}())},function(t){function e(){}t.exports=e},function(t,e,n){"use strict";function r(t){if(t.nodeType!==O&&(t=t.parentElement),!t)return null;var e=t.getBoundingClientRect();return{top:e.top,left:e.left,width:e.width,height:e.height}}function i(t){return{x:t.clientX,y:t.clientY}}function o(){if(!v){var t=r(p);v=!I(d,t)}return v}function s(){if(h&&!document.body.contains(p)){var t=y.getDraggedItemType();h.handleDragEnd(t,null)}}function a(){var t=y.getDraggedItemType();return E(t)}function c(t){y.isDragging()||(T(t)?D.startDragging(x.URL,null):t.preventDefault())}function u(t){t.preventDefault();var e=C.enter(t.target);e&&!y.isDragging()&&(w(t)?D.startDragging(x.FILE,null):T(t)&&D.startDragging(x.URL,null))}function f(t){a()&&t.preventDefault();var e=i(t);D.drag(e),m&&(t.dataTransfer.dropEffect=m,m=null),p&&A()&&o()&&t.preventDefault()}function l(t){a()&&t.preventDefault();var e=C.leave(t.target);e&&a()&&D.endDragging()}function g(t){a()&&t.preventDefault(),C.reset(),a()&&D.endDragging(),s()}var p,h,d,v,m,D=n(18),y=n(11),x=n(8),_=n(21),w=n(23),T=n(25),E=n(24),b=n(38),I=n(76),A=n(46),O=1,C=new _,L={setup:function(){"undefined"!=typeof window&&(window.addEventListener("dragstart",c),window.addEventListener("dragenter",u,!0),window.addEventListener("dragleave",l,!0),window.addEventListener("dragover",f),window.addEventListener("drop",g))},teardown:function(){"undefined"!=typeof window&&(window.removeEventListener("dragstart",c),window.removeEventListener("dragenter",u,!0),window.removeEventListener("dragleave",l,!0),window.removeEventListener("dragover",f),window.removeEventListener("drop",g))},beginDrag:function(t,e,n,i,o,a,c){var u=e.nativeEvent,f=u.dataTransfer,l=u.target;b(f,n,i,o,a,c),h=t,p=l,d=r(l),v=!1,window.addEventListener("mousemove",s,!0)},endDrag:function(){p=null,h=null,d=null,v=!1,window.removeEventListener("mousemove",s,!0)},dragOver:function(t,e,n){m||(m=n)},getDragSourceProps:function(t,e){return{draggable:!0,onDragStart:t.handleDragStart.bind(t,e),onDragEnd:t.handleDragEnd.bind(t,e)}},getDropTargetProps:function(t,e){return{onDragEnter:t.handleDragEnter.bind(t,e),onDragOver:t.handleDragOver.bind(t,e),onDragLeave:t.handleDragLeave.bind(t,e),onDrop:t.handleDrop.bind(t,e)}},getOffsetFromClient:function(t,e){return i(e)}};t.exports=L},function(t,e,n){"use strict";t.exports={HTML5:n(31)}},function(t,e,n){"use strict";var r=n(11),i=n(10),o={getInitialState:function(){return this.getStateForDragLayerMixin()},getDragLayerState:function(){var t=this.state,e=t.isDragging,n=t.draggedItemType,r=t.draggedItem,i=t.initialOffset,o=t.currentOffset,s=t.currentOffsetFromClient,a=t.initialOffsetFromClient,c=t.initialOffsetFromContainer;return{isDragging:e,draggedItemType:n,draggedItem:r,initialOffset:i,currentOffset:o,currentOffsetFromClient:s,initialOffsetFromClient:a,initialOffsetFromContainer:c}},getStateForDragLayerMixin:function(){var t=i.getInitialOffsetFromClient(),e=i.getCurrentOffsetFromClient(),n=i.getInitialOffsetFromContainer(),o=!1,s=null,a=null,c=null,u=null;return t&&e&&(o=!0,s=r.getDraggedItemType(),a=r.getDraggedItem(),c={x:t.x-n.x,y:t.y-n.y},u={x:e.x-n.x,y:e.y-n.y}),{isDragging:o,draggedItemType:s,draggedItem:a,initialOffset:c,currentOffset:u,currentOffsetFromClient:e,initialOffsetFromClient:t,initialOffsetFromContainer:n}},handleStoreChangeInDragLayerMixin:function(){this.isMounted()&&this.setState(this.getStateForDragLayerMixin())},componentDidMount:function(){i.addChangeListener(this.handleStoreChangeInDragLayerMixin),r.addChangeListener(this.handleStoreChangeInDragLayerMixin)},componentWillUnmount:function(){i.removeChangeListener(this.handleStoreChangeInDragLayerMixin),r.removeChangeListener(this.handleStoreChangeInDragLayerMixin)}};t.exports=o},function(t,e,n){"use strict";var r=n(44),i="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",o={componentDidMount:function(){this._cachedImages={},this._readyImages={},this.preloadImages()},componentDidUpdate:function(){this.preloadImages()},componentWillUnmount:function(){for(var t in this._cachedImages)this._cachedImages[t].src=i;this._cachedImages={}},hasPreloadedImage:function(t){return!!this._readyImages[t]},getPreloadedImage:function(t){return this.hasPreloadedImage(t)?this._cachedImages[t]:void 0},preloadImages:function(){var t=this.getImageUrlsToPreload();t.forEach(this.preloadImage)},preloadImage:function(t){var e=this;if(t&&!this._cachedImages[t]){var n=new Image;n.onload=function(){e.isMounted()&&(e._readyImages[t]=!0)},n.onerror=function(){e.isMounted()&&delete e._cachedImages[t]},n.src=t,this._cachedImages[t]=n}},getDragImageScale:r};t.exports=o},function(t,e,n){"use strict";var r=n(16),i=n(30),o={canDrag:function(){return!0},beginDrag:function(){r(!1,"Drag source must contain a method called beginDrag. See https://github.com/gaearon/react-dnd#drag-source-api")},endDrag:i};t.exports=o},function(t,e,n){"use strict";var r=n(30),i={canDrop:function(){return!0},getDropEffect:function(t,e){return e[0]},enter:r,over:r,leave:r,acceptDrop:r};t.exports=i},function(t,e,n){"use strict";var r=n(10),i={getCurrentOffsetDelta:function(){var t=r.getInitialOffsetFromClient(),e=r.getCurrentOffsetFromClient();return{x:e.x-t.x,y:e.y-t.y}},getInitialOffsetFromClient:function(){return r.getInitialOffsetFromClient()},getCurrentOffsetFromClient:function(){return r.getCurrentOffsetFromClient()},getInitialOffsetFromContainer:function(){return r.getInitialOffsetFromContainer()}};t.exports=i},function(t,e,n){"use strict";function r(t,e,n,r,a,c){try{t.setData("application/json",{})}catch(u){}if(i(n)&&t.setDragImage){var f=o(e,n,r,a);t.setDragImage(n,f.x,f.y)}t.effectAllowed=s(c)}var i=n(47),o=n(43),s=n(42);t.exports=r},function(t,e,n){"use strict";function r(t,e){v(e&&("string"==typeof e||"symbol"==typeof e),"Expected item type to be a non-empty string or a symbol. See %s",t.constructor.displayName)}function i(t,e){var n=t.constructor.displayName;v(t._dragSources[e],'There is no drag source for "%s" registered in %s. Have you forgotten to register it? See configureDragDrop in %s',e,n,n)}function o(t,e){var n=t.constructor.displayName;v(t._dropTargets[e],'There is no drop target for "%s" registered in %s. Have you forgotten to register it? See configureDragDrop in %s',e,n,n)}function s(t){function e(e){0===s&&t.setup(e),s++}function n(e){s--,0===s&&t.teardown(e)}var s=0;return{getInitialState:function(){var t={ownDraggedItemType:null,currentDropEffect:null};return m(t,this.getStateForDragDropMixin())},getActiveDropTargetType:function(){var t=this.state,e=t.draggedItemType,n=t.draggedItem,r=t.ownDraggedItemType,i=this._dropTargets[e];if(!i)return null;if(e===r)return null;var o=i.canDrop;return o(this,n)?e:null},isAnyDropTargetActive:function(t){return t.indexOf(this.getActiveDropTargetType())>-1},getStateForDragDropMixin:function(){return{draggedItem:c.getDraggedItem(),draggedItemType:c.getDraggedItemType()}},getDragState:function(t){return r(this,t),i(this,t),{isDragging:this.state.ownDraggedItemType===t}},getDropState:function(t){r(this,t),o(this,t);var e=this.getActiveDropTargetType()===t,n=!!this.state.currentDropEffect;return{isDragging:e,isHovering:e&&n}},componentWillMount:function(){this._monitor=new f,this._dragSources={},this._dropTargets={},v(this.constructor.configureDragDrop,"%s must implement static configureDragDrop(register, context) to use DragDropMixin",this.constructor.displayName),this.constructor.configureDragDrop(this.registerDragDropItemTypeHandlers,u)},componentDidMount:function(){e(this),c.addChangeListener(this.handleStoreChangeInDragDropMixin)},componentWillUnmount:function(){n(this),c.removeChangeListener(this.handleStoreChangeInDragDropMixin)},registerDragDropItemTypeHandlers:function(t,e){r(this,t);var n=e.dragSource,i=e.dropTarget;n&&(v(!this._dragSources[t],"Drag source for %s specified twice. See configureDragDrop in %s",t,this.constructor.displayName),this._dragSources[t]=D(n,g)),i&&(v(!this._dropTargets[t],"Drop target for %s specified twice. See configureDragDrop in %s",t,this.constructor.displayName),this._dropTargets[t]=D(i,p))},handleStoreChangeInDragDropMixin:function(){this.isMounted()&&this.setState(this.getStateForDragDropMixin())},dragSourceFor:function(e){return r(this,e),i(this,e),t.getDragSourceProps(this,e)},handleDragStart:function(e,n){var r=this,i=this._dragSources[e],o=i.canDrag,s=i.beginDrag;if(!c.isDragging()&&o(this)){var u,f=s(this),g=f.item,p=f.dragPreview,h=f.dragAnchors,d=f.effectsAllowed,m=this.getDOMNode(),D=m.getBoundingClientRect(),_=t.getOffsetFromClient(this,n);u={x:_.x-D.left,y:_.y-D.top},p||(p=m),d||(d=[l.MOVE]),v(y(d)&&d.length>0,"Expected effectsAllowed to be non-empty array"),v(x(g),'Expected return value of beginDrag to contain "item" object'),t.beginDrag(this,n,m,p,h,u,d),a.startDragging(e,g,d,_,u),setTimeout(function(){r.isMounted()&&c.getDraggedItem()===g&&r.setState({ownDraggedItemType:e})})}},handleDragEnd:function(e){t.endDrag(this);var n=this._dragSources[e].endDrag,r=c.getDropEffect();a.endDragging(),this.isMounted()&&this.setState({ownDraggedItemType:null}),n(this,r)},dropTargetFor:function(){for(var e=this,n=arguments.length,i=Array(n),s=0;n>s;s++)i[s]=arguments[s];return i.forEach(function(t){r(e,t),o(e,t)}),t.getDropTargetProps(this,i)},handleDragEnter:function(t,e){if(this.isAnyDropTargetActive(t)&&this._monitor.enter(e.target)){e.preventDefault();var n=this._dropTargets[this.state.draggedItemType],r=n.enter,i=n.getDropEffect,o=c.getEffectsAllowed(),s=c.getDraggedItemType();d(s)&&(o=[l.COPY]);var a=i(this,o);a&&v(o.indexOf(a)>-1,"Effect %s supplied by drop target is not one of the effects allowed by drag source: %s",a,o.join(", ")),this.setState({currentDropEffect:a}),r(this,this.state.draggedItem)}},handleDragOver:function(e,n){if(this.isAnyDropTargetActive(e)){n.preventDefault();var r=this._dropTargets[this.state.draggedItemType].over;r(this,this.state.draggedItem),t.dragOver(this,n,this.state.currentDropEffect||"move")}},handleDragLeave:function(t,e){if(this.isAnyDropTargetActive(t)&&this._monitor.leave(e.target)){this.setState({currentDropEffect:null});var n=this._dropTargets[this.state.draggedItemType].leave;n(this,this.state.draggedItem)}},handleDrop:function(t,e){if(this.isAnyDropTargetActive(t)){e.preventDefault();var n=this.state.draggedItem,r=this._dropTargets[this.state.draggedItemType].acceptDrop,i=this.state.currentDropEffect,o=!!c.getDropEffect();n||(n=h(e)),this._monitor.reset(),o||a.recordDrop(i),this.setState({currentDropEffect:null}),r(this,n,o,c.getDropEffect())}}}}var a=n(18),c=n(11),u=n(37),f=n(21),l=n(7),g=n(35),p=n(36),h=n(41),d=n(24),v=n(16),m=n(15),D=n(70),y=n(5),x=n(2);t.exports=s},function(t){"use strict";function e(t,e){return-1!==t.indexOf(e,t.length-e.length)}t.exports=e},function(t,e,n){"use strict";function r(t){return i(t)?{files:Array.prototype.slice.call(t.dataTransfer.files)}:o(t)?{urls:(t.dataTransfer.getData("Url")||t.dataTransfer.getData("text/uri-list")||"").split("\n")}:void 0}var i=n(23),o=n(25);t.exports=r},function(t,e,n){"use strict";function r(t){var e=t.indexOf(i.COPY)>-1,n=t.indexOf(i.MOVE)>-1,r=t.indexOf(i.LINK)>-1;return e&&n&&r?"all":e&&n?"copyMove":r&&n?"linkMove":e&&r?"copyLink":e?"copy":n?"move":r?"link":"none"}var i=n(7);t.exports=r},function(t,e,n){"use strict";function r(t,e,n,r){n=n||{};var a=t.offsetWidth,c=t.offsetHeight,u=e instanceof Image,f=u?e.width:a,l=u?e.height:c,g=n.horizontal||i.CENTER,p=n.vertical||o.CENTER,h=r.x,d=r.y;switch(s()&&(l/=window.devicePixelRatio,f/=window.devicePixelRatio),g){case i.LEFT:break;case i.CENTER:h*=f/a;break;case i.RIGHT:h=f-f*(1-h/a)}switch(p){case o.TOP:break;case o.CENTER:d*=l/c;break;case o.BOTTOM:d=l-l*(1-d/c)}return s()&&(d+=(window.devicePixelRatio-1)*l),{x:h,y:d}}var i=n(19),o=n(20),s=n(12);t.exports=r},function(t,e,n){"use strict";function r(){return i()||o()?window.devicePixelRatio:1}var i=n(45),o=n(12);t.exports=r},function(t){"use strict";function e(){return/firefox/i.test(navigator.userAgent)}t.exports=e},function(t){"use strict";function e(){return"WebkitAppearance"in document.documentElement.style}t.exports=e},function(t,e,n){"use strict";function r(t){return t?i()&&t instanceof Image&&o(t.src,".gif")?!1:!0:!1}var i=n(12),o=n(40);t.exports=r},function(t,e,n){t.exports.Dispatcher=n(49)},function(t,e,n){"use strict";function r(){this.$Dispatcher_callbacks={},this.$Dispatcher_isPending={},this.$Dispatcher_isHandled={},this.$Dispatcher_isDispatching=!1,this.$Dispatcher_pendingPayload=null}var i=n(50),o=1,s="ID_";r.prototype.register=function(t){var e=s+o++;return this.$Dispatcher_callbacks[e]=t,e},r.prototype.unregister=function(t){i(this.$Dispatcher_callbacks[t],"Dispatcher.unregister(...): `%s` does not map to a registered callback.",t),delete this.$Dispatcher_callbacks[t]},r.prototype.waitFor=function(t){i(this.$Dispatcher_isDispatching,"Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var e=0;e<t.length;e++){var n=t[e];this.$Dispatcher_isPending[n]?i(this.$Dispatcher_isHandled[n],"Dispatcher.waitFor(...): Circular dependency detected while waiting for `%s`.",n):(i(this.$Dispatcher_callbacks[n],"Dispatcher.waitFor(...): `%s` does not map to a registered callback.",n),this.$Dispatcher_invokeCallback(n))}},r.prototype.dispatch=function(t){i(!this.$Dispatcher_isDispatching,"Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch."),this.$Dispatcher_startDispatching(t);try{for(var e in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[e]||this.$Dispatcher_invokeCallback(e)}finally{this.$Dispatcher_stopDispatching()}},r.prototype.isDispatching=function(){return this.$Dispatcher_isDispatching},r.prototype.$Dispatcher_invokeCallback=function(t){this.$Dispatcher_isPending[t]=!0,this.$Dispatcher_callbacks[t](this.$Dispatcher_pendingPayload),this.$Dispatcher_isHandled[t]=!0},r.prototype.$Dispatcher_startDispatching=function(t){for(var e in this.$Dispatcher_callbacks)this.$Dispatcher_isPending[e]=!1,this.$Dispatcher_isHandled[e]=!1;this.$Dispatcher_pendingPayload=t,this.$Dispatcher_isDispatching=!0},r.prototype.$Dispatcher_stopDispatching=function(){this.$Dispatcher_pendingPayload=null,this.$Dispatcher_isDispatching=!1},t.exports=r},function(t){"use strict";var e=function(t,e,n,r,i,o,s,a){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,o,s,a],f=0;c=new Error("Invariant Violation: "+e.replace(/%s/g,function(){return u[f++]}))}throw c.framesToPop=1,c}};t.exports=e},function(t,e,n){function r(){return o(i(arguments,!1,!0,0))}var i=n(59),o=n(62);t.exports=r},function(t,e,n){function r(t){return i(t,o(arguments,1))}var i=n(58),o=n(60);t.exports=r},function(t,e,n){(function(e){function r(t){var e=t?t.length:0;for(this.data={hash:a(null),set:new s};e--;)this.push(t[e])}var i=n(64),o=n(3),s=o(s=e.Set)&&s,a=o(a=Object.create)&&a;r.prototype.push=i,t.exports=r}).call(e,function(){return this}())},function(t){function e(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}t.exports=e},function(t){function e(t,e){return"undefined"==typeof t?e:t}t.exports=e},function(t,e,n){function r(t,e,n){var r=o(e);if(!n)return i(e,t,r);for(var s=-1,a=r.length;++s<a;){var c=r[s],u=t[c],f=n(u,e[c],c,t,e);(f===f?f===u:u!==u)&&("undefined"!=typeof u||c in t)||(t[c]=f)}return t}var i=n(57),o=n(71);t.exports=r},function(t){function e(t,e,n){n||(n=e,e={});for(var r=-1,i=n.length;++r<i;){var o=n[r];e[o]=t[o]}return e}t.exports=e},function(t,e,n){function r(t,e){var n=t?t.length:0,r=[];if(!n)return r;var a=-1,c=i,u=!0,f=u&&e.length>=200?s(e):null,l=e.length;f&&(c=o,u=!1,e=f);t:for(;++a<n;){var g=t[a];if(u&&g===g){for(var p=l;p--;)if(e[p]===g)continue t;r.push(g)}else c(e,g,0)<0&&r.push(g)}return r}var i=n(26),o=n(27),s=n(28);t.exports=r},function(t,e,n){function r(t,e,n,c){for(var u=c-1,f=t.length,l=-1,g=[];++u<f;){var p=t[u];if(a(p)&&s(p.length)&&(o(p)||i(p))){e&&(p=r(p,e,n,0));var h=-1,d=p.length;for(g.length+=d;++h<d;)g[++l]=p[h]}else n||(g[++l]=p)}return g}var i=n(14),o=n(5),s=n(1),a=n(4);t.exports=r},function(t){function e(t,e,n){var r=-1,i=t.length;e=null==e?0:+e||0,0>e&&(e=-e>i?0:i+e),n="undefined"==typeof n||n>i?i:+n||0,0>n&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var o=Array(i);++r<i;)o[r]=t[r+e];return o}t.exports=e},function(t){function e(t){return"string"==typeof t?t:null==t?"":t+""}t.exports=e},function(t,e,n){function r(t,e){var n=-1,r=i,a=t.length,c=!0,u=c&&a>=200,f=u?s():null,l=[];f?(r=o,c=!1):(u=!1,f=e?[]:l);t:for(;++n<a;){var g=t[n],p=e?e(g,n,t):g;if(c&&g===g){for(var h=f.length;h--;)if(f[h]===p)continue t;e&&f.push(p),l.push(g)}else r(f,p,0)<0&&((e||u)&&f.push(p),l.push(g))}return l}var i=n(26),o=n(27),s=n(28);t.exports=r},function(t,e,n){function r(t,e,n){if("function"!=typeof t)return i;if("undefined"==typeof e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 3:return function(n,r,i){return t.call(e,n,r,i)};case 4:return function(n,r,i,o){return t.call(e,n,r,i,o)};case 5:return function(n,r,i,o,s){return t.call(e,n,r,i,o,s)}}return function(){return t.apply(e,arguments)}}var i=n(75);t.exports=r},function(t,e,n){function r(t){var e=this.data;"string"==typeof t||i(t)?e.set.add(t):e.hash[t]=!0}var i=n(2);t.exports=r},function(t,e,n){function r(t){return function(){var e=arguments,n=e.length,r=e[0];if(2>n||null==r)return r;var s=e[n-2],a=e[n-1],c=e[3];n>3&&"function"==typeof s?(s=i(s,a,5),n-=2):(s=n>2&&"function"==typeof a?a:null,n-=s?1:0),c&&o(e[1],e[2],c)&&(s=3==n?null:s,n=2);for(var u=0;++u<n;){var f=e[u];f&&t(r,f,s)}return r}}var i=n(63),o=n(67);t.exports=r},function(t){function e(t,e,n){for(var r=t.length,i=e+(n?0:-1);n?i--:++i<r;){var o=t[i];if(o!==o)return i}return-1}t.exports=e},function(t,e,n){function r(t,e,n){if(!s(n))return!1;var r=typeof e;if("number"==r)var a=n.length,c=o(a)&&i(e,a);else c="string"==r&&e in n;if(c){var u=n[e];return t===t?t===u:u!==u}return!1}var i=n(13),o=n(1),s=n(2);t.exports=r},function(t,e,n){function r(t){for(var e=c(t),n=e.length,r=n&&t.length,f=r&&a(r)&&(o(t)||u.nonEnumArgs&&i(t)),g=-1,p=[];++g<n;){var h=e[g];(f&&s(h,r)||l.call(t,h))&&p.push(h)}return p}var i=n(14),o=n(5),s=n(13),a=n(1),c=n(72),u=n(29),f=Object.prototype,l=f.hasOwnProperty;t.exports=r},function(t,e,n){var r=n(56),i=n(65),o=i(r);t.exports=o},function(t,e,n){function r(t){if(null==t)return t;var e=i(arguments);return e.push(s),o.apply(void 0,e)}var i=n(54),o=n(69),s=n(55);t.exports=r},function(t,e,n){var r=n(1),i=n(3),o=n(2),s=n(68),a=i(a=Object.keys)&&a,c=a?function(t){if(t)var e=t.constructor,n=t.length;return"function"==typeof e&&e.prototype===t||"function"!=typeof t&&n&&r(n)?s(t):o(t)?a(t):[]}:s;t.exports=c},function(t,e,n){function r(t){if(null==t)return[];c(t)||(t=Object(t));var e=t.length;e=e&&a(e)&&(o(t)||u.nonEnumArgs&&i(t))&&e||0;for(var n=t.constructor,r=-1,f="function"==typeof n&&n.prototype===t,g=Array(e),p=e>0;++r<e;)g[r]=r+"";for(var h in t)p&&s(h,e)||"constructor"==h&&(f||!l.call(t,h))||g.push(h);return g}var i=n(14),o=n(5),s=n(13),a=n(1),c=n(2),u=n(29),f=Object.prototype,l=f.hasOwnProperty;t.exports=r},function(t,e,n){function r(t){return t=i(t),t&&s.test(t)?t.replace(o,"\\$&"):t}var i=n(61),o=/[.*+?^${}()|[\]\/\\]/g,s=RegExp(o.source);t.exports=r},function(t){function e(t){return function(){return t}}t.exports=e},function(t){function e(t){return t}t.exports=e},function(t){"use strict";function e(t,e){if(t===e)return!0;var n;for(n in t)if(t.hasOwnProperty(n)&&(!e.hasOwnProperty(n)||t[n]!==e[n]))return!1;for(n in e)if(e.hasOwnProperty(n)&&!t.hasOwnProperty(n))return!1;return!0}t.exports=e},function(t){function e(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(t){return"function"==typeof t}function r(t){return"number"==typeof t}function i(t){return"object"==typeof t&&null!==t}function o(t){return void 0===t}t.exports=e,e.EventEmitter=e,e.prototype._events=void 0,e.prototype._maxListeners=void 0,e.defaultMaxListeners=10,e.prototype.setMaxListeners=function(t){if(!r(t)||0>t||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},e.prototype.emit=function(t){var e,r,s,a,c,u;if(this._events||(this._events={}),"error"===t&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;throw TypeError('Uncaught, unspecified "error" event.')}if(r=this._events[t],o(r))return!1;if(n(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:for(s=arguments.length,a=new Array(s-1),c=1;s>c;c++)a[c-1]=arguments[c];r.apply(this,a)}else if(i(r)){for(s=arguments.length,a=new Array(s-1),c=1;s>c;c++)a[c-1]=arguments[c];for(u=r.slice(),s=u.length,c=0;s>c;c++)u[c].apply(this,a)}return!0},e.prototype.addListener=function(t,r){var s;if(!n(r))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,n(r.listener)?r.listener:r),this._events[t]?i(this._events[t])?this._events[t].push(r):this._events[t]=[this._events[t],r]:this._events[t]=r,i(this._events[t])&&!this._events[t].warned){var s;s=o(this._maxListeners)?e.defaultMaxListeners:this._maxListeners,s&&s>0&&this._events[t].length>s&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())}return this},e.prototype.on=e.prototype.addListener,e.prototype.once=function(t,e){function r(){this.removeListener(t,r),i||(i=!0,e.apply(this,arguments))}if(!n(e))throw TypeError("listener must be a function");var i=!1;return r.listener=e,this.on(t,r),this},e.prototype.removeListener=function(t,e){var r,o,s,a;if(!n(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(r=this._events[t],s=r.length,o=-1,r===e||n(r.listener)&&r.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(i(r)){for(a=s;a-->0;)if(r[a]===e||r[a].listener&&r[a].listener===e){o=a;break}if(0>o)return this;1===r.length?(r.length=0,delete this._events[t]):r.splice(o,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},e.prototype.removeAllListeners=function(t){var e,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[t],n(r))this.removeListener(t,r);else for(;r.length;)this.removeListener(t,r[r.length-1]);return delete this._events[t],this},e.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?n(this._events[t])?[this._events[t]]:this._events[t].slice():[]},e.listenerCount=function(t,e){var r;return r=t._events&&t._events[e]?n(t._events[e])?1:t._events[e].length:0}}])});