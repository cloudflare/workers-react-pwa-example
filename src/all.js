import { handleRequest } from './time'

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
