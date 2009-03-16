YUI.add("dd-scroll",function(C){var A=function(){A.superclass.constructor.apply(this,arguments);},B="scrollTop",D="scrollLeft";A.NAME="DragScroll";A.ATTRS={windowScroll:{value:false},buffer:{value:30},scrollDelay:{value:90}};C.extend(A,C.DD.Drag,{_scrolling:null,_vpRegionCache:null,_dimCache:null,_scrollTimer:null,_getVPRegion:function(){var F={};if(!this._vpRegionCache){var G=C.Node.get(window),E=this.get("buffer");F={top:G.get(B)+E,right:G.get("winWidth")+G.get(D)-E,bottom:(G.get("winHeight")+G.get(B))-E,left:G.get(D)+E};this._vpRegionCache=F;}else{F=this._vpRegionCache;}return F;},initializer:function(){C.Node.get(window).on("scroll",function(){this._vpRegionCache=null;},this);},_checkWinScroll:function(O){var N=this._getVPRegion(),I=this.realXY,E=false,T=this.get("buffer"),H=C.Node.get(window),V=H.get(B),K=H.get(D),L=this._dimCache.w,Q=this._dimCache.h,J=this.realXY[1]+Q,M=this.realXY[1],S=this.realXY[0]+L,G=this.realXY[0],U=I[1],F=I[0],P=V,R=K;if(G<=N.left){E=true;F=I[0]-T;R=K-T;}if(S>=N.right){E=true;F=I[0]+T;R=K+T;}if(J>=N.bottom){E=true;U=I[1]+T;P=V+T;}if(M<=N.top){E=true;U=I[1]-T;P=V-T;}if(U<0){U=I[1];}if(F<0){F=I[0];}if(O){this._moveNode([F,U]);H.set(B,P);H.set(D,R);}else{if(E){this._initScroll();}else{this._cancelScroll();}}},_initScroll:function(){this._cancelScroll();this._scrollTimer=C.Lang.later(this.get("scrollDelay"),this,this._checkWinScroll,[true],true);},_cancelScroll:function(){this._scrolling=false;if(this._scrollTimer){this._scrollTimer.cancel();this._scrollTimer=false;}},_align:function(E){if(this._scrolling){this._cancelScroll();}else{E=A.superclass._align.apply(this,arguments);}if(this.get("windowScroll")){if(!this._scrolling){this._checkWinScroll();}}return E;},_setDimCache:function(){var E=this.get("dragNode");this._dimCache={h:E.get("offsetHeight"),w:E.get("offsetWidth")};},start:function(){A.superclass.start.apply(this,arguments);this._setDimCache();},end:function(E){this._dimCache=null;this._cancelScroll();A.superclass.end.apply(this,arguments);return this;},toString:function(){return A.NAME+" #"+this.get("node").get("id");}});C.DD.DragScroll=A;},"@VERSION@",{skinnable:false,requires:["dd-drag"],optional:["dd-proxy"]});