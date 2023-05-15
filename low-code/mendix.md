# Mendix

---

+ `Domain model`: Where all the apps data is stored
  + abstracted relational database based on standard Unified Modeling Language (UML), a visual language that helps software developers visualize and construct new systems. orientation based on object oriented principles
  + each box is an entity
    + populated in a table
    + can link entities together
    + can easily add things as needed and won't break the db

+ `Team server`: Mendix hosted server that contains all of your apps
  + provides versioning
  + to develop app, you can use web model or desktop modeler, and you can sync both
  + every mendix app has a online repository that has model and resources
  + when you develop, you do so locally, and commit as usual
  + `Benefits`:
    + easily share content with team members
    + versioning
    + work offline with a working copy

+ `Microwflows`:
  + `Exclusive Split (yellow diamond shape)`: components and microflows that you can use to check certain values
    + can check things like if a course is booked
  + `Widget events`: events that are connected to input widgets and can create microflows
    + On change
    + On enter
    + on leave
  + `Object event handlers`

+ `Data Validation and Consistency`:
  + `Validation rules`: conditions that need to be met before storing data in the database
    + can exist in on the domain model, microflows on on pages in the app domain
  + `Domain model validations`:
    + support from required to unique to regExp
    + applicable throughout the app
  + `Validations using Microflows`:
    + supply custom error messages
    + performed when the microflow is invoked
  + `Associations`:
    + relate objects to one another
    + multiplicity to ensure data consistency throughout the application

+ `Mobile apps`:
  + You can add mobile components such as the swipe widget
  + pull to refresh widget
  + `Test app`:
    + can see what it will look like on mobile
      + select run dropdown
      + run local
      + click view you want
      + Or, download the mendix app and sync the development to your phone
