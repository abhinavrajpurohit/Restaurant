# RestaurantsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
ng new restaurants-app --routing=true --style=scss // Generate Restaurant App
ng g m shared // Generate Shared Module
ng g m core // Generate Core Module
ng g m feature/restaurant --routing=true // Generate Restaurant Module
ng g component feature/restaurant/restaurants-list --style=scss // Generate Restaurant Component
ng g component core/header --style=scss // Generate Header Component
ng generate service core/services/http // Generate HTTP Service for API call.
ng g pipe shared/pipe/ellipsis // Generate Ellipsis Pipe.
ng g class shared/common/mockapiurl/mockapiurl // Generate Constant API URL file
ng g interface core/interfaces/restaurant // Generate Interface
npm install @angular/google-maps // Install Angular Google component
npm install --save @ng-bootstrap/ng-bootstrap // Install Bootstrap 
npm install --save jquery // jQuery for Bootstrap

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
