document.addEventListener('DOMContentLoaded', () => {
    // Header
    const header = document.querySelector('header');
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Squirtle';
    header.appendChild(headerTitle);

    // Navigation
    const nav = document.querySelector('nav');
    const navList = document.createElement('ul');
    const navItems = ['Informações sobre Squirtle', 'Características', 'Curiosidades', 'Artigo sobre Squirtle', 'Recursos Adicionais', 'Evolução'];
    navItems.forEach(item => {
        const navListItem = document.createElement('li');
        const navLink = document.createElement('a');
        navLink.textContent = item;
        navLink.href = `#${item.replace(/ /g, '-').toLowerCase()}`;
        navListItem.appendChild(navLink);
        navList.appendChild(navListItem);
    });
    nav.appendChild(navList);

    // Main content
    const main = document.querySelector('main');

    // Section: Info Squirtle
    const sectionSquirtle = document.createElement('section');
    sectionSquirtle.id = 'informacoes-sobre-squirtle';

    const squirtleHeader = document.createElement('h2');
    squirtleHeader.textContent = 'Informações sobre Squirtle';
    sectionSquirtle.appendChild(squirtleHeader);

    const squirtleImage = document.createElement('img');
    squirtleImage.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png';
    squirtleImage.alt = 'Squirtle';

    const wartortleImage = document.createElement('img');
    wartortleImage.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png';
    wartortleImage.alt = 'Wartortle';

    const imageContainer = document.createElement('div');
    imageContainer.appendChild(squirtleImage);
    imageContainer.appendChild(wartortleImage);
    sectionSquirtle.appendChild(imageContainer);

    const squirtleDesc = document.createElement('p');
    squirtleDesc.textContent = 'Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.';
    sectionSquirtle.appendChild(squirtleDesc);

    // Section: Characteristics
    const sectionCharacteristics = document.createElement('section');
    sectionCharacteristics.id = 'caracteristicas';

    const characteristicsHeader = document.createElement('h2');
    characteristicsHeader.textContent = 'Características';
    sectionCharacteristics.appendChild(characteristicsHeader);

    const characteristicsDesc = document.createElement('p');
    characteristicsDesc.textContent = 'Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.';
    sectionCharacteristics.appendChild(characteristicsDesc);

    // Section: Curiosities
    const sectionCuriosities = document.createElement('section');
    sectionCuriosities.id = 'curiosidades';

    const curiositiesHeader = document.createElement('h2');
    curiositiesHeader.textContent = 'Curiosidades';
    sectionCuriosities.appendChild(curiositiesHeader);

    const curiosityList = document.createElement('ul');
    const curiosities = [
        'Squirtle é um dos Pokémon mais populares e adoráveis.',
        'Seu nome deriva das palavras "squirrel" (esquilo) e "turtle" (tartaruga).',
        'Squirtle é frequentemente escolhido por treinadores para começar sua jornada Pokémon.'
    ];

    curiosities.forEach(curiosity => {
        const listItem = document.createElement('li');
        listItem.textContent = curiosity;
        curiosityList.appendChild(listItem);
    });

    sectionCuriosities.appendChild(curiosityList);

    // Section: Squirtle Article
    const sectionArticle = document.createElement('section');
    sectionArticle.id = 'artigo-sobre-squirtle';

    const articleHeader = document.createElement('h2');
    articleHeader.textContent = 'Squirtle: O Amigo Aquático';
    sectionArticle.appendChild(articleHeader);

    const articleDesc = document.createElement('p');
    articleDesc.textContent = 'Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.';
    sectionArticle.appendChild(articleDesc);

    const articleDesc2 = document.createElement('p');
    articleDesc2.textContent = 'Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.';
    sectionArticle.appendChild(articleDesc2);

    const articleDesc3 = document.createElement('p');
    articleDesc3.textContent = 'Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas.';
    sectionArticle.appendChild(articleDesc3);

    // Section: Additional Resources
    const sectionResources = document.createElement('section');
    sectionResources.id = 'recursos-adicionais';

    const resourcesHeader = document.createElement('h2');
    resourcesHeader.textContent = 'Recursos Adicionais';
    sectionResources.appendChild(resourcesHeader);

    const resourceList = document.createElement('ul');
    const resources = [
        { text: 'Pokédex - Squirtle', link: 'https://www.pokemon.com/us/pokedex/squirtle' },
        { text: 'Bulbapedia - Squirtle', link: 'https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pokémon)' }
    ];

    resources.forEach(resource => {
        const listItem = document.createElement('li');
        const resourceLink = document.createElement('a');
        resourceLink.textContent = resource.text;
        resourceLink.href = resource.link;
        resourceLink.target = '_blank';
        listItem.appendChild(resourceLink);
        resourceList.appendChild(listItem);
    });

    sectionResources.appendChild(resourceList);

    // Section: Evolutions
    const sectionEvolutions = document.createElement('section');
    sectionEvolutions.id = 'evolucao';

    const evolutionsHeader = document.createElement('h2');
    evolutionsHeader.textContent = 'Evoluções';
    sectionEvolutions.appendChild(evolutionsHeader);

    const evolutionList = document.createElement('ul');

    const evolutions = [
        {
            name: 'Squirtle',
            imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        },
        {
            name: 'Wartortle',
            imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
        },
        {
            name: 'Blastoise',
            imgSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
        }
    ];

    evolutions.forEach((evolution, index) => {
        const listItem = document.createElement('li');
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        img.src = evolution.imgSrc;
        img.alt = evolution.name;
        const figcaption = document.createElement('figcaption');
        figcaption.textContent = `${index + 1}. ${evolution.name}`;
        figure.appendChild(img);
        figure.appendChild(figcaption);
        listItem.appendChild(figure);
        evolutionList.appendChild(listItem);
    });

    sectionEvolutions.appendChild(evolutionList);

    // Append all sections to main
    main.appendChild(sectionSquirtle);
    main.appendChild(sectionCharacteristics);
    main.appendChild(sectionCuriosities);
    main.appendChild(sectionArticle);
    main.appendChild(sectionResources);
    main.appendChild(sectionEvolutions);

    // Footer
    const footer = document.querySelector('footer');
    const footerText = document.createElement('p');
    footerText.textContent = '© 2024 Página do Pokémon Squirtle. Todos os direitos reservados.';
    footer.appendChild(footerText);

    const backToTopLink = document.createElement('a');
    backToTopLink.href = '#';
    backToTopLink.textContent = 'Voltar para o topo';
    footer.appendChild(backToTopLink);

    const contactEmail = document.createElement('a');
    contactEmail.href = 'mailto:contato@example.com';
    contactEmail.textContent = 'Contato via e-mail';
    footer.appendChild(contactEmail);

    const contactPhone = document.createElement('a');
    contactPhone.href = 'tel:+5555555555';
    contactPhone.textContent = 'Telefone: (55) 5555-5555';
    footer.appendChild(contactPhone);
});