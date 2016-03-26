// My Notes

--------------------------
  APPLICATION'S FEATURE
--------------------------
- List all companies
- Filter by name company
- View all details about company:
    - Name, foundation year, description, offices, addresses, cities, countries, phones, e-mails
- Add companies
- Remove all offices 
- Print information about a company 
- Contact's links of the company 


--------------------------
  APPLICATION STRUCTURE
--------------------------
 
+ app
    + assets
        + css
        + icons
    + bower_components
    + dist
        + views
    + src
        + controllers
        + config
        + services
        + models
    index.html  
+ typings



----------------------------
  DEPENDECIES APPLICATION 
----------------------------

- Angular
- Angular-Material
- Angular-Material-Icons 
- Angular-Sanitize 

- Typescript 
- Typings
- Live-Server 




-----------------------------------
  TO INSTALL 
-----------------------------------
## NODE
www.nodejs.org


## BOWER
> npm install -g bower
> bower init
> mkdir app
> cat .bowerrc
    {
        "directory": "app/bower_components"
    }
> bower install angular#1.5.2 angular-material angular-material-icons --save


## TYPESCRIPT
> npm install -g typescript 
> tsc --version
> tsc.cmd --version

> npm install -g typings 
> typings install angular --ambient --save
> typings install angular-material --ambient --save


## TYPESCRIPT -WATCH
> cd app/src
> cat tsconfig.json
    {
        "compilerOptions": {
            "target": "es5",
            "sourceMap": true,
            "outDir": "../dist/"
        }
    }
> tsc.cmd -w


## LIVE SERVER
> npm install -g live-server 
> cd app
> live-server