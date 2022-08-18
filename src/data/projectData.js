import portfolioSite from "../assets/img/portfolio.png";
import calculator from "../assets/img/calculator.png";
import memoryGame from "../assets/img/memory-game.png";
import shoppingCart from "../assets/img/shopping-cart.png";
import ticTacToe from "../assets/img/tic-tac-toe.png";
import weatherApp from "../assets/img/weather-app.png";

export const projectData = [
  {
    name: "Shopping Cart",
    id: "1",
    alt: "A device showing screenshot of shopping cart website",
    img: shoppingCart,
    description:
      "This is an Ecommerce website built with ReactJS. You can browse the available products and give order with fully functional cart. And also increase and decrease the amount of products you want to buy.",
    techStack: "React, Redux, React Router, Tailwind CSS",
    live: "https://sneharatnani.github.io/shopping-cart/",
    code: "https://github.com/sneharatnani/shopping-cart",
  },
  {
    name: "Weather App",
    id: "2",
    alt: "A device showing screenshot of weather app",
    img: weatherApp,
    description:
      "A weather app which shows the current weather of a city. It uses OpenWeathermap API to fetch the weather data. This app can also show the weather based on your current location using Geolocation API. It changes the background according to different weather conditions.",
    techStack:
      "JavaScript, Webpack, HTML, CSS, OpenWeathermap API, Geolocation API",
    live: "https://sneharatnani.github.io/weather-app/",
    code: "https://github.com/sneharatnani/weather-app",
  },
  {
    name: "Memory Game",
    id: "3",
    alt: "A device showing screenshot of memory game",
    img: memoryGame,
    description:
      "As the name explains itself, it is a game to test your memory. Click each emoji only once and if clicked twice the game is over. The emojis will shuffle after every click. It will show the best and current score achieved by you.",
    techStack: "React, Tailwind CSS",
    live: "https://sneharatnani.github.io/memory-game/",
    code: "https://github.com/sneharatnani/memory-game",
  },
  {
    name: "Portfolio Site",
    id: "4",
    alt: "A device showing screenshot of sneha ratnani's website",
    img: portfolioSite,
    description:
      "Crafted with React and Tailwind CSS. It is available in light as well as in dark theme. Take a look around.",
    techStack: "React, React Router, Tailwind CSS",
    live: "sneharatnani.com",
    code: "https://github.com/sneharatnani/portfolio-site",
  },
  {
    name: "calculator",
    id: "5",
    alt: "A device showing screenshot of calculator",
    img: calculator,
    description:
      "It is a simple Javascript calculator which can handle your daily calculations easily. It also has keyboard support.",
    techStack: "JavaScript, HTML, CSS",
    live: "https://sneharatnani.github.io/calculator/",
    code: "https://github.com/sneharatnani/calculator",
  },

  {
    name: "Tic-tac-toe",
    id: "6",
    alt: "A device showing screenshot of tic-tac-toe game",
    img: ticTacToe,
    description:
      "This is a modern version of the classic tic-tac-toe game. Two players can play the game together. Take a look.",
    techStack: "JavaScript, HTML, CSS",
    live: "https://sneharatnani.github.io/tic-tac-toe/",
    code: "https://github.com/sneharatnani/tic-tac-toe",
  },
];
