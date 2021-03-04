# To Not Do List App

This example repo was built to support a guide published on Sanity's site. It uses [Svelte](https://svelte.dev/) for the front end, along with help from [TypeScript](https://www.typescriptlang.org/), [Sanity](https://www.sanity.io/) for the back end, and [Vercel](https://vercel.com/) to help with the API layer.

There is a demo [deployed to Vercel](https://svelte-sanity-tonotdo.vercel.app/). (This is a friendly demo. Please be kind and use lightly.)

This was meant to be more of an example, but you're welcome to clone it and play around with it. Below you will find instructions on working with the various parts of the project.

## Getting Started

There are multiple projects in here, which makes this a monorepo! Because of that, I'm using [PNPM](https://pnpm.js.org/) to make managing dependencies a little easier. There are [several ways to install PNPM](https://pnpm.js.org/en/installation).

Once you're ready to go, you can install all your dependencies for the project with the following command:

    $ pnpm install

### Sanity (Data Source)

If you're playing around with your own version of this, you should begin by creating your data source using Sanity. For more information, see the README file in the `sanity` directory.

### Vercel (API)

Vercel powers the back end of the site. It comes with a super awesome [`dev` CLI tool](https://vercel.com/docs/cli#commands/dev). To start the API dev server, you can run the following command from the root of the project.

    $ npm run api:dev

If you haven't wired this up to a Vercel project yet, that's where you'll start. The Vercel CLI will help walk you through that process.

You will also need to set the following environment variables after configuring your Sanity data source:

```bash
export SANITY_API_KEY="..."
export SANITY_PROJECT_ID="..."
```

### Svelte

To run the front end of the project, you can either run `svelte:dev` from the root directory or `dev` from the `svelte` directory.

    # From the root directory
    $ npm run svelte:dev

    # From the svelte directory
    $ npm run dev

Note that your app won't work without a data source and an API.

Also note that even if you're running the API in dev mode, you should also run Svelte in dev mode or your front-end changes won't get picked up.

## Contributions & Feedback

Since this was built to serve a single tutorial guide, I'm unlikely to pay close attention to it. If you have a specific question, I'd suggest beginning with [a conversation on Twitter](https://twitter.com/messages/23583938-23583938). If that link doesn't work, I'm [@seancdavis29](https://twitter.com/seancdavis29).
