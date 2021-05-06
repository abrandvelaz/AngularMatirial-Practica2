# Practica2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


    Este aplicativo se ha realizado para la universidad de Las Palmas de Gran Canaria(ULPGC).
    Para esta app he utilizado node.js (v14.15.5) y angularcli(v11.2.4)

Todo el código generado se encuentra en la carpeta src/app/,dentro de esta carpeta nos encontraremos con 6 carpetas. Cada carpeta hace referencia a una barra lateral y a los componentes de la barra lateral(botones,divider,home,services,tabla). 

Cada una de ellas hace uso de AngularMaterials (lo instalamos con ng add @angular/material), pero una de ellas hace uso de servicios que es la llamada services, en la que he realizado una calculadora con operaciones simples(suma,resta,multiplicación y división) haciendo uso de servicios para ello.

Dentro de la carpeta services nos encontraremos con un .ts que hace las llamadas a un servicio externo que se encuentra en la carpeta shared (service.service.ts) que se encuentra     dentro de services. service.service.ts es el encargado de realizar las operaciones y service.component.ts hace las llamadas a los métodos de service.service.ts para que realice este los cálculos.
