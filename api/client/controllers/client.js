'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const body = ctx.request.body
    body.age = 28
    const entry = await strapi.query('client').create(body)
    entry.customization = true
    return entry
  },
  async find(ctx) {
    const entities = await strapi.query('client').find(ctx.request.query)

    return entities.map((entity) => {
      entity.customization = true
      return entity
    })
  },
};
