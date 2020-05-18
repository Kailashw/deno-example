import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
const HOST = "0.0.0.0";
const PORT = 8080;

const s = serve({ hostname: HOST, port: PORT });

console.log(`Server running on ${HOST}:${PORT}`)

for await (const req of s) {
  req.respond({ body: "Hello There, \nDeno can be used to serve TS Files" });
}


