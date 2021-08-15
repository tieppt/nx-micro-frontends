const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "http://localhost:5300/",
    uniqueName: "mailbox"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mailbox",
      library: { type: "var", name: "mailbox" },
      filename: "remoteEntry.js",
      exposes: {
        './MailboxModule': './apps/mailbox/src/app/mailbox/mailbox.module.ts',
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
