const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "http://localhost:5400/",
    uniqueName: "calendar"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "calendar",
      library: { type: "var", name: "calendar" },
      filename: "remoteEntry.js",
      exposes: {
        './CalendarModule': './apps/calendar/src/app/calendar/calendar.module.ts',
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};
