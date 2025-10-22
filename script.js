// Игры (оставляем как есть)
const colors = ['red', 'blue', 'green', 'yellow'];
let correctColor = colors[Math.floor(Math.random() * colors.length)];
const animals = ['cat', 'dog', 'bird'];
let correctAnimal = animals[Math.floor(Math.random() * animals.length)];
const animalNames = { 'cat': 'Мысық (Кот)', 'dog': 'Ит (Собака)', 'bird': 'Құс (Птица)' };

// Объект с переводами
const translations = {
    kk: {
        // Index
        'home-title': 'Басты бет',
        'home-desc': 'Біз — Bala Edu Project, команда, которая помогает детям расти и учиться через игру и творчество! Здесь вы найдёте ресурсы для развития, уроки и поддержку для родителей.',
        'home-link-text': 'Digital кітапханасы',
        // Team
        'team-title': 'Біздің команда',
        'team-desc': 'Мы — команда энтузиастов, которые любят помогать детям! Здесь работают учителя, дизайнеры и разработчики, чтобы сделать обучение весёлым.',
        'team-member1': 'Айгуль — педагог с 10-летним опытом.',
        'team-member2': 'Ерлан — дизайнер карточек и игр.',
        'team-member3': 'Сергей — разработчик сайта.',
        // Mission
        'mission-title': 'Миссия',
        'mission-desc': 'Наша миссия — сделать обучение детей доступным, интересным и полезным. Мы создаём материалы, которые помогают развивать умения, эмоции и творчество!',
        'mission-goals': 'Цели:',
        'mission-goal1': 'Поддержка родителей.',
        'mission-goal2': 'Интерактивные уроки.',
        'mission-goal3': 'Бесплатные ресурсы.',
        // Play Lab
        'play-lab-title': 'Play Lab сабақтары',
        'play-lab-desc': 'Play Lab — это место, где дети учатся через игры! Развивайте навыки с помощью наших заданий.',
        'play-lab-game1': 'Игра 1: Угадай цвет.',
        'play-lab-game2': 'Игра 2: Угадай животное.',
        'play-lab-materials': 'Материалы доступны в Digital кітапхана.',
        // Digital Library
        'digital-library-title': 'Digital кітапхана',
        'digital-library-desc': 'Балалардың дамуын қызықты әрі қолжетімді етеміз! Мұнда сіз жас ерекшеліктеріне сай ойындар мен карточкаларды тегін жүктей аласыз.',
        'view-resources': 'Қарау',
        'category-select': 'Барлығы,Эмоциялар әлемі 💛,Түстер мен пішіндер 🎨,Жеміс-жидектер 🌿,үй жануарлары 🔢,көкөністер 🗣,Қазақ тілі 🎭,Сандар 🎭',
        'age-select': 'Барлық жас,3–5 жас,5–6 жас',
        // Speech Lab
        'speech-lab-title': 'Speech Lab',
        'speech-lab-desc': 'Развивайте речь ребёнка с помощью игр и упражнений! Speech Lab помогает учить слова и строить предложения.',
        'speech-lab-exercise1': 'Упражнение 1: Назови животное.',
        'speech-lab-exercise2': 'Упражнение 2: Расскажи сказку.',
        'speech-lab-materials': 'Найдите материалы в Digital кітапхана.',
        // Kinder Lab
        'kinder-lab-title': 'Kinder Lab',
        'kinder-lab-desc': 'Kinder Lab — это пространство для экспериментов и игр! Дети учатся через творчество и исследования.',
        'kinder-lab-experiment1': 'Эксперимент 1: Смешивание цветов.',
        'kinder-lab-experiment2': 'Эксперимент 2: Создание поделок.',
        'kinder-lab-materials': 'Материалы доступны в Digital кітапхана.',
        // Parent Guides
        'parent-guides-title': 'Ата-аналар үшін гайдтар',
        'parent-guides-desc': 'Здесь вы найдёте советы, как помочь ребёнку учиться и развиваться дома!',
        'parent-guide1': 'Гайд 1: Как играть и учить цвета.',
        'parent-guide2': 'Гайд 2: Развитие эмоций через разговоры.',
        'parent-guide3': 'Гайд 3: Простые игры для счёта.',
        'parent-guides-materials': 'Скачайте дополнительные материалы в Digital кітапхана.',
        // Feedback
        'feedback-title': 'Кері байланыс пен көмек',
        'feedback-desc': 'Оставьте свой отзыв или задайте вопрос — мы рады вашей помощи!',
        'name-label': 'Атыңыз (Имя):',
        'message-label': 'Хабарлама (Сообщение):',
        'submit-button': 'Жіберу (Отправить)',
        'contact-text': 'Свяжитесь с нами: ',
        'contact-email': 'support@balaedu.kz',
        // Footer
        'footer-text': '© 2025. Bala Edu Project. Балалардың дамуы үшін',
        // Nav
        'nav-home': 'Басты бет',
        'nav-team': 'Біздің команда',
        'nav-mission': 'Миссия',
        'nav-play-lab': 'Play Lab сабақтары',
        'nav-digital-library': 'Digital кітапхана',
        'nav-parent-guides': 'Ата-аналар үшін гайдтар',
        'nav-speech-lab': 'Speech Lab',
        'nav-kinder-lab': 'Kinder Lab',
        'nav-feedback': 'Кері байланыс пен көмек'
    },
    en: {
        // Index
        'home-title': 'Home',
        'home-desc': 'We are Bala Edu Project, a team that helps children grow and learn through play and creativity! Here you’ll find resources, lessons, and support for parents.',
        'home-link-text': 'Digital Library',
        // Team
        'team-title': 'Our Team',
        'team-desc': 'We are a team of enthusiasts who love helping children! Our team includes teachers, designers, and developers to make learning fun.',
        'team-member1': 'Aigul — a teacher with 10 years of experience.',
        'team-member2': 'Erlan — a designer of cards and games.',
        'team-member3': 'Sergey — the website developer.',
        // Mission
        'mission-title': 'Mission',
        'mission-desc': 'Our mission is to make children’s learning accessible, engaging, and beneficial. We create materials that help develop skills, emotions, and creativity!',
        'mission-goals': 'Goals:',
        'mission-goal1': 'Support for parents.',
        'mission-goal2': 'Interactive lessons.',
        'mission-goal3': 'Free resources.',
        // Play Lab
        'play-lab-title': 'Play Lab Lessons',
        'play-lab-desc': 'Play Lab is a place where kids learn through games! Develop skills with our activities.',
        'play-lab-game1': 'Game 1: Guess the Color.',
        'play-lab-game2': 'Game 2: Guess the Animal.',
        'play-lab-materials': 'Materials are available in the Digital Library.',
        // Digital Library
        'digital-library-title': 'Digital Library',
        'digital-library-desc': 'We make children’s development fun and accessible! Here you can download games and cards tailored to age groups for free.',
        'view-resources': 'View',
        'category-select': 'All,Emotions World 💛,Colors and Shapes 🎨,Fruits and Vegetables 🌿,Home Animals 🔢,Vegetables 🗣,Kazakh Language 🎭,Numbers 🎭',
        'age-select': 'All Ages,3–5 Years,5–6 Years',
        // Speech Lab
        'speech-lab-title': 'Speech Lab',
        'speech-lab-desc': 'Develop your child’s speech with games and exercises! Speech Lab helps learn words and build sentences.',
        'speech-lab-exercise1': 'Exercise 1: Name the Animal.',
        'speech-lab-exercise2': 'Exercise 2: Tell a Story.',
        'speech-lab-materials': 'Find materials in the Digital Library.',
        // Kinder Lab
        'kinder-lab-title': 'Kinder Lab',
        'kinder-lab-desc': 'Kinder Lab is a space for experiments and play! Children learn through creativity and exploration.',
        'kinder-lab-experiment1': 'Experiment 1: Mixing Colors.',
        'kinder-lab-experiment2': 'Experiment 2: Creating Crafts.',
        'kinder-lab-materials': 'Materials are available in the Digital Library.',
        // Parent Guides
        'parent-guides-title': 'Parent Guides',
        'parent-guides-desc': 'Here you’ll find tips on how to help your child learn and grow at home!',
        'parent-guide1': 'Guide 1: Playing and Learning Colors.',
        'parent-guide2': 'Guide 2: Developing Emotions Through Conversation.',
        'parent-guide3': 'Guide 3: Simple Counting Games.',
        'parent-guides-materials': 'Download additional materials in the Digital Library.',
        // Feedback
        'feedback-title': 'Feedback and Help',
        'feedback-desc': 'Leave your feedback or ask a question — we’re happy to assist!',
        'name-label': 'Your Name:',
        'message-label': 'Message:',
        'submit-button': 'Submit',
        'contact-text': 'Contact us: ',
        'contact-email': 'support@balaedu.kz',
        // Footer
        'footer-text': '© 2025. Bala Edu Project. For Children’s Development',
        // Nav
        'nav-home': 'Home',
        'nav-team': 'Our Team',
        'nav-mission': 'Mission',
        'nav-play-lab': 'Play Lab Lessons',
        'nav-digital-library': 'Digital Library',
        'nav-parent-guides': 'Parent Guides',
        'nav-speech-lab': 'Speech Lab',
        'nav-kinder-lab': 'Kinder Lab',
        'nav-feedback': 'Feedback and Help'
    }
};

// Функция переключения языка
function setLanguage(lang) {
    const elements = document.querySelectorAll('[id]');
    elements.forEach(element => {
        const translationKey = element.id;
        if (translations[lang][translationKey]) {
            if (element.tagName === 'SELECT') {
                const options = translations[lang][translationKey].split(',');
                element.innerHTML = options.map(opt => `<option value="${opt}">${opt}</option>`).join('');
            } else if (element.tagName === 'A' && element.textContent.includes('Digital кітапхана')) {
                element.textContent = translations[lang]['home-link-text'];
                element.href = 'digital-library.html';
            } else {
                element.textContent = translations[lang][translationKey];
            }
        }
    });
    // Устанавливаем lang атрибут для HTML
    document.documentElement.lang = lang;
}

// Игровые функции (оставляем как есть)
function setRandomColor() {
    correctColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('color-question').textContent = `Қандай түс? (What color is this?) ${correctColor}`;
}

function checkColor(selected) {
    const feedback = document.getElementById('color-feedback');
    if (selected === correctColor) {
        feedback.textContent = 'Дұрыс! 🎉 Тағы да ойнайық! (Correct! 🎉 Let’s play again!)';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Қате! Тағы тырысыңыз! (Wrong! Try again!)';
        feedback.style.color = 'red';
    }
    setRandomColor();
}

function setRandomAnimal() {
    correctAnimal = animals[Math.floor(Math.random() * animals.length)];
    const animalNames = { 'cat': 'Мысық (Кот)', 'dog': 'Ит (Собака)', 'bird': 'Құс (Птица)' };
    document.getElementById('animal-question').textContent = `Бұл қай жануар? (${animalNames[correctAnimal]}?)`;
}

function checkAnimal(selected) {
    const feedback = document.getElementById('animal-feedback');
    if (selected === correctAnimal) {
        feedback.textContent = 'Дұрыс! 🎉 Тағы да ойнайық! (Correct! 🎉 Let’s play again!)';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Қате! Тағы тырысыңыз! (Wrong! Try again!)';
        feedback.style.color = 'red';
    }
    setRandomAnimal();
}

// Инициализация при загрузке
window.onload = function() {
    setRandomColor();
    setRandomAnimal();
    // Устанавливаем язык по умолчанию (например, казахский)
    setLanguage('kk');
};

// Функция для переключения меню
function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
}
