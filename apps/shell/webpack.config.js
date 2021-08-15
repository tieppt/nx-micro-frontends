const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "http://localhost:5200/",
    uniqueName: "shell"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        'mailbox': "mailbox@http://localhost:5300/remoteEntry.js",
        'calendar': "calendar@http://localhost:5400/remoteEntry.js",
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
