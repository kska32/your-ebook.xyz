(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/Niconne-Regular.1c8d9ad0.ttf"},228:function(e,t,a){e.exports=a(445)},235:function(e,t,a){},299:function(e,t,a){},386:function(e,t,a){},388:function(e,t){},390:function(e,t){},399:function(e,t,a){},441:function(e,t,a){},443:function(e,t,a){},444:function(e,t,a){},445:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(47),i=a.n(c),r=(a(233),a(234),a(235),a(24)),l=a(25),s=a(29),d=a(26),u=a(28),m=a(59),p=a(78),h=a(30),f=a(220),b=a(20),w=a.n(b),g=a(457),k=a(219),v=a(446),E=a(456),S=a(50),C=a(453),T=a(79),y=a(454),N=a(202),I=a.n(N),V=a(134),B=a.n(V);function L(){var e=Math.random;Math.random=function(){return.5};var t={excludes:{fonts:!0,webgl:!0,audio:!0,fontsFlash:!0,language:!0,screenResolution:!0,availableScreenResolution:!0,pixelRatio:!0,timezoneOffset:!0,adBlock:!0,hasLiedResolution:!0,enumerateDevices:!0,webdriver:!0}};return new Promise(function(a){var o;o=function(){I.a.get(t,function(t){var o=t.map(function(e){return e.value}).join(""),n=B.a.SHA256(o),c=B.a.enc.Base64.stringify(n);Math.random=e,a(c)})},window.requestIdleCallback?requestIdleCallback(o):setTimeout(o,0)})}var O=a(99),D=a.n(O),j=a(100),x=a.n(j),R=function(e){var t=function(e){return document.querySelector(e)},a=window.innerWidth!==document.body.clientWidth;!0===e?(t("body").style.overflowY="hidden",a&&t("#root").classList.add("hideScrollBar")):(t("body").style.overflowY="auto",t("#root").classList.remove("hideScrollBar"))},H=a(138),q=a(41),_=a.n(q),W=a(203),z=a(71),M=a(204),P=(a(299),a(73)),F=a.n(P),A=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).download=function(e,t){var a=_.a.createWriteStream(t).getWriter();a.write(new Uint8Array(e)),a.close()},a.postStart=function(e){a.refs["item"+e].classList.add("disabled"),a.refs["item"+e].querySelector(".loader").classList.add("active")},a.postEnd=function(e){a.refs["item"+e].querySelector(".loader").classList.remove("active"),a.refs["item"+e].classList.remove("disabled")},a.itemClickHandle=function(e,t,o,n){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(){},r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(){};if(void 0!==t)n.text=t,w.a.post("/books/getbook",{bookid:o.bookid,bookname:o.bookname,token:n},c).then(function(e){if(r(),200===e.status){var t=e.data;"111"===t.result?(a.postStart(o.bookindex),a.props.closeCaptchaView(),a.itemClickHandle(null,t.text,o,t,{responseType:"arraybuffer",onDownloadProgress:function(e){var t=Math.round(100*e.loaded/e.total);a.setState({percent:t>100?100:t<0?0:t})}})):t.result?i(!0):(a.download(t,o.bookname),a.postEnd(o.bookindex))}}).catch(function(e){a.setState({errored:!0,errorMsg:e.message}),a.postEnd(o.bookindex)});else{var l=e.currentTarget.dataset,s=l.bookid,d=l.bookname,u=l.bookindex;a.postStart(u),w.a.post("/books/getbook",{bookid:s}).then(function(e){if(void 0!==e.data.data){var t=e.data;a.props.openCaptchaView(t,a.itemClickHandle.bind(Object(z.a)(Object(z.a)(a))),{bookid:s,bookname:d,bookindex:u})}a.postEnd(u)}).catch(function(e){console.log(e)})}},a.qrcodeClick=function(e,t,o){e.stopPropagation(),a.props.qrcodeZoomIn(e,t,o)},a.redownload=function(){a.setState({errored:!1,percent:0})},a.state={percent:0,linkCopied:!1,errored:!1,errorMsg:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.item,a=t._id,o=t.title,c=t.size,i=this.props.index,r=this.props.theLastNo,l=this.state,s=l.percent,d=l.linkCopied,u=l.errored,m=l.errorMsg,p=window.location.origin+"/share?ebn="+F.a.encode(o);return n.a.createElement("div",{itemScope:!0,itemType:"http://schema.org/Book",className:"SearchResultViewItem "+(i<r?"SearchResultViewCreateItem SearchResultViewHiddenItem":"SearchResultViewRemoveItem SearchResultViewHiddenItem"),onClick:u?function(){}:this.itemClickHandle,style:{cursor:u?"default":"pointer"},"data-bookid":a,"data-booksize":c,"data-bookname":o,"data-bookindex":i,ref:"item"+i},n.a.createElement("link",{itemProp:"additionalType",href:"https://schema.org/fileSize"}),n.a.createElement("div",{className:"progressbar",style:{transform:"translateX(".concat(-100+s,"%)")}}),s>0&&n.a.createElement("div",{className:"percentage"},s+"%"),n.a.createElement(D.a,{className:"SearchResultViewBookicon qrcode",value:p,includeMargin:!0,size:64,renderAs:"svg",onClick:function(t){e.qrcodeClick(t,p,o)}}),n.a.createElement("div",{className:"SearchResultViewBooktitle"},n.a.createElement(M.CopyToClipboard,{text:p,onCopy:function(){e.setState({linkCopied:!0}),setTimeout(function(){e.setState({linkCopied:!1})},1200)}},n.a.createElement(S.a,{name:d?"check":"clone outline",className:"copyLink",circular:!0,onClick:function(e){e.stopPropagation()}})),n.a.createElement("h2",null,n.a.createElement("span",{itemProp:"name"},o)),n.a.createElement("h6",null,n.a.createElement("span",{itemProp:"fileSize"},Math.ceil(c/1024/1024)+"MB"))),n.a.createElement(C.a,{size:"medium"}),u&&n.a.createElement("div",{className:"networkError"},n.a.createElement("div",{className:"errorInfo"},n.a.createElement(S.a,{name:"warning circle",size:"big",className:"errorIcon",inverted:!0}),n.a.createElement("span",{className:"content"},m)),n.a.createElement(S.a,{className:"closeit",name:"close",size:"big",inverted:!0,onClick:this.redownload})))}}]),t}(o.PureComponent);a(386),a(387);_.a.WritableStream=_.a.WritableStream||W.a,_.a.mitm="https://kska32.github.io/stream/mitm.html";var Y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).io=null,a.state={keyword:a.props.keyword,theLastNo:a.props.jsonData.length,jsonData:a.props.jsonData,showItem:!1,limitNum:10,isLoading:!1,noNewData:!1,footShowed:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"ajaxOnScrollToBottom",value:function(e,t,a,o){var n=this;!1===this.state.isLoading&&(this.setState({isLoading:!0}),w.a.post("/books/search",{keyword:e,skipNum:t,limitNum:a}).then(function(e){n.setState({isLoading:!1}),o(e.data)}).catch(function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.keyword,o=t.theLastNo,n=t.limitNum;window.scrollTo({top:0});var c=function(t){[].slice.call(document.querySelectorAll(".SearchResultViewItem")).forEach(function(a,o){e.io.observe(a),t&&t(a,o)})};this.io=new IntersectionObserver(function(t){t.forEach(function(t,i){t.isIntersecting&&("kska_SearchResultView_bottom"===t.target.className&&(0===o||e.state.noNewData||e.ajaxOnScrollToBottom(a,o,n,function(t){if(0===t.length||"Not Found"===t)return e.state.noNewData=!0;e.setState({jsonData:[].concat(Object(H.a)(e.state.jsonData),Object(H.a)(t)),theLastNo:o+=n,showItem:!0}),c()})),/SearchResultViewCreateItem SearchResultViewHiddenItem/gi.test(t.target.className)&&t.target.classList.replace("SearchResultViewHiddenItem","SearchResultViewShowedItem")),e.bottomBarTid=setTimeout(function(){if(e.state.noNewData){var a=document.querySelectorAll(".SearchResultViewItem"),o=a[a.length-1];o&&/SearchResultViewCreateItem SearchResultViewShowedItem/gi.test(o.className)&&"kska_SearchResultView_bottom"===t.target.className&&(t.isIntersecting?e.setState({footShowed:!0}):e.setState({footShowed:!1}))}},1e3)})},{threshold:0}),this.io.observe(document.querySelector(".kska_SearchResultView_bottom")),c()}},{key:"render",value:function(){var e=this.state,t=e.theLastNo,a=(e.showItem,e.jsonData),o=this.props,c=o.qrcodeZoomIn,i=o.openCaptchaView,r=o.closeCaptchaView;return n.a.createElement("div",{className:"SearchResultView"},a?a.map(function(e,a){return n.a.createElement(A,{key:a,item:e,index:a,theLastNo:t,qrcodeZoomIn:c,openCaptchaView:i,closeCaptchaView:r})}):[],n.a.createElement("div",{className:this.state.isLoading?"LoadingShowed":"LoadingHidden"},n.a.createElement(C.a,{active:!0,inline:"centered"})),n.a.createElement("div",{className:"kska_SearchResultView_bottom"}),n.a.createElement("div",{className:"footer "+(this.state.footShowed?"footShowed":"footHidden")},n.a.createElement("a",{href:"mailto:kska32@gmail.com"},"By kska32@gmail.com")))}}]),t}(o.Component),U=a(101),Z=a.n(U),G=(a(399),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).gotoPage=function(e){var t=x.a.parse(a.props.location.search).q;t=void 0!==t?t.replace(/ /gi,"+"):"",a.setState({inputValue:t}),a.focusHandle(),a.submitHandle(t)},a.atLink=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.props.location.pathname,o={"/":function(){window.location.href="/"}};o=Object(f.a)({},o,e),"/"!==t&&o[t](),window.onpopstate=function(e){o[e.target.location.pathname]()}},a.logSearchBarStatus=function(){},a.focusHandle=function(e){a.setState({searchBarMovetoTop:!0,supportedBrowser:!1},a.logSearchBarStatus)},a.blurHandle=function(e){""===e.target.value&&0===document.querySelectorAll(".SearchResultViewItem").length&&null===document.querySelector(".notfound")&&a.setState({searchBarMovetoTop:!1,supportedBrowser:!0},a.logSearchBarStatus)},a.inputHandle=function(e){a.setState({inputValue:e.target.value})},a.SuppertedBrowserList=function(e){return n.a.createElement("table",{className:a.state.supportedBrowser?"showtable":"hiddentable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Browser"),n.a.createElement("td",null,"Supported"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Chrome 52+"),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,"Opera 39+"),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,"Firefox"),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,"Safari"),n.a.createElement("td",null,"No")),n.a.createElement("tr",null,n.a.createElement("td",null,"Edge"),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,"IE"),n.a.createElement("td",null,"No"))))},a.gototop=function(e){window.scrollTo({top:0,left:10,behavior:"smooth"})},a.qrcodeZoomIn=function(e,t,o){e.stopPropagation(),a.setState({qrcodeZoomInable:!0,bookLinkAddr:t,bookTitle:o})},a.countdown=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.default.countdownTime,t=function(e){var t=new Date(e).toUTCString().split(":"),o=t[1],n=t[2].slice(0,2),c="".concat(o,":").concat(n);a.setState({countdownTime:c})};clearTimeout(a.state.countdownTID),t(e),a.state.countdownTID=setTimeout(function(){t(e),e-1e3>=0&&a.state.captchaVisible?a.countdown(e-1e3):a.countdown(0)},1e3)},a.openCaptchaView=function(e,t,o){a.setState({captchaVisible:!0,captchaImg:e.data,captchaToken:e,itemClickHandle:t,itemInfo:o}),R(!0),a.countdown(e.expi-Date.now())},a.closeCaptchaView=function(e){a.setState({captchaVisible:!1,captchaImg:"",captchaToken:null,itemClickHandle:null,itemInfo:null,captchaInputedValue:"",isWrongCaptcha:!1}),R(!1)},a.clickVerifyCaptchaBT=function(e){var t=a.state,o=t.captchaInputedValue,n=t.itemClickHandle,c=t.itemInfo,i=t.captchaToken;a.setState({verifyCaptchaBTdisabled:!0}),n(null,o,c,i,{},function(e){a.setState({isWrongCaptcha:e})},function(){a.setState({verifyCaptchaBTdisabled:!1})})},a.clickRefreshCaptchaBT=function(){var e=a.state.itemInfo;a.setState({refreshCaptchaBTdisabled:!0}),w.a.post("/books/getbook",{bookid:e.bookid}).then(function(e){var t=e.data;a.setState({captchaImg:t.data,captchaToken:t,captchaInputedValue:"",isWrongCaptcha:!1}),a.setState({refreshCaptchaBTdisabled:!1}),a.countdown(t.expi-Date.now())})},a.lastUpdated=function(){a.setState({lastUpdatedDisabled:!0}),a.submitHandle("<<___last_updated___>>",function(){a.setState({lastUpdatedDisabled:!1}),a.setState({searchBarMovetoTop:!0,supportedBrowser:!1})})},a.state={searchBarMovetoTop:!1,inputValue:"",keyword:"",jsonData:[],searchResultViewKey:0,isLoading:!1,limitNum:10,supportedBrowser:!0,totopable:!1,qrcodeZoomInable:!1,bookLinkAddr:"",bookTitle:"",captchaVisible:!1,captchaImg:"",captchaToken:null,captchaInputedValue:"",itemClickHandle:null,itemInfo:null,isWrongCaptcha:!1,countdownTime:0,countdownTID:null,refreshCaptchaBTdisabled:!1,verifyCaptchaBTdisabled:!1,lastUpdatedDisabled:!1},a.default={countdownTime:12e4},w.a.interceptors.request.use(function(e){return L().then(function(t){return e.headers.Authorization="Bearer ".concat(t),e})},function(e){return Promise.reject(e)}),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.FontFace&&new FontFace("Niconne","url(".concat(Z.a,")")).load().then(function(e){return document.fonts.add(e)}),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.atLink({"/search":this.gotoPage,"/latest":this.lastUpdated});var t=function(e){return document.querySelector(e)};t(".searchBox>.input i").addEventListener("click",function(t){e.state.inputValue.trim().length>0&&(e.props.history.push("/search?q=".concat(e.state.inputValue)),e.submitHandle(e.state.inputValue))}),t(".searchBox>.input>.prompt").addEventListener("keyup",function(t){e.state.inputValue.trim().length>0&&13===t.keyCode&&(e.props.history.push("/search?q=".concat(e.state.inputValue)),e.submitHandle(e.state.inputValue))}),this.io=new IntersectionObserver(function(t){t.forEach(function(t){if(t.isIntersecting){var a=document.querySelector(".containerBoxMovetoTop");a&&a.classList.remove("topHidden"),e.setState({totopable:!1})}else{var o=document.querySelector(".containerBoxMovetoTop");o&&o.classList.add("topHidden"),e.setState({totopable:!0})}})}),this.io.observe(document.querySelector(".kska_SearchResultView_top"));var a=0;document.addEventListener("scroll",function(e){var t=e.target.scrollingElement.scrollTop;if(a<t){var o=document.querySelector(".containerBoxMovetoTop");o&&o.classList.add("topHidden")}else{var n=document.querySelector(".containerBoxMovetoTop");n&&n.classList.remove("topHidden")}Math.abs(a-t)>100&&(a=t)})}},{key:"submitHandle",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};!1===this.state.isLoading&&(this.setState({isLoading:!0}),w.a.post("/books/search",{keyword:e,skipNum:0,limitNum:this.state.limitNum}).then(function(o){document.title="<<___last_updated___>>"===e?"Your-Ebook":"".concat(e," - Your-Ebook"),t.setState({isLoading:!1,keyword:e,jsonData:o.data,searchResultViewKey:Date.now()}),a()}).catch(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchBarMovetoTop,o=t.inputValue,c=t.jsonData,i=t.keyword,r=t.searchResultViewKey,l=t.totopable,s=t.qrcodeZoomInable,d=t.bookLinkAddr,u=t.bookTitle,p=t.captchaVisible,h=t.captchaImg,f=t.captchaInputedValue,b=t.itemInfo,w=t.isWrongCaptcha,N=t.countdownTime,I=t.refreshCaptchaBTdisabled,V=t.verifyCaptchaBTdisabled,B=t.lastUpdatedDisabled;return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.Helmet,null,n.a.createElement("title",null,"Your-Ebook"),n.a.createElement("meta",{name:"description",content:"\u514d\u8d39\u7535\u5b50\u4e66, \u6db5\u76d6\u5386\u53f2\u3001\u653f\u6cbb\u3001\u7ecf\u6d4e\u3001\u5fc3\u7406\u3001\u54f2\u5b66\u3001\u6570\u5b66\u3001\u8ba1\u7b97\u673a\u7b49\u65b9\u9762\u3002"}),n.a.createElement("meta",{name:"keywords",content:"\u7535\u5b50\u4e66,\u514d\u8d39\u7535\u5b50\u4e66"}),n.a.createElement("meta",{property:"og:title",content:"Home"}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:url",content:window.location.href}),n.a.createElement("meta",{property:"og:site_name",content:"Your Ebook"}),n.a.createElement("meta",{property:"og:image",content:window.location.origin+"/og.image.yourebook.png"}),n.a.createElement("meta",{property:"og:description",content:"\u514d\u8d39\u7535\u5b50\u4e66, \u6db5\u76d6\u5386\u53f2\u3001\u653f\u6cbb\u3001\u7ecf\u6d4e\u3001\u5fc3\u7406\u3001\u54f2\u5b66\u3001\u6570\u5b66\u3001\u8ba1\u7b97\u673a\u7b49\u65b9\u9762\u3002"})),n.a.createElement("div",{className:"containerBox "+(a?"containerBoxMovetoTop":"")},n.a.createElement(g.a,{className:"segmentBox"},n.a.createElement(k.a,{src:window.location.origin+"/img/ebook.png",size:"small",className:"bookimg",title:"Your Ebook",alt:"Your Ebook",circular:!0}),n.a.createElement("div",{className:"lastUpdated"},n.a.createElement(v.a,{inverted:!0,circular:!0,className:"lastUpdatedBT",icon:"star outline",size:"small",content:"\u6700\u8fd1\u66f4\u65b0",onClick:function(){e.props.history.push("/latest"),e.lastUpdated()},disabled:B,loading:B})),n.a.createElement(E.a,{fluid:!0,size:"large",className:"searchBox",open:!1,value:o,onSearchChange:this.inputHandle,onFocus:this.focusHandle,onBlur:this.blurHandle,placeholder:"\u4f60\u7684\u7535\u5b50\u4e66, \u5386\u53f2\u3001\u653f\u6cbb\u3001\u7ecf\u6d4e\u3001\u5fc3\u7406\u3001\u54f2\u5b66\u3001\u6570\u5b66\u3001\u8ba1\u7b97\u673a..."}))),n.a.createElement("div",{className:"searchResultBox"},n.a.createElement("div",{className:"kska_SearchResultView_top"}),"object"===typeof c?n.a.createElement(Y,{jsonData:c,keyword:i,key:r,qrcodeZoomIn:this.qrcodeZoomIn,openCaptchaView:this.openCaptchaView,closeCaptchaView:this.closeCaptchaView}):n.a.createElement("div",{className:"notfound"},n.a.createElement(S.a,{name:"map signs",size:"big",inverted:!0}),n.a.createElement("div",null,"The book not found!"))),n.a.createElement("div",{className:this.state.isLoading?"mainLoadingShowed":"mainLoadingHidden"},n.a.createElement(C.a,{active:!0,inline:"centered",size:"big",content:"Loading"})),c.length>0&&n.a.createElement(S.a,{name:"arrow up",className:"gototop"+(l?" animated slideInUp fast show":" animated bounceOut fast hide"),size:"big",circular:!0,onClick:this.gototop}),s&&n.a.createElement("div",{className:"qrcodeZoomModel",onClick:function(){e.setState({qrcodeZoomInable:!1})}},n.a.createElement(D.a,{className:"qrcode",value:d,includeMargin:!0,size:256,renderAs:"svg",onClick:function(e){e.stopPropagation()}}),n.a.createElement("div",{className:"bookTitle"},u)),p&&n.a.createElement("div",{className:"captchaViewWrapper",onDoubleClick:this.closeCaptchaView},n.a.createElement("div",{className:"captchaView"},n.a.createElement("div",{className:"captchaInnerView",onClick:function(e){return e.stopPropagation()},onDoubleClick:function(e){return e.stopPropagation()}},null!==b&&n.a.createElement("div",{className:"bookname",title:b.bookname},b.bookname.slice(0,52)+(b.bookname.length>52?"....":"")),n.a.createElement("div",{className:"captchaImg",dangerouslySetInnerHTML:{__html:h}}),w&&n.a.createElement(T.a,{pointing:"below",basic:!0,color:"red",size:"tiny",content:"Invalid or wrong captcha..."}),n.a.createElement(y.a,{className:"captchaInput",focus:!0,placeholder:"Enter captcha",onFocus:function(){e.setState({isWrongCaptcha:!1})},value:f,onInput:function(t){var a=t.target;e.setState({captchaInputedValue:a.value})},maxLength:12,"data-timer":N}),n.a.createElement(v.a.Group,{className:"btGroup",circular:"true"},n.a.createElement(v.a,{icon:"repeat",circular:!0,color:"green",onClick:this.clickRefreshCaptchaBT,disabled:I,loading:I}),n.a.createElement(v.a,{icon:"check circle outline",color:"blue",content:"Continue",onClick:this.clickVerifyCaptchaBT,disabled:V,loading:V})),n.a.createElement(S.a,{name:"close",className:"closeCaptchaBT",size:"large",color:"teal",fitted:!0,onClick:this.closeCaptchaView})))))}}]),t}(o.Component)),K=Object(h.g)(G),J=a(455);a(441);window.base64url=F.a;var X=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).submitHandle=function(e){void 0!==e&&!1===a.state.isLoading&&(a.setState({isLoading:!0}),w.a.post("/books/search",{keyword:e,skipNum:0,limitNum:1}).then(function(t){document.title="".concat(e," - Your-Ebook"),a.setState({isLoading:!1,keyword:e,jsonData:t.data,searchResultViewKey:Date.now(),downloadBTdisabled:"Not Found"===t.data})}).catch(function(e){console.log(e)}))},a.download=function(e,t){var a=_.a.createWriteStream(t).getWriter();a.write(new Uint8Array(e)),a.close()},a.downloadClick=function(){var e=a.state.jsonData[0],t=e._id,o=e.title,n=e.size,c=t,i=o;"DOWNLOAD"===a.state.downloadBTcontent?w.a.post("/books/getbook",{bookid:c}).then(function(e){if(void 0!==e.data.data){var t=e.data;a.openInitCaptchaView(t,{bookid:c,bookname:i,size:n})}}).catch(function(e){console.log(e)}):a.setState({downloadBTcontent:"DOWNLOAD",downloadBTcolor:"green"})},a.countdown=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.default.countdownTime,t=function(e){var t=new Date(e).toUTCString().split(":"),o=t[1],n=t[2].slice(0,2),c="".concat(o,":").concat(n);a.setState({countdownTime:c})};clearTimeout(a.state.countdownTID),t(e),a.state.countdownTID=setTimeout(function(){t(e),e-1e3>=0&&a.state.captchaVisible?a.countdown(e-1e3):a.countdown(0)},1e3)},a.openInitCaptchaView=function(e,t){a.setState({captchaVisible:!0,captchaImg:e.data,captchaToken:e,itemInfo:t}),R(!0),a.countdown(e.expi-Date.now())},a.closeCaptchaView=function(){a.setState({captchaVisible:!1}),R(!1)},a.resetCaptchaInfo=function(){a.setState({captchaImg:"",captchaToken:null,itemInfo:null,captchaInputedValue:"",isWrongCaptcha:!1})},a.postStart=function(){a.setState({downloadBTdisabled:!0,downloadBTcontent:"DOWNLOADING...."})},a.postEnd=function(){a.setState({downloadBTdisabled:!0,downloadBTcontent:"DOWNLOADED SUCCESSFULLY!"}),setTimeout(function(){a.setState({downloadBTdisabled:!1,downloadBTcontent:"DOWNLOAD"})},3e3)},a.clickVerifyCaptchaBT=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],a.state),n=o.itemInfo,c=o.captchaToken,i=o.captchaInputedValue;a.setState({verifyCaptchaBTdisabled:!0}),void 0!==i&&(c.text=i,w.a.post("/books/getbook",{bookid:n.bookid,token:c},t).then(function(e){if(a.setState({verifyCaptchaBTdisabled:!1}),200===e.status){var t=e.data;"111"===t.result?(a.setState({itemInfo:n,captchaToken:e.data,captchaInputedValue:i}),a.closeCaptchaView(),a.postStart(),a.clickVerifyCaptchaBT(null,{responseType:"arraybuffer",onDownloadProgress:function(e){a.setState({progressTotal:e.total,progressValue:e.loaded})}})):t.result?a.setState({isWrongCaptcha:!0}):(a.download(t,n.bookname),a.resetCaptchaInfo(),a.postEnd())}}).catch(function(e){a.setState({captchaImg:"",captchaToken:null,itemInfo:null,captchaInputedValue:"",isWrongCaptcha:!1,progressTotal:null,progressValue:null,verifyCaptchaBTdisabled:!1,downloadBTdisabled:!1,downloadBTcontent:e.message,downloadBTcolor:"red"})}))},a.clickRefreshCaptchaBT=function(){var e=a.state.itemInfo;a.setState({refreshCaptchaBTdisabled:!0}),w.a.post("/books/getbook",{bookid:e.bookid}).then(function(e){var t=e.data;a.setState({captchaImg:t.data,captchaToken:t,captchaInputedValue:"",isWrongCaptcha:!1}),a.setState({refreshCaptchaBTdisabled:!1}),a.countdown(t.expi-Date.now())})},a.state={inputValue:"",keyword:"",jsonData:[],searchResultViewKey:0,isLoading:!1,progressTotal:null,progressValue:null,downloadBTdisabled:!0,downloadBTcontent:"DOWNLOAD",downloadBTcolor:"green",bn:"",ebn:"",captchaVisible:!1,captchaImg:"",captchaToken:null,captchaInputedValue:"",itemInfo:null,isWrongCaptcha:!1,countdownTime:0,countdownTID:null,refreshCaptchaBTdisabled:!1,verifyCaptchaBTdisabled:!1},a.default={countdownTime:12e4},w.a.interceptors.request.use(function(e){return L().then(function(t){return e.headers.Authorization="Bearer ".concat(t),e})},function(e){return Promise.reject(e)}),window.FontFace&&new FontFace("Niconne","url(".concat(Z.a,")")).load().then(function(e){return document.fonts.add(e)}),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=x.a.parse(this.props.location.search).ebn;if(void 0===e)this.setState({jsonData:"Not Found"});else{var t=F.a.decode(e);this.setState({ebn:e,bn:t}),this.submitHandle(t)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.jsonData,o=t.progressTotal,c=t.progressValue,i=t.downloadBTdisabled,r=t.downloadBTcontent,l=t.downloadBTcolor,s=t.bn,d=t.captchaVisible,u=t.captchaImg,p=t.captchaInputedValue,h=t.itemInfo,f=t.isWrongCaptcha,b=t.countdownTime,w=t.refreshCaptchaBTdisabled,g=t.verifyCaptchaBTdisabled;return n.a.createElement("div",{className:"onePage"},n.a.createElement(m.Helmet,null,n.a.createElement("title",null,"Your-Ebook"),n.a.createElement("meta",{name:"description",content:"\u514d\u8d39\u7535\u5b50\u4e66, \u6db5\u76d6\u5386\u53f2\u3001\u653f\u6cbb\u3001\u7ecf\u6d4e\u3001\u5fc3\u7406\u3001\u54f2\u5b66\u3001\u6570\u5b66\u3001\u8ba1\u7b97\u673a\u7b49\u65b9\u9762\u3002"}),n.a.createElement("meta",{name:"keywords",content:"\u7535\u5b50\u4e66,\u514d\u8d39\u7535\u5b50\u4e66"}),n.a.createElement("meta",{property:"og:title",content:s+" - Your Ebook"}),n.a.createElement("meta",{property:"og:type",content:"ebook"}),n.a.createElement("meta",{property:"og:url",content:window.location.href}),n.a.createElement("meta",{property:"og:site_name",content:"Your Ebook"}),n.a.createElement("meta",{property:"og:image",content:window.location.origin+"/og.image.yourebook.png"}),n.a.createElement("meta",{property:"og:description",content:"\u514d\u8d39\u7535\u5b50\u4e66 - "+s})),n.a.createElement("div",{className:"onePage"},n.a.createElement("div",{className:"website_name"},n.a.createElement("a",{href:"/"},n.a.createElement("h1",null,"YOUR-EBOOK"))),"object"===typeof a?a.length>0&&n.a.createElement("div",{className:"bookInfo"},n.a.createElement("div",{className:"bookTitle"},a[0].title),n.a.createElement("div",{className:"bookSize"},"\u2264"+Math.ceil(a[0].size/1024/1024)+"MB")):n.a.createElement("div",{className:"booknotfound"},"404 - NOT FOUND"),n.a.createElement(J.a,{className:"downloadProgress",size:"medium",color:"olive",precision:2,total:o,value:c,progress:!0,indicating:!0})),n.a.createElement(v.a,{className:"downloadBT",size:"medium",circular:!0,color:l,content:r,disabled:i,onClick:this.downloadClick}),n.a.createElement("div",{className:this.state.isLoading?"mainLoadingShowed":"mainLoadingHidden"},n.a.createElement(C.a,{active:!0,inline:"centered",size:"big",content:"Loading"})),d&&n.a.createElement("div",{className:"captchaViewWrapper",onDoubleClick:this.closeCaptchaView},n.a.createElement("div",{className:"captchaView"},n.a.createElement("div",{className:"captchaInnerView",onClick:function(e){return e.stopPropagation()},onDoubleClick:function(e){return e.stopPropagation()}},null!==h&&n.a.createElement("div",{className:"bookname",title:h.bookname},h.bookname.slice(0,52)+(h.bookname.length>52?"....":"")),n.a.createElement("div",{className:"captchaImg",dangerouslySetInnerHTML:{__html:u}}),f&&n.a.createElement(T.a,{pointing:"below",basic:!0,color:"red",size:"tiny",content:"Wrong captcha..."}),n.a.createElement(y.a,{className:"captchaInput",focus:!0,placeholder:"Enter captcha",onFocus:function(){e.setState({isWrongCaptcha:!1})},value:p,onInput:function(t){var a=t.target;e.setState({captchaInputedValue:a.value})},maxLength:12,"data-timer":b}),n.a.createElement(v.a.Group,{className:"btGroup",circular:"true"},n.a.createElement(v.a,{icon:"repeat",circular:!0,color:"green",disabled:w,loading:w,onClick:this.clickRefreshCaptchaBT}),n.a.createElement(v.a,{icon:"check circle outline",color:"blue",content:"Continue",onClick:function(t){e.clickVerifyCaptchaBT(t)},disabled:g,loading:g})),n.a.createElement(S.a,{name:"close",className:"closeCaptchaBT",size:"large",color:"teal",fitted:!0,onClick:this.closeCaptchaView})))))}}]),t}(o.Component),$=Object(h.g)(X),Q=(a(443),function(e){function t(){return Object(r.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"NotFound"},n.a.createElement(p.b,{to:"/"},n.a.createElement("div",{className:"siteLogo"},"Your-Ebook")),n.a.createElement("div",{className:"InsideNotFound"},n.a.createElement("div",{className:"status"},"404"),n.a.createElement(p.b,{to:"/"},n.a.createElement("div",{className:"content"},n.a.createElement("div",null,"PAGE NOT FOUND")))))}}]),t}(o.Component)),ee=(a(444),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement("div",{className:"YourEbookContainer"},n.a.createElement(m.Helmet,null,n.a.createElement("link",{rel:"canonical",href:"https://your-ebook.xyz"})),n.a.createElement(h.d,null,n.a.createElement(h.b,{exact:!0,path:"/"},n.a.createElement(K,null)),n.a.createElement(h.b,{exact:!0,path:"/ebooks"},n.a.createElement(h.a,{to:"/"})),n.a.createElement(h.b,{exact:!0,path:"/search"},n.a.createElement(K,null)),n.a.createElement(h.b,{exact:!0,path:"/latest"},n.a.createElement(K,null)),n.a.createElement(h.b,{exact:!0,path:"/share"},n.a.createElement($,null)),n.a.createElement(h.b,null,n.a.createElement(Q,null)))))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[228,1,2]]]);