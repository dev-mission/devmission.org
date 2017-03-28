if (self.CavalryLogger) { CavalryLogger.start_js(["CenWG"]); }

__d('EgoSectionExpander',['Animation','Arbiter','CSS','DOM'],(function a(b,c,d,e,f,g){f.exports={expand:function h(i,j){if(!i)return;var k=c('DOM').scry(i,'^.ego_section');if(!j||!k.length||c('CSS').hasClass(k[0],'ego_section_expanded'))return;k=k[0];c('CSS').addClass(k,'ego_section_expanded');c('Animation').appendInsert(k.lastChild,j);c('Arbiter').inform('netego_sectionExpanded');}};}),null);
__d('legacy:netego',['NetEgo'],(function a(b,c,d,e,f,g){b.NetEgo=c('NetEgo');}),3);
__d('TimelinePhotosPageletScroller',['DOM','$'],(function a(b,c,d,e,f,g){var h='fbTimelinePhotosScroller',i={addScroller:function j(k){c('DOM').setContent(c('$')(h),k);},removeScroller:function j(){c('DOM').remove(c('$')(h));}};f.exports=i;}),null);