# Documentation

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

4. Create the pages as a component in a different folder named "Pages".

5. Create a new module in app folder witth the name of app-routing-module.ts

6. Create a service to share json data to all over the app.
`ng g s services/infoPagina --spec=false`

7. Call the new service in the app.component.ts. Add a constructor and call the service. 

8. To be able to read a json file you need to add a import in the app.module.ts file. 
`import { HttpClientModule } from '@angular/common/http';` 
and add the HttpClientModule in the Ng decorator, imports section.

9. You can create a interface to determine the type of the data that the json will have. Use the extension Json to ts to convert the json data. Use the following command: `control + alt + p`

# Running the proyect

1. CD to the proyect folder.
2. run the server with the following command: `ng serve -o`



# Usefull information 
1. Restore last commit: `git checkout -- .`
2. See changes `git s`
3. You can use this url to check if the Json code is valid: http://json.parser.online.fr/
4. You can add this css to animate the transition between pages: https://daneden.github.io/animate.css/

` `

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
