# Daniel Herzog's portfolio

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nitayneeman/made-with-love/blob/master/LICENSE)

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
| VUE_APP_FIREBASE_BATABASE_URL | Firebase Realtime Database endpoint |
| VUE_APP_FIREBASE_STORAGE_URL  | Firebase storage endpoint           |
| VUE_APP_FIREBASE_PROJECT_ID   | Firebase project id                 |
| VUE_APP_THEME_COLOR           | Theme color for mobile browsers     |

## Project estructure

TODO

## Development

To serve the Vue application locally, use:

```sh
npm run serve 
```

To build the Vue application on production mode, use:

```sh
npm run build 
```

To fix linting errors, use:

```sh
npm run lint 
```

## Deploy

To deploy this application, use:

```sh
npm run deploy
```

You may use Firebase CLI tools to deploy independent services:

```sh
node_modules/.bin/firebase deploy --only-functions
```

## References

- [My portfolio!](https://danielherzog.es)
- [Vue.js](https://vuejs.org/)
- [Firebase](https://firebase.google.com)
