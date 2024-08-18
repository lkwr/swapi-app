# SWAPI App

A simple app to explore the Star Wars API.

## Demo

A demo can be found at [https://swapi-617.pages.dev/](https://swapi-617.pages.dev/).

## Technologies used

- React (via Vite)
- TanStack Router
- TanStack Query
- Tailwind CSS (with NextUI)
- Cloudflare Pages (for hosting)

## API

The app uses the [SWAPI API](https://swapi.dev/) to fetch data.

To bypass the CORS restrictions, the app uses a Cloudflare Worker to proxy the requests to the API. (see [\_worker.ts](./_worker.ts))

## JavaScript Runtime / Package Manager

The project is built with [Bun](https://bun.sh/) which is a fast and modern JavaScript runtime and a drop-in replacement for Node.js.

This project also works with NodeJS, but Bun was my preferred choice.
