if (self.CavalryLogger) { CavalryLogger.start_js(["LlbV6"]); }

__d('NotificationCounter',['Arbiter','DocumentTitle','JSLogger','MessengerEnvironment'],(function a(b,c,d,e,f,g){var h={messages:0,notifications:0,requests:0},i={init:function j(){c('Arbiter').subscribe('update_title',this._handleUpdate.bind(this));c('Arbiter').subscribe('jewel/count-updated',this._handleCountUpdate.bind(this));},getCount:function j(){var k=0;for(var l in h){var m=Number(h[l]);if(typeof h[l]=='string'&&isNaN(m))return h[l];if(isNaN(m)||m<0){c('JSLogger').create('jewels').error('bad_count',{jewel:l,count:h[l]});continue;}k+=m;}return k;},updateTitle:function j(){if(c('MessengerEnvironment').messengerui)return;var k=this.getCount(),l=c('DocumentTitle').get();l=k?'('+k+') '+l:l;c('DocumentTitle').set(l,true);},_handleCountUpdate:function j(k,l){h[l.jewel]=l.count;this.updateTitle();},_handleUpdate:function j(k,l){this.updateTitle();}};f.exports=i;}),null);
__d("XNotificationsSyncController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/notifications\/sync\/",{lastSync:{type:"Int",required:true}});}),null);
__d('NotificationSync',['Arbiter','AsyncRequest','ChannelConstants','JSLogger','NotificationConstants','NotificationUpdates','XNotificationsSyncController'],(function a(b,c,d,e,f,g){var h=c('JSLogger').create('notifications'),i='channel_reload',j=0;function k(p){var q=c('NotificationUpdates').getserverTime()?c('NotificationUpdates').getserverTime():j,r=c('XNotificationsSyncController').getURIBuilder().setInt('lastSync',q).getURI();p.setHandler(l).setOption('suppressErrorAlerts',true).setErrorHandler(m).setMethod('GET').setReadOnly(true).setURI(r).setAllowCrossPageTransition(true);}function l(p){var q=p.getPayload();if(q.syncPayload)c('NotificationUpdates').handleUpdate(c('NotificationConstants').PayloadSourceType.SYNC,q.syncPayload);}function m(p){}function n(){var p=new (c('AsyncRequest'))();p.setIsBackgroundRequest(true);k(p);p.send();h.bump(i);}var o={setup:function p(q){j=q;c('Arbiter').subscribe(c('ChannelConstants').ON_INVALID_HISTORY,n);}};f.exports=o;}),null);
__d('NotificationJewelController',['Arbiter','Bootloader','Event','NotificationConstants','NotificationCounter','NotificationSeenState','NotificationStore','NotificationSync','NotificationUpdates','FunnelLogger','NotificationJewelFunnelLoggingConstants','createObjectFrom','curry','isInFocusMode'],(function a(b,c,d,e,f,g){var h=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_NAME,i=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_EVENT,j=0;function k(m){var n=c('isInFocusMode')();c('Arbiter').inform('jewel/count-updated',{jewel:m,count:n?0:c('NotificationSeenState').getUnseenIDs().length},c('Arbiter').BEHAVIOR_STATE);}function l(m,n){'use strict';var o=n.endPoint,p=n.list,q=n.startTime,r=n.unseenNotifs;if(o)c('NotificationStore').registerEndpoint(o);c('NotificationCounter').init();var s=c('Event').listen(m.getRoot(),'mouseover',function(){c('FunnelLogger').startFunnel(h);s&&s.remove();s=null;p.open();c('FunnelLogger').appendAction(h,i.MOUSE_OVER_ON_JEWEL);});if(m.isOpen()){p.open();}else var t=m.subscribe('opened',function(){t&&t.unsubscribe();t=null;p.open();});var u=p.pause.bind(p);m.subscribe('opened',function(){setTimeout(u,0);k(m.name);c('Bootloader').loadModules(["NotificationVPVs"],function(v){return v.clearImpressions();},'NotificationJewelController');});m.subscribe('closed',function(){p.unpause();k(m.name);});c('NotificationUpdates').subscribe('seen-state-updated',c('curry')(k,m.name));c('NotificationUpdates').handleUpdate(c('NotificationConstants').PayloadSourceType.INITIAL_LOAD,{seenState:c('createObjectFrom')(r,j)});c('NotificationSync').setup(q);k(m.name);c('NotificationUpdates').setEndPoint(o);}f.exports=l;}),null);