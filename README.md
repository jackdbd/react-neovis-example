# React Neovis Example

[![Dependencies](https://david-dm.org/jackdbd/react-neovis-example.svg)](https://david-dm.org/jackdbd/react-neovis-example)

![A PNG file that shows an example of this project](https://github.com/jackdbd/react-neovis-example/blob/master/screenshots/example.png "Example")

## What is this thing?

This repo is just a simple example on how to show a [neovis.js](https://github.com/neo4j-contrib/neovis.js/) graph visualization in a React application.

## How do I use it?

You don't need to install Neo4j for this project. You just need 3 things:

1. create a Neo4j Sandbox on [neo4j.com](https://neo4j.com/sandbox/),
2. install the project dependencies,
3. connect to your Neo4j Sandbox.

### 1 - Create a Neo4j Sandbox

A Neo4j Sandbox is essentially a Docker container with Neo4j installed, and a graph dataset that you can play with. There is nothing to install. It runs on the cloud. A Sandbox will expire in 3 days, but if you want you can extend your project for an additional 7 days (it can be done only once).

Create a Neo4j Sanbox [here](https://neo4j.com/sandbox/).

![A PNG file that shows the creation of a Neo4j Sandbox with Russian Twitter Trolls dataset](https://github.com/jackdbd/react-neovis-example/blob/master/screenshots/create-sandbox.png "Neo4j Sandbox with Russian Twitter Trolls dataset")

### 2 - Install project dependencies

```sh
git clone git@github.com:jackdbd/react-neovis-example.git
cd react-neovis-example
yarn install  # or simply, yarn
```

### 3 - Connect to your Neo4j Sandbox

Find the `Connection details` for your Neo4j Sandbox:

![A PNG file that shows your Neo4j Sandbox credentials](https://github.com/jackdbd/react-neovis-example/blob/master/screenshots/sandbox-credentials.png "Neo4j Sandbox credentials")

Then open the [App component](https://github.com/jackdbd/react-neovis-example/blob/master/src/components/App.js) and replace `YOUR-BOLT-URI-HERE` and `YOUR-NEO4J-PASSWORD-HERE` with your Neo4j Sanbox connection details.

Now you are all set, and you can run the app with:

```sh
yarn start
```

## Credits

Inspired by William Lyon's [Graph Visualization With Neo4j Using Neovis.js](https://medium.com/neo4j/graph-visualization-with-neo4j-using-neovis-js-a2ecaaa7c379).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
