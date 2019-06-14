/**
 *  Copyright (c) 2018, Cloudflare, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

import React from "react";
import ReactDOMServer from "react-dom/server";

class HelloMessage extends React.Component {
  render() {
    return (
      <div className="App-header">
        <div className="App-header-title">
          <svg className="Workers-Logo" viewBox="0 0 64 64" fill="#61dafb">
            <path d="M52.8 48L55.3 48 55.3 51.6C55.3 53.6 53.7 55.2 51.7 55.2L11.9 55.2C9.8 55.2 8.2 53.6 8.2 51.6L8.2 12.3C8.2 10.3 9.8 8.7 11.9 8.7L15.1 8.7 15.1 11.2 11.9 11.2C11.2 11.2 10.7 11.7 10.7 12.3L10.7 51.6C10.7 52.2 11.2 52.7 11.9 52.7L51.7 52.7C52.3 52.7 52.8 52.2 52.8 51.6L52.8 48ZM52.8 12.3L52.8 26.7 55.3 26.7 55.3 12.3C55.3 10.3 53.7 8.7 51.7 8.7L35.4 8.7 35.4 11.2 51.7 11.2C52.3 11.2 52.8 11.7 52.8 12.3ZM30.9 12C32 12 32.9 11.1 32.9 10 32.9 8.9 32 8 30.9 8 29.8 8 28.9 8.9 28.9 10 28.9 11.1 29.8 12 30.9 12ZM25.3 12C26.4 12 27.3 11.1 27.3 10 27.3 8.9 26.4 8 25.3 8 24.2 8 23.3 8.9 23.3 10 23.3 11.1 24.2 12 25.3 12ZM19.7 12C20.8 12 21.7 11.1 21.7 10 21.7 8.9 20.8 8 19.7 8 18.6 8 17.7 8.9 17.7 10 17.7 11.1 18.6 12 19.7 12ZM48.3 42.9C48.3 43.5 48.5 44 48.9 44.4 49.4 44.8 50 44.9 50.7 44.9L50.7 46.3C49.6 46.4 48.5 46.1 47.7 45.4 46.9 44.9 46.5 44 46.6 43L46.6 40C46.6 39.4 46.4 38.8 46 38.5 45.4 38.1 44.8 38 44.1 38L44.1 36.6C44.8 36.7 45.4 36.5 46 36.1 46.4 35.8 46.6 35.2 46.6 34.7L46.6 31.6C46.6 30.7 47 29.8 47.7 29.2 48.5 28.5 49.6 28.2 50.6 28.3L50.6 29.7C49.1 29.7 48.3 30.4 48.3 31.7L48.3 34.7C48.3 35.3 48.1 36 47.7 36.5 47.3 36.9 46.7 37.2 46 37.3L46 37.4C46.7 37.4 47.3 37.7 47.7 38.2 48.1 38.7 48.3 39.3 48.3 40L48.3 42.9ZM62 37.2C61.3 37.2 60.7 36.9 60.3 36.4 59.9 35.9 59.7 35.3 59.7 34.7L59.7 31.7C59.7 30.4 59 29.7 57.4 29.7L57.4 28.2C58.5 28.2 59.5 28.5 60.4 29.1 61.1 29.7 61.5 30.7 61.4 31.6L61.4 34.7C61.4 35.2 61.6 35.8 62 36.1 62.6 36.5 63.2 36.7 63.9 36.6L63.9 38C63.3 38 62.6 38.2 62 38.5 61.6 38.9 61.3 39.4 61.4 40L61.4 43.1C61.5 44 61.1 44.9 60.4 45.5 59.5 46.1 58.5 46.4 57.4 46.4L57.4 44.9C58 44.9 58.6 44.8 59.1 44.4 59.5 44 59.8 43.5 59.7 42.9L59.7 39.9C59.7 39.3 59.9 38.7 60.3 38.2 60.7 37.7 61.3 37.4 62 37.3L62 37.2Z" />
          </svg>
          {"+"}
          <svg
            viewBox="0 0 841.9 595.3"
            enableBackground="new 0 0 841.9 595.3"
            xmlSpace="preserve"
            className="React-Logo"
          >
            <g>
              <path
                fill="#61DAFB"
                d="M666.3,296.5c0-32.5-40.7-63.3-103.1-82.4c14.4-63.6,8-114.2-20.2-130.4c-6.5-3.8-14.1-5.6-22.4-5.6v22.3
		c4.6,0,8.3,0.9,11.4,2.6c13.6,7.8,19.5,37.5,14.9,75.7c-1.1,9.4-2.9,19.3-5.1,29.4c-19.6-4.8-41-8.5-63.5-10.9
		c-13.5-18.5-27.5-35.3-41.6-50c32.6-30.3,63.2-46.9,84-46.9l0-22.3c0,0,0,0,0,0c-27.5,0-63.5,19.6-99.9,53.6
		c-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7,0,51.4,16.5,84,46.6c-14,14.7-28,31.4-41.3,49.9c-22.6,2.4-44,6.1-63.6,11
		c-2.3-10-4-19.7-5.2-29c-4.7-38.2,1.1-67.9,14.6-75.8c3-1.8,6.9-2.6,11.5-2.6l0-22.3c0,0,0,0,0,0c-8.4,0-16,1.8-22.6,5.6
		c-28.1,16.2-34.4,66.7-19.9,130.1c-62.2,19.2-102.7,49.9-102.7,82.3c0,32.5,40.7,63.3,103.1,82.4c-14.4,63.6-8,114.2,20.2,130.4
		c6.5,3.8,14.1,5.6,22.5,5.6c27.5,0,63.5-19.6,99.9-53.6c36.4,33.8,72.4,53.2,99.9,53.2c8.4,0,16-1.8,22.6-5.6
		c28.1-16.2,34.4-66.7,19.9-130.1C625.8,359.7,666.3,328.9,666.3,296.5z M536.1,229.8c-3.7,12.9-8.3,26.2-13.5,39.5
		c-4.1-8-8.4-16-13.1-24c-4.6-8-9.5-15.8-14.4-23.4C509.3,224,523,226.6,536.1,229.8z M490.3,336.3c-7.8,13.5-15.8,26.3-24.1,38.2
		c-14.9,1.3-30,2-45.2,2c-15.1,0-30.2-0.7-45-1.9c-8.3-11.9-16.4-24.6-24.2-38c-7.6-13.1-14.5-26.4-20.8-39.8
		c6.2-13.4,13.2-26.8,20.7-39.9c7.8-13.5,15.8-26.3,24.1-38.2c14.9-1.3,30-2,45.2-2c15.1,0,30.2,0.7,45,1.9
		c8.3,11.9,16.4,24.6,24.2,38c7.6,13.1,14.5,26.4,20.8,39.8C504.7,309.8,497.8,323.2,490.3,336.3z M522.6,323.3
		c5.4,13.4,10,26.8,13.8,39.8c-13.1,3.2-26.9,5.9-41.2,8c4.9-7.7,9.8-15.6,14.4-23.7C514.2,339.4,518.5,331.3,522.6,323.3z
		 M421.2,430c-9.3-9.6-18.6-20.3-27.8-32c9,0.4,18.2,0.7,27.5,0.7c9.4,0,18.7-0.2,27.8-0.7C439.7,409.7,430.4,420.4,421.2,430z
		 M346.8,371.1c-14.2-2.1-27.9-4.7-41-7.9c3.7-12.9,8.3-26.2,13.5-39.5c4.1,8,8.4,16,13.1,24C337.1,355.7,341.9,363.5,346.8,371.1z
		 M420.7,163c9.3,9.6,18.6,20.3,27.8,32c-9-0.4-18.2-0.7-27.5-0.7c-9.4,0-18.7,0.2-27.8,0.7C402.2,183.3,411.5,172.6,420.7,163z
		 M346.7,221.9c-4.9,7.7-9.8,15.6-14.4,23.7c-4.6,8-8.9,16-13,24c-5.4-13.4-10-26.8-13.8-39.8C318.6,226.7,332.4,224,346.7,221.9z
		 M256.2,347.1c-35.4-15.1-58.3-34.9-58.3-50.6c0-15.7,22.9-35.6,58.3-50.6c8.6-3.7,18-7,27.7-10.1c5.7,19.6,13.2,40,22.5,60.9
		c-9.2,20.8-16.6,41.1-22.2,60.6C274.3,354.2,264.9,350.8,256.2,347.1z M310,490c-13.6-7.8-19.5-37.5-14.9-75.7
		c1.1-9.4,2.9-19.3,5.1-29.4c19.6,4.8,41,8.5,63.5,10.9c13.5,18.5,27.5,35.3,41.6,50c-32.6,30.3-63.2,46.9-84,46.9
		C316.8,492.6,313,491.7,310,490z M547.2,413.8c4.7,38.2-1.1,67.9-14.6,75.8c-3,1.8-6.9,2.6-11.5,2.6c-20.7,0-51.4-16.5-84-46.6
		c14-14.7,28-31.4,41.3-49.9c22.6-2.4,44-6.1,63.6-11C544.3,394.8,546.1,404.5,547.2,413.8z M585.7,347.1c-8.6,3.7-18,7-27.7,10.1
		c-5.7-19.6-13.2-40-22.5-60.9c9.2-20.8,16.6-41.1,22.2-60.6c9.9,3.1,19.3,6.5,28.1,10.2c35.4,15.1,58.3,34.9,58.3,50.6
		C644,312.2,621.1,332.1,585.7,347.1z"
              />
              <polygon
                fill="#61DAFB"
                points="320.8,78.4 320.8,78.4 320.8,78.4 	"
              />
              <circle fill="#61DAFB" cx="420.9" cy="296.5" r="45.7" />
              <polygon
                fill="#61DAFB"
                points="520.5,78.1 520.5,78.1 520.5,78.1 	"
              />
            </g>
          </svg>
        </div>
        <div>
          <p>
            Edit <code>src/index.js</code> and save, <code>yarn preview</code>{" "}
            to reload.
          </p>
          <a
            className="App-link"
            href="https://developers.cloudflare.com/workers/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn about Cloudflare Workers
          </a>
        </div>
      </div>
    );
  }
}
const header = `<!DOCTYPE html>
<html lang="en">
  <title>Cloudflare Workers React PWA Example</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  #app {
  text-align: center;
}
body {
  margin: 0px;
}
.Workers-Logo {
  margin-right:20px;
  height: 100px;
 }

.React-Logo {
  height: 100px;
 }

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
.App-header-title {
  font-size: xx-large;
  display: flex;
  align-items: center;
  font-weight: 600;
}
.App-header img {
    height: 100px;
}
.App-link {
  color: #61dafb;
}
  </style>
  <body>
    <div id="app">`;

const footer = `</div>
<script src="/worker.js"></script>
</body>
</html>`;

let routes = {
  "/": <HelloMessage />
};

async function handleRequest(event) {
  const u = new URL(event.request.url);
  if (u.pathname in routes) {
    let rendered = ReactDOMServer.renderToString(routes[u.pathname]);
    return new Response(header + rendered + footer, {
      headers: {
        "Content-Type": "text/html"
      }
    });
  }
  let cache = await caches.open("sevki-react");
  let response = await cache.match(event.request);

  if (!response) {
    response = await fetch(event.request);
    event.waitUntil(cache.put(event.request, response.clone()));
  }

  return response;
}

self.addEventListener("fetch", event => {
  event.respondWith(handleRequest(event));
});

if (typeof navigator !== "undefined") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      const app = document.querySelector("#app");
      ReactDOM.hydrate(routes[location.pathname], app);
      navigator.serviceWorker.register("/worker.js").then(
        function(registration) {
          // Registration was successful
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        function(err) {
          // registration failed :(
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    });
  }
}
