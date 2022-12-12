# Restaurant Menu: Cozinha Massari
#### Video Demo:  [YouTube Link](https://www.youtube.com/watch?v=DHGZxlXq_XI&ab_channel=MatheusMassari)
#### Description:

Website [link](https://menumassari.netlify.app/).

## Infos

The idea of this project was to provide a solution for a specific restaurant during the COVID-19 pandemic, social distancing measures required solutions that avoid contact with materials that are widely handled by customers, such as the physical menu of restaurants.

In this way, the solution was thought of using web technologies in conjunction with the QR code so that customers could access the restaurant menu without having to handle the physical menu, just pointing the camera of their smartphone at the QR code, thus being redirected to a web application that would show all the restaurant options information in an interactive way.

This project was carried out using ReactJS, and NextJS, both javascript frameworks widely used in the web industry. NextJS was only used to manage the application's routes, not exploring features such as server-side rendering and the front-end API since the application is static.

The project design was carried out using Chakra-UI, which is a simple and modular library, easily providing the necessary blocks to build applications in React.

For hosting, the Netlify platform was used in conjunction with Github, working as follows: Netlify has access to the specific Github repository of the current project, and as soon as there are changes in the master branch, it uses web-hooks to build and perform the deploy of the project.

## Features

### Components

#### Home Component (src/pages/components/Home.js)

The application is composed of a main route ('/) that renders a component called Home, this component has links to other routes that represent categories such as main menu, wine list, desserts, drinks, etc.

The main component (Home), which is located in 'src/pages/components/Home.js' also has logic to check which day of the week the user is accessing the page. If the day of the week is Friday, it will render different links, according to what is offered in the house on Friday. For the rest of the week the menu is always the same.

#### DrawerNav Component and MotionNav (src/pages/components/DrawerNav.js and MotionNav.js)

These components are of an aesthetic and functional nature, representing a button in the shape of a cauldron, it appears on the specific pages of the restaurant's categories, when clicked (MotionNav) it causes a side tab to appear on the left, containing links to the remaining categories and also a button to go back to the home page.

To perform the animations, the framer-motion library was used.

### Pages

In NextJs, routes and pages are created based on the structure of the project, and the developer does not need to use code to configure routes. In this way, at the address 'src/pages/etc...' all files except for _app.js and _document.js represent routes in URIs identical to the name of the files in question.

The default structure of the page is composed by the Header and Footer enveloping the components of the page. A component from the Chakra-UI library called Accordion was used together with javascript to iterate over each element of the menu data (/public/data-cardapio.js) and render an Accordion-Item, which is an animated component that when clicked renders the image of the item in question, as well as additional information about the item.

### Additional Information

#### Helpers (./helpers/home-links-js)

The helpers directory located at the root of the project brings a list of links in array format containing objects with relevant information such as href of category pages, link title, days for rendering logic and color to be used in the link text.

#### Public (./public)

The public directory in the NextJs framework is used to store static files to be served by the application. In the case of this project, this directory was used as a local static database, which serves the menu information (/public/dados-cardapio.js) and the images of certain menu items to be rendered in the routes of the specific pages of each category.