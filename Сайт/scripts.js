const translations = {
    ru: {
        title: "Добро пожаловать на наш сайт!",
        info: {
            title: "Информация",
            description: "Здесь представлена информация о нашем сайте и услугах, которые мы предлагаем. Мы рады помочь вам в любых вопросах!"
        },
        services: {
            title: "Услуги",
            list: [
                "Консультации",
                "Поддержка клиентов",
                "Разработка веб-сайтов"
            ]
        },
        contacts: {
            title: "Контакты",
            email: "Вы можете связаться с нами по электронной почте: info@example.com",
            phone: "Телефон: +7 (123) 456-78-90"
        },
        footer: "© 2024 Простой сайт. Все права защищены."
    },
    en: {
        title: "Welcome to our website!",
        info: {
            title: "Information",
            description: "This is information about our website and the services we offer. We are happy to assist you with any questions!"
        },
        services: {
            title: "Services",
            list: [
                "Consulting",
                "Customer Support",
                "Website Development"
            ]
        },
        contacts: {
            title: "Contacts",
            email: "You can reach us via email: info@example.com",
            phone: "Phone: +7 (123) 456-78-90"
        },
        footer: "© 2024 Simple Site. All rights reserved."
    },
    kk: {
        title: "Біздің веб-сайтымызға қош келдіңіз!",
        info: {
            title: "Ақпарат",
            description: "Бұл біздің веб-сайтымыз бен ұсынымыз туралы ақпарат. Біз сізге кез келген сұрақпен көмектесуге қуаныштымыз!"
        },
        services: {
            title: "Қызметтер",
            list: [
                "Консультациялар",
                "Клиенттерді қолдау",
                "Веб-сайттарды дамыту"
            ]
        },
        contacts: {
            title: "Байланыс",
            email: "Бізбен электронды пошта арқылы байланысуға болады: info@example.com",
            phone: "Телефон: +7 (123) 456-78-90"
        },
        footer: "© 2024 Қарапайым сайт. Барлық құқықтар қорғалған."
    }
};

function changeLanguage() {
    const lang = document.getElementById("language-selector").value;
    document.getElementById("site-title").innerText = translations[lang].title;
    document.getElementById("info-title").innerText = translations[lang].info.title;
    document.getElementById("info-description").innerText = translations[lang].info.description;
    document.getElementById("contacts-title").innerText = translations[lang].contacts.title;
    document.getElementById("contacts-email").innerText = translations[lang].contacts.email;
    document.getElementById("contacts-phone").innerText = translations[lang].contacts.phone;
    document.getElementById("footer-text").innerText = translations[lang].footer;

    // Обновление раздела услуг
    const servicesTitle = document.getElementById("services-title");
    servicesTitle.innerText = translations[lang].services.title;
    const servicesList = document.getElementById("services-list");
    servicesList.innerHTML = "";
    translations[lang].services.list.forEach(service => {
        const listItem = document.createElement("li");
        listItem.innerText = service;
        servicesList.appendChild(listItem);
    });
}

// Остальной код остается без изменений
