<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Woofer - A Tinder like app for Dogs</h3>

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---


## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

Our app is designed for dogs who want to find love or more, using a mobile app like their owners !

## 🏁 Getting Started <a name = "getting_started"></a>
````bash
git clone https://github.com/WooferApp/Woofer

````
### Prerequisites

We use Expo to create and run our app, to install Expo on your device check the expo doc [here](https://expo.dev/)

### Installing

In the directory where you cloned the project :

```
cd Woofer
npm install
npm run ios
```

You will need a .env file with the API url to test login :

```
API_URL=https://tindernimal.herokuapp.com/auth/login
```
## How to log in :

on the Login screen, click on Login and enter:

email : john@gmail.com<br/>
password : changeme


## ⛏️ Built Using <a name = "built_using"></a>

- [Expo](https://expo.dev/) - App development Framework

- [NestJs](https://nestjs.com/) - API - Express.js Framework

## ✍️ Authors <a name = "authors"></a>
All the team members worked on the mockup.
Then each member worked on a different screen integration and logic implementation.

- [@Lise23](https://github.com/Lise23) - matching page and token persistence
- [@Antonin-dev](https://github.com/Antonin-dev) - profile page and token persistence
- [@vbaumes](https://github.com/vbaumes) - login page, form validation
- [@mathildegrimal](https://github.com/mathildegrimal) - message page, redux/toolkit and store
See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors) who participated in this project.
