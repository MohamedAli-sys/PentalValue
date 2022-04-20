# PentaValue

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.

##  Development Solution
- This project has a challenge for front end development using Angular.

## Project Describe
- Simple dashboard to manage Advertisment ( Create - Update - Edit - Delete ).
- Using firestore verifications ( Phone Number )

## Tools used in building the project
- Angular v13
- Firestore v9
- Angular Material
- Ngxs library ( Angular State Management )
- SweetAlert

## Code Describe & Tools
- Guards: to manage user authorization 
- Firestore: to manage user authentication using phone number methods & Google recaptcha
- Ngxs Library: state management => reduces boilerplate by using modern TypeScript features such as classes and decorators.
- Angular Material: for designing user interface ( have a good features and user experiences )
- Form Group: for control forms 
- SweetAlert: I have build a small service to inject with functions easier in clean code
  * example: boxMessage('Created Ads Done!')
- Lazy Loading: helps keep initial bundle sizes smaller, which in turn helps decrease load times.

## Notice
- main route didn't have a Guard
- Ads Routes you should have a token ( which will be at localStorage )

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
