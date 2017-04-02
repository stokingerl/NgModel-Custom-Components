# NgModelCustomComponents

This is a working example of how to make a custom component in Angular 2.0+ (currently 4.0.0) while using the [(ngModel)] two-way binding attribute.

This was originally explained in detail in [this article.](http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel)

This project takes it a step further and splits all of the boilerplate code into an abstract class that can be easily extended to allow you to use [(ngModel)] in any custom component you make.

This example shows the basis for a shared custom forms module displaying:

1. A custom input tag with hover text (intended to be shared across an app)
2. two way binding in this custom input tag using [(ngModel)]
3. updated text in the parent component from the custom input tag.


## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
