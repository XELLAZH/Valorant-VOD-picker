const version = 0.1
const agentsData = {
    "JETT" : [
        "ZmjjKK",
        "Derke",
        "Chichoo",
        "Zekken",
        "TenZ",
        "aspas",
        "t3xture",
        "Meteor",
        "WoOt",
        "f0rsakeN"
    ]
}

function getRandomIndex(maxNum) {
    return Math.floor(Math.random() * maxNum)
}

const versionPar = document.getElementById('version');
versionPar.innerHTML = `Version: ${version}`

const messagePar = document.getElementById('message');

const pickVodButton = document.getElementById('pickVodBtn');
pickVodButton.addEventListener('click', () => {
    
    let pick = agentsData.JETT[getRandomIndex(agentsData.JETT.length)];
    messagePar.innerHTML = `Посмотри демо ${pick}<br><a href="http://www.youtube.com/watch?v=ofc0FE7hgEI&list=PLyUTX5LGxnvD5MOXr0q0XBoG52pYdUNcc">Ссылка на плейлист с VOD</a>`;
});

