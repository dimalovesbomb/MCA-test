# MCA podcast app

---

### Run the app locally:
1. git clone 
2. npm install
3. npm start

### Build and serve the app:
1. npm run build
2. npm run serve-build (if no **serve** is installed, run **npm i --global serve** and try again)

---

## Not resolved issues:
1. It is impossible to do the HTML5 player due to redirects/limitations from third-party API. I added a button-link to external resource (which redirects) to be able to listen to podcast.
2. Client-side routing of a build relies on `historyApiFallback` in webpack.config. There's no problem with routing when running the app in dev-mode, however reload of non-index page in prod-mode (local) leads to 404 error. Please use browser's _back_ and _forward_ buttons.

---

P.S. API that is described in requirements is outdated.
