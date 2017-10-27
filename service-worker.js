"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/blockquotes.html","049b244a51b5e6a596808a8bff25ebbe"],["/browser-support.html","6898eaedc3488875a3cc862553e88a84"],["/buttons.html","8d8a9472c93b3acbd962924e36b828a3"],["/codes.html","cd9148fd59149c4c6541dc41b680d281"],["/forms.html","d3173526c422ad4ee0b4c02a30b0949a"],["/getting-started.html","6c778dfc5f0a477afb470cc8090e85af"],["/grids.html","a549ac689abc667612cb4befafccdfd0"],["/images/android-chrome-192x192.png","b623b00d820f08f94c60248f8e69330e"],["/images/android-chrome-512x512.png","4da437ca92fe71a75f937bdb81be3722"],["/images/apple-touch-icon.png","5098b31a97403f9789b832c4fc657731"],["/images/favicon-16x16.png","fbe56c6a694da9888366b58d29e5f2cf"],["/images/favicon-32x32.png","ab2bda1f5b42cd2432ea7fde52c82a05"],["/images/icon.png","a2f3dee9129774da529f6934842c6aee"],["/images/logo.svg","ab59c9fcc1e1fb86e77644dcbffc8a23"],["/images/mstile-150x150.png","2d02d21a75e58220c60d64bfab66b91d"],["/images/thumbnail.png","bda9068fe9d3fc41347fd2de65bc8007"],["/index.html","339db5f5d9bcab3309879ceba38cd761"],["/layout.html","5691fe64994637c2ae886480cc114e27"],["/lib/bundle.css","16e671d6b27e8e520ea13e83270e6da3"],["/lists.html","87dd0abd8c75d0aedddd47fdd7b3bcea"],["/manifest.json","9a36a5147c81b3d12ba906c919a98133"],["/scripts/main.js","a64a39f952136c7fba15d566143535b0"],["/styles/main.css","63a68ba570d432009994daf977950492"],["/tables.html","692abe576a7b0100708827d77559ff4e"],["/templates/blockquotes.html","0d91d2617f5d378b321a325b8342c990"],["/templates/browser-support.html","06a959123b949d659a40661c19148d17"],["/templates/buttons.html","c26cd560357270289c3a3126e5d0685c"],["/templates/carbonads.html","67600ce992fcf9513e4f73062949a54e"],["/templates/codes.html","0fc46895d753c8d56736cdcb6fb09b41"],["/templates/forms.html","e823c75b2390393325c1b1dba93624c1"],["/templates/getting-started.html","a6f7ceb23905addc9c538897f57e4823"],["/templates/grids.html","5b6b8fc12397f0c3195111d8d4a8c607"],["/templates/home.html","05c5cad490150ef2588445ca8eafd9d0"],["/templates/lists.html","6d21530f17e28756b29e7154cb9c3116"],["/templates/tables.html","a18623cbe880148cfd678ef22d913c02"],["/templates/tips.html","4ce9b824a2e7da3598baaa00d4a2f9d2"],["/templates/typography.html","045a5aeb26dd8f304d546fe4f5cf95ab"],["/templates/utilities.html","26338f77c1d8b31145a69a8ba99d6136"],["/templates/why.html","93450df08a556547b5deff93f7771834"],["/tips.html","5c3851b84f809c54c7280b62ea07f81b"],["/typography.html","33b74b6880aa77b418327f4be8198666"],["/utilities.html","065936987296b406b7fcae259cde8158"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});