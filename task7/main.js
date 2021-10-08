const url = 'https://jsonplaceholder.typicode.com/users';
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');


const createContent = (result, callback) => {
    const targetBlock = document.querySelector('.carousel');

    result.forEach(person => {
        const li = document.createElement('li');
        li.className = 'person';
        const h2 = document.createElement('h2');
        const company = document.createElement('p');
        const phone = document.createElement('p');
        const mail = document.createElement('a')
        mail.setAttribute('href', `mailto:${person.email}`);

        h2.innerHTML = person.name;
        company.innerHTML = person.company.name;
        phone.innerHTML = person.phone;
        mail.innerHTML = person.email;

        li.appendChild(h2);
        li.appendChild(company);
        li.appendChild(phone);
        li.appendChild(mail);

        targetBlock.appendChild(li);
    });

    callback();
}

const handlePersons = () => {
    let carousel = document.querySelector('.carousel');
    let carouselElemsAmount = document.querySelectorAll('.person').length;
    let width = 300;
    let counter = 0

    prevBtn.addEventListener('click', () => {
        (counter) ? counter-- : counter = carouselElemsAmount - 1;
        carousel.style = `transform: translateX(-${width * counter}px)`;
    });
    nextBtn.addEventListener('click', () => {
        (counter === carouselElemsAmount - 1) ? counter = 0: counter++;
        carousel.style = `transform: translateX(-${width * counter}px)`;
    })
}


fetch(url)
    .then((data) => data.json())
    .then((result) => createContent(result, handlePersons))
    .catch((error) => alert(error));