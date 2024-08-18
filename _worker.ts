interface Env {
  ASSETS: Fetcher;
}

// The default cache object from cloudflare workers
const cache = caches.default;

/**
 * Forwards a request to SWAPI and returns the response.
 *
 * @param request The request to forward.
 * @returns The response from SWAPI.
 */
const forwardSwapi = async (request: Request): Promise<Response> => {
  // Check if the request is already cached
  const cachedResponse = await cache.match(request);

  // If the request is already cached, return it
  if (cachedResponse) return cachedResponse;

  // Rewrite the request url to use the SWAPI endpoint
  const url = new URL(request.url);
  url.protocol = "https:";
  url.hostname = "swapi.dev";
  url.port = "";

  // Forward the request to SWAPI
  const response = await fetch(url);

  // Create a new response with the response body
  const newResponse = new Response(response.body, response);

  // Set some headers for CORS
  newResponse.headers.set("Access-Control-Allow-Origin", "*");
  newResponse.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");

  // Cache the response
  cache.put(request, newResponse.clone());

  return newResponse;
};

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);

    // Forward all requests to SWAPI when the path starts with `/api/`
    if (url.pathname.startsWith("/api/")) {
      return forwardSwapi(request);
    }

    // Otherwise, serve the assets
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
