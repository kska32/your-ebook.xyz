(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/Niconne-Regular.1c8d9ad0.ttf"},226:function(e,t,a){e.exports=a(443)},233:function(e,t,a){},297:function(e,t,a){},384:function(e,t,a){},386:function(e,t){},388:function(e,t){},397:function(e,t,a){},439:function(e,t,a){},441:function(e,t,a){},442:function(e,t,a){},443:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(47),i=a.n(c),l=(a(231),a(232),a(233),a(24)),r=a(25),s=a(28),u=a(26),d=a(29),m=a(59),p=a(77),h=a(30),f=a(20),b=a.n(f),w=a(456),k=a(218),g=a(452),v=a(455),E=a(50),S=a(451),C=a(78),T=a(453),y=a(444),N=a(201),I=a.n(N),V=a(133),B=a.n(V);function L(){var e=Math.random;Math.random=function(){return.5};var t={excludes:{fonts:!0,webgl:!0,audio:!0}};return new Promise(function(a){var n;n=function(){I.a.get(t,function(t){var n=t.map(function(e){return e.value}).join(""),o=B.a.SHA256(n),c=B.a.enc.Base64.stringify(o);Math.random=e,a(c)})},window.requestIdleCallback?requestIdleCallback(n):setTimeout(n,0)})}var j=a(99),O=a.n(j),D=a(100),H=a.n(D),x=a(137),R=a(41),q=a.n(R),W=a(202),z=a(203),M=(a(297),a(74)),P=a.n(M),_=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).download=function(e,t){var a=q.a.createWriteStream(t).getWriter();a.write(new Uint8Array(e)),a.close()},a.postStart=function(e){a.refs["item"+e].classList.add("disabled"),a.refs["item"+e].querySelector(".loader").classList.add("active")},a.postEnd=function(e){a.refs["item"+e].querySelector(".loader").classList.remove("active"),a.refs["item"+e].classList.remove("disabled")},a.qrcodeClick=function(e,t,n){e.stopPropagation(),a.props.qrcodeZoomIn(e,t,n)},a.state={percent:0,linkCopied:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"itemClickHandle",value:function(e,t,a,n){var o=this,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(){},l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:function(){};if(void 0!==t)n.text=t,b.a.post("".concat("","/books/getbook"),{bookid:a.bookid,token:n},c).then(function(e){if(l(),200===e.status){var t=e.data;"111"===t.result?(o.postStart(a.bookindex),o.props.closeCaptchaView(),o.itemClickHandle(null,t.text,a,t,{responseType:"arraybuffer",onDownloadProgress:function(e){var t=Math.round(100*e.loaded/e.total);o.setState({percent:t>100?100:t<0?0:t})}})):t.result?i(!0):(o.download(t,a.bookname),o.postEnd(a.bookindex))}});else{var r=e.currentTarget.dataset,s=r.bookid,u=r.bookname,d=r.bookindex;this.postStart(d),b.a.post("".concat("","/books/getbook"),{bookid:s}).then(function(e){if(void 0!==e.data.data){var t=e.data;o.props.openCaptchaView(t,o.itemClickHandle.bind(o),{bookid:s,bookname:u,bookindex:d})}o.postEnd(d)}).catch(function(e){console.log(e)})}}},{key:"render",value:function(){var e=this,t=this.props.item,a=t._id,n=t.title,c=t.size,i=this.props.index,l=this.props.theLastNo,r=this.state,s=r.percent,u=r.linkCopied,d=window.location.origin+"/share?ebn="+P.a.encode(n);return o.a.createElement("div",{itemScope:!0,itemType:"http://schema.org/Book",className:"SearchResultViewItem "+(i<l?"SearchResultViewCreateItem SearchResultViewHiddenItem":"SearchResultViewRemoveItem SearchResultViewHiddenItem"),onClick:function(t){e.itemClickHandle(t)},"data-bookid":a,"data-booksize":c,"data-bookname":n,"data-bookindex":i,ref:"item"+i},o.a.createElement("link",{itemProp:"additionalType",href:"https://schema.org/fileSize"}),o.a.createElement("div",{className:"progressbar",style:{transform:"translateX(".concat(-100+s,"%)")}}),s>0&&o.a.createElement("div",{className:"percentage"},s+"%"),o.a.createElement(O.a,{className:"SearchResultViewBookicon qrcode",value:d,includeMargin:!0,size:64,renderAs:"svg",onClick:function(t){e.qrcodeClick(t,d,n)}}),o.a.createElement("div",{className:"SearchResultViewBooktitle"},o.a.createElement(z.CopyToClipboard,{text:d,onCopy:function(){e.setState({linkCopied:!0}),setTimeout(function(){e.setState({linkCopied:!1})},1200)}},o.a.createElement(E.a,{name:u?"check":"clone outline",className:"copyLink",circular:!0,onClick:function(e){e.stopPropagation()}})),o.a.createElement("h2",null,o.a.createElement("span",{itemProp:"name"},n)),o.a.createElement("h6",null,o.a.createElement("span",{itemProp:"fileSize"},Math.ceil(c/1024/1024)+"MB"))),o.a.createElement(S.a,{size:"medium"}))}}]),t}(n.PureComponent);a(384),a(385);q.a.WritableStream=q.a.WritableStream||W.a,q.a.mitm="https://kska32.github.io/stream/mitm.html";var F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).io=null,a.state={keyword:a.props.keyword,theLastNo:a.props.jsonData.length,jsonData:a.props.jsonData,showItem:!1,limitNum:10,isLoading:!1,noNewData:!1,footShowed:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"ajaxOnScrollToBottom",value:function(e,t,a,n){var o=this;!1===this.state.isLoading&&(this.setState({isLoading:!0}),b.a.post("".concat("","/books/search"),{keyword:e,skipNum:t,limitNum:a}).then(function(e){o.setState({isLoading:!1}),n(e.data)}).catch(function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.keyword,n=t.theLastNo,o=t.limitNum;window.scrollTo({top:0});var c=function(t){[].slice.call(document.querySelectorAll(".SearchResultViewItem")).forEach(function(a,n){e.io.observe(a),t&&t(a,n)})};this.io=new IntersectionObserver(function(t){t.forEach(function(t,i){t.isIntersecting&&("kska_SearchResultView_bottom"===t.target.className&&(0===n||e.state.noNewData||e.ajaxOnScrollToBottom(a,n,o,function(t){if(0===t.length||"Not Found"===t)return e.state.noNewData=!0;e.setState({jsonData:[].concat(Object(x.a)(e.state.jsonData),Object(x.a)(t)),theLastNo:n+=o,showItem:!0}),c()})),/SearchResultViewCreateItem SearchResultViewHiddenItem/gi.test(t.target.className)&&t.target.classList.replace("SearchResultViewHiddenItem","SearchResultViewShowedItem")),setTimeout(function(){if(e.state.noNewData){var a=document.querySelectorAll(".SearchResultViewItem"),n=a[a.length-1];n&&/SearchResultViewCreateItem SearchResultViewShowedItem/gi.test(n.className)&&"kska_SearchResultView_bottom"===t.target.className&&(t.isIntersecting?e.setState({footShowed:!0}):e.setState({footShowed:!1}))}},1e3)})},{threshold:0}),this.io.observe(document.querySelector(".kska_SearchResultView_bottom")),c()}},{key:"render",value:function(){var e=this.state,t=e.theLastNo,a=(e.showItem,e.jsonData),n=this.props,c=n.qrcodeZoomIn,i=n.openCaptchaView,l=n.closeCaptchaView;return o.a.createElement("div",{className:"SearchResultView"},a?a.map(function(e,a){return o.a.createElement(_,{key:a,item:e,index:a,theLastNo:t,qrcodeZoomIn:c,openCaptchaView:i,closeCaptchaView:l})}):[],o.a.createElement("div",{className:this.state.isLoading?"LoadingShowed":"LoadingHidden"},o.a.createElement(S.a,{active:!0,inline:"centered"})),o.a.createElement("div",{className:"kska_SearchResultView_bottom"}),o.a.createElement("div",{className:"footer "+(this.state.footShowed?"footShowed":"footHidden")},o.a.createElement("a",{href:"mailto:kska32@gmail.com"},"By kska32@gmail.com")))}}]),t}(n.Component),A=a(101),Y=a.n(A),Z=(a(397),""),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).gotoPage=function(e){var t=H.a.parse(a.props.location.search).q;t=void 0!==t?t.replace(/ /gi,"+"):"",a.setState({inputValue:t}),a.focusHandle(),a.submitHandle(t)},a.focusHandle=function(e){a.setState({searchBarMovetoTop:!0,supportedBrowser:!1})},a.blurHandle=function(e){""===e.target.value&&0===document.querySelectorAll(".SearchResultViewItem").length&&null===document.querySelector(".notfound")&&a.setState({searchBarMovetoTop:!1,supportedBrowser:!0})},a.inputHandle=function(e){a.setState({inputValue:e.target.value})},a.SuppertedBrowserList=function(e){return o.a.createElement("table",{className:a.state.supportedBrowser?"showtable":"hiddentable"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Browser"),o.a.createElement("td",null,"Supported"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Chrome 52+"),o.a.createElement("td",null,"Yes")),o.a.createElement("tr",null,o.a.createElement("td",null,"Opera 39+"),o.a.createElement("td",null,"Yes")),o.a.createElement("tr",null,o.a.createElement("td",null,"Firefox"),o.a.createElement("td",null,"Yes")),o.a.createElement("tr",null,o.a.createElement("td",null,"Safari"),o.a.createElement("td",null,"No")),o.a.createElement("tr",null,o.a.createElement("td",null,"Edge"),o.a.createElement("td",null,"Yes")),o.a.createElement("tr",null,o.a.createElement("td",null,"IE"),o.a.createElement("td",null,"No"))))},a.gototop=function(e){window.scrollTo({top:0,left:10,behavior:"smooth"})},a.qrcodeZoomIn=function(e,t,n){e.stopPropagation(),a.setState({qrcodeZoomInable:!0,bookLinkAddr:t,bookTitle:n})},a.countdown=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.default.countdownTime,t=function(e){var t=new Date(e).toUTCString().split(":"),n=t[1],o=t[2].slice(0,2),c="".concat(n,":").concat(o);a.setState({countdownTime:c})};clearTimeout(a.state.countdownTID),t(e),a.state.countdownTID=setTimeout(function(){t(e),e-1e3>=0&&a.state.captchaVisible?a.countdown(e-1e3):a.countdown(0)},1e3)},a.openCaptchaView=function(e,t,n){a.setState({captchaVisible:!0,captchaImg:e.data,captchaToken:e,itemClickHandle:t,itemInfo:n}),a.countdown(e.expi-Date.now())},a.closeCaptchaView=function(e){a.setState({captchaVisible:!1,captchaImg:"",captchaToken:null,itemClickHandle:null,itemInfo:null,captchaInputedValue:"",isWrongCaptcha:!1})},a.clickVerifyCaptchaBT=function(e){var t=a.state,n=t.captchaInputedValue,o=t.itemClickHandle,c=t.itemInfo,i=t.captchaToken;a.setState({verifyCaptchaBTdisabled:!0}),o(null,n,c,i,{},function(e){a.setState({isWrongCaptcha:e})},function(){a.setState({verifyCaptchaBTdisabled:!1})})},a.clickRefreshCaptchaBT=function(){var e=a.state.itemInfo;a.setState({refreshCaptchaBTdisabled:!0}),b.a.post("".concat(Z,"/books/getbook"),{bookid:e.bookid}).then(function(e){var t=e.data;a.setState({captchaImg:t.data,captchaToken:t,captchaInputedValue:"",isWrongCaptcha:!1}),a.setState({refreshCaptchaBTdisabled:!1}),a.countdown(t.expi-Date.now())})},a.state={searchBarMovetoTop:!1,inputValue:"",keyword:"",jsonData:[],searchResultViewKey:0,isLoading:!1,limitNum:10,supportedBrowser:!0,totopable:!1,qrcodeZoomInable:!1,bookLinkAddr:"",bookTitle:"",captchaVisible:!1,captchaImg:"",captchaToken:null,captchaInputedValue:"",itemClickHandle:null,itemInfo:null,isWrongCaptcha:!1,countdownTime:0,countdownTID:null,refreshCaptchaBTdisabled:!1,verifyCaptchaBTdisabled:!1},a.default={countdownTime:12e4},b.a.interceptors.request.use(function(e){return L().then(function(t){return e.headers.Authorization="Bearer ".concat(t),e})},function(e){return Promise.reject(e)}),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.FontFace&&new FontFace("Niconne","url(".concat(Y.a,")")).load().then(function(e){return document.fonts.add(e)}),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;"/search"===this.props.location.pathname&&this.gotoPage();var t=function(e){return document.querySelector(e)};t(".searchBox>.input i").addEventListener("click",function(t){e.state.inputValue.trim().length>0&&(e.props.history.push("/search?q=".concat(e.state.inputValue)),e.submitHandle(e.state.inputValue))}),t(".searchBox>.input>.prompt").addEventListener("keyup",function(t){e.state.inputValue.trim().length>0&&13===t.keyCode&&(e.props.history.push("/search?q=".concat(e.state.inputValue)),e.submitHandle(e.state.inputValue))}),window.onpopstate=function(t){"/"===t.target.location.pathname?window.location.href="/":e.gotoPage()},this.io=new IntersectionObserver(function(t){t.forEach(function(t){if(t.isIntersecting){var a=document.querySelector(".containerBoxMovetoTop");a&&a.classList.remove("topHidden"),e.setState({totopable:!1})}else{var n=document.querySelector(".containerBoxMovetoTop");n&&n.classList.add("topHidden"),e.setState({totopable:!0})}})}),this.io.observe(document.querySelector(".kska_SearchResultView_top"));var a=0;document.addEventListener("scroll",function(e){var t=e.target.scrollingElement.scrollTop;if(a<t){var n=document.querySelector(".containerBoxMovetoTop");n&&n.classList.add("topHidden")}else{var o=document.querySelector(".containerBoxMovetoTop");o&&o.classList.remove("topHidden")}Math.abs(a-t)>100&&(a=t)})}},{key:"submitHandle",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};!1===this.state.isLoading&&(this.setState({isLoading:!0}),b.a.post("".concat(Z,"/books/search"),{keyword:e,skipNum:0,limitNum:this.state.limitNum}).then(function(n){document.title="".concat(e," - Your-Ebook"),t.setState({isLoading:!1,keyword:e,jsonData:n.data,searchResultViewKey:Date.now()}),a()}).catch(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchBarMovetoTop,n=t.inputValue,c=t.jsonData,i=t.keyword,l=t.searchResultViewKey,r=t.totopable,s=t.qrcodeZoomInable,u=t.bookLinkAddr,d=t.bookTitle,p=t.captchaVisible,h=t.captchaImg,f=t.captchaInputedValue,b=t.itemInfo,N=t.isWrongCaptcha,I=t.countdownTime,V=t.refreshCaptchaBTdisabled,B=t.verifyCaptchaBTdisabled;return o.a.createElement("div",null,o.a.createElement(m.Helmet,null,o.a.createElement("title",null,"Your-Ebook"),o.a.createElement("meta",{name:"description",content:"\u514d\u8d39\u7535\u5b50\u4e66, \u6db5\u76d6\u5386\u53f2\u3001\u653f\u6cbb\u3001\u7ecf\u6d4e\u3001\u5fc3\u7406\u3001\u54f2\u5b66\u3001\u6570\u5b66\u3001\u8ba1\u7b97\u673a\u7b49\u65b9\u9762\u3002"}),o.a.createElement("meta",{name:"keywords",content:"\u7535\u5b50\u4e66,\u514d\u8d39\u7535\u5b50\u4e66"}),o.a.createElement("meta",{property:"og:title",content:"Home"}),o.a.createElement("meta",{property:"og:type",content:"website"}),o.a.createElement("meta",{property:"og:url",content:window.location.href}),o.a.createElement("meta",{property:"og:site_name",content:"Your Ebook"}),o.a.createElement("meta",{property:"og:image",content:window.location.origin+"/og.image.yourebook.png"}),o.a.createElement("meta",{property:"og:description",content:"\u514d\u8d39\u7535\u5b50\u4e66, \u6db5\u76d6\u5386\u53f2\u3001\u653f\u6cbb\u3001\u7ecf\u6d4e\u3001\u5fc3\u7406\u3001\u54f2\u5b66\u3001\u6570\u5b66\u3001\u8ba1\u7b97\u673a\u7b49\u65b9\u9762\u3002"})),o.a.createElement("div",{className:"containerBox "+(a?"containerBoxMovetoTop":"")},o.a.createElement(w.a,{className:"segmentBox"},o.a.createElement(k.a,{src:window.location.origin+"/img/ebook.png",size:"small",className:"bookimg",title:"Your Ebook",href:"https://github.com/kska32/ebooks",target:"_blank",alt:"website logo",circular:!0}),o.a.createElement(g.a,null),o.a.createElement(g.a,null),o.a.createElement(v.a,{fluid:!0,size:"large",className:"searchBox",open:!1,value:n,onSearchChange:this.inputHandle,onFocus:this.focusHandle,onBlur:this.blurHandle,placeholder:"\u4f60\u7684\u7535\u5b50\u4e66, \u5386\u53f2\u3001\u653f\u6cbb\u3001\u7ecf\u6d4e\u3001\u5fc3\u7406\u3001\u54f2\u5b66\u3001\u6570\u5b66\u3001\u8ba1\u7b97\u673a\u3001\u5899\u5185\u7981\u4e66\u2026"}))),o.a.createElement("div",{className:"searchResultBox"},o.a.createElement("div",{className:"kska_SearchResultView_top"}),"object"===typeof c?o.a.createElement(F,{jsonData:c,keyword:i,key:l,qrcodeZoomIn:this.qrcodeZoomIn,openCaptchaView:this.openCaptchaView,closeCaptchaView:this.closeCaptchaView}):o.a.createElement("div",{className:"notfound"},o.a.createElement(E.a,{name:"map signs",size:"big",inverted:!0}),o.a.createElement("div",null,"The book not found!"))),o.a.createElement("div",{className:this.state.isLoading?"mainLoadingShowed":"mainLoadingHidden"},o.a.createElement(S.a,{active:!0,inline:"centered",size:"big",content:"Loading"})),c.length>0&&o.a.createElement(E.a,{name:"arrow up",className:"gototop"+(r?" animated slideInUp fast show":" animated bounceOut fast hide"),size:"big",circular:!0,onClick:this.gototop}),s&&o.a.createElement("div",{className:"qrcodeZoomModel",onClick:function(){e.setState({qrcodeZoomInable:!1})}},o.a.createElement(O.a,{className:"qrcode",value:u,includeMargin:!0,size:256,renderAs:"svg",onClick:function(e){e.stopPropagation()}}),o.a.createElement("div",{className:"bookTitle"},d)),p&&o.a.createElement("div",{className:"captchaViewWrapper",onDoubleClick:this.closeCaptchaView},o.a.createElement("div",{className:"captchaView"},o.a.createElement("div",{className:"captchaInnerView",onClick:function(e){return e.stopPropagation()},onDoubleClick:function(e){return e.stopPropagation()}},null!==b&&o.a.createElement("div",{className:"bookname",title:b.bookname},b.bookname.slice(0,52)+(b.bookname.length>52?"....":"")),o.a.createElement("div",{className:"captchaImg",dangerouslySetInnerHTML:{__html:h}}),N&&o.a.createElement(C.a,{pointing:"below",basic:!0,color:"red",size:"tiny",content:"Invalid or wrong captcha..."}),o.a.createElement(T.a,{className:"captchaInput",focus:!0,placeholder:"Enter captcha",onFocus:function(){e.setState({isWrongCaptcha:!1})},value:f,onInput:function(t){var a=t.target;e.setState({captchaInputedValue:a.value})},maxLength:12,"data-timer":I}),o.a.createElement(y.a.Group,{className:"btGroup",circular:"true"},o.a.createElement(y.a,{icon:"repeat",circular:!0,color:"green",onClick:this.clickRefreshCaptchaBT,disabled:V,loading:V}),o.a.createElement(y.a,{icon:"check circle outline",color:"blue",content:"Continue",onClick:this.clickVerifyCaptchaBT,disabled:B,loading:B})),o.a.createElement(E.a,{name:"close",className:"closeCaptchaBT",size:"large",color:"teal",fitted:!0,onClick:this.closeCaptchaView})))))}}]),t}(n.Component),G=Object(h.f)(U),K=a(454),J=(a(439),"");window.base64url=P.a;var X=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).submitHandle=function(e){void 0!==e&&!1===a.state.isLoading&&(a.setState({isLoading:!0}),b.a.post("".concat(J,"/books/search"),{keyword:e,skipNum:0,limitNum:1}).then(function(t){document.title="".concat(e," - Your-Ebook"),a.setState({isLoading:!1,keyword:e,jsonData:t.data,searchResultViewKey:Date.now(),downloadBTdisabled:"Not Found"===t.data})}).catch(function(e){console.log(e)}))},a.download=function(e,t){var a=q.a.createWriteStream(t).getWriter();a.write(new Uint8Array(e)),a.close()},a.downloadClick=function(){var e=a.state.jsonData[0],t=e._id,n=e.title,o=e.size,c=t,i=n;b.a.post("".concat(J,"/books/getbook"),{bookid:c}).then(function(e){if(void 0!==e.data.data){var t=e.data;a.openInitCaptchaView(t,{bookid:c,bookname:i,size:o})}}).catch(function(e){console.log(e)})},a.countdown=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.default.countdownTime,t=function(e){var t=new Date(e).toUTCString().split(":"),n=t[1],o=t[2].slice(0,2),c="".concat(n,":").concat(o);a.setState({countdownTime:c})};clearTimeout(a.state.countdownTID),t(e),a.state.countdownTID=setTimeout(function(){t(e),e-1e3>=0&&a.state.captchaVisible?a.countdown(e-1e3):a.countdown(0)},1e3)},a.openInitCaptchaView=function(e,t){a.setState({captchaVisible:!0,captchaImg:e.data,captchaToken:e,itemInfo:t}),a.countdown(e.expi-Date.now())},a.closeCaptchaView=function(){a.setState({captchaVisible:!1})},a.resetCaptchaInfo=function(){a.setState({captchaImg:"",captchaToken:null,itemInfo:null,captchaInputedValue:"",isWrongCaptcha:!1})},a.postStart=function(){a.setState({downloadBTdisabled:!0,downloadBTcontent:"DOWNLOADING...."})},a.postEnd=function(){a.setState({downloadBTdisabled:!0,downloadBTcontent:"DOWNLOADED SUCCESSFULLY!"}),setTimeout(function(){a.setState({downloadBTdisabled:!1,downloadBTcontent:"DOWNLOAD"})},3e3)},a.clickVerifyCaptchaBT=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],a.state),o=n.itemInfo,c=n.captchaToken,i=n.captchaInputedValue;a.setState({verifyCaptchaBTdisabled:!0}),void 0!==i&&(c.text=i,b.a.post("".concat(J,"/books/getbook"),{bookid:o.bookid,token:c},t).then(function(e){if(a.setState({verifyCaptchaBTdisabled:!1}),200===e.status){var t=e.data;"111"===t.result?(a.setState({itemInfo:o,captchaToken:e.data,captchaInputedValue:i}),a.closeCaptchaView(),a.postStart(),a.clickVerifyCaptchaBT(null,{responseType:"arraybuffer",onDownloadProgress:function(e){a.setState({progressTotal:e.total,progressValue:e.loaded})}})):t.result?a.setState({isWrongCaptcha:!0}):(a.download(t,o.bookname),a.resetCaptchaInfo(),a.postEnd())}}))},a.clickRefreshCaptchaBT=function(){var e=a.state.itemInfo;a.setState({refreshCaptchaBTdisabled:!0}),b.a.post("".concat(J,"/books/getbook"),{bookid:e.bookid}).then(function(e){var t=e.data;a.setState({captchaImg:t.data,captchaToken:t,captchaInputedValue:"",isWrongCaptcha:!1}),a.setState({refreshCaptchaBTdisabled:!1}),a.countdown(t.expi-Date.now())})},a.state={inputValue:"",keyword:"",jsonData:[],searchResultViewKey:0,isLoading:!1,progressTotal:null,progressValue:null,downloadBTdisabled:!0,downloadBTcontent:"DOWNLOAD",bn:"",ebn:"",captchaVisible:!1,captchaImg:"",captchaToken:null,captchaInputedValue:"",itemInfo:null,isWrongCaptcha:!1,countdownTime:0,countdownTID:null,refreshCaptchaBTdisabled:!1,verifyCaptchaBTdisabled:!1},a.default={countdownTime:12e4},b.a.interceptors.request.use(function(e){return L().then(function(t){return e.headers.Authorization="Bearer ".concat(t),e})},function(e){return Promise.reject(e)}),window.FontFace&&new FontFace("Niconne","url(".concat(Y.a,")")).load().then(function(e){return document.fonts.add(e)}),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=H.a.parse(this.props.location.search).ebn;if(void 0===e)this.setState({jsonData:"Not Found"});else{var t=P.a.decode(e);this.setState({ebn:e,bn:t}),this.submitHandle(t)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.jsonData,n=t.progressTotal,c=t.progressValue,i=t.downloadBTdisabled,l=t.downloadBTcontent,r=t.bn,s=t.captchaVisible,u=t.captchaImg,d=t.captchaInputedValue,p=t.itemInfo,h=t.isWrongCaptcha,f=t.countdownTime,b=t.refreshCaptchaBTdisabled,w=t.verifyCaptchaBTdisabled;return o.a.createElement("div",{className:"onePage"},o.a.createElement(m.Helmet,null,o.a.createElement("title",null,"Your-Ebook"),o.a.createElement("meta",{name:"description",content:"\u514d\u8d39\u7535\u5b50\u4e66, \u6db5\u76d6\u5386\u53f2\u3001\u653f\u6cbb\u3001\u7ecf\u6d4e\u3001\u5fc3\u7406\u3001\u54f2\u5b66\u3001\u6570\u5b66\u3001\u8ba1\u7b97\u673a\u7b49\u65b9\u9762\u3002"}),o.a.createElement("meta",{name:"keywords",content:"\u7535\u5b50\u4e66,\u514d\u8d39\u7535\u5b50\u4e66"}),o.a.createElement("meta",{property:"og:title",content:r+" - Your Ebook"}),o.a.createElement("meta",{property:"og:type",content:"ebook"}),o.a.createElement("meta",{property:"og:url",content:window.location.href}),o.a.createElement("meta",{property:"og:site_name",content:"Your Ebook"}),o.a.createElement("meta",{property:"og:image",content:window.location.origin+"/og.image.yourebook.png"}),o.a.createElement("meta",{property:"og:description",content:"\u514d\u8d39\u7535\u5b50\u4e66 - "+r})),o.a.createElement("div",{className:"onePage"},o.a.createElement("div",{className:"website_name"},o.a.createElement("a",{href:"/"},o.a.createElement("h1",null,"YOUR-EBOOK"))),"object"===typeof a?a.length>0&&o.a.createElement("div",{className:"bookInfo"},o.a.createElement("div",{className:"bookTitle"},a[0].title),o.a.createElement("div",{className:"bookSize"},"\u2264"+Math.ceil(a[0].size/1024/1024)+"MB")):o.a.createElement("div",{className:"booknotfound"},"404 - NOT FOUND"),o.a.createElement(K.a,{className:"downloadProgress",size:"medium",color:"olive",precision:2,total:n,value:c,progress:!0,indicating:!0})),o.a.createElement(y.a,{className:"downloadBT",size:"medium",circular:!0,color:"green",content:l,disabled:i,onClick:this.downloadClick}),o.a.createElement("div",{className:this.state.isLoading?"mainLoadingShowed":"mainLoadingHidden"},o.a.createElement(S.a,{active:!0,inline:"centered",size:"big",content:"Loading"})),s&&o.a.createElement("div",{className:"captchaViewWrapper",onDoubleClick:this.closeCaptchaView},o.a.createElement("div",{className:"captchaView"},o.a.createElement("div",{className:"captchaInnerView",onClick:function(e){return e.stopPropagation()},onDoubleClick:function(e){return e.stopPropagation()}},null!==p&&o.a.createElement("div",{className:"bookname",title:p.bookname},p.bookname.slice(0,52)+(p.bookname.length>52?"....":"")),o.a.createElement("div",{className:"captchaImg",dangerouslySetInnerHTML:{__html:u}}),h&&o.a.createElement(C.a,{pointing:"below",basic:!0,color:"red",size:"tiny",content:"Wrong captcha..."}),o.a.createElement(T.a,{className:"captchaInput",focus:!0,placeholder:"Enter captcha",onFocus:function(){e.setState({isWrongCaptcha:!1})},value:d,onInput:function(t){var a=t.target;e.setState({captchaInputedValue:a.value})},maxLength:12,"data-timer":f}),o.a.createElement(y.a.Group,{className:"btGroup",circular:"true"},o.a.createElement(y.a,{icon:"repeat",circular:!0,color:"green",disabled:b,loading:b,onClick:this.clickRefreshCaptchaBT}),o.a.createElement(y.a,{icon:"check circle outline",color:"blue",content:"Continue",onClick:function(t){e.clickVerifyCaptchaBT(t)},disabled:w,loading:w})),o.a.createElement(E.a,{name:"close",className:"closeCaptchaBT",size:"large",color:"teal",fitted:!0,onClick:this.closeCaptchaView})))))}}]),t}(n.Component),$=Object(h.f)(X),Q=(a(441),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"NotFound"},o.a.createElement(p.b,{to:"/"},o.a.createElement("div",{className:"siteLogo"},"Your-Ebook")),o.a.createElement("div",{className:"InsideNotFound"},o.a.createElement("div",{className:"status"},"404"),o.a.createElement(p.b,{to:"/"},o.a.createElement("div",{className:"content"},o.a.createElement("div",null,"PAGE NOT FOUND")))))}}]),t}(n.Component)),ee=(a(442),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement("div",{className:"YourEbookContainer"},o.a.createElement(m.Helmet,null,o.a.createElement("link",{rel:"canonical",href:"https://your-ebook.xyz"})),o.a.createElement(h.c,null,o.a.createElement(h.a,{exact:!0,path:"/"},o.a.createElement(G,null)),o.a.createElement(h.a,{exact:!0,path:"/search"},o.a.createElement(G,null)),o.a.createElement(h.a,{exact:!0,path:"/share"},o.a.createElement($,null)),o.a.createElement(h.a,null,o.a.createElement(Q,null)))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[226,1,2]]]);