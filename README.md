# 📖 Coding Allies Site
This is the codebase for Coding Allies Site. The website for Coding Allies is created for both community and future partners. It represents the non-profit and serves as a first introduction for outside world.

## 💻 Installation guide

- Create a github account
- Set up ssh auth following the [github documentation](https://docs.github.com/en/github-ae@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

On your local machine:
- Create or pick a folder were the copy of this project will live
- Clone the project by typing the command in command line of your choice: 
```
git clone git@github.com:coding-allies/coding-allies-site.git
``` 
- Navigate to the GitHub repo for the project `cd coding-allies-site`
- Check your set up:
```
git status
git branch
git remote -v
```

## 🔏 Contribution guide

You can contribute in multiple ways from suggesting changes to writing issues, filing a new feature requests and opening Pull Requests with code changes.

We follow feature branch strategy. The official version of the code is in `main` branch. In order to start development, pull the latest code as your baseline while on main branch `git branch` (should see main highlighted), then make sure you are up to date `git pull origin`.

Create a new branch with a meaningful name for your feature `git checkout -b feature-calendar-page` 

Once you are satisfied with the work done, add and then commit your changes locally `git add .` (will add all the changes), `git commit -m "Meaningful commit message goes here"`. Check the status to make sure you are ready to push `git status` and then push the updated version of your feature branch up `git push origin feature-calendar-page`.

When ready, navigate to the github project page and open a Pull Request for the review.

Thank you for being part of our team 💐!

## 👩🏻‍💻 Runbook

In the project directory, you can run:

### `npm install`

Installs all npm packages needed for the application to work.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## 📚 Tech stack documentation links

[React](https://reactjs.org/docs/getting-started.html)\
[Typescript](https://www.typescriptlang.org/docs/)\
[MaterialUI](https://next.material-ui.com/components/grid/#main-content)