/**
 *  Copyright (c) 2018, Cloudflare, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */
import handleGraphQLRequest from "./graphql";

export async function handleRequest(event) {
  let u = new URL(event.request.url);
  switch (u.pathname) {
    case "/graphql":
      return await handleGraphQLRequest(event);
    case "/":
      return await fetch("https://storage.googleapis.com/cfgraphql/index.html");
    case "/graphiql/cfgql.css":
      return await fetch("https://storage.googleapis.com/cfgraphql/cfgql.css");
    case "/graphiql/cfgql.js":
      return await fetch("https://storage.googleapis.com/cfgraphql/cfgql.js");
    default:
      return new Response(JSON.stringify("OK"));
  }
}
