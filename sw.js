'use strict';

var version = "20251210054012::";
var ASSETS_CACHE_NAME = version + '::Assets';
var ASSETS_CACHE_DATA = [
  '/css/main.css',
  '/uploads/social_media/facebook.png',
  '/uploads/favicon.ico',
  '/uploads/anniversary_25_logo.png'
];

// Dynamically cache JS & CSS assets from site

  

  

  
    ASSETS_CACHE_DATA.push("/css/milestones.css")
  

  
    ASSETS_CACHE_DATA.push("/js/ath_movil.js")
  

  
    ASSETS_CACHE_DATA.push("/js/cloudcannon.js")
  

  
    ASSETS_CACHE_DATA.push("/js/dynamic_payment_method_setup.js")
  

  
    ASSETS_CACHE_DATA.push("/js/give_a_hug_hosted_fields.js")
  

  
    ASSETS_CACHE_DATA.push("/js/image_modal.js")
  

  
    ASSETS_CACHE_DATA.push("/js/language_changer.js")
  

  
    ASSETS_CACHE_DATA.push("/js/main.js")
  

  
    ASSETS_CACHE_DATA.push("/js/payment_modal.js")
  

  
    ASSETS_CACHE_DATA.push("/js/paypal_subscriptions_full_page.js")
  

  
    ASSETS_CACHE_DATA.push("/js/paypal_subscriptions_modal.js")
  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  
    ASSETS_CACHE_DATA.push("/vendor/css/glide.core.min.css")
  

  
    ASSETS_CACHE_DATA.push("/vendor/css/glide.theme.min.css")
  

  
    ASSETS_CACHE_DATA.push("/vendor/js/glide.min.js")
  


var OFFLINE_CACHE_ENTRY_LIMIT = 9;
var OFFLINE_CACHE_NAME = 'V1::Offline';

// NOTE: Order of caches matters
var myCachesNames = [ ASSETS_CACHE_NAME, OFFLINE_CACHE_NAME ];
var myCaches = [
  {
    name: ASSETS_CACHE_NAME,
    data: ASSETS_CACHE_DATA
  },
  {
    name: OFFLINE_CACHE_NAME,
    data: [
      '/',
      '/en/',
      '/en/about/',
      '/es/',
      '/es/quienes-somos/'
    ]
  }
];

function onInstall(event) {
  console.info('[Hogar Serviceworker]', 'Installing!', event);

  event.waitUntil(Promise.all(
    myCaches.map(function (myCache) {
      return caches.open(myCache.name).then(function prefill(cache) {
        return cache.addAll(myCache.data);
      })
    })
  ));
}

function onActivate(event) {
  console.info('[Hogar Serviceworker]', 'Activating!', event);

  return event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
          return myCachesNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
}

function onFetch(event) {
  // NOTE: using respondWith inside onFetch will immediately
  // return when a result it found
  event.respondWith(Promise.all(
    myCaches.map(function (myCache) {
      return caches.open(myCache.name).then(function(cacheToCheck) {
        return cacheToCheck.match(event.request);
      });
    })
  ).then(function (promiseData) {
    var cacheResult;
    for (var i = 0; i < promiseData.length; i++) {
      cacheResult = promiseData[i];
      if (!!cacheResult) {
        // The assets in ASSETS_CACHE_NAME (first index) should
        // try the cache first then fallback to the network
        if (i === 0) {
          return cacheResult;
        }

        break;
      }
    }

    return networkThenCache(event, cacheResult);
  }));
}

function networkThenCache(event, cacheResult) {
  // Fallback is network then cache
  return fetch(event.request).then(function(response) {
      // Check if we received a valid response
      if (!response || response.status !== 200 || response.type !== 'basic') {
        return response;
      }
      if (event.request.method !== 'GET') {
        return response;
      }

      // IMPORTANT: Clone the response. A response is a stream
      // and because we want the browser to consume the response
      // as well as the cache consuming the response, we need
      // to clone it so we have two streams.
      var responseToCache = response.clone();
      updateAfterFetch(event.request, responseToCache);

      return response;
    }
  ).catch(function() {
    return cacheResult;
  });
}

function updateAfterFetch(request, responseToCache) {
  var routesToCache = ['en/posts/', 'es/noticias/'];
  var shouldCatch = false;
  for (var i = 0; i < routesToCache.length; i++) {
    if (request.url.indexOf(routesToCache[i]) !== -1) {
      shouldCatch = true;
      break;
    }
  }

  if (request.destination === 'document' && shouldCatch === true) {
    updateCache(OFFLINE_CACHE_NAME, request, responseToCache);
  }
}

function updateCache(cacheName, request, responseToCache) {
  return caches.open(cacheName).then(function (cache) {
    return cache.keys().then(function(keys) {
      if (keys && keys.length > OFFLINE_CACHE_ENTRY_LIMIT) {
        return replaceExistingCacheEntry(cache, request, responseToCache);
      }

      return cache.put(request, responseToCache);
    });
  });
}

function replaceExistingCacheEntry(cache, request, responseToCache) {
  return cache.keys(request).then(function(keys) {
    if (keys && keys.length) {
      // An existing entry was found so we should replace it
      return cache.put(request, responseToCache);
    }

    return;
  });
}

self.addEventListener('install', onInstall);
self.addEventListener('activate', onActivate);
self.addEventListener('fetch', onFetch);
