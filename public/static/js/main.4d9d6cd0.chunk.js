(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{211:function(e,t,a){e.exports=a(417)},218:function(e,t,a){},274:function(e,t,a){},362:function(e,t,a){},363:function(e,t,a){},413:function(e,t,a){},416:function(e,t,a){},417:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(43),i=a.n(r),c=(a(216),a(217),a(218),a(29)),l=a(30),s=a(33),d=a(31),u=a(34),m=a(202),h=a(35),p=a(27),b=a.n(p),f=a(430),w=a(203),k=a(425),g=a(427),E=a(424),v=a(56),S=a(87),y=a(184),N=a.n(y),j=a(121),L=a.n(j);function B(){var e=Math.random;return Math.random=function(){return.5},new Promise(function(t){var a;a=function(){N.a.get(function(a){var o=a.map(function(e){return e.value}).join(""),n=L.a.SHA256(o),r=L.a.enc.Base64.stringify(n);Math.random=e,t(r)})},window.requestIdleCallback?requestIdleCallback(a):setTimeout(a,100)})}var O=a(88),T=a.n(O),V=a(125),I=a(44),C=a.n(I),D=a(185),R=a(186),q=(a(274),a(66)),H=a.n(q),x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).download=function(e,t){var a=C.a.createWriteStream(t).getWriter();a.write(new Uint8Array(e)),a.close()},a.qrcodeClick=function(e,t,o){e.stopPropagation(),a.props.qrcodeZoomIn(e,t,o)},a.state={percent:0,linkCopied:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"itemClickHandle",value:function(e){var t=this,a=e.currentTarget.dataset,o=a.bookid,n=a.bookname,r=a.bookindex,i={responseType:"arraybuffer",onDownloadProgress:function(e){var a=Math.round(100*e.loaded/e.total);t.setState({percent:a>100?100:a<0?0:a})}};this.refs["item"+r].classList.add("disabled"),this.refs["item"+r].querySelector(".loader").classList.add("active"),b.a.post("".concat("","/books/getbook"),{bookid:o,bookname:n},i).then(function(e){t.download(e.data,n),t.refs["item"+r].querySelector(".loader").classList.remove("active"),t.refs["item"+r].classList.remove("disabled")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.props.item,a=t._id,o=t.title,r=t.size,i=this.props.index,c=this.props.theLastNo,l=this.state,s=l.percent,d=l.linkCopied,u=window.location.origin+"/share?ebn="+H.a.encode(o);return n.a.createElement("div",{itemScope:!0,itemType:"http://schema.org/Book",className:"SearchResultViewItem "+(i<c?"SearchResultViewCreateItem SearchResultViewHiddenItem":"SearchResultViewRemoveItem SearchResultViewHiddenItem"),onClick:function(t){e.itemClickHandle(t)},"data-bookid":a,"data-booksize":r,"data-bookname":o,"data-bookindex":i,ref:"item"+i},n.a.createElement("link",{itemProp:"additionalType",href:"https://schema.org/fileSize"}),n.a.createElement("div",{className:"progressbar",style:{transform:"translateX(".concat(-100+s,"%)")}}),s>0&&n.a.createElement("div",{className:"percentage"},s+"%"),n.a.createElement(T.a,{className:"SearchResultViewBookicon qrcode",value:u,includeMargin:!0,size:64,renderAs:"svg",onClick:function(t){e.qrcodeClick(t,u,o)}}),n.a.createElement("div",{className:"SearchResultViewBooktitle"},n.a.createElement("h2",null,n.a.createElement("span",{itemProp:"name"},o)),n.a.createElement("h6",null,n.a.createElement("span",{itemProp:"fileSize"},Math.ceil(r/1024/1024)+"MB")),n.a.createElement(R.CopyToClipboard,{text:u,onCopy:function(){e.setState({linkCopied:!0}),setTimeout(function(){e.setState({linkCopied:!1})},1200)}},n.a.createElement(v.a,{name:d?"check":"clone outline",className:"copyLink",circular:!0,onClick:function(e){e.stopPropagation()}}))),n.a.createElement(E.a,{size:"medium"}))}}]),t}(o.PureComponent);a(362);C.a.WritableStream=C.a.WritableStream||D.a;var M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).io=null,a.state={keyword:a.props.keyword,theLastNo:a.props.jsonData.length,jsonData:a.props.jsonData,showItem:!1,limitNum:10,isLoading:!1,noNewData:!1,footShowed:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"ajaxOnScrollToBottom",value:function(e,t,a,o){var n=this;!1===this.state.isLoading&&(this.setState({isLoading:!0}),b.a.post("".concat("","/books/search"),{keyword:e,skipNum:t,limitNum:a}).then(function(e){n.setState({isLoading:!1}),o(e.data)}).catch(function(e){console.log(e)}))}},{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.keyword,o=t.theLastNo,n=(t.skipNum,t.limitNum);t.jsonData;window.scrollTo({top:0});var r=function(t){[].slice.call(document.querySelectorAll(".SearchResultViewItem")).forEach(function(a,o){e.io.observe(a),t&&t(a,o)})};this.io=new IntersectionObserver(function(t){t.forEach(function(t,i){t.isIntersecting&&("kska_SearchResultView_bottom"===t.target.className&&(0===o||e.state.noNewData||e.ajaxOnScrollToBottom(a,o,n,function(t){if(0===t.length||"Not Found"===t)return e.state.noNewData=!0;e.setState({jsonData:[].concat(Object(V.a)(e.state.jsonData),Object(V.a)(t)),theLastNo:o+=n,showItem:!0}),r()})),/SearchResultViewCreateItem SearchResultViewHiddenItem/gi.test(t.target.className)&&t.target.classList.replace("SearchResultViewHiddenItem","SearchResultViewShowedItem")),setTimeout(function(){if(e.state.noNewData){var a=document.querySelectorAll(".SearchResultViewItem"),o=a[a.length-1];o&&/SearchResultViewCreateItem SearchResultViewShowedItem/gi.test(o.className)&&"kska_SearchResultView_bottom"===t.target.className&&(t.isIntersecting?e.setState({footShowed:!0}):e.setState({footShowed:!1}))}},1e3)})},{threshold:0}),this.io.observe(document.querySelector(".kska_SearchResultView_bottom")),r()}},{key:"render",value:function(){var e=this.state,t=e.theLastNo,a=(e.showItem,e.jsonData),o=this.props.qrcodeZoomIn;return n.a.createElement("div",{className:"SearchResultView"},a?a.map(function(e,a){return n.a.createElement(x,{key:a,item:e,index:a,theLastNo:t,qrcodeZoomIn:o})}):[],n.a.createElement("div",{className:this.state.isLoading?"LoadingShowed":"LoadingHidden"},n.a.createElement(E.a,{active:!0,inline:"centered"})),n.a.createElement("div",{className:"kska_SearchResultView_bottom"}),n.a.createElement("div",{className:"footer "+(this.state.footShowed?"footShowed":"footHidden")},n.a.createElement("a",{href:"mailto:kska32@gmail.com"},"By kska32@gmail.com")))}}]),t}(o.Component),z=a(89),_=a.n(z),A=(a(363),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).focusHandle=function(e){a.setState({searchBarMovetoTop:!0,supportedBrowser:!1})},a.blurHandle=function(e){""===e.target.value&&0===document.querySelectorAll(".SearchResultViewItem").length&&null===document.querySelector(".notfound")&&a.setState({searchBarMovetoTop:!1,supportedBrowser:!0})},a.inputHandle=function(e){a.setState({inputValue:e.target.value})},a.SuppertedBrowserList=function(e){return n.a.createElement("table",{className:a.state.supportedBrowser?"showtable":"hiddentable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Browser"),n.a.createElement("td",null,"Supported"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Chrome 52+"),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,"Opera 39+"),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,"Firefox"),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,"Safari"),n.a.createElement("td",null,"No")),n.a.createElement("tr",null,n.a.createElement("td",null,"Edge"),n.a.createElement("td",null,"Yes")),n.a.createElement("tr",null,n.a.createElement("td",null,"IE"),n.a.createElement("td",null,"No"))))},a.gototop=function(e){window.scrollTo({top:10,left:10,behavior:"smooth"})},a.qrcodeZoomIn=function(e,t,o){e.stopPropagation(),a.setState({qrcodeZoomInable:!0,bookLinkAddr:t,bookTitle:o})},a.state={searchBarMovetoTop:!1,inputValue:"",keyword:"",jsonData:[],searchResultViewKey:0,isLoading:!1,limitNum:10,supportedBrowser:!0,totopable:!1,qrcodeZoomInable:!1,bookLinkAddr:"",bookTitle:""},window.FontFace&&new FontFace("Niconne","url(".concat(_.a,")")).load().then(function(e){return document.fonts.add(e)}),console.log("by kska32@gmail.com"),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;B().then(function(e){b.a.defaults.headers.common.Authorization="Bearer ".concat(e)});var t=function(e){return document.querySelector(e)};t(".searchBox>.input i").addEventListener("click",function(t){e.state.inputValue.trim().length>0&&e.submitHandle(e.state.inputValue)}),t(".searchBox>.input>.prompt").addEventListener("keyup",function(t){e.state.inputValue.trim().length>0&&13===t.keyCode&&e.submitHandle(e.state.inputValue)}),this.io=new IntersectionObserver(function(t){t.forEach(function(t){if(t.isIntersecting){var a=document.querySelector(".containerBoxMovetoTop");a&&a.classList.remove("topHidden"),e.setState({totopable:!1})}else{var o=document.querySelector(".containerBoxMovetoTop");o&&o.classList.add("topHidden"),e.setState({totopable:!0})}})}),this.io.observe(document.querySelector(".kska_SearchResultView_top"))}},{key:"submitHandle",value:function(e){var t=this;!1===this.state.isLoading&&(this.setState({isLoading:!0}),b.a.post("".concat("","/books/search"),{keyword:e,skipNum:0,limitNum:this.state.limitNum}).then(function(a){document.title="".concat(e," - Your-Ebook"),t.setState({isLoading:!1,keyword:e,jsonData:a.data,searchResultViewKey:Date.now()})}).catch(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchBarMovetoTop,o=t.inputValue,r=t.jsonData,i=t.keyword,c=t.searchResultViewKey,l=t.totopable,s=t.qrcodeZoomInable,d=t.bookLinkAddr,u=t.bookTitle;return n.a.createElement("div",null,n.a.createElement(S.Helmet,null,n.a.createElement("title",null,"Your-Ebook"),n.a.createElement("meta",{name:"description",content:"\u514d\u8d39\u7535\u5b50\u4e66, \u6db5\u76d6\u5386\u53f2\u3001\u653f\u6cbb\u3001\u7ecf\u6d4e\u3001\u5fc3\u7406\u3001\u54f2\u5b66\u3001\u6570\u5b66\u3001\u8ba1\u7b97\u673a\u7b49\u65b9\u9762\u3002"}),n.a.createElement("meta",{name:"keywords",content:"\u7535\u5b50\u4e66,\u514d\u8d39\u7535\u5b50\u4e66"}),n.a.createElement("meta",{property:"og:title",content:"Home"}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:url",content:window.location.href}),n.a.createElement("meta",{property:"og:site_name",content:"Your Ebook"}),n.a.createElement("meta",{property:"og:image",content:window.location.origin+"/og.image.yourebook.png"}),n.a.createElement("meta",{property:"og:description",content:"\u514d\u8d39\u7535\u5b50\u4e66, \u6db5\u76d6\u5386\u53f2\u3001\u653f\u6cbb\u3001\u7ecf\u6d4e\u3001\u5fc3\u7406\u3001\u54f2\u5b66\u3001\u6570\u5b66\u3001\u8ba1\u7b97\u673a\u7b49\u65b9\u9762\u3002"})),n.a.createElement("div",{className:"containerBox "+(a?"containerBoxMovetoTop":"")},n.a.createElement(f.a,{className:"segmentBox"},n.a.createElement(w.a,{src:"./img/ebook.png",size:"small",className:"bookimg",title:"Your Ebook",href:"https://github.com/kska32/ebooks",target:"_blank",alt:"website logo"}),n.a.createElement(k.a,null),n.a.createElement(k.a,null),n.a.createElement(g.a,{fluid:!0,size:"large",className:"searchBox",open:!1,value:o,onSearchChange:this.inputHandle,onFocus:this.focusHandle,onBlur:this.blurHandle,placeholder:"Search...."}))),n.a.createElement("div",{className:"searchResultBox"},n.a.createElement("div",{className:"kska_SearchResultView_top"}),"object"===typeof r?n.a.createElement(M,{jsonData:r,keyword:i,key:c,qrcodeZoomIn:this.qrcodeZoomIn}):n.a.createElement("div",{className:"notfound",style:{fontSize:"30px"}},"The Book Not Found")),n.a.createElement("div",{className:this.state.isLoading?"mainLoadingShowed":"mainLoadingHidden"},n.a.createElement(E.a,{active:!0,inline:"centered",size:"big",content:"Loading"})),r.length>0&&n.a.createElement(v.a,{name:"arrow up",className:"gototop"+(l?" animated slideInUp fast show":" animated bounceOut fast hide"),size:"big",circular:!0,onClick:this.gototop}),s&&n.a.createElement("div",{className:"qrcodeZoomModel",onClick:function(){e.setState({qrcodeZoomInable:!1})}},n.a.createElement(T.a,{className:"qrcode",value:d,includeMargin:!0,size:256,renderAs:"svg",onClick:function(e){e.stopPropagation()}}),n.a.createElement("div",{className:"bookTitle"},u)))}}]),t}(o.Component)),F=a(426),Y=a(428),P=a(197),W=a.n(P),Z=(a(413),"");window.base64url=H.a;var K=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).submitHandle=function(e){void 0!==e&&!1===a.state.isLoading&&(a.setState({isLoading:!0}),b.a.post("".concat(Z,"/books/search"),{keyword:e,skipNum:0,limitNum:1}).then(function(t){document.title="".concat(e," - Your-Ebook"),a.setState({isLoading:!1,keyword:e,jsonData:t.data,searchResultViewKey:Date.now(),downloadBTdisabled:"Not Found"===t.data})}).catch(function(e){console.log(e)}))},a.download=function(e,t){var a=C.a.createWriteStream(t).getWriter();a.write(new Uint8Array(e)),a.close()},a.downloadClick=function(){var e=a.state.jsonData[0],t=e._id,o=(e.size,t),n=e.title,r={responseType:"arraybuffer",onDownloadProgress:function(e){a.setState({progressTotal:e.total,progressValue:e.loaded})}};a.setState({downloadBTdisabled:!0,downloadBTcontent:"DOWNLOADING...."}),b.a.post("".concat(Z,"/books/getbook"),{bookid:o,bookname:n},r).then(function(e){a.setState({downloadBTdisabled:!0,downloadBTcontent:"DOWNLOADED SUCCESSFULLY!"}),a.download(e.data,n)}).catch(function(e){console.log(e)})},a.state={inputValue:"",keyword:"",jsonData:[],searchResultViewKey:0,isLoading:!1,progressTotal:null,progressValue:null,downloadBTdisabled:!0,downloadBTcontent:"DOWNLOAD",bn:"",ebn:""},window.FontFace&&new FontFace("Niconne","url(".concat(_.a,")")).load().then(function(e){return document.fonts.add(e)}),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=W.a.parse(this.props.location.search).ebn;B().then(function(a){if(b.a.defaults.headers.common.Authorization="Bearer ".concat(a),void 0===t)e.setState({jsonData:"Not Found"});else{var o=H.a.decode(t);e.setState({ebn:t,bn:o}),e.submitHandle(o)}})}},{key:"render",value:function(){var e=this.state,t=e.jsonData,a=(e.keyword,e.searchResultViewKey,e.progressTotal),o=e.progressValue,r=e.downloadBTdisabled,i=e.downloadBTcontent,c=(e.ebn,e.bn);return n.a.createElement("div",{className:"onePage"},n.a.createElement(S.Helmet,null,n.a.createElement("title",null,"Your-Ebook"),n.a.createElement("meta",{name:"description",content:"\u514d\u8d39\u7535\u5b50\u4e66, \u6db5\u76d6\u5386\u53f2\u3001\u653f\u6cbb\u3001\u7ecf\u6d4e\u3001\u5fc3\u7406\u3001\u54f2\u5b66\u3001\u6570\u5b66\u3001\u8ba1\u7b97\u673a\u7b49\u65b9\u9762\u3002"}),n.a.createElement("meta",{name:"keywords",content:"\u7535\u5b50\u4e66,\u514d\u8d39\u7535\u5b50\u4e66"}),n.a.createElement("meta",{property:"og:title",content:c+" - Your Ebook"}),n.a.createElement("meta",{property:"og:type",content:"ebook"}),n.a.createElement("meta",{property:"og:url",content:window.location.href}),n.a.createElement("meta",{property:"og:site_name",content:"Your Ebook"}),n.a.createElement("meta",{property:"og:image",content:window.location.origin+"/og.image.yourebook.png"}),n.a.createElement("meta",{property:"og:description",content:"\u514d\u8d39\u7535\u5b50\u4e66 - "+c})),n.a.createElement("div",{className:"onePage"},n.a.createElement("div",{className:"website_name"},n.a.createElement("a",{href:"/"},n.a.createElement("h1",null,"YOUR-EBOOK"))),"object"===typeof t?t.length>0&&n.a.createElement("div",{className:"bookInfo"},n.a.createElement("div",{className:"bookTitle"},t[0].title),n.a.createElement("div",{className:"bookSize"},"\u2264"+Math.ceil(t[0].size/1024/1024)+"MB")):n.a.createElement("div",{className:"booknotfound"},"404 - NOT FOUND"),n.a.createElement(F.a,{className:"downloadProgress",size:"medium",color:"olive",precision:2,total:a,value:o,progress:!0,indicating:!0})),n.a.createElement(Y.a,{className:"downloadBT",size:"large",circular:!0,color:"green",content:i,disabled:r,onClick:this.downloadClick}),n.a.createElement("div",{className:this.state.isLoading?"mainLoadingShowed":"mainLoadingHidden"},n.a.createElement(E.a,{active:!0,inline:"centered",size:"big",content:"Loading"})))}}]),t}(o.Component),U=Object(h.g)(K),J=(a(416),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(m.a,{forceRefresh:!0},n.a.createElement("div",{className:"YourEbookContainer"},n.a.createElement(h.d,null,n.a.createElement(h.b,{exact:!0,path:"/"},n.a.createElement(A,null)),n.a.createElement(h.b,{path:"/share"},n.a.createElement(U,null)),n.a.createElement(h.b,null,n.a.createElement(h.a,{to:"/"})))))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,a){e.exports=a.p+"static/media/Niconne-Regular.1c8d9ad0.ttf"}},[[211,1,2]]]);