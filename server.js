import { createRequestHandler } from "@remix-run/cloudflare";
import { logDevReady } from "@remix-run/cloudflare";
import * as build from "@remix-run/dev/server-build";

const remix = createRequestHandler(build, process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
  logDevReady(build);
}

export default {
  async fetch(request, env, ctx) {
    return remix(request, env, ctx);
  },
}; 