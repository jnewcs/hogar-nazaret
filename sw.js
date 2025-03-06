"use strict";var version="20250306052321::",ASSETS_CACHE_NAME=version+"::Assets",ASSETS_CACHE_DATA=["/css/main.css","/uploads/social_media/facebook.png","/uploads/favicon.ico","/uploads/anniversary_25_logo.png"];ASSETS_CACHE_DATA.push("/css/milestones.css"),ASSETS_CACHE_DATA.push("/js/ath_movil.js"),ASSETS_CACHE_DATA.push("/js/cloudcannon.js"),ASSETS_CACHE_DATA.push("/js/dynamic_payment_method_setup.js"),ASSETS_CACHE_DATA.push("/js/give_a_hug_hosted_fields.js"),ASSETS_CACHE_DATA.push("/js/image_modal.js"),ASSETS_CACHE_DATA.push("/js/language_changer.js"),ASSETS_CACHE_DATA.push("/js/main.js"),ASSETS_CACHE_DATA.push("/js/payment_modal.js"),ASSETS_CACHE_DATA.push("/js/paypal_subscriptions_full_page.js"),ASSETS_CACHE_DATA.push("/js/paypal_subscriptions_modal.js"),ASSETS_CACHE_DATA.push("/vendor/css/glide.core.min.css"),ASSETS_CACHE_DATA.push("/vendor/css/glide.theme.min.css"),ASSETS_CACHE_DATA.push("/vendor/js/glide.min.js");var OFFLINE_CACHE_ENTRY_LIMIT=9,OFFLINE_CACHE_NAME="V1::Offline",myCachesNames=[ASSETS_CACHE_NAME,OFFLINE_CACHE_NAME],myCaches=[{name:ASSETS_CACHE_NAME,data:ASSETS_CACHE_DATA},{name:OFFLINE_CACHE_NAME,data:["/","/en/","/en/about/","/es/","/es/quienes-somos/"]}];function onInstall(e){console.info("[Hogar Serviceworker]","Installing!",e),e.waitUntil(Promise.all(myCaches.map(function(t){return caches.open(t.name).then(function(s){return s.addAll(t.data)})})))}function onActivate(e){return console.info("[Hogar Serviceworker]","Activating!",e),e.waitUntil(caches.keys().then(function(t){return Promise.all(t.filter(function(n){return myCachesNames.indexOf(n)===-1}).map(function(n){return caches.delete(n)}))}))}function onFetch(e){e.respondWith(Promise.all(myCaches.map(function(t){return caches.open(t.name).then(function(n){return n.match(e.request)})})).then(function(t){for(var n,s=0;s<t.length;s++)if(n=t[s],n){if(s===0)return n;break}return networkThenCache(e,n)}))}function networkThenCache(e,t){return fetch(e.request).then(function(n){if(!n||n.status!==200||n.type!=="basic"||e.request.method!=="GET")return n;var s=n.clone();return updateAfterFetch(e.request,s),n}).catch(function(){return t})}function updateAfterFetch(e,t){for(var n=["en/posts/","es/noticias/"],s=!1,a=0;a<n.length;a++)if(e.url.indexOf(n[a])!==-1){s=!0;break}e.destination==="document"&&s===!0&&updateCache(OFFLINE_CACHE_NAME,e,t)}function updateCache(e,t,n){return caches.open(e).then(function(s){return s.keys().then(function(a){return a&&a.length>OFFLINE_CACHE_ENTRY_LIMIT?replaceExistingCacheEntry(s,t,n):s.put(t,n)})})}function replaceExistingCacheEntry(e,t,n){return e.keys(t).then(function(s){if(s&&s.length)return e.put(t,n)})}self.addEventListener("install",onInstall),self.addEventListener("activate",onActivate),self.addEventListener("fetch",onFetch);
