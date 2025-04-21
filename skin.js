// Garden Gnome Software - Skin
// Pano2VR 7.1.2/20913
// Filename: ??? - black.ggsk
// Generated 2025-04-21T16:25:08

function pano2vrSkin(player,base) {
	player.addVariable('vis_pcfooter', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_footer', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hide', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_aircon1', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_ad', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_aptinfo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_m_roomMove', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pcaptinfo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pc_roomMove', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pcad', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_skinhide', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__42=document.createElement('div');
		el.ggId="\uac00\uaca9\uc815\ubcf4";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__42.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__42.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getViewerSize(true).width >= 980))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__42.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__42.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__42.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__42.ggCurrentLogicStatePosition == 0) {
					me.__42.style.left = 'calc(50% - (100% / 2))';
					me.__42.style.top='60px';
				}
				else {
					me.__42.style.left='calc(50% - ((100% + 0px) / 2) + 0px)';
					me.__42.style.top='0px';
				}
			}
		}
		me.__42.logicBlock_position();
		me.__42.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width > 1604))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 1280))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getViewerSize(true).width > 1140))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getViewerSize(true).width >= 940))
			)
			{
				newLogicStateSize = 3;
			}
			else if (
				((player.getViewerSize(true).width >= 768))
			)
			{
				newLogicStateSize = 4;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__42.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__42.ggCurrentLogicStateSize = newLogicStateSize;
				me.__42.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__42.ggCurrentLogicStateSize == 0) {
					me.__42.style.width='40%';
					me.__42.style.height='80%';
					me.__42.style.left = 'calc(50% - (40% / 2))';
					skin.updateSize(me.__42);
				}
				else if (me.__42.ggCurrentLogicStateSize == 1) {
					me.__42.style.width='50%';
					me.__42.style.height='80%';
					me.__42.style.left = 'calc(50% - (50% / 2))';
					skin.updateSize(me.__42);
				}
				else if (me.__42.ggCurrentLogicStateSize == 2) {
					me.__42.style.width='60%';
					me.__42.style.height='80%';
					me.__42.style.left = 'calc(50% - (60% / 2))';
					skin.updateSize(me.__42);
				}
				else if (me.__42.ggCurrentLogicStateSize == 3) {
					me.__42.style.width='70%';
					me.__42.style.height='80%';
					me.__42.style.left = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__42);
				}
				else if (me.__42.ggCurrentLogicStateSize == 4) {
					me.__42.style.width='80%';
					me.__42.style.height='84%';
					me.__42.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me.__42);
				}
				else {
					me.__42.style.width='100%';
					me.__42.style.height='100%';
					me.__42.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__42);
				}
			}
		}
		me.__42.logicBlock_size();
		me.__42.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_aptinfo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__42.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__42.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__42.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me.__42.ggCurrentLogicStateVisible == 0) {
					me.__42.style.visibility=(Number(me.__42.style.opacity)>0||!me.__42.style.opacity)?'inherit':'hidden';
					me.__42.ggVisible=true;
				}
				else {
					me.__42.style.visibility="hidden";
					me.__42.ggVisible=false;
				}
			}
		}
		me.__42.logicBlock_visible();
		me.__42.ggUpdatePosition=function (useTransition) {
		}
		el=me.__43=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__43.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__43.ggUpdatePosition=function (useTransition) {
		}
		el=me.__45=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 25px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__45.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__45.ggUpdatePosition=function (useTransition) {
		}
		el=me.__46=document.createElement('div');
		els=me.__46__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__46.ggUpdateText=function() {
			var params = [];
			var hs = player._("| KB \ubd80\ub3d9\uc0b0 \uc2dc\uc138", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__46.ggUpdateText();
		el.appendChild(els);
		me.__46.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__46.ggUpdatePosition=function (useTransition) {
		}
		me.__45.appendChild(me.__46);
		el=me._container_14=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uaca9\uc815\ubcf4-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_14.onclick=function (e) {
			player.setVariableValue('vis_aptinfo', false);
		}
		me._container_14.ggUpdatePosition=function (useTransition) {
		}
		el=me.__111=document.createElement('div');
		el.ggId="\ub2eb\uae30_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 27px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__111.onclick=function (e) {
			player.setVariableValue('vis_aptinfo', false);
		}
		me.__111.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4_1=document.createElement('div');
		el.ggId="Rectangle 4_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #2c2c2e;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_5_1=document.createElement('div');
		els=me._svg_5_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci14IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPGxpbmUgeTI9IjE4IiB4MT0iMTgiIHgyPSI2IiB5MT0iNiIvPgogPGxpbmUgeTI9IjE4IiB4MT0iNiIgeDI9IjE4IiB5MT0iNiIvPgo8L3N2Zz4K';
		me._svg_5_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 17px;';
		hs+='left : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_1.appendChild(me._svg_5_1);
		me.__111.appendChild(me._rectangle_4_1);
		me._container_14.appendChild(me.__111);
		me.__45.appendChild(me._container_14);
		me.__43.appendChild(me.__45);
		el=me._iframe0=document.createElement('div');
		el.ggId="\uac00\uaca9\uc815\ubcf4-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 74%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin-top:125px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe0.ggUpdatePosition=function (useTransition) {
		}
		el=me.__44=document.createElement('div');
		els=me.__44__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ub124\uc774\ubc84\uc815\ubcf4\ub780";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__44.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__44.ggUpdateText();
		el.appendChild(els);
		me.__44.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__44.ggUpdatePosition=function (useTransition) {
		}
		me._iframe0.appendChild(me.__44);
		me.__43.appendChild(me._iframe0);
		el=me.__110=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4\ub85c\uace0_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 192px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__110.onclick=function (e) {
			player.openUrl("www.lanhouse.kr","");
		}
		me.__110.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1_1=document.createElement('div');
		el.ggId="Container 1_1";
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 29px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : calc(50% - ((29px + 0px) / 2) + 5px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2_1_1=document.createElement('div');
		els=me._image_2_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_2_1_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1_1.appendChild(me._image_2_1_1);
		me.__110.appendChild(me._container_1_1);
		me.__43.appendChild(me.__110);
		me.__42.appendChild(me.__43);
		me.divSkin.appendChild(me.__42);
		el=me.__36=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9_\uba54\ub274";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__36.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__36.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width > 1604))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 1280))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getViewerSize(true).width > 1140))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getViewerSize(true).width >= 940))
			)
			{
				newLogicStateSize = 3;
			}
			else if (
				((player.getViewerSize(true).width >= 768))
			)
			{
				newLogicStateSize = 4;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__36.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__36.ggCurrentLogicStateSize = newLogicStateSize;
				me.__36.style.transition='width 0s, height 0s';
				if (me.__36.ggCurrentLogicStateSize == 0) {
					me.__36.style.width='40%';
					me.__36.style.height='80%';
					me.__36.style.left = 'calc(50% - (40% / 2))';
					skin.updateSize(me.__36);
				}
				else if (me.__36.ggCurrentLogicStateSize == 1) {
					me.__36.style.width='50%';
					me.__36.style.height='80%';
					me.__36.style.left = 'calc(50% - (50% / 2))';
					skin.updateSize(me.__36);
				}
				else if (me.__36.ggCurrentLogicStateSize == 2) {
					me.__36.style.width='60%';
					me.__36.style.height='80%';
					me.__36.style.left = 'calc(50% - (60% / 2))';
					skin.updateSize(me.__36);
				}
				else if (me.__36.ggCurrentLogicStateSize == 3) {
					me.__36.style.width='70%';
					me.__36.style.height='80%';
					me.__36.style.left = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__36);
				}
				else if (me.__36.ggCurrentLogicStateSize == 4) {
					me.__36.style.width='80%';
					me.__36.style.height='84%';
					me.__36.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me.__36);
				}
				else {
					me.__36.style.width='100%';
					me.__36.style.height='100%';
					me.__36.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__36);
				}
			}
		}
		me.__36.logicBlock_size();
		me.__36.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_m_roomMove') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__36.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__36.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__36.style.transition='width 0s, height 0s';
				if (me.__36.ggCurrentLogicStateVisible == 0) {
					me.__36.style.visibility=(Number(me.__36.style.opacity)>0||!me.__36.style.opacity)?'inherit':'hidden';
					me.__36.ggVisible=true;
				}
				else {
					me.__36.style.visibility="hidden";
					me.__36.ggVisible=false;
				}
			}
		}
		me.__36.logicBlock_visible();
		me.__36.ggUpdatePosition=function (useTransition) {
		}
		el=me.__37=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__37.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__37.ggUpdatePosition=function (useTransition) {
		}
		el=me.__41=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\uc2a4\ud06c\ub864";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 88%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__41.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__41.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1=document.createElement('div');
		els=me._scrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 235.544px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 607px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosX = (me._scrollarea_1__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
			me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
		}
		me._scrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1.ggHorScrollVisible || diffX == 0 || me._scrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1.ggScrollPosX >= me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth)) {
					me._scrollarea_1.ggScrollPosX = Math.min(me._scrollarea_1.ggScrollPosX, me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1.ggScrollPosX <= 0)) {
					me._scrollarea_1.ggScrollPosX = Math.max(me._scrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1__horScrollFg.style.left = me._scrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosX / (me._scrollarea_1__horScrollBg.offsetWidth - me._scrollarea_1__horScrollFg.offsetWidth);
			me._scrollarea_1__content.style.left = -(Math.round((me._scrollarea_1.ggContentWidth * (1.0 - me._scrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentLeftOffset + 'px';
			me._scrollarea_1.ggScrollPosXPercent = (me._scrollarea_1__horScrollFg.offsetLeft / me._scrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1.ggScrollPosY = (me._scrollarea_1__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
			me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1.ggVertScrollVisible || diffY == 0 || me._scrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1.ggScrollPosY >= me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight)) {
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1.ggScrollPosY <= 0)) {
					me._scrollarea_1.ggScrollPosY = Math.max(me._scrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
			me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
			me._scrollarea_1.ggScrollPosYPercent = (me._scrollarea_1__vertScrollFg.offsetTop / me._scrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 3 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1.clientWidth - (me._scrollarea_1.ggVertScrollVisible ? 3 : 0))) * me._scrollarea_1.ggHPercentVisible);
					me._scrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 3 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1.clientHeight - (me._scrollarea_1.ggHorScrollVisible ? 3 : 0))) * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1.ggDragInertiaX *= 0.96;
				me._scrollarea_1.ggDragInertiaY *= 0.96;
				me._scrollarea_1.ggScrollByX(me._scrollarea_1.ggDragInertiaX);
				me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._scrollarea_1__content.onmouseup = null;
			me._scrollarea_1__content.onmousemove = null;
			me._scrollarea_1__content.ontouchend = null;
			me._scrollarea_1__content.ontouchmove = null;
			me._scrollarea_1__content.onpointerup = null;
			me._scrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1.ggDragStartY) > 10) me._scrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1.ggDragLastX) * me._scrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1.ggDragLastY) * me._scrollarea_1.ggVPercentVisible;
			me._scrollarea_1.ggDragInertiaX = -diffX;
			me._scrollarea_1.ggDragInertiaY = -diffY;
			me._scrollarea_1.ggDragLastX = eventX;
			me._scrollarea_1.ggDragLastY = eventY;
			me._scrollarea_1.ggScrollByX(-diffX);
			me._scrollarea_1.ggScrollByY(-diffY);
		}
		me._scrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1.ggDragLastX = me._scrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1.ggDragLastY = me._scrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1__content.onmouseup = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.ontouchend = me._scrollarea_1__content.mousetouchend;
			me._scrollarea_1__content.onmousemove = me._scrollarea_1__content.mousetouchmove;
			me._scrollarea_1__content.ontouchmove = me._scrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1__content.onpointerup = me._scrollarea_1__content.ontouchend;
				me._scrollarea_1__content.onpointermove = me._scrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 3px; height: 295.68px; background-color: rgba(210,210,210,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 3px; height: 295.68px; background-color: rgba(0,0,0,0.196078); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1.ggScrollPosY = 0;
		me._scrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.96;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1.ggDragInertiaY *= 0.96;
					me._scrollarea_1.ggScrollByY(me._scrollarea_1.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1.ggDragLastY;
				me._scrollarea_1.ggDragInertiaY = diffY;
				me._scrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1.ggScrollByYSmooth(30 * me._scrollarea_1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 3px; height: 3px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 70%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1.ggScrollPosY / me._scrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._scrollarea_1__vertScrollBg.style.visibility = 'inherit';
				me._scrollarea_1__vertScrollFg.style.visibility = 'inherit';
				me._scrollarea_1.ggVertScrollVisible = true;
				if(me._scrollarea_1.ggVertScrollVisible) {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth - 3;
					if (me._scrollarea_1.ggHorScrollVisible) {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight - 3;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height - me._scrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1.ggAvailableHeight = me._scrollarea_1.clientHeight;
						me._scrollarea_1.ggAvailableHeightWithScale = me._scrollarea_1.getBoundingClientRect().height;
						me._scrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1__vertScrollBg.style.height = me._scrollarea_1.ggAvailableHeight + 'px';
					me._scrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1.ggVPercentVisible > 1.0) me._scrollarea_1.ggVPercentVisible = 1.0;
					me._scrollarea_1.ggScrollHeight =  Math.round(me._scrollarea_1__vertScrollBg.offsetHeight * me._scrollarea_1.ggVPercentVisible);
					me._scrollarea_1__vertScrollFg.style.height = me._scrollarea_1.ggScrollHeight + 'px';
					me._scrollarea_1.ggScrollPosY = me._scrollarea_1.ggScrollPosYPercent * me._scrollarea_1.ggAvailableHeight;
					me._scrollarea_1.ggScrollPosY = Math.min(me._scrollarea_1.ggScrollPosY, me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
					me._scrollarea_1__vertScrollFg.style.top = me._scrollarea_1.ggScrollPosY + 'px';
					if (me._scrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1.ggScrollPosY / (me._scrollarea_1__vertScrollBg.offsetHeight - me._scrollarea_1__vertScrollFg.offsetHeight);
						me._scrollarea_1__content.style.top = -(Math.round((me._scrollarea_1.ggContentHeight * (1.0 - me._scrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1.ggAvailableWidth = me._scrollarea_1.clientWidth;
					me._scrollarea_1.ggScrollPosY = 0;
					me._scrollarea_1.ggScrollPosYPercent = 0.0;
					me._scrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1);
					me._scrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._container_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._container_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__320px_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__320px_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 292;
		el.ggHeight = 224.875;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me.__320px_1.ggUpdating == true) return;
			me.__320px_1.ggUpdating = true;
			var el=me.__320px_1;
			var curNumCols = 0;
			curNumCols = me.__320px_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me.__320px_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me.__320px_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me.__320px_1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me.__320px_1.getFilteredNodes(tourNodes, filter);
			me.__320px_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me.__320px_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me.__320px_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me.__320px_1.ggWidth) + 'px';
				parameter.width=me.__320px_1.ggWidth + 'px';
				parameter.height='100%';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner__320px_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me.__320px_1.ggNodeCount = me.__320px_1.ggNumFilterPassed;
			me.__320px_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me.__320px_1.parentNode && me.__320px_1.parentNode.classList.contains('ggskin_subelement') && me.__320px_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me.__320px_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="\ubaa8\ubc14\uc77c-320px \uc774\ud558_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 95.0669%;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 292px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__320px_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__320px_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me.__320px_1.childNodes.length; i++) {
				var child=me.__320px_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me.__320px_1.ggUpdatePosition=function (useTransition) {
			var ph = this.parentNode.clientHeight;
			this.ggHeight = (ph*95.0669)/100.0;
			me.__320px_1.ggUpdate();
		}
		me._container_2.appendChild(me.__320px_1);
		me._scrollarea_1__content.appendChild(me._container_2);
		me.__41.appendChild(me._scrollarea_1);
		me.__37.appendChild(me.__41);
		el=me.__38=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__38.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__38.ggUpdatePosition=function (useTransition) {
		}
		el=me.__39=document.createElement('div');
		els=me.__39__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uacf5\uac04\uc774\ub3d9-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__39.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__39.ggUpdateText();
		el.appendChild(els);
		me.__39.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__39.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1_2=document.createElement('div');
		els=me._svg_1_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPHBvbHlsaW5lIHBvaW50cz0iOSAxOCAxNSAxMiA5IDYiLz4KPC9zdmc+Cg==';
		me._svg_1_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -27px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1_2.ggUpdatePosition=function (useTransition) {
		}
		me.__39.appendChild(me._svg_1_2);
		me.__38.appendChild(me.__39);
		el=me.__1_1=document.createElement('div');
		el.ggId="\ub2eb\uae30_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -8px;';
		hs+='visibility : inherit;';
		hs+='width : 27px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1_1.onclick=function (e) {
			player.setVariableValue('vis_m_roomMove', false);
		}
		me.__1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4_1_1=document.createElement('div');
		el.ggId="Rectangle 4_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #2c2c2e;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4_1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_5_1_1=document.createElement('div');
		els=me._svg_5_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci14IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPGxpbmUgeTI9IjE4IiB4MT0iMTgiIHgyPSI2IiB5MT0iNiIvPgogPGxpbmUgeTI9IjE4IiB4MT0iNiIgeDI9IjE4IiB5MT0iNiIvPgo8L3N2Zz4K';
		me._svg_5_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5_1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 17px;';
		hs+='left : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_1_1.appendChild(me._svg_5_1_1);
		me.__1_1.appendChild(me._rectangle_4_1_1);
		me.__38.appendChild(me.__1_1);
		me.__37.appendChild(me.__38);
		me.__36.appendChild(me.__37);
		me.divSkin.appendChild(me.__36);
		el=me.__35=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\ud654\uc0b4\ud45c";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 42px;';
		hs+='left : calc(50% - ((98% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 98%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__35.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__35.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 1310))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width < 1310))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__35.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__35.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__35.style.transition='';
				if (me.__35.ggCurrentLogicStateVisible == 0) {
					me.__35.style.visibility="hidden";
					me.__35.ggVisible=false;
				}
				else if (me.__35.ggCurrentLogicStateVisible == 1) {
					me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
					me.__35.ggVisible=true;
				}
				else {
					me.__35.style.visibility="hidden";
					me.__35.ggVisible=false;
				}
			}
		}
		me.__35.logicBlock_visible();
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_3.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._right=document.createElement('div');
		els=me._right__img=document.createElement('img');
		els.className='ggskin ggskin_right';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="right";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 49px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((49px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._right);
		el=me._svg_2_1=document.createElement('div');
		els=me._svg_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIwLjYyNzQ1MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwb2x5bGluZSBwb2ludHM9IjkgMTggMTUgMTIgOSA2Ii8+Cjwvc3ZnPgo=';
		me._svg_2_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._svg_2_1);
		me.__35.appendChild(me._container_3);
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._left=document.createElement('div');
		els=me._left__img=document.createElement('img');
		els.className='ggskin ggskin_left';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="left";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 49px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((49px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 21px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._left);
		el=me._svg_1_1=document.createElement('div');
		els=me._svg_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLW9wYWNpdHk9IjAuNjI3NDUxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPHBvbHlsaW5lIHBvaW50cz0iMTUgMTggOSAxMiAxNSA2Ii8+Cjwvc3ZnPgo=';
		me._svg_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_4.appendChild(me._svg_1_1);
		me.__35.appendChild(me._container_4);
		me.divSkin.appendChild(me.__35);
		el=me._header=document.createElement('div');
		el.ggId="header";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 9999;';
		hs+='height : 15%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='max-height:60px; min-width:267px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._header.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._header.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 1310))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._header.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._header.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._header.style.transition='';
				if (me._header.ggCurrentLogicStateVisible == 0) {
					me._header.style.visibility=(Number(me._header.style.opacity)>0||!me._header.style.opacity)?'inherit':'hidden';
					me._header.ggVisible=true;
				}
				else {
					me._header.style.visibility="hidden";
					me._header.ggVisible=false;
				}
			}
		}
		me._header.logicBlock_visible();
		me._header.ggUpdatePosition=function (useTransition) {
		}
		el=me._bg=document.createElement('div');
		el.ggId="bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='background:rgba(255,255,255,0.8); backdrop-filter: blur(8px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._bg.ggUpdatePosition=function (useTransition) {
		}
		me._header.appendChild(me._bg);
		el=me._logo=document.createElement('div');
		el.ggId="logo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 31px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._logo.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAABiCAYAAAAIoaKNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZj'+
			'pEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0MDBDNkIyN0ZERTExRUY5ODQzRkQzODIyRkM0QzgyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0MDBDNkIzN0ZERTExRUY5ODQzRkQzODIyRkM0'+
			'QzgyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjQwMEM2QjA3RkRFMTFFRjk4NDNGRDM4MjJGQzRDODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjQwMEM2QjE3RkRFMTFFRjk4NDNGRDM4MjJGQzRDODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5UANboAAAMfElEQVR42uxdDZQWVRmeBVRQjMyTpFJKVhhWECEnEISkXaVTQImyIL8GpVmnbeUE/SkVkUVtKpYEGqCJQBEE6YmlVRYWBS0NtfAv5ZgYEiuihBC42/Ps3D1t0507M7vzfd98y/Oc857Znbkzc+feZ+6873vf+34lXh'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._logo.appendChild(me._image_1);
		me._header.appendChild(me._logo);
		el=me.__29=document.createElement('div');
		el.ggId="\uc2a4\ud0a8\ub044\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__29.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__29.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__29.style.transition='';
				if (me.__29.ggCurrentLogicStateVisible == 0) {
					me.__29.style.visibility="hidden";
					me.__29.ggVisible=false;
				}
				else {
					me.__29.style.visibility=(Number(me.__29.style.opacity)>0||!me.__29.style.opacity)?'inherit':'hidden';
					me.__29.ggVisible=true;
				}
			}
		}
		me.__29.logicBlock_visible();
		me.__29.onclick=function (e) {
			player.setVariableValue('vis_hide', true);
			me.__27.style.transition='none';
			me.__27.style.visibility='hidden';
			me.__27.ggVisible=false;
			me._footer.style.transition='none';
			me._footer.style.visibility='hidden';
			me._footer.ggVisible=false;
			me.__15.style.transition='none';
			me.__15.style.visibility='hidden';
			me.__15.ggVisible=false;
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				me.__35.style.transition='none';
				me.__35.style.visibility='hidden';
				me.__35.ggVisible=false;
			}
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1leWUtb2ZmIj4KIDxwYXRoIGQ9Ik0xNy45NCAxNy45NEExMC4wNyAxMC4wNyAwIDAgMSAxMiAyMGMtNyAwLTExLTgtMTEtOGExOC40NSAxOC40NSAwIDAgMSA1LjA2LTUuOTRNOS45IDQuMjRBOS4xMiA5LjEyIDAgMCAxIDEyIDRjNy'+
			'AwIDExIDggMTEgOGExOC41IDE4LjUgMCAwIDEtMi4xNiAzLjE5bS02LjcyLTEuMDdhMyAzIDAgMSAxLTQuMjQtNC4yNCIvPgogPGxpbmUgeTI9IjIzIiB4MT0iMSIgeDI9IjIzIiB5MT0iMSIvPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me.__29.appendChild(me._svg_2);
		me._header.appendChild(me.__29);
		el=me.__28=document.createElement('div');
		el.ggId="\uc2a4\ud0a8\ucf1c\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='position : absolute;';
		hs+='right : 6px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__28.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__28.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__28.style.transition='';
				if (me.__28.ggCurrentLogicStateVisible == 0) {
					me.__28.style.visibility=(Number(me.__28.style.opacity)>0||!me.__28.style.opacity)?'inherit':'hidden';
					me.__28.ggVisible=true;
				}
				else {
					me.__28.style.visibility="hidden";
					me.__28.ggVisible=false;
				}
			}
		}
		me.__28.logicBlock_visible();
		me.__28.onclick=function (e) {
			player.setVariableValue('vis_hide', false);
			me.__27.style.transition='none';
			me.__27.style.visibility=(Number(me.__27.style.opacity)>0||!me.__27.style.opacity)?'inherit':'hidden';
			me.__27.ggVisible=true;
			me._footer.style.transition='none';
			me._footer.style.visibility=(Number(me._footer.style.opacity)>0||!me._footer.style.opacity)?'inherit':'hidden';
			me._footer.ggVisible=true;
			me.__15.style.transition='none';
			me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
			me.__15.ggVisible=true;
			if (
				(
					((player.getViewerSize(true).width < 768))
				)
			) {
				me.__35.style.transition='none';
				me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
				me.__35.ggVisible=true;
			}
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1leWUiPgogPHBhdGggZD0iTTEgMTJzNC04IDExLTggMTEgOCAxMSA4LTQgOC0xMSA4LTExLTgtMTEtOHoiLz4KIDxjaXJjbGUgY3k9IjEyIiByPSIzIiBjeD0iMTIiLz4KPC9zdmc+Cg==';
		me._svg_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
		}
		me.__28.appendChild(me._svg_3);
		me._header.appendChild(me.__28);
		me.divSkin.appendChild(me._header);
		el=me.__27=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__27.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__27.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 1310))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__27.style.transition='';
				if (me.__27.ggCurrentLogicStateVisible == 0) {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
				else {
					me.__27.style.visibility="hidden";
					me.__27.ggVisible=false;
				}
			}
		}
		me.__27.logicBlock_visible();
		me.__27.onclick=function (e) {
			player.setVariableValue('vis_m_roomMove', true);
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 20px;';
		hs+='left : 28px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 5px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me._text_1);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPHBvbHlsaW5lIHBvaW50cz0iOSAxOCAxNSAxMiA5IDYiLz4KPC9zdmc+Cg==';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me.__27.appendChild(me._svg_1);
		me.divSkin.appendChild(me.__27);
		el=me._footer=document.createElement('div');
		el.ggId="footer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._footer.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._footer.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_footer') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._footer.ggCurrentLogicStateSize != newLogicStateSize) {
				me._footer.ggCurrentLogicStateSize = newLogicStateSize;
				me._footer.style.transition='width 0s, height 0s';
				if (me._footer.ggCurrentLogicStateSize == 0) {
					me._footer.style.width='100%';
					me._footer.style.height='240px';
					skin.updateSize(me._footer);
				}
				else {
					me._footer.style.width='100%';
					me._footer.style.height='70px';
					skin.updateSize(me._footer);
				}
			}
		}
		me._footer.logicBlock_size();
		me._footer.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 1310))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._footer.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._footer.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._footer.style.transition='width 0s, height 0s';
				if (me._footer.ggCurrentLogicStateVisible == 0) {
					me._footer.style.visibility=(Number(me._footer.style.opacity)>0||!me._footer.style.opacity)?'inherit':'hidden';
					me._footer.ggVisible=true;
				}
				else {
					me._footer.style.visibility="hidden";
					me._footer.ggVisible=false;
				}
			}
		}
		me._footer.logicBlock_visible();
		me._footer.onclick=function (e) {
			player.setVariableValue('vis_footer', !player.getVariableValue('vis_footer'));
			player.setVariableValue('vis_ad', false);
		}
		me._footer.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px 25px 0px 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me.__26=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4\ub85c\uace0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_footer') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__26.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__26.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__26.style.transition='right 0s, bottom 0s';
				if (me.__26.ggCurrentLogicStatePosition == 0) {
					me.__26.style.right='0px';
					me.__26.style.bottom='-90px';
				}
				else {
					me.__26.style.right='0px';
					me.__26.style.bottom='0px';
				}
			}
		}
		me.__26.logicBlock_position();
		me.__26.onclick=function (e) {
			player.openUrl("www.lanhouse.kr","");
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_10=document.createElement('div');
		el.ggId="Container 1";
		el.ggDy=5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 29px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : calc(50% - ((29px + 0px) / 2) + 5px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2_1=document.createElement('div');
		els=me._image_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_2_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_10.appendChild(me._image_2_1);
		me.__26.appendChild(me._container_10);
		me._rectangle_2.appendChild(me.__26);
		el=me.__25=document.createElement('div');
		els=me.__25__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc544\ud30c\ud2b8\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 17px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__25.ggUpdateText=function() {
			var params = [];
			var hs = player._("| \uc548\uc131\uc6b0\ubc29\uc544\uc774\uc720\uc258\uc5d0\uc2a4\ud2f0\uc9c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__25.ggUpdateText();
		el.appendChild(els);
		me.__25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__25.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_footer') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__25.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__25.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__25.style.transition='left 0s, top 0s';
				if (me.__25.ggCurrentLogicStatePosition == 0) {
					me.__25.style.left='0px';
					me.__25.style.top='-90px';
				}
				else {
					me.__25.style.left='0px';
					me.__25.style.top='0px';
				}
			}
		}
		me.__25.logicBlock_position();
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_2.appendChild(me.__25);
		me._footer.appendChild(me._rectangle_2);
		el=me.__24=document.createElement('div');
		el.ggId="\ub77c\uc778";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='height : 5px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		me._footer.appendChild(me.__24);
		el=me.__17=document.createElement('div');
		el.ggId="\uc2dc\uc138";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__17.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_footer') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__17.style.transition='';
				if (me.__17.ggCurrentLogicStateVisible == 0) {
					me.__17.style.visibility=(Number(me.__17.style.opacity)>0||!me.__17.style.opacity)?'inherit':'hidden';
					me.__17.ggVisible=true;
				}
				else {
					me.__17.style.visibility="hidden";
					me.__17.ggVisible=false;
				}
			}
		}
		me.__17.logicBlock_visible();
		me.__17.onclick=function (e) {
			player.setVariableValue('vis_aptinfo', true);
			player.setVariableValue('vis_footer', true);
				me.__44.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/kbland.kr\/c\/438480?ctype=01&xy=37.0059278,127.1994713,17\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__44.ggUpdateText();
			me.__44.ggTextDiv.scrollTop = 0;
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me.__21=document.createElement('div');
		el.ggId="\ud0c0\uc785\/\ucd2c\uc601\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me.__23=document.createElement('div');
		els=me.__23__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ud0c0\uc785";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 40px 0px 40px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__23.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud0c0\uc785    | 104", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__23.ggUpdateText();
		el.appendChild(els);
		me.__23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me.__23);
		el=me.__22=document.createElement('div');
		els=me.__22__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ucd2c\uc601\uc77c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: lighter;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 40px 0px 40px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__22.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucd2c\uc601\uc77c | 2025.03.25", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__22.ggUpdateText();
		el.appendChild(els);
		me.__22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me.__22);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : 1px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -8px;';
		hs+='visibility : inherit;';
		hs+='width : 87%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me.__21.appendChild(me._rectangle_3);
		me.__17.appendChild(me.__21);
		el=me.__18=document.createElement('div');
		el.ggId="\uc2dc\uc138\ud655\uc778\ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : -50px;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__19=document.createElement('div');
		els=me.__19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc2dc\uc138\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 12px;';
		hs+='bottom : -2px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((88% + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__19.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc6b0\ub9ac\uc9d1 \uc2dc\uc138 \ud655\uc778", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__19.ggUpdateText();
		el.appendChild(els);
		me.__19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1hcnJvdy1yaWdodCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utb3BhY2l0eT0iMSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj4KIDxsaW5lIHkyPSIxMiIgeDE9IjUiIHgyPSIxOSIgeTE9IjEyIi8+CiA8cG9seWxpbmUgcG9pbnRzPSIxMiA1IDE5IDEyIDEyIDE5Ii8+Cjwvc3ZnPgo=';
		me._svg_4__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 100px;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
		}
		me.__19.appendChild(me._svg_4);
		me.__18.appendChild(me.__19);
		me.__17.appendChild(me.__18);
		me._footer.appendChild(me.__17);
		el=me.__16=document.createElement('div');
		el.ggId="\ub2eb\uae30";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 22px;';
		hs+='top : 17px;';
		hs+='visibility : hidden;';
		hs+='width : 27px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_footer') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__16.style.transition='';
				if (me.__16.ggCurrentLogicStateVisible == 0) {
					me.__16.style.visibility=(Number(me.__16.style.opacity)>0||!me.__16.style.opacity)?'inherit':'hidden';
					me.__16.ggVisible=true;
				}
				else {
					me.__16.style.visibility="hidden";
					me.__16.ggVisible=false;
				}
			}
		}
		me.__16.logicBlock_visible();
		me.__16.onclick=function (e) {
			player.setVariableValue('vis_footer', false);
		}
		me.__16.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #2c2c2e;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci14IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPGxpbmUgeTI9IjE4IiB4MT0iMTgiIHgyPSI2IiB5MT0iNiIvPgogPGxpbmUgeTI9IjE4IiB4MT0iNiIgeDI9IjE4IiB5MT0iNiIvPgo8L3N2Zz4K';
		me._svg_5__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 17px;';
		hs+='left : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4.appendChild(me._svg_5);
		me.__16.appendChild(me._rectangle_4);
		me._footer.appendChild(me.__16);
		me.divSkin.appendChild(me._footer);
		el=me.__15=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30 \ubc84\ud2bc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='bottom : 85px;';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 45px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__15.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__15.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_footer') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__15.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__15.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__15.style.transition='left 0s, bottom 0s';
				if (me.__15.ggCurrentLogicStatePosition == 0) {
					me.__15.style.left='25px';
					me.__15.style.bottom='248px';
				}
				else {
					me.__15.style.left='25px';
					me.__15.style.bottom='85px';
				}
			}
		}
		me.__15.logicBlock_position();
		me.__15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width < 1310))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__15.style.transition='left 0s, bottom 0s';
				if (me.__15.ggCurrentLogicStateVisible == 0) {
					me.__15.style.visibility=(Number(me.__15.style.opacity)>0||!me.__15.style.opacity)?'inherit':'hidden';
					me.__15.ggVisible=true;
				}
				else {
					me.__15.style.visibility="hidden";
					me.__15.ggVisible=false;
				}
			}
		}
		me.__15.logicBlock_visible();
		me.__15.onclick=function (e) {
				me.__12.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/uzipsa_inpano\/\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me.__12.ggUpdateText();
			me.__12.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_ad', !player.getVariableValue('vis_ad'));
			player.setVariableValue('vis_footer', false);
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #1a6dff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_6.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_ad') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_6.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_6.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_6.style.transition='background-color 0s';
				if (me._rectangle_6.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_6.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._rectangle_6.style.backgroundColor="rgba(26,109,255,1)";
				}
			}
		}
		me._rectangle_6.logicBlock_backgroundcolor();
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6_6_1=document.createElement('div');
		els=me._svg_6_6_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItdGFnIiBzdHJva2Utb3BhY2l0eT0iMSI+CiA8cGF0aCBkPSJNMjAuNTkgMTMuNDFsLTcuMTcgNy4xN2EyIDIgMCAwIDEtMi44MyAwTDIgMTJWMmgxMGw4LjU5IDguNTlhMiAyIDAgMCAxIDAgMi44MnoiLz4KIDxsaW5lIHkyPSI3IiB4MT0iNy'+
			'IgeDI9IjcuMDEiIHkxPSI3Ii8+Cjwvc3ZnPgo=';
		me._svg_6_6_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6_6_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6_6_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6_6_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_6_6_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_6_6_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_6_6_1.style.transition='';
				if (me._svg_6_6_1.ggCurrentLogicStateVisible == 0) {
					me._svg_6_6_1.style.visibility=(Number(me._svg_6_6_1.style.opacity)>0||!me._svg_6_6_1.style.opacity)?'inherit':'hidden';
					me._svg_6_6_1.ggVisible=true;
				}
				else {
					me._svg_6_6_1.style.visibility="hidden";
					me._svg_6_6_1.ggVisible=false;
				}
			}
		}
		me._svg_6_6_1.logicBlock_visible();
		me._svg_6_6_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6.appendChild(me._svg_6_6_1);
		el=me._svg_6_1_1=document.createElement('div');
		els=me._svg_6_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMWE2ZGZmIiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItdGFnIiBzdHJva2Utb3BhY2l0eT0iMSI+CiA8cGF0aCBkPSJNMjAuNTkgMTMuNDFsLTcuMTcgNy4xN2EyIDIgMCAwIDEtMi44MyAwTDIgMTJWMmgxMGw4LjU5IDguNTlhMiAyIDAgMCAxIDAgMi44MnoiLz4KIDxsaW5lIHkyPSI3IiB4MT0iNy'+
			'IgeDI9IjcuMDEiIHkxPSI3Ii8+Cjwvc3ZnPgo=';
		me._svg_6_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6_1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6_1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_6_1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_6_1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_6_1_1.style.transition='';
				if (me._svg_6_1_1.ggCurrentLogicStateVisible == 0) {
					me._svg_6_1_1.style.visibility=(Number(me._svg_6_1_1.style.opacity)>0||!me._svg_6_1_1.style.opacity)?'inherit':'hidden';
					me._svg_6_1_1.ggVisible=true;
				}
				else {
					me._svg_6_1_1.style.visibility="hidden";
					me._svg_6_1_1.ggVisible=false;
				}
			}
		}
		me._svg_6_1_1.logicBlock_visible();
		me._svg_6_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_6.appendChild(me._svg_6_1_1);
		me.__15.appendChild(me._rectangle_6);
		me.divSkin.appendChild(me.__15);
		el=me.__10=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__10.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize(true).width > 1604))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 1280))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getViewerSize(true).width > 1140))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getViewerSize(true).width >= 940))
			)
			{
				newLogicStateSize = 3;
			}
			else if (
				((player.getViewerSize(true).width >= 768))
			)
			{
				newLogicStateSize = 4;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me.__10.ggCurrentLogicStateSize != newLogicStateSize) {
				me.__10.ggCurrentLogicStateSize = newLogicStateSize;
				me.__10.style.transition='width 0s, height 0s';
				if (me.__10.ggCurrentLogicStateSize == 0) {
					me.__10.style.width='40%';
					me.__10.style.height='80%';
					me.__10.style.left = 'calc(50% - (40% / 2))';
					skin.updateSize(me.__10);
				}
				else if (me.__10.ggCurrentLogicStateSize == 1) {
					me.__10.style.width='50%';
					me.__10.style.height='80%';
					me.__10.style.left = 'calc(50% - (50% / 2))';
					skin.updateSize(me.__10);
				}
				else if (me.__10.ggCurrentLogicStateSize == 2) {
					me.__10.style.width='60%';
					me.__10.style.height='80%';
					me.__10.style.left = 'calc(50% - (60% / 2))';
					skin.updateSize(me.__10);
				}
				else if (me.__10.ggCurrentLogicStateSize == 3) {
					me.__10.style.width='70%';
					me.__10.style.height='80%';
					me.__10.style.left = 'calc(50% - (70% / 2))';
					skin.updateSize(me.__10);
				}
				else if (me.__10.ggCurrentLogicStateSize == 4) {
					me.__10.style.width='80%';
					me.__10.style.height='84%';
					me.__10.style.left = 'calc(50% - (80% / 2))';
					skin.updateSize(me.__10);
				}
				else {
					me.__10.style.width='100%';
					me.__10.style.height='100%';
					me.__10.style.left = 'calc(50% - (100% / 2))';
					skin.updateSize(me.__10);
				}
			}
		}
		me.__10.logicBlock_size();
		me.__10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_ad') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__10.style.transition='width 0s, height 0s';
				if (me.__10.ggCurrentLogicStateVisible == 0) {
					me.__10.style.visibility=(Number(me.__10.style.opacity)>0||!me.__10.style.opacity)?'inherit':'hidden';
					me.__10.ggVisible=true;
				}
				else {
					me.__10.style.visibility="hidden";
					me.__10.ggVisible=false;
				}
			}
		}
		me.__10.logicBlock_visible();
		me.__10.ggUpdatePosition=function (useTransition) {
		}
		el=me.__11=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uc9d1\uafb8\ubbf8\uae30-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me.__13=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uc9d1\uafb8\ubbf8\uae30-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 25px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me.__14=document.createElement('div');
		els=me.__14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uc9d1\uafb8\ubbf8\uae30-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(26,109,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__14.ggUpdateText=function() {
			var params = [];
			var hs = player._("| \uc6b0\uc9d1\uc0ac \ucd94\ucc9c AD", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__14.ggUpdateText();
		el.appendChild(els);
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__14.ggUpdatePosition=function (useTransition) {
		}
		me.__13.appendChild(me.__14);
		el=me._container_1=document.createElement('div');
		el.ggId="\ubaa8\ubc14\uc77c-\uc9d1\uafb8\ubbf8\uae30-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1.onclick=function (e) {
			player.setVariableValue('vis_aptinfo', false);
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__20=document.createElement('div');
		el.ggId="\ub2eb\uae30_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 27px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__20.onclick=function (e) {
			player.setVariableValue('vis_ad', false);
		}
		me.__20.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_4_2=document.createElement('div');
		el.ggId="Rectangle 4_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_4_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_5_2=document.createElement('div');
		els=me._svg_5_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM2MzYzQzIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci14IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPGxpbmUgeTI9IjE4IiB4MT0iMTgiIHgyPSI2IiB5MT0iNiIvPgogPGxpbmUgeTI9IjE4IiB4MT0iNiIgeDI9IjE4IiB5MT0iNiIvPgo8L3N2Zz4K';
		me._svg_5_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 17px;';
		hs+='left : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_5_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5_2.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_4_2.appendChild(me._svg_5_2);
		me.__20.appendChild(me._rectangle_4_2);
		me._container_1.appendChild(me.__20);
		me.__13.appendChild(me._container_1);
		me.__11.appendChild(me.__13);
		el=me._iframe=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((88% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin-top:125px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._iframe.ggUpdatePosition=function (useTransition) {
		}
		el=me.__12=document.createElement('div');
		els=me.__12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ub9ac\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me.__12.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__12.ggUpdateText();
		el.appendChild(els);
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__12.ggUpdatePosition=function (useTransition) {
		}
		me._iframe.appendChild(me.__12);
		me.__11.appendChild(me._iframe);
		me.__10.appendChild(me.__11);
		me.divSkin.appendChild(me.__10);
		el=me.__pc1=document.createElement('div');
		el.ggId="\uac00\uaca9\uc815\ubcf4_pc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 80%;';
		hs+='left : -500px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__pc1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__pc1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_pcaptinfo') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__pc1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__pc1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__pc1.style.transition='left 800ms ease-in 0ms, top 800ms ease-in 0ms';
				if (me.__pc1.ggCurrentLogicStatePosition == 0) {
					me.__pc1.style.left='0px';
					me.__pc1.style.top='70px';
				}
				else {
					me.__pc1.style.left='-500px';
					me.__pc1.style.top='70px';
				}
			}
		}
		me.__pc1.logicBlock_position();
		me.__pc1.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc5=document.createElement('div');
		el.ggId="pc-\uac00\uaca9\uc815\ubcf4-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 15px 15px 0px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc5.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc7=document.createElement('div');
		el.ggId="pc-\uac00\uaca9\uc815\ubcf4-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 25px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc7.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_13=document.createElement('div');
		els=me._pc_13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-\uac00\uaca9\uc815\ubcf4-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pc_13.ggUpdateText=function() {
			var params = [];
			var hs = player._("| KB \ubd80\ub3d9\uc0b0 \uc2dc\uc138", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc_13.ggUpdateText();
		el.appendChild(els);
		me._pc_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_13.ggUpdatePosition=function (useTransition) {
		}
		me._pc7.appendChild(me._pc_13);
		el=me._pccontainer_1=document.createElement('div');
		el.ggId="pc-\uac00\uaca9\uc815\ubcf4-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pccontainer_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pccontainer_1.onclick=function (e) {
			player.setVariableValue('vis_pcaptinfo', false);
		}
		me._pccontainer_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_12=document.createElement('div');
		el.ggId="pc\ub2eb\uae30_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : -20px;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 27px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_12.onclick=function (e) {
			player.setVariableValue('vis_pcaptinfo', false);
		}
		me._pc_12.ggUpdatePosition=function (useTransition) {
		}
		el=me._pcrectangle_4_1=document.createElement('div');
		el.ggId="pcRectangle 4_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #2c2c2e;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pcrectangle_4_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pcrectangle_4_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._pcsvg_5_1=document.createElement('div');
		els=me._pcsvg_5_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci14IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPGxpbmUgeTI9IjE4IiB4MT0iMTgiIHgyPSI2IiB5MT0iNiIvPgogPGxpbmUgeTI9IjE4IiB4MT0iNiIgeDI9IjE4IiB5MT0iNiIvPgo8L3N2Zz4K';
		me._pcsvg_5_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pcSvg 5_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 17px;';
		hs+='left : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pcsvg_5_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pcsvg_5_1.ggUpdatePosition=function (useTransition) {
		}
		me._pcrectangle_4_1.appendChild(me._pcsvg_5_1);
		me._pc_12.appendChild(me._pcrectangle_4_1);
		me._pccontainer_1.appendChild(me._pc_12);
		me._pc7.appendChild(me._pccontainer_1);
		me._pc5.appendChild(me._pc7);
		el=me._pciframe=document.createElement('div');
		el.ggId="pc\uac00\uaca9\uc815\ubcf4-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		hs+='margin-top:125px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pciframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pciframe.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc6=document.createElement('div');
		els=me._pc6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc\ub124\uc774\ubc84\uc815\ubcf4\ub780";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pc6.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc6.ggUpdateText();
		el.appendChild(els);
		me._pc6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc6.ggUpdatePosition=function (useTransition) {
		}
		me._pciframe.appendChild(me._pc6);
		me._pc5.appendChild(me._pciframe);
		me.__pc1.appendChild(me._pc5);
		me.divSkin.appendChild(me.__pc1);
		el=me._pc_11=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9_\uba54\ub274_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='height : 80%;';
		hs+='left : -500px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_11.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc_11.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_pc_roomMove') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._pc_11.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._pc_11.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._pc_11.style.transition='left 800ms ease-in 0ms, top 800ms ease-in 0ms';
				if (me._pc_11.ggCurrentLogicStatePosition == 0) {
					me._pc_11.style.left='0px';
					me._pc_11.style.top='70px';
				}
				else {
					me._pc_11.style.left='-500px';
					me._pc_11.style.top='70px';
				}
			}
		}
		me._pc_11.logicBlock_position();
		me._pc_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc2=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 15px 15px 0px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc2.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc4=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-\uc2a4\ud06c\ub864";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 88%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc4.ggUpdatePosition=function (useTransition) {
		}
		el=me._pcscrollarea_1=document.createElement('div');
		els=me._pcscrollarea_1__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 209px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 474px;';
		hs+="";
		els.setAttribute('style',hs);
		me._pcscrollarea_1.ggScrollByX = function(diffX) {
			if(!me._pcscrollarea_1.ggHorScrollVisible || diffX == 0 || me._pcscrollarea_1.ggHPercentVisible >= 1.0) return;
			me._pcscrollarea_1.ggScrollPosX = (me._pcscrollarea_1__horScrollFg.offsetLeft + diffX);
			me._pcscrollarea_1.ggScrollPosX = Math.max(me._pcscrollarea_1.ggScrollPosX, 0);
			me._pcscrollarea_1.ggScrollPosX = Math.min(me._pcscrollarea_1.ggScrollPosX, me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth);
			me._pcscrollarea_1__horScrollFg.style.left = me._pcscrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._pcscrollarea_1.ggScrollPosX / (me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth);
			me._pcscrollarea_1__content.style.left = -(Math.round((me._pcscrollarea_1.ggContentWidth * (1.0 - me._pcscrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentLeftOffset + 'px';
			me._pcscrollarea_1.ggScrollPosXPercent = (me._pcscrollarea_1__horScrollFg.offsetLeft / me._pcscrollarea_1__horScrollBg.offsetWidth);
		}
		me._pcscrollarea_1.ggScrollByXSmooth = function(diffX) {
			if(!me._pcscrollarea_1.ggHorScrollVisible || diffX == 0 || me._pcscrollarea_1.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._pcscrollarea_1.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._pcscrollarea_1.ggScrollPosX >= me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth)) {
					me._pcscrollarea_1.ggScrollPosX = Math.min(me._pcscrollarea_1.ggScrollPosX, me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._pcscrollarea_1.ggScrollPosX <= 0)) {
					me._pcscrollarea_1.ggScrollPosX = Math.max(me._pcscrollarea_1.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._pcscrollarea_1__horScrollFg.style.left = me._pcscrollarea_1.ggScrollPosX + 'px';
			let percentScrolled = me._pcscrollarea_1.ggScrollPosX / (me._pcscrollarea_1__horScrollBg.offsetWidth - me._pcscrollarea_1__horScrollFg.offsetWidth);
			me._pcscrollarea_1__content.style.left = -(Math.round((me._pcscrollarea_1.ggContentWidth * (1.0 - me._pcscrollarea_1.ggHPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentLeftOffset + 'px';
			me._pcscrollarea_1.ggScrollPosXPercent = (me._pcscrollarea_1__horScrollFg.offsetLeft / me._pcscrollarea_1__horScrollBg.offsetWidth);
			}, 10);
		}
		me._pcscrollarea_1.ggScrollByY = function(diffY) {
			if(!me._pcscrollarea_1.ggVertScrollVisible || diffY == 0 || me._pcscrollarea_1.ggVPercentVisible >= 1.0) return;
			me._pcscrollarea_1.ggScrollPosY = (me._pcscrollarea_1__vertScrollFg.offsetTop + diffY);
			me._pcscrollarea_1.ggScrollPosY = Math.max(me._pcscrollarea_1.ggScrollPosY, 0);
			me._pcscrollarea_1.ggScrollPosY = Math.min(me._pcscrollarea_1.ggScrollPosY, me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
			me._pcscrollarea_1__vertScrollFg.style.top = me._pcscrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._pcscrollarea_1.ggScrollPosY / (me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
			me._pcscrollarea_1__content.style.top = -(Math.round((me._pcscrollarea_1.ggContentHeight * (1.0 - me._pcscrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentTopOffset + 'px';
			me._pcscrollarea_1.ggScrollPosYPercent = (me._pcscrollarea_1__vertScrollFg.offsetTop / me._pcscrollarea_1__vertScrollBg.offsetHeight);
		}
		me._pcscrollarea_1.ggScrollByYSmooth = function(diffY) {
			if(!me._pcscrollarea_1.ggVertScrollVisible || diffY == 0 || me._pcscrollarea_1.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._pcscrollarea_1.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._pcscrollarea_1.ggScrollPosY >= me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight)) {
					me._pcscrollarea_1.ggScrollPosY = Math.min(me._pcscrollarea_1.ggScrollPosY, me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._pcscrollarea_1.ggScrollPosY <= 0)) {
					me._pcscrollarea_1.ggScrollPosY = Math.max(me._pcscrollarea_1.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._pcscrollarea_1__vertScrollFg.style.top = me._pcscrollarea_1.ggScrollPosY + 'px';
			let percentScrolled = me._pcscrollarea_1.ggScrollPosY / (me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
			me._pcscrollarea_1__content.style.top = -(Math.round((me._pcscrollarea_1.ggContentHeight * (1.0 - me._pcscrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentTopOffset + 'px';
			me._pcscrollarea_1.ggScrollPosYPercent = (me._pcscrollarea_1__vertScrollFg.offsetTop / me._pcscrollarea_1__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._pcscrollarea_1.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._pcscrollarea_1.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._pcscrollarea_1.ggHPercentVisible);
					me._pcscrollarea_1.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._pcscrollarea_1.clientWidth - (me._pcscrollarea_1.ggVertScrollVisible ? 3 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._pcscrollarea_1.clientWidth - (me._pcscrollarea_1.ggVertScrollVisible ? 3 : 0))) * me._pcscrollarea_1.ggHPercentVisible);
					me._pcscrollarea_1.ggScrollByXSmooth(diffX);
				}
			}
			if (me._pcscrollarea_1.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._pcscrollarea_1.ggVPercentVisible);
					me._pcscrollarea_1.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._pcscrollarea_1.clientHeight - (me._pcscrollarea_1.ggHorScrollVisible ? 3 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._pcscrollarea_1.clientHeight - (me._pcscrollarea_1.ggHorScrollVisible ? 3 : 0))) * me._pcscrollarea_1.ggVPercentVisible);
					me._pcscrollarea_1.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._pcscrollarea_1__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._pcscrollarea_1.ggDragInertiaX *= 0.96;
				me._pcscrollarea_1.ggDragInertiaY *= 0.96;
				me._pcscrollarea_1.ggScrollByX(me._pcscrollarea_1.ggDragInertiaX);
				me._pcscrollarea_1.ggScrollByY(me._pcscrollarea_1.ggDragInertiaY);
				if (Math.abs(me._pcscrollarea_1.ggDragInertiaX) < 1.0 && Math.abs(me._pcscrollarea_1.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._pcscrollarea_1__content.onmouseup = null;
			me._pcscrollarea_1__content.onmousemove = null;
			me._pcscrollarea_1__content.ontouchend = null;
			me._pcscrollarea_1__content.ontouchmove = null;
			me._pcscrollarea_1__content.onpointerup = null;
			me._pcscrollarea_1__content.onpointermove = null;
			setTimeout(function() { me._pcscrollarea_1.ggIsDragging = false; }, 100);
		}
		me._pcscrollarea_1__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._pcscrollarea_1.ggDragStartX) > 10 || Math.abs(eventY - me._pcscrollarea_1.ggDragStartY) > 10) me._pcscrollarea_1.ggIsDragging = true;
			var diffX = (eventX - me._pcscrollarea_1.ggDragLastX) * me._pcscrollarea_1.ggHPercentVisible;
			var diffY = (eventY - me._pcscrollarea_1.ggDragLastY) * me._pcscrollarea_1.ggVPercentVisible;
			me._pcscrollarea_1.ggDragInertiaX = -diffX;
			me._pcscrollarea_1.ggDragInertiaY = -diffY;
			me._pcscrollarea_1.ggDragLastX = eventX;
			me._pcscrollarea_1.ggDragLastY = eventY;
			me._pcscrollarea_1.ggScrollByX(-diffX);
			me._pcscrollarea_1.ggScrollByY(-diffY);
		}
		me._pcscrollarea_1__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._pcscrollarea_1.ggDragLastX = me._pcscrollarea_1.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._pcscrollarea_1.ggDragLastY = me._pcscrollarea_1.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._pcscrollarea_1__content.onmouseup = me._pcscrollarea_1__content.mousetouchend;
			me._pcscrollarea_1__content.ontouchend = me._pcscrollarea_1__content.mousetouchend;
			me._pcscrollarea_1__content.onmousemove = me._pcscrollarea_1__content.mousetouchmove;
			me._pcscrollarea_1__content.ontouchmove = me._pcscrollarea_1__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._pcscrollarea_1__content.onpointerup = me._pcscrollarea_1__content.ontouchend;
				me._pcscrollarea_1__content.onpointermove = me._pcscrollarea_1__content.ontouchmove;
			}
		}
		els.onmousedown = me._pcscrollarea_1__content.mousetouchstart;
		els.ontouchstart = me._pcscrollarea_1__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._pcscrollarea_1__content.mousetouchstart;
		}
		elVertScrollBg = me._pcscrollarea_1__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 3px; height: 236.544px; background-color: rgba(210,210,210,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._pcscrollarea_1__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 3px; height: 236.544px; background-color: rgba(0,0,0,0.196078); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._pcscrollarea_1.ggScrollPosY = 0;
		me._pcscrollarea_1.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._pcscrollarea_1.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._pcscrollarea_1.ggDragInertiaY *= 0.96;
					me._pcscrollarea_1.ggScrollByY(me._pcscrollarea_1.ggDragInertiaY);
					if (Math.abs(me._pcscrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._pcscrollarea_1.ggDragLastY;
				me._pcscrollarea_1.ggDragInertiaY = diffY;
				me._pcscrollarea_1.ggDragLastY = e.clientY;
				me._pcscrollarea_1.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._pcscrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._pcscrollarea_1.ggDragInertiaY *= 0.96;
					me._pcscrollarea_1.ggScrollByY(me._pcscrollarea_1.ggDragInertiaY);
					if (Math.abs(me._pcscrollarea_1.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._pcscrollarea_1.ggDragLastY;
				me._pcscrollarea_1.ggDragInertiaY = diffY;
				me._pcscrollarea_1.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._pcscrollarea_1.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._pcscrollarea_1.ggScrollHeight;
			if (e.offsetY < me._pcscrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._pcscrollarea_1.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._pcscrollarea_1__vertScrollBg.getBoundingClientRect();
			var diffY = me._pcscrollarea_1.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._pcscrollarea_1.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._pcscrollarea_1.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._pcscrollarea_1.ggScrollByYSmooth(30 * me._pcscrollarea_1.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._pcscrollarea_1__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 3px; height: 3px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-Scrollarea 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 70%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pcscrollarea_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pcscrollarea_1.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._pcscrollarea_1.ggScrollPosY / me._pcscrollarea_1.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				me._pcscrollarea_1__vertScrollBg.style.visibility = 'inherit';
				me._pcscrollarea_1__vertScrollFg.style.visibility = 'inherit';
				me._pcscrollarea_1.ggVertScrollVisible = true;
				if(me._pcscrollarea_1.ggVertScrollVisible) {
					me._pcscrollarea_1.ggAvailableWidth = me._pcscrollarea_1.clientWidth - 3;
					if (me._pcscrollarea_1.ggHorScrollVisible) {
						me._pcscrollarea_1.ggAvailableHeight = me._pcscrollarea_1.clientHeight - 3;
						me._pcscrollarea_1.ggAvailableHeightWithScale = me._pcscrollarea_1.getBoundingClientRect().height - me._pcscrollarea_1__vertScrollBg.getBoundingClientRect().width;
						me._pcscrollarea_1__cornerBg.style.visibility = 'inherit';
					} else {
						me._pcscrollarea_1.ggAvailableHeight = me._pcscrollarea_1.clientHeight;
						me._pcscrollarea_1.ggAvailableHeightWithScale = me._pcscrollarea_1.getBoundingClientRect().height;
						me._pcscrollarea_1__cornerBg.style.visibility = 'hidden';
					}
					me._pcscrollarea_1__vertScrollBg.style.height = me._pcscrollarea_1.ggAvailableHeight + 'px';
					me._pcscrollarea_1.ggVPercentVisible = contentHeight != 0 ? me._pcscrollarea_1.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._pcscrollarea_1.ggVPercentVisible > 1.0) me._pcscrollarea_1.ggVPercentVisible = 1.0;
					me._pcscrollarea_1.ggScrollHeight =  Math.round(me._pcscrollarea_1__vertScrollBg.offsetHeight * me._pcscrollarea_1.ggVPercentVisible);
					me._pcscrollarea_1__vertScrollFg.style.height = me._pcscrollarea_1.ggScrollHeight + 'px';
					me._pcscrollarea_1.ggScrollPosY = me._pcscrollarea_1.ggScrollPosYPercent * me._pcscrollarea_1.ggAvailableHeight;
					me._pcscrollarea_1.ggScrollPosY = Math.min(me._pcscrollarea_1.ggScrollPosY, me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
					me._pcscrollarea_1__vertScrollFg.style.top = me._pcscrollarea_1.ggScrollPosY + 'px';
					if (me._pcscrollarea_1.ggVPercentVisible < 1.0) {
						let percentScrolled = me._pcscrollarea_1.ggScrollPosY / (me._pcscrollarea_1__vertScrollBg.offsetHeight - me._pcscrollarea_1__vertScrollFg.offsetHeight);
						me._pcscrollarea_1__content.style.top = -(Math.round((me._pcscrollarea_1.ggContentHeight * (1.0 - me._pcscrollarea_1.ggVPercentVisible)) * percentScrolled)) + me._pcscrollarea_1.ggContentTopOffset + 'px';
					}
				} else {
					me._pcscrollarea_1.ggAvailableWidth = me._pcscrollarea_1.clientWidth;
					me._pcscrollarea_1.ggScrollPosY = 0;
					me._pcscrollarea_1.ggScrollPosYPercent = 0.0;
					me._pcscrollarea_1__content.style.top = this.ggContentTopOffset + 'px';
					me._pcscrollarea_1__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._pcscrollarea_1.ggHorScrollVisible || vertScrollWasVisible != me._pcscrollarea_1.ggVertScrollVisible) {
					skin.updateSize(me._pcscrollarea_1);
					me._pcscrollarea_1.ggUpdatePosition();
				}
			}
		}
		el=me._pccontainer_2=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._pccontainer_2;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="pc-Container 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pccontainer_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pccontainer_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc320px_1=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._pc320px_1;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 400;
		el.ggHeight = 200;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._pc320px_1.ggUpdating == true) return;
			me._pc320px_1.ggUpdating = true;
			var el=me._pc320px_1;
			var curNumCols = 0;
			curNumCols = me._pc320px_1.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._pc320px_1.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._pc320px_1.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._pc320px_1.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._pc320px_1.getFilteredNodes(tourNodes, filter);
			me._pc320px_1.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._pc320px_1.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._pc320px_1.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._pc320px_1.ggWidth) + 'px';
				parameter.width=me._pc320px_1.ggWidth + 'px';
				parameter.height=me._pc320px_1.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_pc320px_1_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._pc320px_1.ggNodeCount = me._pc320px_1.ggNumFilterPassed;
			me._pc320px_1.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._pc320px_1.parentNode && me._pc320px_1.parentNode.classList.contains('ggskin_subelement') && me._pc320px_1.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._pc320px_1.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="pc-320px \uc774\ud558_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 200px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		hs+='min-width:100px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc320px_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc320px_1.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._pc320px_1.childNodes.length; i++) {
				var child=me._pc320px_1.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._pc320px_1.ggUpdatePosition=function (useTransition) {
			me._pc320px_1.ggUpdate();
		}
		me._pccontainer_2.appendChild(me._pc320px_1);
		me._pcscrollarea_1__content.appendChild(me._pccontainer_2);
		me._pc4.appendChild(me._pcscrollarea_1);
		me._pc2.appendChild(me._pc4);
		el=me._pc3=document.createElement('div');
		el.ggId="pc-\uacf5\uac04\uc774\ub3d9-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 24px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc3.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_9=document.createElement('div');
		els=me._pc_9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc--\uacf5\uac04\uc774\ub3d9-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: bolder;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pc_9.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uacf5\uac04\uc774\ub3d9", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc_9.ggUpdateText();
		el.appendChild(els);
		me._pc_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_9.ggUpdatePosition=function (useTransition) {
		}
		el=me._pcsvg_1_2=document.createElement('div');
		els=me._pcsvg_1_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPHBvbHlsaW5lIHBvaW50cz0iOSAxOCAxNSAxMiA5IDYiLz4KPC9zdmc+Cg==';
		me._pcsvg_1_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pc-Svg 1_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : -27px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pcsvg_1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pcsvg_1_2.ggUpdatePosition=function (useTransition) {
		}
		me._pc_9.appendChild(me._pcsvg_1_2);
		me._pc3.appendChild(me._pc_9);
		el=me._pc_1_1=document.createElement('div');
		el.ggId="pc-\ub2eb\uae30_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : -20px;';
		hs+='top : -8px;';
		hs+='visibility : inherit;';
		hs+='width : 27px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_1_1.onclick=function (e) {
			player.setVariableValue('vis_pc_roomMove', false);
		}
		me._pc_1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._pcrectangle_4_1_1=document.createElement('div');
		el.ggId="pc-Rectangle 4_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #2c2c2e;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pcrectangle_4_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pcrectangle_4_1_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_5_1_1=document.createElement('div');
		els=me._pc_5_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci14IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPGxpbmUgeTI9IjE4IiB4MT0iMTgiIHgyPSI2IiB5MT0iNiIvPgogPGxpbmUgeTI9IjE4IiB4MT0iNiIgeDI9IjE4IiB5MT0iNiIvPgo8L3N2Zz4K';
		me._pc_5_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pc- 5_1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 17px;';
		hs+='left : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_5_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_5_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._pcrectangle_4_1_1.appendChild(me._pc_5_1_1);
		me._pc_1_1.appendChild(me._pcrectangle_4_1_1);
		me._pc3.appendChild(me._pc_1_1);
		me._pc2.appendChild(me._pc3);
		me._pc_11.appendChild(me._pc2);
		me.divSkin.appendChild(me._pc_11);
		el=me._pc1=document.createElement('div');
		el.ggId="PC\ud478\ud130";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 1310))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc1.style.transition='';
				if (me._pc1.ggCurrentLogicStateVisible == 0) {
					me._pc1.style.visibility=(Number(me._pc1.style.opacity)>0||!me._pc1.style.opacity)?'inherit':'hidden';
					me._pc1.ggVisible=true;
				}
				else {
					me._pc1.style.visibility="hidden";
					me._pc1.ggVisible=false;
				}
			}
		}
		me._pc1.logicBlock_visible();
		me._pc1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px 15px 0px 0px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='box-shadow:-2px -2px 10px rgba(0,0,0,0.6)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		el=me.__9=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8 \uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 99;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__9.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_pcfooter') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me.__9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me.__9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me.__9.style.transition='left 0s, top 0s';
				if (me.__9.ggCurrentLogicStatePosition == 0) {
					me.__9.style.left='20px';
					me.__9.style.top='-200px';
				}
				else {
					me.__9.style.left='20px';
					me.__9.style.top='0px';
				}
			}
		}
		me.__9.logicBlock_position();
		me.__9.onclick=function (e) {
			player.setVariableValue('vis_pcfooter', !player.getVariableValue('vis_pcfooter'));
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='border-color : rgba(255,255,255,0);';
		hs+='border-style : solid;';
		hs+='border-width : 0px 0px 0px 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		hs+='line-height:18px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc548\uc131\uacf5\ub3c4\uc6b0\ubc29\uc544\uc774\uc720\uc258\uc5d0\uc2a4\ud2f0\uc9c0", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_7=document.createElement('div');
		el.ggId="Rectangle 7";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : 31%;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((31% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 2px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_7.ggUpdatePosition=function (useTransition) {
		}
		me._text_2.appendChild(me._rectangle_7);
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi11cCIgc3Ryb2tlLW9wYWNpdHk9IjEiPgogPHBvbHlsaW5lIHBvaW50cz0iMTggMTUgMTIgOSA2IDE1Ii8+Cjwvc3ZnPgo=';
		me._svg_8__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : 165px;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_8.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_pcfooter') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._svg_8.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._svg_8.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._svg_8.style.transition='transform 0s';
				if (me._svg_8.ggCurrentLogicStateAngle == 0) {
					me._svg_8.ggParameter.a = 180;
					me._svg_8.style.transform=parameterToTransform(me._svg_8.ggParameter);
				}
				else {
					me._svg_8.ggParameter.a = 0;
					me._svg_8.style.transform=parameterToTransform(me._svg_8.ggParameter);
				}
			}
		}
		me._svg_8.logicBlock_angle();
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me._text_2.appendChild(me._svg_8);
		el=me._rectangle_9=document.createElement('div');
		el.ggId="Rectangle 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='height : 1px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_9.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_pcfooter') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_9.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_9.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_9.style.transition='background-color 0s';
				if (me._rectangle_9.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_9.style.backgroundColor="rgba(255,255,255,0.313726)";
				}
				else {
					me._rectangle_9.style.backgroundColor="rgba(255,255,255,0)";
				}
			}
		}
		me._rectangle_9.logicBlock_backgroundcolor();
		me._rectangle_9.ggUpdatePosition=function (useTransition) {
		}
		me._text_2.appendChild(me._rectangle_9);
		me.__9.appendChild(me._text_2);
		me._rectangle_1.appendChild(me.__9);
		el=me.__5=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8 \uc124\uba85";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 260px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -200px;';
		hs+='visibility : hidden;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pcfooter') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__5.style.transition='';
				if (me.__5.ggCurrentLogicStateVisible == 0) {
					me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
					me.__5.ggVisible=true;
				}
				else {
					me.__5.style.visibility="hidden";
					me.__5.ggVisible=false;
				}
			}
		}
		me.__5.logicBlock_visible();
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_8=document.createElement('div');
		el.ggId="Rectangle 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 15px 0px 0px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__8=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8\ud0c0\uc785";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 25%;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__8.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3=document.createElement('div');
		els=me._text_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 20px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ud0c0\uc785      | 104 Type", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3.ggUpdateText();
		el.appendChild(els);
		me._text_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3.ggUpdatePosition=function (useTransition) {
		}
		me.__8.appendChild(me._text_3);
		me._rectangle_8.appendChild(me.__8);
		el=me.__7=document.createElement('div');
		el.ggId="\uc544\ud30c\ud2b8\ucd2c\uc601\uc77c";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 25%;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__7.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_3_1=document.createElement('div');
		els=me._text_3_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 3_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 0px 0px 20px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_3_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\ucd2c\uc601\uc77c   | 2025.04.20", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_3_1.ggUpdateText();
		el.appendChild(els);
		me._text_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_3_1.ggUpdatePosition=function (useTransition) {
		}
		me.__7.appendChild(me._text_3_1);
		me._rectangle_8.appendChild(me.__7);
		el=me.__6=document.createElement('div');
		el.ggId="\uc2dc\uc138\ud655\uc778";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__6.onclick=function (e) {
			player.setVariableValue('vis_pcaptinfo', true);
				me._pc6.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/kbland.kr\/c\/438480?ctype=01&xy=37.0059278,127.1994713,17\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._pc6.ggUpdateText();
			me._pc6.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_pcfooter', false);
		}
		me.__6.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_4=document.createElement('div');
		els=me._text_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 8px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("\uc6b0\ub9ac\uc9d1 \uc2dc\uc138 \ud655\uc778", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_4.ggUpdateText();
		el.appendChild(els);
		me._text_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItYXJyb3ctcmlnaHQiIHN0cm9rZS1vcGFjaXR5PSIxIj4KIDxsaW5lIHkyPSIxMiIgeDE9IjUiIHgyPSIxOSIgeTE9IjEyIi8+CiA8cG9seWxpbmUgcG9pbnRzPSIxMiA1IDE5IDEyIDEyIDE5Ii8+Cjwvc3ZnPgo=';
		me._svg_9__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 16px;';
		hs+='position : absolute;';
		hs+='right : 145px;';
		hs+='top : calc(50% - ((16px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_9.ggUpdatePosition=function (useTransition) {
		}
		me._text_4.appendChild(me._svg_9);
		me.__6.appendChild(me._text_4);
		me._rectangle_8.appendChild(me.__6);
		me.__5.appendChild(me._rectangle_8);
		me._rectangle_1.appendChild(me.__5);
		el=me._pc_8=document.createElement('div');
		el.ggId="pc_\uacf5\uac04\uc774\ub3d9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_8.ggUpdatePosition=function (useTransition) {
		}
		el=me.__=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9\ubc30\uacbd";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='height : 68%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((68% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4=document.createElement('div');
		el.ggId="\uacf5\uac04\uc774\ub3d9\ubc84\ud2bc";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((15% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 15%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.onclick=function (e) {
			player.setVariableValue('vis_pc_roomMove', !player.getVariableValue('vis_pc_roomMove'));
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1ob21lIj4KIDxwYXRoIGQ9Ik0zIDlsOS03IDkgN3YxMWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnoiLz4KIDxwb2x5bGluZSBwb2ludHM9IjkgMjIgOSAxMiAxNSAxMiAxNSAyMiIvPgo8L3N2Zz4K';
		me._svg_10__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 10";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
		}
		me.__4.appendChild(me._svg_10);
		me.__.appendChild(me.__4);
		el=me.__3=document.createElement('div');
		el.ggId="\ud30c\ub178\ucd95\uc18c";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 20%;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 15%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.onclick=function (e) {
			player.changeFovLog(1,true);
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_14=document.createElement('div');
		els=me._svg_14__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1taW51cyI+CiA8bGluZSB5Mj0iMTIiIHgxPSI1IiB4Mj0iMTkiIHkxPSIxMiIvPgo8L3N2Zz4K';
		me._svg_14__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 14";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_14.ggUpdatePosition=function (useTransition) {
		}
		me.__3.appendChild(me._svg_14);
		me.__.appendChild(me.__3);
		el=me.__2=document.createElement('div');
		el.ggId="\ud30c\ub178\ud655\ub300";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 20%;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 15%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.onclick=function (e) {
			player.changeFovLog(-1,true);
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_13=document.createElement('div');
		els=me._svg_13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1wbHVzIj4KIDxsaW5lIHkyPSIxOSIgeDE9IjEyIiB4Mj0iMTIiIHkxPSI1Ii8+CiA8bGluZSB5Mj0iMTIiIHgxPSI1IiB4Mj0iMTkiIHkxPSIxMiIvPgo8L3N2Zz4K';
		me._svg_13__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 13";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_13.ggUpdatePosition=function (useTransition) {
		}
		me.__2.appendChild(me._svg_13);
		me.__.appendChild(me.__2);
		el=me.__1=document.createElement('div');
		el.ggId="\uc624\ub978\ucabd\ud30c\ub178";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 15%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_12=document.createElement('div');
		els=me._svg_12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLXJpZ2h0Ij4KIDxwb2x5bGluZSBwb2ludHM9IjkgMTggMTUgMTIgOSA2Ii8+Cjwvc3ZnPgo=';
		me._svg_12__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_12.ggUpdatePosition=function (useTransition) {
		}
		me.__1.appendChild(me._svg_12);
		me.__.appendChild(me.__1);
		el=me.__0=document.createElement('div');
		el.ggId="\uc67c\ucabd\ud30c\ub178";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQiPgogPHBvbHlsaW5lIHBvaW50cz0iMTUgMTggOSAxMiAxNSA2Ii8+Cjwvc3ZnPgo=';
		me._svg_11__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
		}
		me.__0.appendChild(me._svg_11);
		me.__.appendChild(me.__0);
		me._pc_8.appendChild(me.__);
		me._rectangle_1.appendChild(me._pc_8);
		el=me.__pc0=document.createElement('div');
		el.ggId="\ub79c\ud558\uc6b0\uc2a4\ub85c\uace0_pc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 999;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 30%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__pc0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__pc0.onclick=function (e) {
			player.openUrl("www.lanhouse.kr","");
		}
		me.__pc0.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_1_pc=document.createElement('div');
		el.ggId="Container 1_pc";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 25px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 90px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1_pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_1_pc.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_pc=document.createElement('div');
		els=me._image_pc__img=document.createElement('img');
		els.className='ggskin ggskin_image_pc';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image_pc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_pc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_pc.ggUpdatePosition=function (useTransition) {
		}
		me._container_1_pc.appendChild(me._image_pc);
		me.__pc0.appendChild(me._container_1_pc);
		me._rectangle_1.appendChild(me.__pc0);
		me._pc1.appendChild(me._rectangle_1);
		me.divSkin.appendChild(me._pc1);
		el=me.__pc=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30 \ubc84\ud2bc-pc";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__pc.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 1310))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__pc.style.transition='';
				if (me.__pc.ggCurrentLogicStateVisible == 0) {
					me.__pc.style.visibility=(Number(me.__pc.style.opacity)>0||!me.__pc.style.opacity)?'inherit':'hidden';
					me.__pc.ggVisible=true;
				}
				else {
					me.__pc.style.visibility="hidden";
					me.__pc.ggVisible=false;
				}
			}
		}
		me.__pc.logicBlock_visible();
		me.__pc.onclick=function (e) {
			player.setVariableValue('vis_pcad', !player.getVariableValue('vis_pcad'));
				me._pc_5.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/uzipsa_inpano\/\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._pc_5.ggUpdateText();
			me._pc_5.ggTextDiv.scrollTop = 0;
		}
		me.__pc.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #1a6dff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_10.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((player.getVariableValue('vis_pcad') == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._rectangle_10.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._rectangle_10.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._rectangle_10.style.transition='background-color 0s';
				if (me._rectangle_10.ggCurrentLogicStateBackgroundColor == 0) {
					me._rectangle_10.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._rectangle_10.style.backgroundColor="rgba(26,109,255,1)";
				}
			}
		}
		me._rectangle_10.logicBlock_backgroundcolor();
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6_6=document.createElement('div');
		els=me._svg_6_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItdGFnIiBzdHJva2Utb3BhY2l0eT0iMSI+CiA8cGF0aCBkPSJNMjAuNTkgMTMuNDFsLTcuMTcgNy4xN2EyIDIgMCAwIDEtMi44MyAwTDIgMTJWMmgxMGw4LjU5IDguNTlhMiAyIDAgMCAxIDAgMi44MnoiLz4KIDxsaW5lIHkyPSI3IiB4MT0iNy'+
			'IgeDI9IjcuMDEiIHkxPSI3Ii8+Cjwvc3ZnPgo=';
		me._svg_6_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6_6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6_6.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pcad') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_6_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_6_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_6_6.style.transition='';
				if (me._svg_6_6.ggCurrentLogicStateVisible == 0) {
					me._svg_6_6.style.visibility=(Number(me._svg_6_6.style.opacity)>0||!me._svg_6_6.style.opacity)?'inherit':'hidden';
					me._svg_6_6.ggVisible=true;
				}
				else {
					me._svg_6_6.style.visibility="hidden";
					me._svg_6_6.ggVisible=false;
				}
			}
		}
		me._svg_6_6.logicBlock_visible();
		me._svg_6_6.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_10.appendChild(me._svg_6_6);
		el=me._svg_6_1=document.createElement('div');
		els=me._svg_6_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMWE2ZGZmIiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItdGFnIiBzdHJva2Utb3BhY2l0eT0iMSI+CiA8cGF0aCBkPSJNMjAuNTkgMTMuNDFsLTcuMTcgNy4xN2EyIDIgMCAwIDEtMi44MyAwTDIgMTJWMmgxMGw4LjU5IDguNTlhMiAyIDAgMCAxIDAgMi44MnoiLz4KIDxsaW5lIHkyPSI3IiB4MT0iNy'+
			'IgeDI9IjcuMDEiIHkxPSI3Ii8+Cjwvc3ZnPgo=';
		me._svg_6_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pcad') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_6_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_6_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_6_1.style.transition='';
				if (me._svg_6_1.ggCurrentLogicStateVisible == 0) {
					me._svg_6_1.style.visibility=(Number(me._svg_6_1.style.opacity)>0||!me._svg_6_1.style.opacity)?'inherit':'hidden';
					me._svg_6_1.ggVisible=true;
				}
				else {
					me._svg_6_1.style.visibility="hidden";
					me._svg_6_1.ggVisible=false;
				}
			}
		}
		me._svg_6_1.logicBlock_visible();
		me._svg_6_1.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_10.appendChild(me._svg_6_1);
		me.__pc.appendChild(me._rectangle_10);
		me.divSkin.appendChild(me.__pc);
		el=me._pc_10=document.createElement('div');
		el.ggId="pc_\uc9d1\uafb8\ubbf8\uae30_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 80%;';
		hs+='left : -500px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_10.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc_10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_pcad') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._pc_10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._pc_10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._pc_10.style.transition='left 800ms ease-in 0ms, top 800ms ease-in 0ms';
				if (me._pc_10.ggCurrentLogicStatePosition == 0) {
					me._pc_10.style.left='0px';
					me._pc_10.style.top='70px';
				}
				else {
					me._pc_10.style.left='-500px';
					me._pc_10.style.top='70px';
				}
			}
		}
		me._pc_10.logicBlock_position();
		me._pc_10.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_4=document.createElement('div');
		el.ggId="pc_\uc9d1\uafb8\ubbf8\uae30-\ubc30\uacbd";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 15px 15px 0px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_6=document.createElement('div');
		el.ggId="pc_-\uc9d1\uafb8\ubbf8\uae30-\ud0c0\uc774\ud2c0";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 25px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_7=document.createElement('div');
		els=me._pc_7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc_\ubaa8\ubc14\uc77c-\uc9d1\uafb8\ubbf8\uae30-\uc544\ud30c\ud2b8 \uc774\ub984";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(26,109,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pc_7.ggUpdateText=function() {
			var params = [];
			var hs = player._("| \uc6b0\uc9d1\uc0ac \ucd94\ucc9c AD", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc_7.ggUpdateText();
		el.appendChild(els);
		me._pc_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_7.ggUpdatePosition=function (useTransition) {
		}
		me._pc_6.appendChild(me._pc_7);
		el=me._pc_container_1=document.createElement('div');
		el.ggId="pc_-\uc9d1\uafb8\ubbf8\uae30-Container 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_container_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_container_1.onclick=function (e) {
			player.setVariableValue('vis_aptinfo', false);
		}
		me._pc_container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_20=document.createElement('div');
		el.ggId="pc_\ub2eb\uae30_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : -20px;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 27px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_20.onclick=function (e) {
			player.setVariableValue('vis_pcad', false);
		}
		me._pc_20.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_rectangle_4_2=document.createElement('div');
		el.ggId="pc_Rectangle 4_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_rectangle_4_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_rectangle_4_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_svg_5_2=document.createElement('div');
		els=me._pc_svg_5_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM2MzYzQzIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci14IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPGxpbmUgeTI9IjE4IiB4MT0iMTgiIHgyPSI2IiB5MT0iNiIvPgogPGxpbmUgeTI9IjE4IiB4MT0iNiIgeDI9IjE4IiB5MT0iNiIvPgo8L3N2Zz4K';
		me._pc_svg_5_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pc_Svg 5_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 17px;';
		hs+='left : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_svg_5_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_svg_5_2.ggUpdatePosition=function (useTransition) {
		}
		me._pc_rectangle_4_2.appendChild(me._pc_svg_5_2);
		me._pc_20.appendChild(me._pc_rectangle_4_2);
		me._pc_container_1.appendChild(me._pc_20);
		me._pc_6.appendChild(me._pc_container_1);
		me._pc_4.appendChild(me._pc_6);
		el=me._pc_iframe=document.createElement('div');
		el.ggId="pc_\uc9d1\uafb8\ubbf8\uae30-iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		hs+='margin-top:125px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_iframe.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_5=document.createElement('div');
		els=me._pc_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc_\uc9d1\uafb8\ubbf8\uae30\ub9ac\uc2a4\ud2b8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pc_5.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc_5.ggUpdateText();
		el.appendChild(els);
		me._pc_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_5.ggUpdatePosition=function (useTransition) {
		}
		me._pc_iframe.appendChild(me._pc_5);
		me._pc_4.appendChild(me._pc_iframe);
		me._pc_10.appendChild(me._pc_4);
		me.divSkin.appendChild(me._pc_10);
		el=me._pc0=document.createElement('div');
		el.ggId="pc-\uc2a4\ud0a8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc0.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 1310))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc0.style.transition='';
				if (me._pc0.ggCurrentLogicStateVisible == 0) {
					me._pc0.style.visibility=(Number(me._pc0.style.opacity)>0||!me._pc0.style.opacity)?'inherit':'hidden';
					me._pc0.ggVisible=true;
				}
				else {
					me._pc0.style.visibility="hidden";
					me._pc0.ggVisible=false;
				}
			}
		}
		me._pc0.logicBlock_visible();
		me._pc0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_11=document.createElement('div');
		el.ggId="Rectangle 11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_11.onclick=function (e) {
			player.setVariableValue('vis_skinhide', !player.getVariableValue('vis_skinhide'));
		}
		me._rectangle_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_11=document.createElement('div');
		el.ggId="Container 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_11.onclick=function (e) {
			player.setVariableValue('vis_skinhide', false);
			me._pc1.style.transition='none';
			me._pc1.style.visibility='hidden';
			me._pc1.ggVisible=false;
			me.__pc.style.transition='none';
			me.__pc.style.visibility='hidden';
			me.__pc.ggVisible=false;
			if (
				(
					((player.getViewerSize(true).width < 980))
				)
			) {
				me.__35.style.transition='none';
				me.__35.style.visibility='hidden';
				me.__35.ggVisible=false;
			}
			me._pc.style.transition='none';
			me._pc.style.visibility='hidden';
			me._pc.ggVisible=false;
		}
		me._container_11.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_16=document.createElement('div');
		els=me._svg_16__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1leWUtb2ZmIj4KIDxwYXRoIGQ9Ik0xNy45NCAxNy45NEExMC4wNyAxMC4wNyAwIDAgMSAxMiAyMGMtNyAwLTExLTgtMTEtOGExOC40NSAxOC40NSAwIDAgMSA1LjA2LTUuOTRNOS45IDQuMjRBOS4xMiA5LjEyIDAgMCAxIDEyIDRjNy'+
			'AwIDExIDggMTEgOGExOC41IDE4LjUgMCAwIDEtMi4xNiAzLjE5bS02LjcyLTEuMDdhMyAzIDAgMSAxLTQuMjQtNC4yNCIvPgogPGxpbmUgeTI9IjIzIiB4MT0iMSIgeDI9IjIzIiB5MT0iMSIvPgo8L3N2Zz4K';
		me._svg_16__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 16";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_16.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skinhide') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_16.style.transition='';
				if (me._svg_16.ggCurrentLogicStateVisible == 0) {
					me._svg_16.style.visibility=(Number(me._svg_16.style.opacity)>0||!me._svg_16.style.opacity)?'inherit':'hidden';
					me._svg_16.ggVisible=true;
				}
				else {
					me._svg_16.style.visibility="hidden";
					me._svg_16.ggVisible=false;
				}
			}
		}
		me._svg_16.logicBlock_visible();
		me._svg_16.ggUpdatePosition=function (useTransition) {
		}
		me._container_11.appendChild(me._svg_16);
		me._rectangle_11.appendChild(me._container_11);
		el=me._container_12=document.createElement('div');
		el.ggId="Container 12";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_12.onclick=function (e) {
			player.setVariableValue('vis_skinhide', true);
			me._pc1.style.transition='none';
			me._pc1.style.visibility=(Number(me._pc1.style.opacity)>0||!me._pc1.style.opacity)?'inherit':'hidden';
			me._pc1.ggVisible=true;
			me.__pc.style.transition='none';
			me.__pc.style.visibility=(Number(me.__pc.style.opacity)>0||!me.__pc.style.opacity)?'inherit':'hidden';
			me.__pc.ggVisible=true;
			if (
				(
					((player.getViewerSize(true).width < 980))
				)
			) {
				me.__35.style.transition='none';
				me.__35.style.visibility=(Number(me.__35.style.opacity)>0||!me.__35.style.opacity)?'inherit':'hidden';
				me.__35.ggVisible=true;
			}
			me._pc.style.transition='none';
			me._pc.style.visibility=(Number(me._pc.style.opacity)>0||!me._pc.style.opacity)?'inherit':'hidden';
			me._pc.ggVisible=true;
		}
		me._container_12.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_15=document.createElement('div');
		els=me._svg_15__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZmlsbD0ibm9uZSIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci1leWUiPgogPHBhdGggZD0iTTEgMTJzNC04IDExLTggMTEgOCAxMSA4LTQgOC0xMSA4LTExLTgtMTEtOHoiLz4KIDxjaXJjbGUgY3k9IjEyIiByPSIzIiBjeD0iMTIiLz4KPC9zdmc+Cg==';
		me._svg_15__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 15";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_15.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skinhide') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_15.style.transition='';
				if (me._svg_15.ggCurrentLogicStateVisible == 0) {
					me._svg_15.style.visibility=(Number(me._svg_15.style.opacity)>0||!me._svg_15.style.opacity)?'inherit':'hidden';
					me._svg_15.ggVisible=true;
				}
				else {
					me._svg_15.style.visibility="hidden";
					me._svg_15.ggVisible=false;
				}
			}
		}
		me._svg_15.logicBlock_visible();
		me._svg_15.ggUpdatePosition=function (useTransition) {
		}
		me._container_12.appendChild(me._svg_15);
		me._rectangle_11.appendChild(me._container_12);
		me._pc0.appendChild(me._rectangle_11);
		me.divSkin.appendChild(me._pc0);
		el=me._pc=document.createElement('div');
		el.ggId="pc\ub85c\uace0";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((240px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 1310))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pc.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pc.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pc.style.transition='';
				if (me._pc.ggCurrentLogicStateVisible == 0) {
					me._pc.style.visibility=(Number(me._pc.style.opacity)>0||!me._pc.style.opacity)?'inherit':'hidden';
					me._pc.ggVisible=true;
				}
				else {
					me._pc.style.visibility="hidden";
					me._pc.ggVisible=false;
				}
			}
		}
		me._pc.logicBlock_visible();
		me._pc.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_12=document.createElement('div');
		el.ggId="Rectangle 12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 0px 30px 30px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_12.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_13=document.createElement('div');
		el.ggId="Container 13";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_13.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1_1=document.createElement('div');
		els=me._image_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAABiCAYAAAAIoaKNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZj'+
			'pEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0MDBDNkIyN0ZERTExRUY5ODQzRkQzODIyRkM0QzgyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0MDBDNkIzN0ZERTExRUY5ODQzRkQzODIyRkM0'+
			'QzgyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjQwMEM2QjA3RkRFMTFFRjk4NDNGRDM4MjJGQzRDODIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjQwMEM2QjE3RkRFMTFFRjk4NDNGRDM4MjJGQzRDODIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5UANboAAAMfElEQVR42uxdDZQWVRmeBVRQjMyTpFJKVhhWECEnEISkXaVTQImyIL8GpVmnbeUE/SkVkUVtKpYEGqCJQBEE6YmlVRYWBS0NtfAv5ZgYEiuihBC42/Ps3D1t0507M7vzfd98y/Oc857Znbkzc+feZ+6873vf+34lXh'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_13.appendChild(me._image_1_1);
		me._rectangle_12.appendChild(me._container_13);
		me._pc.appendChild(me._rectangle_12);
		me.divSkin.appendChild(me._pc);
		el=me._pc_=document.createElement('div');
		el.ggId="pc_\uc9d1\uafb8\ubbf8\uae30_\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 80%;';
		hs+='left : -500px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 500px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pc_.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_aircon1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._pc_.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._pc_.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._pc_.style.transition='left 800ms ease-in 0ms, top 800ms ease-in 0ms';
				if (me._pc_.ggCurrentLogicStatePosition == 0) {
					me._pc_.style.left='0px';
					me._pc_.style.top='70px';
				}
				else {
					me._pc_.style.left='-500px';
					me._pc_.style.top='70px';
				}
			}
		}
		me._pc_.logicBlock_position();
		me._pc_.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_0=document.createElement('div');
		el.ggId="pc_\uc9d1\uafb8\ubbf8\uae30 \uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 15px 15px 0px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_0.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_2=document.createElement('div');
		el.ggId="pc_-\uc9d1\uafb8\ubbf8\uae30-\ud0c0\uc774\ud2c0_\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 40px;';
		hs+='visibility : inherit;';
		hs+='width : 88%;';
		hs+='pointer-events:none;';
		hs+='margin:0 25px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_3=document.createElement('div');
		els=me._pc_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc_\ubaa8\ubc14\uc77c-\uc9d1\uafb8\ubbf8\uae30_\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(26,109,255,1);';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pc_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("| \uc6b0\uc9d1\uc0ac \ucd94\ucc9c AD", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc_3.ggUpdateText();
		el.appendChild(els);
		me._pc_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_3.ggUpdatePosition=function (useTransition) {
		}
		me._pc_2.appendChild(me._pc_3);
		el=me._pc_container_1_=document.createElement('div');
		el.ggId="pc_-\uc9d1\uafb8\ubbf8\uae30-Container 1_\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 70%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_container_1_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_container_1_.onclick=function (e) {
			player.setVariableValue('vis_aptinfo', false);
		}
		me._pc_container_1_.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_2_=document.createElement('div');
		el.ggId="pc_\ub2eb\uae30_2_\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 27px;';
		hs+='position : absolute;';
		hs+='right : -20px;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 27px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_2_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_2_.onclick=function (e) {
			player.setVariableValue('vis_aircon1', false);
		}
		me._pc_2_.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_rectangle_=document.createElement('div');
		el.ggId="pc_Rectangle_\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_rectangle_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_rectangle_.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_svg_5_2_=document.createElement('div');
		els=me._pc_svg_5_2___img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM2MzYzQzIiBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImZlYXRoZXIgZmVhdGhlci14IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1vcGFjaXR5PSIxIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogPGxpbmUgeTI9IjE4IiB4MT0iMTgiIHgyPSI2IiB5MT0iNiIvPgogPGxpbmUgeTI9IjE4IiB4MT0iNiIgeDI9IjE4IiB5MT0iNiIvPgo8L3N2Zz4K';
		me._pc_svg_5_2___img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pc_Svg 5_2_\uc5d0\uc5b4\ucee8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 17px;';
		hs+='left : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((17px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 17px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_svg_5_2_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_svg_5_2_.ggUpdatePosition=function (useTransition) {
		}
		me._pc_rectangle_.appendChild(me._pc_svg_5_2_);
		me._pc_2_.appendChild(me._pc_rectangle_);
		me._pc_container_1_.appendChild(me._pc_2_);
		me._pc_2.appendChild(me._pc_container_1_);
		me._pc_0.appendChild(me._pc_2);
		el=me._pc_iframe_=document.createElement('div');
		el.ggId="pc_\uc9d1\uafb8\ubbf8\uae30-iframe_\uc5d0\uc5b4\ucee8";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((90% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 90%;';
		hs+='pointer-events:none;';
		hs+='margin-top:125px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pc_iframe_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_iframe_.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_1=document.createElement('div');
		els=me._pc_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc_\uc9d1\uafb8\ubbf8\uae30\ub9ac\uc2a4\ud2b8_\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._pc_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc_1.ggUpdateText();
		el.appendChild(els);
		me._pc_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_1.ggUpdatePosition=function (useTransition) {
		}
		me._pc_iframe_.appendChild(me._pc_1);
		me._pc_0.appendChild(me._pc_iframe_);
		me._pc_.appendChild(me._pc_0);
		me.divSkin.appendChild(me._pc_);
		me.__42.logicBlock_position();
		me.__42.logicBlock_size();
		me.__42.logicBlock_visible();
		me.__36.logicBlock_size();
		me.__36.logicBlock_visible();
		me.__35.logicBlock_visible();
		me._header.logicBlock_visible();
		me.__29.logicBlock_visible();
		me.__28.logicBlock_visible();
		me.__27.logicBlock_visible();
		me._footer.logicBlock_size();
		me._footer.logicBlock_visible();
		me.__26.logicBlock_position();
		me.__25.logicBlock_position();
		me.__17.logicBlock_visible();
		me.__16.logicBlock_visible();
		me.__15.logicBlock_position();
		me.__15.logicBlock_visible();
		me._rectangle_6.logicBlock_backgroundcolor();
		me._svg_6_6_1.logicBlock_visible();
		me._svg_6_1_1.logicBlock_visible();
		me.__10.logicBlock_size();
		me.__10.logicBlock_visible();
		me.__pc1.logicBlock_position();
		me._pc_11.logicBlock_position();
		me._pc1.logicBlock_visible();
		me.__9.logicBlock_position();
		me._svg_8.logicBlock_angle();
		me._rectangle_9.logicBlock_backgroundcolor();
		me.__5.logicBlock_visible();
		me.__pc.logicBlock_visible();
		me._rectangle_10.logicBlock_backgroundcolor();
		me._svg_6_6.logicBlock_visible();
		me._svg_6_1.logicBlock_visible();
		me._pc_10.logicBlock_position();
		me._pc0.logicBlock_visible();
		me._svg_16.logicBlock_visible();
		me._svg_15.logicBlock_visible();
		me._pc.logicBlock_visible();
		me._pc_.logicBlock_position();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me.__42.logicBlock_visible();
			me.__36.logicBlock_visible();
			me.__320px_1.ggUpdateConditionNodeChange();
			me.__29.logicBlock_visible();
			me.__28.logicBlock_visible();
			me._footer.logicBlock_size();
			me.__26.logicBlock_position();
			me.__25.logicBlock_position();
			me.__17.logicBlock_visible();
			me.__16.logicBlock_visible();
			me.__15.logicBlock_position();
			me._rectangle_6.logicBlock_backgroundcolor();
			me._svg_6_6_1.logicBlock_visible();
			me._svg_6_1_1.logicBlock_visible();
			me.__10.logicBlock_visible();
			me.__pc1.logicBlock_position();
			me._pc_11.logicBlock_position();
			me._pc320px_1.ggUpdateConditionNodeChange();
			me.__9.logicBlock_position();
			me._svg_8.logicBlock_angle();
			me._rectangle_9.logicBlock_backgroundcolor();
			me.__5.logicBlock_visible();
			me._rectangle_10.logicBlock_backgroundcolor();
			me._svg_6_6.logicBlock_visible();
			me._svg_6_1.logicBlock_visible();
			me._pc_10.logicBlock_position();
			me._svg_16.logicBlock_visible();
			me._svg_15.logicBlock_visible();
			me._pc_.logicBlock_position();
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me.__42.logicBlock_visible();
			me.__36.logicBlock_visible();
			me._scrollarea_1.ggUpdatePosition();
			me.__29.logicBlock_visible();
			me.__28.logicBlock_visible();
			me._footer.logicBlock_size();
			me.__26.logicBlock_position();
			me.__25.logicBlock_position();
			me.__17.logicBlock_visible();
			me.__16.logicBlock_visible();
			me.__15.logicBlock_position();
			me._rectangle_6.logicBlock_backgroundcolor();
			me._svg_6_6_1.logicBlock_visible();
			me._svg_6_1_1.logicBlock_visible();
			me.__10.logicBlock_visible();
			me.__pc1.logicBlock_position();
			me._pc_11.logicBlock_position();
			me._pcscrollarea_1.ggUpdatePosition();
			me.__9.logicBlock_position();
			me._svg_8.logicBlock_angle();
			me._rectangle_9.logicBlock_backgroundcolor();
			me.__5.logicBlock_visible();
			me._rectangle_10.logicBlock_backgroundcolor();
			me._svg_6_6.logicBlock_visible();
			me._svg_6_1.logicBlock_visible();
			me._pc_10.logicBlock_position();
			me._svg_16.logicBlock_visible();
			me._svg_15.logicBlock_visible();
			me._pc_.logicBlock_position();
		});
		player.addListener('sizechanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('집꾸미기버튼-에어컨')) {
				for(var i = 0; i < hotspotTemplates['집꾸미기버튼-에어컨'].length; i++) {
					hotspotTemplates['집꾸미기버튼-에어컨'][i].ggEvent_sizechanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_sizechanged();
				}
			}
			me.__42.logicBlock_position();
			me.__42.logicBlock_size();
			me.__36.logicBlock_size();
			me.__35.logicBlock_visible();
			me._header.logicBlock_visible();
			me.__27.logicBlock_visible();
			me._footer.logicBlock_visible();
			me.__15.logicBlock_visible();
			me.__10.logicBlock_size();
			me._pc1.logicBlock_visible();
			me.__pc.logicBlock_visible();
			me._pc0.logicBlock_visible();
			me._pc.logicBlock_visible();
		});
		player.addListener('varchanged_vis_ad', function(event) {
			me._rectangle_6.logicBlock_backgroundcolor();
			me._svg_6_6_1.logicBlock_visible();
			me._svg_6_1_1.logicBlock_visible();
			me.__10.logicBlock_visible();
		});
		player.addListener('varchanged_vis_aircon1', function(event) {
			me._pc_.logicBlock_position();
		});
		player.addListener('varchanged_vis_aptinfo', function(event) {
			me.__42.logicBlock_visible();
		});
		player.addListener('varchanged_vis_footer', function(event) {
			me._footer.logicBlock_size();
			me.__26.logicBlock_position();
			me.__25.logicBlock_position();
			me.__17.logicBlock_visible();
			me.__16.logicBlock_visible();
			me.__15.logicBlock_position();
		});
		player.addListener('varchanged_vis_hide', function(event) {
			me.__29.logicBlock_visible();
			me.__28.logicBlock_visible();
		});
		player.addListener('varchanged_vis_m_roomMove', function(event) {
			me.__36.logicBlock_visible();
		});
		player.addListener('varchanged_vis_pc_roomMove', function(event) {
			me._pc_11.logicBlock_position();
		});
		player.addListener('varchanged_vis_pcad', function(event) {
			me._rectangle_10.logicBlock_backgroundcolor();
			me._svg_6_6.logicBlock_visible();
			me._svg_6_1.logicBlock_visible();
			me._pc_10.logicBlock_position();
		});
		player.addListener('varchanged_vis_pcaptinfo', function(event) {
			me.__pc1.logicBlock_position();
		});
		player.addListener('varchanged_vis_pcfooter', function(event) {
			me.__9.logicBlock_position();
			me._svg_8.logicBlock_angle();
			me._rectangle_9.logicBlock_backgroundcolor();
			me.__5.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skinhide', function(event) {
			me._svg_16.logicBlock_visible();
			me._svg_15.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me.__320px_1.ggUpdate();
			me._pc320px_1.ggUpdate();
		});
	};
	function SkinCloner_pc320px_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._pcnodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._pcnodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._pcnodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/pcnodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="pc-NodeImage 1-18A";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 320px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pcnodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._pcnodeimage_118a.onclick=function (e) {
			if (me._pcnodeimage_118a.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._pcnodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._pcrectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._pcrectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="pc-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -50px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pcrectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pcrectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._pc_18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._pc_18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._pc_18a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pc-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me._pc_18a.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pc_18a.ggUpdateText();
		player.addListener('changenode', function() {
			me._pc_18a.ggUpdateText();
		});
		el.appendChild(els);
		me._pc_18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pc_18a.ggUpdatePosition=function (useTransition) {
		}
		me._pcrectangle_118a.appendChild(me._pc_18a);
		me._pcnodeimage_118a.appendChild(me._pcrectangle_118a);
		me.__div.appendChild(me._pcnodeimage_118a);
	};
	function SkinCloner__320px_1_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._nodeimage_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodeimage_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._nodeimage_118a__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/nodeimage_118a_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 9px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\ubaa8\ubc14\uc77c-NodeImage 1-18A";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 134px;';
		hs+='left : calc(50% - ((269px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 269px;';
		hs+='pointer-events:auto;';
		hs+='margin:20px';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodeimage_118a.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_118a.onclick=function (e) {
			if (me._nodeimage_118a.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_m_roomMove', false);
		}
		me._nodeimage_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_118a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._rectangle_118a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="\ubaa8\ubc14\uc77c-Rectangle 1-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -40px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_118a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_118a.ggUpdatePosition=function (useTransition) {
		}
		el=me.__18a=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__18a;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__18a__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="\ubaa8\ubc14\uc77c-\uac00\uad6c\uc5c6\uc74c \ubc29\uc774\ub984-18A";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+="font-family: \"Noto Sans KR\", sans-serif; font-optical-sizing: auto; font-weight: <weight>; font-style: normal;";
		els.setAttribute('style',hs);
		me.__18a.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__18a.ggUpdateText();
		player.addListener('changenode', function() {
			me.__18a.ggUpdateText();
		});
		el.appendChild(els);
		me.__18a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__18a.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_118a.appendChild(me.__18a);
		me._nodeimage_118a.appendChild(me._rectangle_118a);
		me.__div.appendChild(me._nodeimage_118a);
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=640;
		el.ggDy=300;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 640px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 300px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"");
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=300;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 152px;';
		hs+='position : absolute;';
		hs+='top : -122px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_2.ggTimestamp) / me._timer_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility="hidden";
					me._timer_2.ggVisible=false;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggActivate=function () {
			var flag=me.__30.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__30.style.transition='none';
			} else {
				me.__30.style.transition='all 1000ms linear 0ms';
			}
			if (flag) {
				me.__30.ggParameter.sx=1.2;me.__30.ggParameter.sy=1.2;
			} else {
				me.__30.ggParameter.sx=1.2;me.__30.ggParameter.sy=1.2;
			}
			me.__30.ggScaleActive=!flag;
				me.__30.style.transform=parameterToTransform(me.__30.ggParameter);
			setTimeout(function() {skin.updateSize(me.__30);}, 1050);
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._timer_2);
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_1.ggSubElement.setAttribute('alt', player._(me._external_1.ggAltText));
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_1.ggText_untranslated = img;
			me._external_1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_1.ggSubElement.style.width = '0px';
			me._external_1.ggSubElement.style.height = '0px';
			me._external_1.ggSubElement.src='';
			me._external_1.ggSubElement.src=me._external_1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_1.ggText != player._(me._external_1.ggText_untranslated)) {
				me._external_1.ggText = player._(me._external_1.ggText_untranslated);
				me._external_1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_1.ggScrollbars || currentWidth < me._external_1.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_1.ggScrollbars || currentHeight < me._external_1.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__30=document.createElement('div');
		el.ggId="\uc6d0\ub4e4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__30.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getViewerSize(true).width <= 540))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me.__30.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me.__30.ggCurrentLogicStateScaling = newLogicStateScaling;
				me.__30.style.transition='transform 0s';
				if (me.__30.ggCurrentLogicStateScaling == 0) {
					me.__30.ggParameter.sx = 1;
					me.__30.ggParameter.sy = 1;
					me.__30.style.transform=parameterToTransform(me.__30.ggParameter);
					skin.updateSize(me.__30);
				}
				else {
					me.__30.ggParameter.sx = 1.2;
					me.__30.ggParameter.sy = 1.2;
					me.__30.style.transform=parameterToTransform(me.__30.ggParameter);
					skin.updateSize(me.__30);
				}
			}
		}
		me.__30.logicBlock_scaling();
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		el=me.__40=document.createElement('div');
		el.ggId="4\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.0784314);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((25px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		hs+='::before { content: \"\"; position: absolute; top: -15px; left: -15px; right: -15px; bottom: -15px; background: inherit; \/* \ubd80\ubaa8\uc758 \ubc30\uacbd\uc744 \uc0c1\uc18d *\/ filter: blur(10px); \/* \ube14\ub7ec \ud6a8\uacfc *\/ z-index: -1; \/* \ubc30\uacbd \ub4a4\uc5d0 \uc704\uce58\ud558\ub3c4\ub85d *\/ }';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__40.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__40.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me.__40);
		el=me._timer_31=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3-1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_31.ggIsActive=function() {
			return (me._timer_31.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_31.ggTimestamp) / me._timer_31.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_31.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_31.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_31.style.transition='';
				if (me._timer_31.ggCurrentLogicStateVisible == 0) {
					me._timer_31.style.visibility="hidden";
					me._timer_31.ggVisible=false;
				}
				else {
					me._timer_31.style.visibility=(Number(me._timer_31.style.opacity)>0||!me._timer_31.style.opacity)?'inherit':'hidden';
					me._timer_31.ggVisible=true;
				}
			}
		}
		me._timer_31.logicBlock_visible();
		me._timer_31.ggActivate=function () {
			var flag=me.__40.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__40.style.transition='none';
			} else {
				me.__40.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__40.ggParameter.sx=1;me.__40.ggParameter.sy=1;
			} else {
				me.__40.ggParameter.sx=1.8;me.__40.ggParameter.sy=1.8;
			}
			me.__40.ggScaleActive=!flag;
				me.__40.style.transform=parameterToTransform(me.__40.ggParameter);
			setTimeout(function() {skin.updateSize(me.__40);}, 550);
		}
		me._timer_31.ggCurrentLogicStateVisible = -1;
		me._timer_31.ggUpdateConditionTimer=function () {
			me._timer_31.logicBlock_visible();
		}
		me._timer_31.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me._timer_31);
		el=me.__32=document.createElement('div');
		el.ggId="3\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.313726);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me.__32);
		el=me._timer_3=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=800;
		el.ggId="Timer 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 7px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_3.ggIsActive=function() {
			return (me._timer_3.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_3.ggTimestamp) / me._timer_3.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._timer_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_3.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_3.style.transition='';
				if (me._timer_3.ggCurrentLogicStateVisible == 0) {
					me._timer_3.style.visibility="hidden";
					me._timer_3.ggVisible=false;
				}
				else {
					me._timer_3.style.visibility=(Number(me._timer_3.style.opacity)>0||!me._timer_3.style.opacity)?'inherit':'hidden';
					me._timer_3.ggVisible=true;
				}
			}
		}
		me._timer_3.logicBlock_visible();
		me._timer_3.ggActivate=function () {
			var flag=me.__32.ggScaleActive;
			if (player.transitionsDisabled) {
				me.__32.style.transition='none';
			} else {
				me.__32.style.transition='all 500ms linear 0ms';
			}
			if (flag) {
				me.__32.ggParameter.sx=1;me.__32.ggParameter.sy=1;
			} else {
				me.__32.ggParameter.sx=1.4;me.__32.ggParameter.sy=1.4;
			}
			me.__32.ggScaleActive=!flag;
				me.__32.style.transform=parameterToTransform(me.__32.ggParameter);
			setTimeout(function() {skin.updateSize(me.__32);}, 550);
		}
		me._timer_3.ggCurrentLogicStateVisible = -1;
		me._timer_3.ggUpdateConditionTimer=function () {
			me._timer_3.logicBlock_visible();
		}
		me._timer_3.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me._timer_3);
		el=me.__210=document.createElement('div');
		el.ggId="2\ubc88\uc9f8\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.509804);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 15px;';
		hs+='left : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__210.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__210.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me.__210);
		el=me.__31=document.createElement('div');
		el.ggId="\uc911\uc559\uc6d0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(34,30,31,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 7px;';
		hs+='left : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((7px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 7px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me.__31);
		el=me._text_19=document.createElement('div');
		els=me._text_19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 19";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(0,0,0,0.352941);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((65px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -23px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		hs+='line-height:13px;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_19.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_19.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_19.ggUpdateText();
		});
		el.appendChild(els);
		me._text_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_19.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player._(me.ggUserdata.comment) == "\ub113\uac8c"))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._text_19.ggCurrentLogicStateSize != newLogicStateSize) {
				me._text_19.ggCurrentLogicStateSize = newLogicStateSize;
				me._text_19.style.transition='width 0s, height 0s';
				if (me._text_19.ggCurrentLogicStateSize == 0) {
					me._text_19.style.width='88px';
					me._text_19.style.height='28px';
					me._text_19.style.left = 'calc(50% - (88px / 2))';
					skin.updateSize(me._text_19);
				}
				else {
					me._text_19.style.width='65px';
					me._text_19.style.height='28px';
					me._text_19.style.left = 'calc(50% - (65px / 2))';
					skin.updateSize(me._text_19);
				}
			}
		}
		me._text_19.logicBlock_size();
		me._text_19.ggUpdatePosition=function (useTransition) {
		}
		me.__30.appendChild(me._text_19);
		me._external_1.appendChild(me.__30);
		me._ht_node.appendChild(me._external_1);
		me.elementMouseOver['ht_node']=false;
		me._timer_2.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._external_1.style.width=hotspot.customimagewidth + 'px';
			me._external_1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me.__30.logicBlock_scaling();
		me._timer_31.logicBlock_visible();
		me._timer_3.logicBlock_visible();
		me._text_19.logicBlock_size();
			me.ggEvent_activehotspotchanged=function() {
				me._text_19.logicBlock_size();
			};
			me.ggEvent_changenode=function() {
				me._timer_2.logicBlock_visible();
				me._timer_31.logicBlock_visible();
				me._timer_3.logicBlock_visible();
				me._text_19.logicBlock_size();
			};
			me.ggEvent_configloaded=function() {
				me._text_19.logicBlock_size();
			};
			me.ggEvent_sizechanged=function() {
				me.__30.logicBlock_scaling();
			};
			me.hotspotTimerEvent=function() {
				me._timer_2.ggUpdateConditionTimer();
				if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
					me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
					if (me._timer_2.ggLastIsActive) {
						var flag=me.__30.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__30.style.transition='none';
						} else {
							me.__30.style.transition='all 1000ms linear 0ms';
						}
						if (flag) {
							me.__30.ggParameter.sx=1.2;me.__30.ggParameter.sy=1.2;
						} else {
							me.__30.ggParameter.sx=1.2;me.__30.ggParameter.sy=1.2;
						}
						me.__30.ggScaleActive=!flag;
							me.__30.style.transform=parameterToTransform(me.__30.ggParameter);
						setTimeout(function() {skin.updateSize(me.__30);}, 1050);
					} else {
					}
				}
				me._timer_31.ggUpdateConditionTimer();
				if (me._timer_31.ggLastIsActive!=me._timer_31.ggIsActive()) {
					me._timer_31.ggLastIsActive=me._timer_31.ggIsActive();
					if (me._timer_31.ggLastIsActive) {
						var flag=me.__40.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__40.style.transition='none';
						} else {
							me.__40.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__40.ggParameter.sx=1;me.__40.ggParameter.sy=1;
						} else {
							me.__40.ggParameter.sx=1.8;me.__40.ggParameter.sy=1.8;
						}
						me.__40.ggScaleActive=!flag;
							me.__40.style.transform=parameterToTransform(me.__40.ggParameter);
						setTimeout(function() {skin.updateSize(me.__40);}, 550);
					} else {
					}
				}
				me._timer_3.ggUpdateConditionTimer();
				if (me._timer_3.ggLastIsActive!=me._timer_3.ggIsActive()) {
					me._timer_3.ggLastIsActive=me._timer_3.ggIsActive();
					if (me._timer_3.ggLastIsActive) {
						var flag=me.__32.ggScaleActive;
						if (player.transitionsDisabled) {
							me.__32.style.transition='none';
						} else {
							me.__32.style.transition='all 500ms linear 0ms';
						}
						if (flag) {
							me.__32.ggParameter.sx=1;me.__32.ggParameter.sy=1;
						} else {
							me.__32.ggParameter.sx=1.4;me.__32.ggParameter.sy=1.4;
						}
						me.__32.ggScaleActive=!flag;
							me.__32.style.transform=parameterToTransform(me.__32.ggParameter);
						setTimeout(function() {skin.updateSize(me.__32);}, 550);
					} else {
					}
				}
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	function SkinHotspotClass__33(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__33=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ubc84\ud2bc-\uc5d0\uc5b4\ucee8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__33.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__33.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize(true).width >= 1310))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__33.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__33.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__33.style.transition='';
				if (me.__33.ggCurrentLogicStateVisible == 0) {
					me.__33.style.visibility=(Number(me.__33.style.opacity)>0||!me.__33.style.opacity)?'inherit':'hidden';
					me.__33.ggVisible=true;
				}
				else {
					me.__33.style.visibility="hidden";
					me.__33.ggVisible=false;
				}
			}
		}
		me.__33.logicBlock_visible();
		me.__33.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__33.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__33.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_33']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__33.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_33']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		el=me._external_2=document.createElement('div');
		els=me._external_2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._external_2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._external_2.ggSubElement.setAttribute('alt', player._(me._external_2.ggAltText));
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._external_2.ggText_untranslated = img;
			me._external_2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._external_2.ggSubElement.style.width = '0px';
			me._external_2.ggSubElement.style.height = '0px';
			me._external_2.ggSubElement.src='';
			me._external_2.ggSubElement.src=me._external_2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._external_2.ggText != player._(me._external_2.ggText_untranslated)) {
				me._external_2.ggText = player._(me._external_2.ggText_untranslated);
				me._external_2.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="External 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._external_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._external_2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._external_2.clientWidth;
			var parentHeight = me._external_2.clientHeight;
			var img = me._external_2__img;
			var aspectRatioDiv = me._external_2.clientWidth / me._external_2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._external_2.ggScrollbars || currentWidth < me._external_2.clientWidth) {
				img.style.right='';
				img.style.left='0px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
			}
			if (!me._external_2.ggScrollbars || currentHeight < me._external_2.clientHeight) {
				img.style.bottom='';
				img.style.top='0px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
			}
		}
		el=me.__34=document.createElement('div');
		el.ggId="\uc9d1\uafb8\ubbf8\uae30\ucee8\ud14c\uc774\ub108-\uc5d0\uc5b4\ucee8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__34.onclick=function (e) {
			player.setVariableValue('vis_aircon1', true);
				skin._pc_1.ggUpdateText=function() {
					var params = [];
					var hs = player._("<iframe src=\"https:\/\/dokyoung-an.github.io\/uzipsa_inpano\/\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._pc_1.ggUpdateText();
			skin._pc_1.ggTextDiv.scrollTop = 0;
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'background-clip : padding-box;';
		hs+='background-clip : padding-box;';
		hs+='background : rgba(226,94,37,0.862745);';
		hs+='border : 0px solid rgba(226,94,37,0.784314);';
		hs+='border-radius : 50px;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGZpbGw9Im5vbmUiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItdGFnIiBzdHJva2Utb3BhY2l0eT0iMSI+CiA8cGF0aCBkPSJNMjAuNTkgMTMuNDFsLTcuMTcgNy4xN2EyIDIgMCAwIDEtMi44MyAwTDIgMTJWMmgxMGw4LjU5IDguNTlhMiAyIDAgMCAxIDAgMi44MnoiLz4KIDxsaW5lIHkyPSI3IiB4MT0iNy'+
			'IgeDI9IjcuMDEiIHkxPSI3Ii8+Cjwvc3ZnPgo=';
		me._svg_6__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
		}
		me._rectangle_5.appendChild(me._svg_6);
		me.__34.appendChild(me._rectangle_5);
		me._external_2.appendChild(me.__34);
		me.__33.appendChild(me._external_2);
		me.__33.logicBlock_visible();
		me.elementMouseOver['_33']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._external_2.style.width=hotspot.customimagewidth + 'px';
			me._external_2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._external_2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._external_2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
			me.ggEvent_sizechanged=function() {
				me.__33.logicBlock_visible();
			};
			me.__div = me.__33;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='집꾸미기버튼-에어컨') {
				hotspot.skinid = '집꾸미기버튼-에어컨';
				hsinst = new SkinHotspotClass__33(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};