# Documentacion

In order to start this proyect. I follow this steps:

1. Install & Configure
- Install angular with this comman: `npm install -g @angular/cli`
- Create a new angular proyect: `ng new nombreapp`
- Run the server with: `ng serve -o`

- Start git with: `git init`

2. Create angular component
- Run the command: `ng g c shared/header --spec=false`
g = generate
c = component
shared/header = specify the place of the component
--spec=false = doesn't create files to test this component.
This will create a folder named "Header" with the css, html and typescript files. Also will modify the app.module.ts and will reference this new component. 

3. Call the component
- In the app.component.html call the new Header component with the selector:
`<app-header></app-header>`



# Usefull commands 
Restore last commit: `git checkout -- .`
See shanges `git s`

` `


To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
