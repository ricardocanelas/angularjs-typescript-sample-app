## AngularJS-TypeScript-Sample-App

This is a simple example using AngularJS (1.5.2) and TypeScript (1.8.9).
You can see online: http//www.ricardocanelas.com/lab/angularjs-typescript-sample-app

![alt tag](https://raw.githubusercontent.com/ricardocanelas/angularjs-typescript-sample-app/master/screen.png)

## Quick Start

First you need install **Node** and **Live-Server**.
```
$ cd app
$ live-server
```

## Requirements
Node, Bower, TypeScript, Typing and Live-Server.

## Installation

- Install Node
	- on OSX install [home brew](http://brew.sh/) and type `brew install node`
	- on Windows install [download](https://nodejs.org/en/download/)

- Install Bower
	- Type `npm install -g bower`

- Install TypeScript
	- Type `npm install -g typescript`

- Install Typings
	- Type `npm install -g typings`

- Install Live-Server
	- Type `npm install -g live-server`


#### Install packages of the Bower.

This command will install: Angular, Angular-Material and others packages, you can see more details in *bower.json* file.

```
$ bower install
```

#### Install TypeScript definitions.

```
$ typings install angular --ambient --save
$ typings install angular-material --ambient --save
```


## Usage

This command will watching TypeScript files. You can config in *tsconfig.json* file
```
$ cd app/src
$ tsc -w
```

This command will create a new server, but what change inside this folder will refresh the browser.
```
$ cd app
$ live-server
```


## License

MIT © [Ricardo Canelas](http://ricardocanelas.com)
