import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import {clientsClaim} from 'workbox-core';
import {imageCache} from 'workbox-recipes';
import {NavigationRoute, registerRoute} from 'workbox-routing';

clientsClaim();

console.log('service-worker custom');
precacheAndRoute(self.__WB_MANIFEST);
precacheAndRoute([
    {url:'https://maps.googleapis.com/maps/api/mapsjs/gen_204', revision: null}
])

imageCache();

registerRoute(
    new NavigationRoute(createHandlerBoundToURL('./index.html'))
)