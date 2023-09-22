# Quiz App

-This is a simple quiz application built with React. It allows users to answer a series of questions, tracks their progress, and displays the score.

## Features

- Multiple-choice questions.
- Progress bar to show question progress.
- Responsive design for different screen sizes.
- Bold specific words in questions.
- After submitting answer it shows score, correct answer, remaining question.

## Installation

### Clone the repository to your local machine:

   ```
   bash
   git clone "....."
   ```

### Navigate to the project directory:
  ```
  cd developer_assignment
  ```
### Install the dependencies:
 
 ```
 npm install
 ```
### Usage

 - To start the application, run the following command:
```
npm start
```
- The application will be accessible at http://localhost:3000 in your web browser.

## Implementation Details

### Components

- **QuestionContainer**: This component manages the overall quiz logic. It tracks the current question, score, and handles navigation between questions.

- **Question**: Displays a single question along with answer options. It includes a progress bar that updates with each question.

- **AnswerOptions**: Displays the answer options for each question. Users can select one answer, and it will be locked after submission.

### Navigation

- **Navigation**: The Navigation folder contains components related to navigation within the quiz. These components allow users to move between questions and track their progress.

  - **Navigation.js**: This component displays navigation buttons for moving between questions. It includes both "Next" and "Previous" buttons for easy navigation.

  - **ProgressBar.js**: The ProgressBar component visually represents the progress of the quiz. It displays a progress bar that fills as users answer questions.

  - **Navigation.css**: This CSS file contains styles specific to the navigation components, ensuring a consistent and visually appealing user experience.

### Styling

- CSS styles have been provided for responsive design and animations.
- Specific words in questions can be made bold using HTML `<strong>` tags.

### Question Data

- Questions and answer options are provided as JSON data in the `data.json` file.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- This project was built using React, a JavaScript library for building user interfaces.
- Thank you to the open-source community for providing resources and inspiration.

## Author

- Md Talib Ansari













# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
