# Daniel Herzog's portfolio

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md) ![](https://github.com/wikiti/portfolio/actions/workflows/deploy.yml/badge.svg)

Made with :heart: with - [Vue.js](https://vuejs.org/) and [Firebase](https://firebase.google.com)

## Setup

First, install all dependencies with `npm`:

```sh
npm install
```

Then, link it to a Firebase project:

```sh
node_modules/.bin/firebase use [your_project_id]
```

Finally, update the `.env` file with the desired ids and keys.

| Env variable                  | Description                         |
| ----------------------------- | ----------------------------------- |
| VUE_APP_FIREBASE_API_KEY      | Firebase API key                    |
| VUE_APP_FIREBASE_AUTH         | Firebase Auth endpoint              |
| VUE_APP_FIREBASE_DATABASE_URL | Firebase Realtime Database endpoint |
| VUE_APP_FIREBASE_STORAGE_URL  | Firebase storage endpoint           |
| VUE_APP_FIREBASE_PROJECT_ID   | Firebase project id                 |
| VUE_APP_THEME_COLOR           | Theme color for mobile browsers     |
| VUE_APP_HOST                  | Host were this app will be hosted   |

You may now start a development server:

```sh
npm run serve
```

Users can be created under the `/signup` path. The first created user will be the administrator.

## Project estructure

Here's the directory tree for this project:

```
- dist/            # Compiled frontend files
- functions/       # Firebase functions (backend) directory
- public/          # Public assets
- src/             # Frontend source files
  |- assets/       # Assets (stylesheets)
  |- components/   # Reusable Vue components
  |- mixins/       # Reusable Vue mixins
  |- resources/    # HTTP resources (Firebase realtime database)
  |- store/        # Vuex store
  |- utils/        # Utils and other classes
  |- views/        # Vue-router views
  |- App.vue       # Main Vue application
  |- main.js       # Entry point
```

## Development

To you must run both the frontend (vue app) and the backend (firebase emulator):

```sh
# Both backend and frontend
npm run dev

# Backend only
npm run dev:backend

# Frontend only
npm run dev:backend
```

The application should be locally accessible at `http://localhost:5003`.

To build the Vue application on production mode, use:

```sh
npm run build
```

To fix linting errors, use:

```sh
npm run lint
```

## Deploy

To deploy this application, use the `deploy:*` tasks:

```sh
# Deploy all
npm run deploy

# Deploy only the website
npm run deploy:hosting

# Deploy only the Firebase functions
npm run deploy:functions
```

## References

- [My portfolio!](https://danielherzog.es)
- [Vue.js](https://vuejs.org/)
- [Firebase](https://firebase.google.com)
