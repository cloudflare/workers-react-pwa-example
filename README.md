![Cloudflare GraphQL Gateway](https://www.cloudflare.com/img/products/cloudflare-workers/workers-api-responses.png)

Workers GraphQL Gateway Example
====
Building a GraphQL Gateway allows you to make a single query, have GraphQL and take care of breaking it down to multiple rest calls. This example makes use of [dataloader](https://github.com/facebook/dataloader) to batch and cache the queries so a query with the same key will not be requested twice.

### Dependencies
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/en/docs/install#debian-stable)

### Instructions

- `npm install`
- `npm run build`

To open the Workers preview with the built Worker:

- `npm run preview`

### About
[Cloudflare Workers](http://developers.cloudflare.com/workers/) allow you to write JavaScript which runs on all of Cloudflare's
150+ global data centers.

[GraphQL](https://graphql.org) provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.
