import React from 'react';
import IMG1 from '../../assets/Algo path.gif';
import IMG2 from '../../assets/movielist.png';
import IMG3 from '../../assets/healtheat-search.png';
import IMG4 from '../../assets/wbcam.png';
import IMG5 from '../../assets/Screenshot 2023-04-06 at 7.54.26 AM.png';
import IMG6 from '../../assets/Ecom Store.gif';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Algo Path Finder',
      img: IMG1,
      description:
        'Visual path finder using Dijkstras algorithm to find the shortest route possible using react framework',
      technologies: 'React | Redux | Ruby on Rails',
      link: 'https://github.com/Musikavanhu/Path-Finder',
      github: 'https://github.com/Musikavanhu/Path-Finder',
    },
    {
      id: 2,
      title: 'AI Webcam',
      img: IMG4,
      description:
        'created with Tensor.JS is a custom image recognization for web based applications',
      technologies: 'React | Redux | Tensor',
      link: 'https://musikavanhu.github.io/AI-based-Webcam/',
      github: 'https://github.com/Musikavanhu/AI-based-Webcam',
    },
    {
      id: 3,
      title: 'Movie List',
      img: IMG2,
      description: ' allows you to make a list of movies you want to. Make and get recommendations from your friends. Keep track of them your personal watchlist.',
      technologies: 'JavaScript | Webpack | Mysql | Handlebars',
      link: 'https://github.com/klay824/the-ultimate-movie-list',
      github: 'https://github.com/klay824/the-ultimate-movie-list',
    },
    {
      id: 4,
      title: 'HealthEat',
      img: IMG3,
      description:
        ' full-stack MERN application intended to help people to plan healthy meals. Users can choose their dietary restrictions and the number of recipes desired.',
      technologies: 'JavaScript | CSS | React | Mongodb | Bootstrap',
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 5,
      title: 'Password Generator',
      img: IMG5,
      description:
        'he password generator is a JavaScript program that allows users to create strong and secure passwords. It prompts the user to specify the length of the password and which types of characters they would like to include: uppercase letters, lowercase letters, numbers, and symbols',
      technologies: 'JavaScript | CSS',
      link: 'https://musikavanhu.github.io/Password-Generator/',
      github: 'https://github.com/Musikavanhu/Password-Generator',
    },
    {
      id: 6,
      title: 'Ecommerce Webstore',
      img: IMG6,
      description:
        'went over advanced React & JavaScript topics, as well as how to use Stripe for card transactions',
      technologies: 'JavaScript | React | Stripe',
      link: 'https://zalyaclothing.myshopify.com',
      github: 'https://github.com/Musikavanhu/Ecommerce-store',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
