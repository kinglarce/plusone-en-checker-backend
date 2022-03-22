# PlusOne English Word Validator - Backend

## Overview

This repository returns an API for validating and getting the invalid english words.

## Demo

Demo URL: [https://plusone-en-checker-frontend.vercel.app/](https://plusone-en-checker-frontend.vercel.app/)

## Getting started

To set things up locally,

- Clone this repo
  - `git clone https://github.com/kinglarce/plusone-en-checker-backend.git`
- Install the required dependencies
  - `npm install`
- Start the development server
  - `npm run dev`
- Visit URL
  - `http://localhost:8000/`

### API

- Validate english words and returns invalid words.
  - [POST check](http://localhost:8000/check)
    - Request: `{ "sentence": "Do you likee cats adn dogs?" }`
    - Response: `["likee", "adn"]`

## Application Structure

- `src/index.ts` - This file is the entry point to our application and defines our application configuration.
- `src/routes/` - This folder contains the route definitions for our API.
- `src/controllers/` - This folder contains the controllers for our routes.
- `src/services/` - This folder contains the logic for validating the words.

<br />