# A Nice TypeScript Pre-Screening Test

Recently, I was given a little pre-screening coding challenge that I felt was a good test because:

1. It was difficult enough that I think it would weed out non-experienced TypeScript developers.

and 

2. It was simple enough that an experienced TypeScript developer could complete it without much time/effort.


# Tl;dr

The interesting stuff is in `src/example/`

# Usage

Please use node v12.16.1:
```
nvm use
```

Install deps:
```
npm i
```

Run tests:
```
npm test
```


# The Questions

The code challenge was presented in three individual questions tucked away at the bottom of email.

1.Using Typescript, define an interface for a class that has one public property `valueStream` and one public member function `isNumber`. `valueStream` is an Observable that emits either a string or number. `isNumber` has no arguments and returns an Observable that emits a boolean.

2.  Implement the interface defined in (1). The `valueStream` property should be initialized as a constructor parameter. The Observable returned by `isNumber` should emit true if `valueStream` emits a number, otherwise it should emit false.

3. Write a test case for the implementation in (2).


# How I Attacked It

### Repl.it - Not So Great
First, I started off trying to solve this problem using the conveniently-hosted-for-you [repl.it](https://repl.it/) project. Although you can install dependencies in a _NodeJs_ project on repl.it, they don't support that feature yet for TypeScript projects so I wasn't able to easily bring in libraries I would need like `rxjs` or a unit testing lib.

### Angular Project
I remembered how nice the Angular CLI was for scaffolding out new projects, and I knew this project would conveniently already had typeScript, Observables, karma, and jasmine installed and set up so I figured that would be a quick way to get started. 

Note: I initially scaffolded out a project with a very old version of the angular cli which gave me issues Googling things because the api's have changed so much over the versions. Anyway, if you are doing this yourself be sure to update the angular cli before you scaffold out a project.

To update the angular cli:
```
npm rm @angular/cli -g
npm i @angular/cli -g
```

To scaffold a fresh Angular project:
```
npm new my-project
```

### Solution-ing

To solve this problem I first made a new ts file and just named it `example.ts`. I planned to name the interface `IExample` and the class `Example`.

After getting a bit confused with how the rxjs api had changed, I realized that the `of` method (used to be `Obervable.of`) can be used to create an observable stream that emits simple primitive data like strings and numbers. Cool. 

The "isNumber" being a function that returns an observable is a bit tricky, but by using an arrow function and dropping the curly braces is resulted in [a nice one-liner](). Also, I really like [this way]() of defining the "shape" of the function inputs and outputs in your interfaces.

I've been doing a ton of React & backend NodeJs recently, and I hadn't realized how long it had been since I used `rxjs`. However, I had a bunch of Angular 1 and 2+ experience before this and had typed many a `switchMap` in my old Angular projects. I do believe that "thinking in streams" is a great way to code and build software, although I'm not totally convinced that the Rx is better than other streaming-based apis (for example, Clojure's core.async).

Anyway, the key things to realize here regarding Observables:

- In your interfaces, use the sideways [carot syntax] to show that the Observable emits things of a specific type.

- The "of" function from `rxjs`, being the most simple way to create an observable that emit a thing, is probably the best way to create the observables here.

- When unit testing where you want to call for and use these observable things, remember to [`subscribe` to the observable](), and the data will be there in the argument of the callback.


### Tests

"Whaaaat, you didn't do this test-first TDD style, Jim?!"

Well, I didn't totally start with the tests, but I didn't code the whole thing and then start the tests either. I first built out a class that I thought would compile and be able to be brought in. I then copied the `app.component.spec.ts` file and deleted all the TestBed junk for testing components (which is extremely handy for testing actual Angular components by the way, but completely unnecessary for this pure-TypeScript class). 

I know the instructions only ask for one test, but I couldn't help myself and just had to write tests for both cases (when its told to emit numbers and when its told to emit strings). 

This Angular project is using Jasmine syntax, but it's really the same good old describe's-full-of-its, "call your function with its various inputs and expect it to return the right outputs" style of unit testing that one would do with any other pure function. 

## This Project Proudly Scaffolded With The Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
