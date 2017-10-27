"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/blockquotes.html","069fbf3d7181f3452e763bdf91b7f7db"],["/browser-support.html","82c6037d2015408353950bd6570713ef"],["/buttons.html","1fedd914d5abdea833b8c3e91050fa13"],["/codes.html","588b811b23e96af1f663329ac81b53ef"],["/forms.html","89d7dd782abcbcbcfc0f6e275cf6d3b2"],["/getting-started.html","855f0b9355f28e71efcdb07b88192f16"],["/grids.html","6ac127d22a04874d4cb714f8bbd1804e"],["/images/android-chrome-192x192.png","b623b00d820f08f94c60248f8e69330e"],["/images/android-chrome-512x512.png","4da437ca92fe71a75f937bdb81be3722"],["/images/apple-touch-icon.png","5098b31a97403f9789b832c4fc657731"],["/images/favicon-16x16.png","fbe56c6a694da9888366b58d29e5f2cf"],["/images/favicon-32x32.png","ab2bda1f5b42cd2432ea7fde52c82a05"],["/images/icon.png","a2f3dee9129774da529f6934842c6aee"],["/images/logo.svg","ab59c9fcc1e1fb86e77644dcbffc8a23"],["/images/mstile-150x150.png","2d02d21a75e58220c60d64bfab66b91d"],["/images/thumbnail.png","bda9068fe9d3fc41347fd2de65bc8007"],["/index.html","f718c5b261fcbf546aa2bf062bdfd03c"],["/layout.html","462daf25534fce84a1edf26ce5e3c72a"],["/lib/bundle.css","16e671d6b27e8e520ea13e83270e6da3"],["/lists.html","06e76723b1635373d5445dda64efd58f"],["/manifest.json","9a36a5147c81b3d12ba906c919a98133"],["/scripts/main.js","a64a39f952136c7fba15d566143535b0"],["/styles/main.css","63a68ba570d432009994daf977950492"],["/tables.html","0a8287c9725a1d512fe93de372e18cfd"],["/templates/blockquotes.html","0d91d2617f5d378b321a325b8342c990"],["/templates/browser-support.html","06a959123b949d659a40661c19148d17"],["/templates/buttons.html","c26cd560357270289c3a3126e5d0685c"],["/templates/carbonads.html","67600ce992fcf9513e4f73062949a54e"],["/templates/codes.html","0fc46895d753c8d56736cdcb6fb09b41"],["/templates/forms.html","e823c75b2390393325c1b1dba93624c1"],["/templates/getting-started.html","008a16352b4a3f69e1de48fbd9226775"],["/templates/grids.html","5b6b8fc12397f0c3195111d8d4a8c607"],["/templates/home.html","05c5cad490150ef2588445ca8eafd9d0"],["/templates/lists.html","6d21530f17e28756b29e7154cb9c3116"],["/templates/tables.html","a18623cbe880148cfd678ef22d913c02"],["/templates/tips.html","88398b60b7b32f9d5175b9c66f0a6f4a"],["/templates/typography.html","43ca7088b332cf933b98a85cc35fd149"],["/templates/utilities.html","26338f77c1d8b31145a69a8ba99d6136"],["/templates/why.html","b8a17a64c61cf817734314d2e9045f18"],["/tips.html","6f199c168f5db71ba44868af52154f43"],["/typography.html","526d40e718a57c62f1db718f44dc7b18"],["/utilities.html","1584f98a2d3ee6c00565a4d0a5943389"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});