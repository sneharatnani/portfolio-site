import portfolioSite from "../public/img/portfolio.png";
import calculator from "../public/img/calculator.png";
import memoryGame from "../public/img/memory-game.png";
import shoppingCart from "../public/img/shopping-cart.png";
import weatherApp from "../public/img/weather-app.png";
import notewind from "../public/img/notewind.png";

export const projectData = [
  {
    name: "NoteWind",
    alt: "A device showing screenshot of notewind",
    img: notewind,
    description:
      "NoteWind is a note-taking app that allows you to create, edit, delete, and archive notes. Users can sign in and sign out using firebase authentication. You can filter as well as search notes. It also has features like changing note backgrounds, pin and unpin notes, and adding, editing, or removing labels.",
    techStack: "React, Firebase, Tailwind CSS",
    live: "http://notewind.netlify.app/",
    code: "https://github.com/sneharatnani/notewind",
  },
  {
    name: "Shopping Cart",
    alt: "A device showing screenshot of shopping cart website",
    img: shoppingCart,
    description:
      "This is an eCommerce website built with ReactJS. Users can browse the available products and give orders with a fully functional cart. Users can also increase and decrease the number of products they want to buy.",
    techStack: "React, Redux, React Router, Tailwind CSS",
    live: "https://sneharatnani.github.io/shopping-cart/",
    code: "https://github.com/sneharatnani/shopping-cart",
  },
  {
    name: "Weather App",
    alt: "A device showing screenshot of weather app",
    img: weatherApp,
    description:
      "This app shows the current weather of a city. It uses OpenWeatherMap API to fetch the weather data. It can also show weather based on the user's current location using Geolocation API. The app changes the background according to different weather conditions.",
    techStack:
      "JavaScript, Webpack, HTML, CSS, OpenWeathermap API, Geolocation API",
    live: "https://sneharatnani.github.io/weather-app/",
    code: "https://github.com/sneharatnani/weather-app",
  },
  {
    name: "Portfolio Site",
    alt: "A device showing screenshot of sneha ratnani's website",
    img: portfolioSite,
    description:
      "Crafted with ReactJS and Tailwind CSS, my portfolio is available in light as well as in dark themes. Take a look around.",
    techStack: "React, React Router, Tailwind CSS",
    live: "sneharatnani.com",
    code: "https://github.com/sneharatnani/portfolio-site",
  },
  {
    name: "Memory Game",
    alt: "A device showing screenshot of memory game",
    img: memoryGame,
    description:
      "As the name explains itself, it is a game to test your memory. Click each emoji only once, and if clicked twice, game is over. The emojis will shuffle after each click. It shows the best and current score achieved by a player.",
    techStack: "React, Tailwind CSS",
    live: "https://sneharatnani.github.io/memory-game/",
    code: "https://github.com/sneharatnani/memory-game",
  },
  {
    name: "calculator",
    alt: "A device showing screenshot of calculator",
    img: calculator,
    description:
      "It is a simple Javascript calculator which can handle your daily calculations easily. It also has keyboard support.",
    techStack: "JavaScript, HTML, CSS",
    live: "https://sneharatnani.github.io/calculator/",
    code: "https://github.com/sneharatnani/calculator",
  },
];
