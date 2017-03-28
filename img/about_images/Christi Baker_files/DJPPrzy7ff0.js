if (self.CavalryLogger) { CavalryLogger.start_js(["fZXZC"]); }

__d('SeeFirstProfilePopoverMenu',['PopoverMenu'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('PopoverMenu'));i=h&&h.prototype;j.prototype._onMenuDone=function(k){'use strict';};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('FBRTCAvailability',['ChannelConstants','PresenceStatus'],(function a(b,c,d,e,f,g){'use strict';var h={isCallable:function i(j){var k=c('PresenceStatus').getCapabilities(j),l=c('ChannelConstants').CAPABILITY_VOIP_INTEROP;return !!(k&l);}};f.exports=h;}),null);
__d('FBRTCCallActions',['FBRTCDispatcher','keyMirror'],(function a(b,c,d,e,f,g){'use strict';var h=c('keyMirror')({START_CALL:null}),i={Types:h,startCall:function j(k,l,m,n){c('FBRTCDispatcher').dispatch({type:h.START_CALL,peerID:k,callID:l,isCaller:m,audioOnly:n});}};f.exports=i;}),null);
__d('FBRTCScreenSharingLogger',['Log','MarauderLogger','formatDate','keyMirror'],(function a(b,c,d,e,f,g){'use strict';var h='webrtc_screen_sharing',i=c('keyMirror')({P2P_VIDEO_CALL:null,DIRECT_SCREEN_SHARING:null}),j=c('keyMirror')({screen_sharing_action:null,screen_sharing_error:null}),k=c('keyMirror')({PEER_ID:null,SESSION_ID:null,CONTEXT_TYPE:null,CONTENT:null}),l=c('keyMirror')({SCREEN_SHARING_TOGGLED:null,SCREEN_SHARING_CANCELLED:null,SCREEN_SHARING_ENABLED:null,SCREEN_SHARING_DISABLED:null,SCREEN_SHARING_EXT_DIALOG:null,SCREEN_SHARING_EXT_LINK:null,SCREEN_SHARING_DIALOG_SUCCESS:null,SCREEN_SHARING_DIALOG_CANCEL:null}),m=null;n.getInstance=function(){if(!m)m=new n();return m;};n.prototype.logAction=function(o,p,q,r,s){var t={};t[j.screen_sharing_action]=q;t[k.PEER_ID]=o;t[k.SESSION_ID]=p;t[k.CONTEXT_TYPE]=this.$FBRTCScreenSharingLogger1(r);t[k.CONTENT]=s;this.$FBRTCScreenSharingLogger2(j.screen_sharing_action,t);this.logToConsole(o,p,q);};n.prototype.logError=function(o,p,q,r){var s={};s[k.PEER_ID]=o;s[k.SESSION_ID]=p;s[k.CONTEXT_TYPE]=this.$FBRTCScreenSharingLogger1(q);s[k.CONTENT]=r;this.$FBRTCScreenSharingLogger2(j.screen_sharing_error,s);this.logToConsole(o,p,r);};n.prototype.logToConsole=function(o,p,q){};n.prototype.$FBRTCScreenSharingLogger1=function(o){return o?i.DIRECT_SCREEN_SHARING:i.P2P_VIDEO_CALL;};n.prototype.$FBRTCScreenSharingLogger2=function(o,p){c('MarauderLogger').log(o,h,p);};function n(){}n.Action=l;f.exports=n;}),null);
__d('FBRTCScreenSharingUtils',['Promise','FBRTCScreenSharingLogger','FBRTCStruct','FBRTCVersionDetection','RTCConfig','FBRTCSupport'],(function a(b,c,d,e,f,g){'use strict';var h=new (c('FBRTCStruct'))(['UNKNOWN','INSTALLED']),i=h.UNKNOWN,j={RECIPIENT:'SC_CONTENT_SCRIPT',isScreenSharingSupported:function k(){return c('RTCConfig').ScreenSharingGK;},isSupportedBrowser:function k(){return c('FBRTCVersionDetection').isChrome()&&c('FBRTCVersionDetection').webrtcVersion()>=34;},canUserReceiveScreenSharing:function k(){return c('RTCConfig').ReceiveScreenGK&&c('FBRTCSupport').isOSSupported()&&j.isSupportedBrowser();},isExtensionInstalled:function k(){return i===h.INSTALLED;},getExtensionStatus:function k(){return i;},checkExtensionInstalled:function k(){if(this.isExtensionInstalled())return c('Promise').resolve();var l=void 0,m=new (c('Promise'))(function(n){l=function o(p){var q=p.origin,r=p.data;if(q!=window.location.origin||!r.type)return;if(r.type==='SC_EXT_INSTALLED'){window.removeEventListener('message',l);i=h.INSTALLED;n();}};window.addEventListener('message',l);});return c('Promise').race([m,this._pokeExtension()])['catch'](function(n){window.removeEventListener('message',l);return c('Promise').reject(n);});},_pokeExtension:function k(){var l=arguments.length<=0||arguments[0]===undefined?13:arguments[0];return new (c('Promise'))(function(m,n){var o=setInterval(function(){setTimeout(function(){if(i===h.UNKNOWN)window.postMessage({recipient:j.RECIPIENT,type:'SC_IS_EXT_INSTALLED',text:'is extension installed'},'*');});if(l>0){l--;}else{clearInterval(o);n('extension unavailable');}},200);});},logFailedAttempt:function k(l,m){c('FBRTCScreenSharingLogger').getInstance().logAction(l,m,c('FBRTCScreenSharingLogger').Action.SCREEN_SHARING_TOGGLED,this._isDirect,'feature not available');}};f.exports=j;}),null);
__d('RTCSignalingExperiments',['FBRTCUtils','FBRTCScreenSharingUtils','Set','UserAgent'],(function a(b,c,d,e,f,g){'use strict';function h(i){this.$RTCSignalingExperiments2=new (c('Set'))();this.$RTCSignalingExperiments1=new (c('Set'))(h.getLocal());if(i)this.$RTCSignalingExperiments2=new (c('Set'))(i);}h.prototype.getLocal=function(){return Array.from(this.$RTCSignalingExperiments1);};h.prototype.setRemote=function(i){if(!i)return this;return new h(i);};h.prototype.getRemote=function(){return Array.from(this.$RTCSignalingExperiments2);};h.prototype.support=function(i){return this.localSupport(i)&&this.remoteSupport(i);};h.prototype.localSupport=function(i){return this.$RTCSignalingExperiments1.has(i);};h.prototype.remoteSupport=function(i){return this.$RTCSignalingExperiments2.has(i);};h.getLocal=function(){var i=[];if(c('UserAgent').isBrowser('Chrome')||c('UserAgent').isBrowser('Opera'))i.push('sdp_update');if(c('FBRTCUtils').supportsMultipleStreamsPlanB())i.push('multiple_streams_plan_b');if(c('FBRTCScreenSharingUtils').canUserReceiveScreenSharing())i.push('screen_sharing');return i;};f.exports=h;}),null);
__d('FBRTCConfig',['RTCSignalingExperiments'],(function a(b,c,d,e,f,g){var h={},i,j=0,k={setConfig:function l(m,n,o,p){h=m;j=n;i=p;},isVCEndpointCall:function l(){return i;},getPeerID:function l(){return j;},statsInterpreterConfig:function l(){return {rtt_weight:2,frr_weight:800,plr_weight:500,score_threshold:1000,bad_score_count:3};},settingsEnabled:function l(){return h.enable_settings;},shouldAutoDisableVideo:function l(){return false;},unsupportedBrowserUrl:function l(){if(h.troubleshooting_urls&&h.troubleshooting_urls.unsupported_browser)return h.troubleshooting_urls.unsupported_browser;return 'https://www.facebook.com/help/211644178877843';},userMediaErrorUrl:function l(){if(h.troubleshooting_urls&&h.troubleshooting_urls.user_media_error)return h.troubleshooting_urls.user_media_error;return 'https://www.facebook.com/help/232232800134371';},userMediaPermissionErrorUrl:function l(){if(h.troubleshooting_urls&&h.troubleshooting_urls.user_media_permission_error)return h.troubleshooting_urls.user_media_permission_error;return 'https://www.facebook.com/help/232232800134371';},supportedSignalingExperiments:function l(){return c('RTCSignalingExperiments').getLocal();},isMessengerDotCom:function l(){return h.is_messenger_dot_com;},useMessengerCallUI:function l(){return h.messenger_call_ui;},shouldCreateDataChannel:function l(){return h.data_channel;},disableURLManager:function l(){return h.disable_url_manager;},useCurrentWindow:function l(){return h.use_current_window;}};f.exports=k;}),null);
__d('FBRTCCallUIWrapper',['regeneratorRuntime','Bootloader','FBRTCCallActions','FBRTCConfig','FBRTCMessageListener','UserAgent'],(function a(b,c,d,e,f,g){var h=null,i={openGroupCallUI:function j(k,l,m,n,o,p){return c('regeneratorRuntime').async(function q(r){while(1)switch(r.prev=r.next){case 0:h=this._openWindow('Group Call');c('Bootloader').loadModules(["FBRTCCallUI"],function(s){s.openGroupCallUI(k,l,m,n,o,h,p);},'FBRTCCallUIWrapper');case 2:case 'end':return r.stop();}},null,this);},openGroupCallURI:function j(k,l,m,n,o,p){return c('regeneratorRuntime').async(function q(r){while(1)switch(r.prev=r.next){case 0:h=this._openWindow('Group Call');c('Bootloader').loadModules(["FBRTCCallUI"],function(s){s.openGroupCallURI({conferenceName:k,callID:l,hasVideo:m,serverInfoData:n,trigger:o,callSummary:p,callWindow:h});},'FBRTCCallUIWrapper');case 2:case 'end':return r.stop();}},null,this);},openAsCaller:function j(k,l,m,n){if(!h&&window.rtcCallChildWindow){h=window.rtcCallChildWindow;window.rtcCallChildWindow=null;}if(this._shouldFocusCallWindow(k)){h.focus();return;}if(this._shouldCloseCallWindow())h.close();if(c('FBRTCConfig').useCurrentWindow()){c('FBRTCMessageListener').removeMessageHandler();c('FBRTCCallActions').startCall(k,l,true,n);c('Bootloader').loadModules(["FBRTCCallUI"],function(o){o.openAsCaller(k,l,m,n);},'FBRTCCallUIWrapper');return;}h=this._openWindow('Video Call');c('Bootloader').loadModules(["FBRTCCallUI"],function(o){o.openAsCaller(k,l,m,n,h);},'FBRTCCallUIWrapper');},openAsCallee:function j(k,l,m,n,o){if(c('FBRTCConfig').useCurrentWindow()){c('FBRTCMessageListener').removeMessageHandler();c('FBRTCCallActions').startCall(k,l,false,o);c('Bootloader').loadModules(["FBRTCCallUI"],function(p){p.openAsCallee(k,l,m,n,o,null);},'FBRTCCallUIWrapper');return;}h=this._openWindow('Video Call');c('Bootloader').loadModules(["FBRTCCallUI"],function(p){p.openAsCallee(k,l,m,n,o,h);},'FBRTCCallUIWrapper');},_shouldFocusCallWindow:function j(k){return h&&!h.closed&&h.rtcCallInProgessWith===k;},_shouldCloseCallWindow:function j(){return h&&!h.closed&&!h.rtcCallInProgessWith;},_openWindow:function j(k){var l=this._windowPosition(),m=['menubar=no','location=no','scrollbars=no','status=no','personalbar=no',l.height,l.width,l.top,l.left].join(',');if(this._isSparkBrowser())m='';return window.open('',k,m);},_windowPosition:function j(){var k=960,l=540,m,n,o,p;if(screen&&screen.width>1280){k=1280;l=720;}if(window.innerWidth!==undefined){n=window.innerWidth;m=window.innerHeight;}else{n=screen.width;m=screen.height;}if(window.screenLeft!==undefined){o=window.screenLeft;p=window.screenTop;}else{o=window.screenX;p=window.screenY;}var q=Math.floor(n/2-k/2+o),r=Math.floor(m/2-l/2+p);return {height:'height='+l.toString(),width:'width='+k.toString(),top:'top='+r.toString(),left:'left='+q.toString()};},_isSparkBrowser:function j(){return c('UserAgent').isBrowser('Chrome < 34')&&c('UserAgent').isBrowser('Chrome > 33');}};f.exports=i;}),null);
__d('FBRTCCore',['invariant','Bootloader','FBRTCAvailability','FBRTCCallUIWrapper','FBRTCSupport','randomInt'],(function a(b,c,d,e,f,g,h){var i=false,j={startOutgoingCall:function k(l,m,n){var o=arguments.length<=3||arguments[3]===undefined?false:arguments[3];!isNaN(parseInt(l,10))||h(0);if(i)return;i=true;setTimeout(function(){i=false;},1000);if(c('FBRTCSupport').isWebrtcSupported()){if(o&&!c('FBRTCSupport').isCollabSupported()){c('Bootloader').loadModules(["FBRTCUnsupportedBrowserMessage","CollabMessengerLogger"],function(q,r){q.showForUnsupportedCollabCall();r.logBrowserNotSupported({peerID:l});},'FBRTCCore');}else{var p=this._generateCallID();c('FBRTCCallUIWrapper').openAsCaller(l,p,m,n);}}else c('Bootloader').loadModules(["FBRTCUnsupportedBrowserMessage"],function(q){q.showForOutgoingCall();},'FBRTCCore');},startGroupCall:function k(l){var m=l.conferenceName,n=l.hasVideo,o=l.serverInfoData,p=l.trigger,q=l.usersToRing,r=q===undefined?[]:q;if(i)return;i=true;setTimeout(function(){i=false;},1000);if(!c('FBRTCSupport').isGroupCallWebtrcSupported()){c('Bootloader').loadModules(["MessengerRTCGroupCallUnsupportedBrowserDialogController"],function(s){s.render({hasVideo:n});},'FBRTCCore');return;}c('FBRTCCallUIWrapper').openGroupCallUI(m,this._generateCallID(),r,n,p,o);},isAvailableForWebrtcCalling:function k(l){return c('FBRTCAvailability').isCallable(l);},shouldEnableVideoCalling:function k(){return c('FBRTCSupport').isOSSupported();},_generateCallID:function k(){return c('randomInt')(0,4294967295);}};f.exports=j;}),null);
__d('FBRTCCallabilityActions',['keyMirror'],(function a(b,c,d,e,f,g){'use strict';var h=c('keyMirror')({CALLABILITY_FETCHED:null,CALLABILITY_FETCH_ERROR:null});function i(j){this.$FBRTCCallabilityActions1=j;}i.prototype.callabilityFetched=function(j,k){this.$FBRTCCallabilityActions1.dispatch({type:h.CALLABILITY_FETCHED,userID:j,callability:k});};i.prototype.callabilityFetchError=function(j){this.$FBRTCCallabilityActions1.dispatch({type:h.CALLABILITY_FETCH_ERROR,userID:j});};i.Types=h;f.exports=i;}),null);
__d("XRTCCallabilityController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/rtc\/callability\/",{user_id:{type:"Int",required:true}});}),null);
__d('FBRTCCallabilityDataManager',['AsyncRequest','FBRTCCallabilityActions','XRTCCallabilityController'],(function a(b,c,d,e,f,g){'use strict';function h(i){this.$FBRTCCallabilityDataManager1=new (c('FBRTCCallabilityActions'))(i);}h.prototype.fetchCallability=function(i){var j=c('XRTCCallabilityController').getURIBuilder().setInt('user_id',parseInt(i,10)).getURI(),k=this.$FBRTCCallabilityDataManager2.bind(this,i),l=this.$FBRTCCallabilityDataManager3.bind(this,i);new (c('AsyncRequest'))().setURI(j).setHandler(k).setErrorHandler(l).setAllowCrossPageTransition(true).send();};h.prototype.$FBRTCCallabilityDataManager2=function(i,j){this.$FBRTCCallabilityDataManager1.callabilityFetched(i,j.payload);};h.prototype.$FBRTCCallabilityDataManager3=function(i,j){this.$FBRTCCallabilityDataManager1.callabilityFetchError(i);};f.exports=h;}),null);
__d('RTCCallabilityStore',['fbt','Cache','FBRTCAvailability','FluxStore','FBRTCCallabilityActions','FBRTCCallabilityDataManager'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=.5,l=5;i=babelHelpers.inherits(m,c('FluxStore'));j=i&&i.prototype;function m(n){j.constructor.call(this,n);this.$RTCCallabilityStore2=new (c('FBRTCCallabilityDataManager'))(n);this.$RTCCallabilityStore1=new (c('Cache'))();}m.prototype.__onDispatch=function(n){var o=n.type;switch(o){case c('FBRTCCallabilityActions').Types.CALLABILITY_FETCHED:var p=n.userID,q=n.callability;this.$RTCCallabilityStore1.set(p,q.is_callable,null,q.is_callable?l:k);this.__emitChange();break;case c('FBRTCCallabilityActions').Types.CALLABILITY_FETCH_ERROR:this.$RTCCallabilityStore1.set(n.userID,false,null,k);this.__emitChange();break;}};m.prototype.isCallable=function(n){if(c('FBRTCAvailability').isCallable(n))return true;if(!this.$RTCCallabilityStore1.has(n)){this.$RTCCallabilityStore2.fetchCallability(n);this.$RTCCallabilityStore1.set(n,false,null,k);}return !!this.$RTCCallabilityStore1.get(n);};m.prototype.callButtonTooltip=function(n,o){if(this.isCallable(n))return h._("Start a video call with {shortname}",[h.param('shortname',o)]);return h._("{shortname} is currently unavailable for video calling",[h.param('shortname',o)]);};m.prototype.voiceCallButtonTooltip=function(n,o){if(this.isCallable(n))return h._("Start a voice call with {shortname}",[h.param('shortname',o)]);return h._("{shortname} is currently unavailable for voice calling",[h.param('shortname',o)]);};f.exports=m;}),null);
__d('FBRTCCallabilityStore',['FBRTCDispatcher','RTCCallabilityStore'],(function a(b,c,d,e,f,g){'use strict';f.exports=new (c('RTCCallabilityStore'))(c('FBRTCDispatcher'));}),null);
__d('PagesInviteToLikeUtils',['cx','CSS','Event','QE2Logger','tidyEvent'],(function a(b,c,d,e,f,g,h){var i='invite_to_like_from_friend_profile',j={init:function k(l,m,n){var o=l.firstChild,p=null;m.forEachItem(function(q){var r=q.getRoot();if(c('CSS').hasClass(r,'hidden_invite_to_like_menu_item')){p=r;c('CSS').addClass(p,"_4keo");}});c('tidyEvent')(c('Event').listen(o,'click',function(q){if(n)c('CSS').removeClass(p,"_4keo");c('QE2Logger').logExposureForUser(i);}));}};f.exports=j;}),null);
__d('VideoCallHelpler',['FBRTCCallabilityStore','FBRTCCore','TooltipData'],(function a(b,c,d,e,f,g){'use strict';function h(j,k){var l=k.calleeID,m=k.calleeName;j.forEachItem(function(n){if(n.getValue&&n.getValue()==='video_call'){if(c('FBRTCCallabilityStore').isCallable(k.calleeID)){n.enable();}else n.disable();c('TooltipData').set(n.getRoot(),c('FBRTCCallabilityStore').callButtonTooltip(l,m),'right');}});}var i={bindProfileVideoCallAction:function j(k,l){h(k,l);c('FBRTCCallabilityStore').addListener(function(){h(k,l);});k.subscribe('itemclick',function(m,n){if(n.item.getValue()==='video_call'&&!n.item.isDisabled())c('FBRTCCore').startOutgoingCall(l.calleeID,'timeline_profile',false);});}};f.exports=i;}),null);