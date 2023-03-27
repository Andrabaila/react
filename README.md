# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
React. Forms
Task should be based on the previous task.

What should be done:
Create a separate branch for this task from the previous branch task.

Create a separate route for forms.

Form should be implemented using uncontrolled components (with refs)

Add functionality to your app:

Collect information through a form
You can collect any type of information, but form has to include at least those controls:
text input
date input
dropdown/select
checkbox
switcher (radio)
file upload (image)
Example:

text input - name, surname (or both), zip-code;
date input - birthday, date of delivery;
dropdown/select - list of countries, list of states (User can choose only one element from the list)
checkbox - "I consent to my personal data" field, list of extra presents (User can choose several items from the list)
switcher - male/female, "I want to receive notifications about promo, sales, etc." / "I don’t want to receive notifications about promo, sales, etc."
file upload - profile picture

After the Submit button is clicked, all data from the form has to be displayed as Card in the cards list below the form. The confirmation message (with information that the data has been saved) should be displayed, after that form has to be cleared.

The quantity of cards should equal the number of form submissions (if the user filled in and submitted the form five times, then five cards have to be displayed under the form).

Form validation

Validation should happen after the Submit button was clicked. In case when some field was filled in incorrectly, error message should be displayed below the field. The card mustn’t be created until the user fixes all errors. Examples of validation:

mandatory field - check if input contains any information (no text in text input, radio or checkbox isn't selcted, etc);
if text input is used for the name or surname, check if name or surname starts with uppercased letter
Remove erorrs in case they have been fixed on next Submit button click.

Add tests.

All logical parts should be extracted into components. All data must be stored in a local state of the component. For accessing state, or lifecycle events use class components. Components should not make calls to APIs.

The usage of Redux or any other solutions for state management is prohibited.

Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage.

The usage of any libraries with components or form libraries is prohibited.

Questions
You should be using Discord as the main mean of the communication. Also we will try to collect your questions regarding the 2nd Module using special form, which will be provided via the Discord with the 2nd Module start. Questions will be collected in Module 02 section of the same spreadsheet. Please, check answers carefully before posting the question, may be your question has been answered already. We will try to conduct a session for each module providing answers for some questions.

Score
The task will be checked during cross-check and cross-code-review.

Cross-code-review process
Clone the repository you are going to review
Install all the required dependencies
Run linting using special command in package.json file, output should not produce any errors or warnings
Run tests using special command in package.json file, all tests should pass, test coverage should be shown after running all the tests
Review the code. Pay attention at the following "code smells": props drilling; large, complex components aka "god" components; direct DOM manipulation, etc.
When reviewing the code try pay attention at the following principles:

Write code as simply as possible: KISS
Avoid unnecessary repetition: DRY
Delete what is not needed: YAGNI
We also need to mention the Single Responsibility Principle and other SOLID principles Please, check this article for reference Last, but not least - check the presence of the comments. Ideally there shouldn't be any comments at all. Sometimes people just comment code which is not needed. So why not to remove it entirely? In case you will need to restore this code, you can always refer to the git history. And more - comments are lies

Cross-check process
Run app and check that the functionality is working (cross-check)

Points
Student can get 15 points. Cross code review:

Linting can be run and doesn't produce any errors or warnings - 2 points.
Tests can be run and the test coverage is equal or higher than 50% - 3 points. Cross check:
There is an additional route for forms - 1 point.
Form contains 6 mandatory fields (text and date inputs. dropdown, checkbox, radio, file upload) - 2 points.
Validation works on submit - 2 points.
After submitting the form result is provided on a card, confirmation is shown, form is cleared - 3 points.
Each form submission creates a new card - 2 points.
If TypeScript isn't used - 0 points. If there are direct DOM manipulations – 0 points. Smaller penalties will be given for snapshot testing, usage of any, code-smells, errors or warning in console, etc.

Repository requirements
the task should be done in your personal private repository
in the repository create a branch from the previous task branch with the name of the task and work in the created branch
the commits history should reflect the process of app creating Commits requirements [RU]
after finishing development it’s necessary to make Pull Request from app’s branch to main branch Pull Request requirements [RU]
after completing the module, private repository should be exposed for cross-checks and cross-code-reviews for the duration of the next module (one week), after this week will end, repository should be made private again Do not merge Pull Request from the development branch to the main branch
Theory
Forms in React:

https://reactjs.org/docs/forms.html