export default {
  async fetch(request, env, ctx) {
    return new Response("Hello! Cloudflare Worker is working!");
  },

  async scheduled(controller, env, ctx) {
    console.log("Hello! Cloudflare Cron is running");
  },
};