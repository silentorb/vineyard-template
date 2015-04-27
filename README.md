# Vineyard Template #

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
  - [Schema and Database](#schema-and-database)
  - [Writing Code](#writing-code)
  - [Adding Bulbs](#adding-bulbs)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduction ##

This is a template Vineyard project to help you start making web services.

NOTE: To allow people to get up and running without knowing Fortress, this template comes with a wide-open fortress configuration!

## Installation ##

1. Install Node.js: https://nodejs.org/download/

2. From the command line:

    ```
    git clone https://github.com/silentorb/vineyard-template.git
    cd vineyard-template
    npm install
    cp config/local-sample.json config/local.json
    ```
    
3. Create a MySQL database.
4. Edit config/local.json and change the database connection settings to point at your new database.
5. From the command line run `node scripts/db`

## Usage ##

Once installation is complete you can start the Vineyard server from the command line with:

```
node run
```

By default it is set to listen on port 3000 for HTTP and port 8086 for Web Sockets.

## Development ##

### Schema and Database ###

You can add new trellises to config/schema/site.json.
After making changes to the schema, you can run `node scripts/db` to recreate and repopulate the database.

### Writing Code ###

Vineyard is written with TypeScript.  You can use JavaScript instead of TypeScript but aspects of Vineyard will be
easier with TypeScript.

If you use TypeScript, your .ts files will need to be compiled to .js files.  Most IDEs include file watchers
for automatically compiling TypeScript files.  Otherwise, you can run Grunt from the commandline.  Simply run `grunt`
from the vineyard-template folder and Grunt will run in the background, compiling your TypeScript files any time they
change.  You can tweak the Grunt settings in Gruntfile.js.

To extend the database population code, you can add code to the populate() function in test/Fixture.ts.

This template comes with a template Vineyard bulb (module) called custom.  The main file for this is lib/custom.ts.
You can add Vineyard hooks in its grow() function.

### Adding Bulbs ###

Bulbs can be downloaded through npm.  To use them in your project they must be referenced in your server.json file.
All you need is at least an empty entry in the server.json bulbs dictionary and the bulb will be loaded and
automatically hook into the rest of Vineyard.

For example, to add songbird (which by default is already included in this templates project's package.json and
downloaded when you run `npm install`) add the following to the bulbs section of your server.json:

    "songbird": {}

The actual name of the songbird module is "vineyard-songbird", but Vineyard automatically prepends "vineyard-" if
it cannot find a module.  So in the above case Vineyard would first try to load "songbird", be unable to find it,
and then try to load "vineyard-songbird".  This mechanism is just to make the bulb names in the server.json
file cleaner.
