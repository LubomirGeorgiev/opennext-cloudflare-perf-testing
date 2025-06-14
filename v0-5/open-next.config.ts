import { defineCloudflareConfig } from "@opennextjs/cloudflare";

import memoryQueue from "@opennextjs/cloudflare/memory-queue";

export default defineCloudflareConfig({
  // Uncomment to enable R2 cache,
  // It should be imported as:
  // `import r2IncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache";`
  // See https://opennext.js.org/cloudflare/caching for more details
  // incrementalCache: r2IncrementalCache,
  queue: memoryQueue,
});
