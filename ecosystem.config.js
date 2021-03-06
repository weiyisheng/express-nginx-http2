module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "express-http2",
      script    : "./server.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "root",
      host : "37.139.22.91",
      ref  : "origin/master",
      repo : "git@github.com:weiyisheng/express-nginx-http2.git",
      path : "/var/www/express-http2",
      "post-deploy" : "yarn install && pm2 startOrRestart ecosystem.config.js --env production"
    },
    // dev : {
    //   user : "node",
    //   host : "212.83.163.1",
    //   ref  : "origin/master",
    //   repo : "git@github.com:repo.git",
    //   path : "/var/www/development",
    //   "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env dev",
    //   env  : {
    //     NODE_ENV: "dev"
    //   }
    // }
  }
}
