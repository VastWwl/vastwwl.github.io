if(!self.define){let e,i={};const d=(d,s)=>(d=new URL(d+".js",s).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(s,c)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let r={};const f=e=>d(e,a),l={module:{uri:a},exports:r,require:f};i[a]=Promise.all(s.map((e=>l[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2023/08/25/Git笔记/index.html",revision:"108ad531b903c8a3263b59ff684eda7e"},{url:"2023/08/25/hexo笔记/index.html",revision:"8eb3c22e42c46d361ea2e5d3ac6959c6"},{url:"2023/08/26/RabbitMQ面试题/index.html",revision:"c9182a05f65c5fff3c037311cde7e4cb"},{url:"2023/08/26/Redis面试题/index.html",revision:"7c5a689e92411d87386c87d3c043a5f7"},{url:"2023/08/26/微服务面试题/index.html",revision:"ff67886db44abe206e7c01e88659b819"},{url:"2023/08/29/butterfly主题昼夜切换动画/index.html",revision:"3d6b24e0e7f984e6810544d2fc2f4ba3"},{url:"2023/08/29/butterfly主题魔化右键菜单/index.html",revision:"47e6594e02c06285abcf55f898d1628f"},{url:"2023/08/29/hexo图床设置/index.html",revision:"c7be432986591b770add52319ead54cc"},{url:"404.html",revision:"fe569f98d2db7508497ab0c7545a0dc1"},{url:"about/index.html",revision:"a1ee8f29d22de86d3bfa79aff936bc4b"},{url:"archives/2023/08/index.html",revision:"c5c4aaf3d3a98f5085af898447dc8dfb"},{url:"archives/2023/index.html",revision:"e9ab79336d1a819c72536cba3d03f50d"},{url:"archives/index.html",revision:"ce6e6f7c21a6545ee03d66e41a0ae67e"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"categories/hexo学习日记/index.html",revision:"fe64634c8991f000ec4ebc299ee80461"},{url:"categories/index.html",revision:"6b7c97b189e725ccda1ec8c59b0ec72d"},{url:"categories/笔记/index.html",revision:"dcc83879807c1e9a53d139c6d24e08c5"},{url:"categories/面试题/index.html",revision:"153ed201ad19a48d1be257ffdb8c08fe"},{url:"comment/index.html",revision:"6d06d35e69b375c28c36ed029f02a6a2"},{url:"css/background.css",revision:"0b3e7b29e9d32bb08082a931bd557cb5"},{url:"css/index.css",revision:"dd7e76ebd433694a014b05e0a7c68c3c"},{url:"css/rightmenu.css",revision:"a2d371408001b903933951daec220e88"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"52c362548931095f110f5d180c5bcff6"},{url:"img/bg.png",revision:"f8e9ed5166aff2e3ff60ddf633b2a592"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/head.png",revision:"f2dc9087221113db9efbb91daa30c9d8"},{url:"img/loading.gif",revision:"d048608d543b55df997675195552f887"},{url:"img/wechat.jpg",revision:"4690811596cb115a36a769fdc5dfa480"},{url:"index.html",revision:"111939e77dfc927f5848ac7c60f98829"},{url:"js/jquery-3.7.1.js",revision:"12e87d2f3a4c8b347ab13a0764d420a3"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/rightmenu.js",revision:"7b650ca731f2e2e59c15550455befeed"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/sun_moon.js",revision:"4f871e202ff2634f784d4bd519a5bac5"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"links/index.html",revision:"688a67140ba8468518ecc0dbc2068b6d"},{url:"live2d-widget/assets/screenshot-1.png",revision:"30b70e6cd9be9812adcb347536f0da85"},{url:"live2d-widget/assets/screenshot-2.png",revision:"1295844e29a6d6dc3a4aa0db8faa7da7"},{url:"live2d-widget/assets/screenshot-3.png",revision:"4aa1995daf77bc19803648fe6a65c33e"},{url:"live2d-widget/autoload.js",revision:"a1cce74b48eea6cdd15a9567f04065be"},{url:"live2d-widget/demo/demo.html",revision:"141482d5569a35aec669d6b111908c58"},{url:"live2d-widget/demo/login.html",revision:"bf42aaf8b22335b60412591922b85210"},{url:"live2d-widget/live2d.min.js",revision:"ee7efff8ff5d1d4bd4a0ff99affd3ec7"},{url:"live2d-widget/README.en.html",revision:"4b26bfa90839695f7649777a52d398d7"},{url:"live2d-widget/README.html",revision:"9001b3b373608ba45a15bac2520669eb"},{url:"live2d-widget/rollup.config.js",revision:"171b7912f3e5340c9fc61251ef193bd1"},{url:"live2d-widget/src/index.js",revision:"2039f54f54a67a6a6879da0eebb2d393"},{url:"live2d-widget/src/message.js",revision:"5f980402bfc065345253e6ce024dc1de"},{url:"live2d-widget/src/model.js",revision:"b5562a236eeda01308e5a4107e6ec80f"},{url:"live2d-widget/src/tools.js",revision:"fda693610457903a19c3861298fb416a"},{url:"live2d-widget/src/utils.js",revision:"2578501ad87a8d99ceec05d79fe2c64b"},{url:"live2d-widget/src/waifu-tips.js",revision:"e49236cc73dbcfda841588bba50dbfd3"},{url:"live2d-widget/waifu-tips.js",revision:"7ef813587dba0e4bc55c7ccafcaea531"},{url:"live2d-widget/waifu.css",revision:"6c95aef3daffa5cdb0b4429ec2f6076d"},{url:"tags/butterfly/index.html",revision:"c71a8ce5b7ba899f2c19cea1e764320e"},{url:"tags/Git/index.html",revision:"711f113a45dcecfe1591d20bacd4bad2"},{url:"tags/hexo/index.html",revision:"8c146c6dfafae9cf7e36eef95acdfd04"},{url:"tags/index.html",revision:"9cdf1106c2a071d78f7ee2fc73629a17"},{url:"tags/笔记/index.html",revision:"9b8a25bf41548b0ce843b2331c14e940"},{url:"tags/面试题/index.html",revision:"2edd738c0066d07deb230584461a073b"}],{})}));
//# sourceMappingURL=service-worker.js.map
