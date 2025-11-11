// Utility function to create element with classes
function createElement(tag, classes = [], text = '') {
  const el = document.createElement(tag);
  if (classes.length) el.classList.add(...classes);
  if (text) el.textContent = text;
  return el;
}

// Create container
function createContainer() {
  return createElement('div', ['container']);
}

// ====== HEADER ======
function createHeader() {
  const header = createElement('header');
  const container = createContainer();

  const logo = createElement('div', ['logo'], 'APOLLO');

  const nav = createElement('nav');
  const navList = createElement('ul');
  ['Home', 'About', 'Contact'].forEach(item => {
    const li = createElement('li');
    const a = createElement('a', [], item);
    a.href = '#';
    li.appendChild(a);
    navList.appendChild(li);
  });
  nav.appendChild(navList);

  const btnGroup = createElement('div', ['btn-group']);
  const signUpBtn = createElement('button', ['btn-outline'], 'Sign Up');
  const logInBtn = createElement('button', ['btn-primary'], 'Log In');
  btnGroup.append(signUpBtn, logInBtn);

  container.append(logo, nav, btnGroup);
  header.appendChild(container);
  return header;
}

// ====== HERO SECTION ======
function createHero() {
  const hero = createElement('section', ['hero']);
  const container = createContainer();

  const heroContent = createElement('div', ['hero-content']);
  const h1 = createElement('h1', [], 'LEARN, BUILD, & SHOWCASE\nALL IN ONE PLATFORM');
  h1.innerHTML = h1.textContent.replace(/\n/g, '<br>');
  const p = createElement('p', [], 'Join a free advanced programming and online learning community where you can build projects, collaborate with peers, and showcase your achievements—all while earning certifications.');
  const heroBtns = createElement('div', ['hero-btns']);
  heroBtns.append(
    createElement('button', ['btn-primary'], 'Get Started Free'),
    createElement('button', ['btn-outline'], 'Learn More')
  );
  heroContent.append(h1, p, heroBtns);

  const heroImage = createElement('div', ['hero-image']);
  const img = createElement('img');
  img.src = 'https://via.placeholder.com/400x300?text=Illustration';
  img.alt = 'Apollo Illustration';
  heroImage.appendChild(img);

  container.append(heroContent, heroImage);
  hero.appendChild(container);
  return hero;
}

// ====== FEATURES SECTION ======
function createFeatures() {
  const section = createElement('section', ['features']);
  const container = createContainer();

  container.appendChild(createElement('h2', [], 'What You’ll Get With Apollo'));
  container.appendChild(createElement('p', [], 'A powerful ecosystem designed to accelerate your journey into the world of software development.'));

  const cardsContainer = createElement('div', ['feature-cards']);
  const features = [
    { icon: '🚀', title: 'Build Your Own Projects', desc: 'Bring your ideas to life with our project builder tools and get feedback from mentors and peers.' },
    { icon: '👨‍💻', title: 'Project Management', desc: 'Track progress, assign tasks, and manage deadlines with built-in agile tools for teams.' },
    { icon: '🏆', title: 'Portfolio Management', desc: 'Showcase your best work in a personalized portfolio that recruiters and clients can easily view.' }
  ];

  features.forEach(f => {
    const card = createElement('div', ['card']);
    card.appendChild(createElement('div', ['icon'], f.icon));
    card.appendChild(createElement('h3', [], f.title));
    card.appendChild(createElement('p', [], f.desc));
    cardsContainer.appendChild(card);
  });

  container.appendChild(cardsContainer);
  section.appendChild(container);
  return section;
}

// ====== CTA SECTION ======
function createCTA() {
  const cta = createElement('section', ['cta']);
  const container = createContainer();
  const content = createElement('div', ['cta-content']);
  content.appendChild(createElement('h2', [], 'Ready to Launch Your Journey?'));
  content.appendChild(createElement('p', [], 'Our application will connect you with 50+ mentors, expert coaches, programming challenges, and more to help you succeed.'));
  content.appendChild(createElement('button', ['btn-primary'], 'Get Started Free'));
  container.appendChild(content);
  cta.appendChild(container);
  return cta;
}

// ====== FOOTER ======
function createFooter() {
  const footer = createElement('footer');
  const container = createContainer();

  const footerContent = createElement('div', ['footer-content']);

  // Col 1
  const col1 = createElement('div', ['footer-col']);
  col1.appendChild(createElement('h4', [], 'APOLLO'));
  col1.appendChild(createElement('p', [], 'Building the next generation of developers through collaborative learning and real-world projects.'));

  // Col 2
  const col2 = createElement('div', ['footer-col']);
  col2.appendChild(createElement('h4', [], 'Company'));
  const ul2 = createElement('ul');
  ['About Us', 'Careers', 'Blog'].forEach(text => {
    const li = createElement('li');
    const a = createElement('a', [], text);
    a.href = '#';
    li.appendChild(a);
    ul2.appendChild(li);
  });
  col2.appendChild(ul2);

  // Col 3
  const col3 = createElement('div', ['footer-col']);
  col3.appendChild(createElement('h4', [], 'Support'));
  const ul3 = createElement('ul');
  ['Help Center', 'Contact Us', 'Community'].forEach(text => {
    const li = createElement('li');
    const a = createElement('a', [], text);
    a.href = '#';
    li.appendChild(a);
    ul3.appendChild(li);
  });
  col3.appendChild(ul3);

  footerContent.append(col1, col2, col3);

  const footerBottom = createElement('div', ['footer-bottom']);
  footerBottom.appendChild(createElement('p', [], '© 2025 APOLLO. All rights reserved.'));

  container.append(footerContent, footerBottom);
  footer.appendChild(container);
  return footer;
}

// ====== RENDER ALL ======
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  body.append(
    createHeader(),
    createHero(),
    createFeatures(),
    createCTA(),
    createFooter()
  );
});