# ReactStarter
This is a starter app for ReactJS with some boilerplate code :p

## App Bundle
- Webpack 3 ready (With development && production configs)
- Bundle analyzer report will be generated upon build in `dist` folder (to visualize what is taking up bundle size)

## Redux
- Redux integration (You can add actions, reducers straigt away!)
- Redux Saga Integration (You can add new saga straight away!)
- Redux Persist (Just add new reducer to the persist folder & it will automatically rehydrate that reducer upon starting your app)
- Redux Logger (See your action and states for every action dispatched!)
- Redux Form (So you can have your input fields connected to redux!)

## Misc
- ESLint rules applied (extends airbnb)
- SCSS Ready (You can add new .scss files and import into app.scss)
- FontAwesome CDN is used (index.html)
- Folder alias for frequently used folder (eg. actions, reducers, sagas, utils) So you can import without using the relative path
```
import Actions from 'actions';
```
instead of
```
import Actions from '../../actions';
```

## Style & Components
- Basic styles in `styles` folder
- Basic components:
```
Button.js // customized button component
Loading.js // Loading overlay
TextInput.js // Basic TextInput component connected to Redux with Validation
App.js // A simple login screen to demo whole redux flow (action > reducer > saga > persist)
```

## Installed Packages
- Package Dependencies:
```
  "prop-types": "^15.6.0",
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "react-redux": "^5.0.6",
  "redux": "^3.7.2",
  "redux-form": "^7.2.0",
  "redux-logger": "^3.0.6",
  "redux-persist": "^5.4.0",
  "redux-saga": "^0.16.0"
```

## Demo
![Demo](http://g.recordit.co/SLtipWCC41.gif)

## Clone
```
git clone https://github.com/kyaroru/ReactStarter
cd ReactStarter
npm install
```

## Start
```
npm start (development - browser will open with webpack-dev-server)
npm run build (production - files will be generated in `dist` folder)
```

---