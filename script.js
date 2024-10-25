document.addEventListener("DOMContentLoaded", function () {
    fetch('greeting.json')
        .then(response => response.json())
        .then(data => {
            document.querySelector('#about h2').textContent = data.greeting.title;
            document.querySelector('#about p').textContent = data.greeting.intro;
        })
        .catch(error => console.error('Fehler beim Laden der Begrüssungsdaten:', error));

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const portfolioContainer = document.querySelector('#portfolio .portfolio-items');
            data.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.className = 'portfolio-item';
                projectElement.innerHTML = `
                    <a href="${project.link}">
                        <img src="${project.image}" alt="${project.title}">
                    </a>
                    <h3>${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                `;
                portfolioContainer.appendChild(projectElement);
            });

            const hobbiesContainer = document.querySelector('#hobbies .hobbies-items');
            data.hobbies.forEach(hobby => {
                const hobbyElement = document.createElement('div');
                hobbyElement.className = 'hobby-item';
                hobbyElement.innerHTML = `
                    <img src="${hobby.image}" alt="${hobby.title}">
                    <h3>${hobby.title}</h3>                    
                    <p class="hobby-description">${hobby.description}</p>
                `;
                hobbiesContainer.appendChild(hobbyElement);
            });

            const technologiesContainer = document.querySelector('#technologies .technologies-items');
            data.technologies.forEach(technology => {
                const technologyElement = document.createElement('div');
                technologyElement.className = 'technology-item';
                technologyElement.innerHTML = `
                    
                    <h3>${technology.name}</h3>
                `;
                technologiesContainer.appendChild(technologyElement);
            });
        })
        .catch(error => console.error('Fehler beim Laden der Portfolio- und Hobbydaten:', error));
});
