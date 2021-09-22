'use strict';

/**
 * `sso` policy.
 */

module.exports = async (ctx, next) => {
  // 查询单点登录的授权信息，再决定要不要next。
  console.log('In sso policy.', ctx.req.headers.cookie);

  await next();
};
