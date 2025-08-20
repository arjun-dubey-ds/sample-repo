# Customizing Theme
Page Component serves as a container for displaying specific content or functionality within the application. It encapsulates a cohesive set of UI elements and logic related to a particular page or view.

## Introduction 
This guide explains how to customize and theme your Angular application to match your design requirements. By following these steps, you can modify colors, typography, and other stylistic elements to create a cohesive and branded user interface. 

## Prerequisites
Ensure you have the following prerequisites installed: 
- SASS installed ([how to install SASS?](https://sass-lang.com/install/))
- PrimeNG theme cloned [Github Repo](https://github.com/primefaces/primeng-sass-theme) 
- Basic understanding of CSS and Angular components

## Customization Steps
`NOTE: Assuming that you are in primeng-sass-theme repo in your editor.`
### 1. Locate the `theme.scss` File
Navigate to the `theme.scss` file within the cloned PrimeNG SASS theme directory.
`<your-work-directory>\primeng-sass-theme\themes\lara\lara-light\blue\theme.scss`

### 2. Modify Variables
Edit the SASS variables in `theme.scss` to adjust colors, typography, and other styles according to your design requirements.

### 3. Compile SASS
- Open terminal from `blue` folder
- Run the Sass command to compile `theme.scss` into CSS:
```bash
sass --update theme.scss:<your-work-directory>/pioneers-pioneers-ideate-ui>/src/theme/theme.css
```