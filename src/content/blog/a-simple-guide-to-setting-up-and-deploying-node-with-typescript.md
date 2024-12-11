---
title: A Simple Guide to Set up and Deploy Node with TypeScript
description: "Set up & deploy TypeScript Node.js app: Learn how to enable TypeScript, run locally 3 ways, & deploy the app with this guide."
date: 2023-03-08
tags: [typescript, node.js]
---

TypeScript is a language developed by Microsoft that includes all JavaScript features with added type syntax checks. It can catch errors before runtime, improving code quality and scalability, making it great for large applications.

Let's learn how to set up and deploy the TS node app!

## Setup

The initial setup:

```bash
mkdir ts-node
cd ts-node

pnpm init
pnpm install -D typescript
npx tsx --init
```

After running `npx tsc --init`, you should see `tsconfig.json` in the root folder. It has tons of "fluffy" comments, but focus on the setting below.

```json title="tsconfig.json"
{
	"compilerOptions": {
		/* Visit https://aka.ms/tsconfig to read more about this file */
		"target": "es2016",
		"module": "commonjs",
		"resolveJsonModule": true,
		"outDir": "./build" /* could set dist instead if you prefer */,
		"rootDir": "./src",
		"esModuleInterop": true,
		"forceConsistentCasingInFileNames": true,
		"strict": true,
		"skipLibCheck": true
	}
}
```

Let's install packages:

```bash
pnpm install express

# with TS, you will need to install @types/xxx for packages you have
pnpm install -D @types/node @types/express
```

```ts title="./src/index.ts"
import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 3001;

app.get("/", (req: Request, res: Response) => {
	res.send("Hello from TS Node");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
```

You could run a simple server with the code above. If you feel adventurous, I have written a simple timestamp app that converts today's date to `Unix` and `UTC` format with MVC. Feel free to copy the code from [here](https://github.com/victoriacheng15/ts-node-demo) or clone the repo.

## How to run locally?

There are a couple of ways to run the app:

- concurrently
- nodemon
- ts-node-dev

### concurrently

```bash
pnpm install -D concurrently
```

There is a `--watch` flag that you can use with node version `19`. You can install the version using [nvm](https://github.com/nvm-sh/nvm). Otherwise, you can install `nodemon` and `ts-node` as alternatives.

```json title="package.json"
  "scripts": {
    "start:build": "npx tsc -w",
    "start:run": "node --watch build/index.js",
    // "start:run": "nodemon build/index.js",
    "start": "concurrently pnpm:start:*",
  },
```

### nodemon

```bash
pnpm install -D nodemon ts-node
```

```json title="nodemon.json"
{
	"watch": ["src"],
	"ext": ".ts,.js",
	"ignore": [],
	"exec": "npx ts-node src/index.ts"
}
```

```json title="package.json"
  "scripts": {
    "dev": "npx nodemon",
  },
```

### ts-node-dev

```bash
pnpm install -D ts-node-dev
```

```json title="package.json"
  "scripts": {
    "dev": "ts-node-dev --respawn src/index.ts",
  },
```

Overall, I prefer the `concurrently` method since it installs fewer packages and utilizes the `--watch` flag to run the local server.

## Deployment

With the `concurently` method, the script should look like the one below.

```json title="package.json"
"scripts": {
  "start:build": "npx tsc -w",
  "start:run": "node --watch build/index.js",
  "start": "concurrently pnpm:start:*",
  "clean": "npx tsc --build --clean",
  "build": "pnpm clean && pnpm tsc",
  "server": "node ./build/index.js"
},
```

The image below is from [render](https://render.com/). In the setting tab, some inputs need to be filled in based on the project. If you use another provider, the setting should be similar.

Let's focus on these commands, **build** and **start**!

<img src="https://user-images.githubusercontent.com/35031228/223264104-7d5c8fd1-019a-47ef-813f-c76dda1555d4.png" alt="render deployment setting with build and start commands">

**Build command**

This is to clear existing JS files inside of the build folder and then compile TS to JS file.

```bash
pnpm install --frozen-lockfile && pnpm build
```

**Start command**

This is to start the server.

```bash
node build/index.js
# or
pnpm server
```

## Resources

- [Basic Express Server Setup with TypeScript - concurrently method](https://www.appliz.fr/blog/express-typescript)
- [How to Setup a TypeScript + Node.js Project - nodemon method](https://khalilstemmler.com/blogs/typescript/node-starter-project/)
- [concurrently](https://www.npmjs.com/package/concurrently)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev)

## Thank you!

Thank you for your time and for reading this!
