# Take home assesment

## Instructions

EXERCISE:
Please create a user signup form prototype. Preference is for the code to be done using Reactjs, but you can also feel free to use vanillajs. TST is currently utilizing reactjs v16.8 for development.

The requirements are:

1. create a form with 3 input fields, for the username, password and confirm password respectively
2. persist the state of the input fields entries
3. the password and confirm password input field should valid there entries by comparing both values
4. output to the user when both field match or dont match
5. bonus would be to style the form

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes

I added localStorage for persistence and [material-ui](https://mui.com/material-ui) for a little style, form validation is disabled so that we can check validity manually in the component's `doSignUp` function.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
