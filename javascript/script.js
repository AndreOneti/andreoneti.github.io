import scrollToIdOnClick, { smoothScrollTo } from './scroll.js';
import './t-writer.js';
import './tooltip.js';
import './context-menu.js';

const Typewriter = window['t-writer'];

const projectList = [
  {
    url: "https://github.com/AndreOneti/dot_functions_utils",
    img: "assets/img/dot_functions_utils-logo.png",
    alt: "dot functions utils logo",
    name: "dot_functions_utils",
    description: "Biblioteca Node Js para auxiliar na manipulação de Date, String, Number e Arrays.",
    sub_description: "Creator"
  },
  {
    url: "https://github.com/nullstack/nullstack",
    img: "assets/img/nullstack-logo.png",
    alt: "nullstack logo",
    name: "nullstack",
    description: "Framework full-stack para construção de aplicações web progressivas.",
    sub_description: "Contributor"
  },
  {
    url: "https://github.com/AndreOneti/andreoneti.github.io",
    img: "assets/img/Avatar-mini-logo.png",
    alt: "Portfólio logo",
    name: "Portfólio",
    description: "Portfólio feito inteiramente em HTML, CSS e JAVASCRIPT.",
    sub_description: "Creator"
  }
];

const skillsList = [
  {
    percent: 70,
    alt: "JavaScript",
    target: "https://developer.mozilla.org/en-US/docs/Web/javascript",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"
  },
  {
    percent: 60,
    alt: "TypeScript",
    target: "https://www.typescriptlang.org/",
    url: "https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/typescript/typescript-original.svg"
  },
  {
    percent: 90,
    alt: "NodeJs",
    target: "https://nodejs.org/en/",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
  },
  {
    percent: 90,
    alt: "Express",
    target: "https://expressjs.com/",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
  },
  {
    percent: 75,
    alt: "HTML",
    target: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
  },
  {
    percent: 60,
    alt: "CSS",
    target: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
  },
  {
    percent: 85,
    alt: "Angular",
    target: "https://angular.io/",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg"
  },
  {
    percent: 80,
    alt: "Bash",
    target: "https://aurelio.net/shell/canivete/",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg"
  },
  {
    percent: 80,
    alt: "Docker",
    target: "https://www.docker.com/",
    url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
  },
  {
    percent: 90,
    alt: "Mongo Db",
    target: "https://www.mongodb.com/pt-br",
    url: "https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/mongodb/mongodb-original.svg"
  },
  {
    percent: 50,
    alt: "MYSQL",
    target: "https://www.mysql.com/",
    url: "https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/mysql/mysql-original.svg"
  },
  {
    percent: 55,
    alt: "POSTGRESQL",
    target: "https://www.postgresql.org/",
    url: "https://raw.githubusercontent.com/devicons/devicon/00f02ef57fb7601fd1ddcc2fe6fe670fef3ae3e4/icons/postgresql/postgresql-original.svg"
  }
]

const menuItems = document.querySelectorAll('.navigation a[href^="#"]');

function handleMenuItemClicked(event) {
  scrollToIdOnClick(event);
  const $activeElement = document.querySelector('.navigation a.--active')
  $activeElement?.classList.remove('--active');
  event.target.classList.add('--active');
  document.querySelector('.header').classList.remove('--active');
}

function handleProjectClicked(event) {
  const url = event.target.closest('li').dataset.href;
  window.open(url, '_blank');
}

window.handleProjectClicked = handleProjectClicked;

document.querySelector('.header .mobal-menu').addEventListener('click', function () {
  document.querySelector('.header').classList.toggle('--active');
});

menuItems.forEach(item => {
  item.addEventListener('click', handleMenuItemClicked);
});

document
  .querySelector('.top')
  .addEventListener('click', () => {
    smoothScrollTo(0, 0);
  })


document
  .querySelector('#projetos ul')
  .insertAdjacentHTML(
    'beforeend',
    projectList.map(project => (/*html*/`
      <li
        class="clickable"
        data-href="${project.url}"
        onclick="handleProjectClicked(event)"
      >
        <div class="container">
          <div class="project-item">
            <img
              src="${project.img}"
              alt="${project.alt}"
            />
            <a>${project.name}</a>
          </div>
          <div class="description">
            <span>
            ${project.description}
            </span>
            <span class="sub-description">${project.sub_description}</span>
          </div>
        </div>
      </li>
    `)).join('')
  );

document
  .querySelector('#skills .container')
  .insertAdjacentHTML('beforeend', skillsList.map(skill =>/*html*/`
    <div class="item" data-href="${skill.target}" data-tooltip="${skill.alt} - ${skill.percent}%" >
      <img
        alt="${skill.alt}"
        src="${skill.url}"
      />
      <div class="lvl" >
        <div class="percent" style="width: ${skill.percent}%" ></div>
      </div>
    </div>
  `).join('\n')
  );

// ======================================================================================================================== //

//#region info

const info = document.querySelector('.body #info .text .sub-title');
const infoOptions = {
  loop: true,
  deleteSpeed: 70,
  typeColor: '#444444',
  cursorColor: 'transparent'
};

const infoWriter = new Typewriter(info, infoOptions);

infoWriter
  .removeCursor()
  .rest(250)
  .type('Desenvolvedor FullStack JavaScript.')
  .rest(650)
  .start()

//#endregion

//#region Writer About

// const about = document.querySelector('#Info');
// const aboutOptions = {
//   loop: true,
//   deleteSpeed: 70,
//   typeColor: 'white',
//   cursorColor: 'transparent'
// };

// const aboutWriter = new Typewriter(about, aboutOptions);

// aboutWriter
//   .type('Quem é AndreOneti')
//   .changeOps({ typeSpeed: 200 })
//   .type('  . . . ?')
//   .rest(650)
//   .remove(27)
//   .changeOps({ typeSpeed: 90 })
//   .type('Sou um pai')
//   .changeOps({ typeSpeed: 200 })
//   .type('...')
//   .rest(650)
//   .remove(6)
//   .changeOps({ typeSpeed: 90 })
//   .type('Marido')
//   .changeOps({ typeSpeed: 200 })
//   .type('...')
//   .rest(650)
//   .remove(9)
//   .changeOps({ typeSpeed: 90 })
//   .type('Engenheiro do lar')
//   .changeOps({ typeSpeed: 200 })
//   .type('...')
//   .rest(650)
//   .remove(20)
//   .changeOps({ typeSpeed: 90 })
//   .type('Desenvolvedor FullStack')
//   .changeOps({ typeSpeed: 200 })
//   .type('...')
//   .rest(650)
//   .remove(26)
//   .changeOps({ typeSpeed: 90 })
//   .type('Amante de Tecnologia.')
//   .changeOps({ deleteSpeed: 10 })
//   .rest(500)
//   .changeOps({ typeSpeed: 90 })
//   .changeOps({ deleteSpeed: 70 })
//   .start()
//#endregion
