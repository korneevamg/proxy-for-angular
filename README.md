# How to proxy HTTP requests in Angular

This is a simple Angular project to demonstrate proxy configuration using build-in webpack's dev server. In this project we configure a proxy to send requests to [https://bitcoincharts.com/v1/markets.json](https://bitcoincharts.com/v1/markets.json) from localhost.

## Quick Start & Documentation

This project was generated using [Nx](https://nx.dev).

[Nx Documentation](https://nx.dev/angular)

[Angular Documentation](https://angular.io)

### Proxy documentation

- [Angular Guide: Building & Serving](https://angular.io/guide/build),
- [webpack's devServer.proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy),
- [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)

Run `npm i` to install all necessary dependencies

Run `nx serve` or `ng serve proxy-for-angular` to start the app

## Development server

Run `ng serve proxy-for-angular` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
