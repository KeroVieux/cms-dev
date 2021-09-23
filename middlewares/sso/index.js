module.exports = strapi => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        console.log('sso middleware', Date.now())

        await next();
      });
    },
  };
};
