const itens = [
    {
        name: "Robot",
        image: "./assets/img/painting/personagem.jpg",
        price: "R$87,90",
        type: "frames"
    },
    {
        name: "Relogio Geek",
        image: "./assets/img/painting/clock.jpg",
        price: "R$54,90",
        type: "frames"
    },
    {
        name: "Gamepad Gamer",
        image: "./assets/img/painting/gamepad.jpg",
        price: "R$89,90",
        type: "frames"
    },
    {
        name: "Miss Fortune",
        image: "./assets/img/actions/animewoman.jpg",
        price: "R$112,90",
        type: "figure"
    },
    {
        name: "Goku",
        image: "./assets/img/actions/dragonballpersonagem.jpg",
        price: "R$135,90",
        type: "figure"
    },
    {
        name: "Baby Yoda",
        image: "./assets/img/actions/starwarspersonagem.jpg",
        price: "R$99,90",
        type: "figure"
    },
    {
        name: "Darth Vader",
        image: "./assets/img/painting/vader.jpg",
        price: "R$117,90",
        type: "frames"
    },
    {
        name: "Tommy Shelby",
        image: "./assets/img/painting/tomy.jpg",
        price: "R$77,50",
        type: "frames"
    },
    {
        name: "Dota 2",
        image: "./assets/img/painting/dota.jpg",
        price: "R$112,90",
        type: "frames"
    },
    {
        name: "Kratos - God Of War",
        image: "./assets/img/painting/kratos.jpg",
        price: "R$97,90",
        type: "frames"
    },
    {
        name: "Lineage 2",
        image: "./assets/img/painting/l2.jpg",
        price: "R$118,45",
        type: "frames"
    },
    {
        name: "League Of Legends",
        image: "./assets/img/painting/lol.jpg",
        price: "R$108,45",
        type: "frames"
    },
    {
        name: "League Of Legends",
        image: "./assets/img/actions/lol.jpg",
        price: "R$113,40",
        type: "figure"
    },
    {
        name: "Lineage 2",
        image: "./assets/img/actions/l2.jpg",
        price: "R$118,00",
        type: "figure"
    },
    {
        name: "Capitão América",
        image: "./assets/img/actions/cap.jpg",
        price: "R$135,00",
        type: "figure"
    },
    {
        name: "Thor",
        image: "./assets/img/actions/thor.jpg",
        price: "R$77,50",
        type: "figure"
    },
    {
        name: "Demon Slayer",
        image: "./assets/img/actions/demon.jpg",
        price: "R$88,45",
        type: "figure"
    },
    {
        name: "Nezuko",
        image: "./assets/img/actions/nezuko.jpg",
        price: "R$128,90",
        type: "figure"
    }

];

let listFrames = [];
let listFigures = [];
function separateItens() {
    for (let i = 0; i < itens.length; i++) {
        let item = itens[i];
        if (item.type == 'frames') {
            listFrames.push(item);
        } else if (item.type == 'figure') {
            listFigures.push(item);
        }

    }

}
separateItens();

function createFrames() {

    for (let i = 0; i < listFrames.length; i++) {
        let frames = listFrames[i];

        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.setAttribute('class', 'card');

        let img = document.createElement('img');
        img.src = frames.image;
        img.alt = frames.name;

        let section = document.createElement('section');

        ul.appendChild(li);
        li.appendChild(img);
        li.appendChild(section);

        let nome = document.createElement('div');
        nome.setAttribute('class', 'nome');

        let h3 = document.createElement('h3');
        h3.innerHTML = frames.name;
        nome.appendChild(h3);

        let preco = document.createElement('div');
        preco.setAttribute('class', 'preco');

        let p = document.createElement('p');
        p.innerText = frames.price
        preco.appendChild(p);
        section.appendChild(nome);
        section.appendChild(preco);
        
        let list = document.querySelector('.listPainting');
        list.appendChild(ul);

    }
}
createFrames();

function createFigures() {

    for (let i = 0; i < listFigures.length; i++) {
        let figures = listFigures[i];

        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.setAttribute('class', 'card');

        let img = document.createElement('img');
        img.src = figures.image;
        img.alt = figures.name;

        let section = document.createElement('section');

        ul.appendChild(li);
        li.appendChild(img);
        li.appendChild(section);

        let nome = document.createElement('div');
        nome.setAttribute('class', 'nome');

        let h3 = document.createElement('h3');
        h3.innerHTML = figures.name;
        nome.appendChild(h3);

        let preco = document.createElement('div');
        preco.setAttribute('class', 'preco');

        let p = document.createElement('p');
        p.innerText = figures.price
        preco.appendChild(p);
        
        section.appendChild(nome);
        section.appendChild(preco);


        let list = document.querySelector('.listFigure');
        list.appendChild(ul);
    }
}
createFigures();
