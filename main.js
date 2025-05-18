const version = '1.1'
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

const imgsPaths = {
    "ZmjjKK" : "./imgs/ZmjjKK.jpg",
    "Derke" : "./imgs/Derke.jpg",
    "Chichoo" : "./imgs/Chichoo.jpg",
    "Zekken" : "./imgs/Zekken.jpg",
    "TenZ" : "./imgs/TenZ.jpg",
    "aspas" : "./imgs/aspas.jpg",
    "t3xture" : "./imgs/t3xture.jpg",
    "Meteor" : "./imgs/Meteor.jpg",
    "WoOt" : "./imgs/WoOt.jpg",
    "f0rsakeN" : "./imgs/f0rsakeN.jpg",
}

function getRandomIndex(maxNum) {
    return Math.floor(Math.random() * maxNum)
}

const versionLine = document.getElementById("versionLine");
versionLine.innerHTML = `Version: ${version}`;

const mainActionZone = document.getElementById('mainActionZone');

const chooseProBtn = document.getElementById('chooseProBtn');
chooseProBtn.addEventListener('click', () => {
    let pick = agentsData.JETT[getRandomIndex(agentsData.JETT.length)];

    let path = imgsPaths[pick]

    mainActionZone.innerHTML = `<p id="actionZoneTitle" class="action-zone-title">Pick an agent</p>
    <div class="pro-card" id="proCard"><img src="${path}" alt="${pick} photo" style="height: 320px;" class="player-img"><br><a class="player-nickname" href="https://www.youtube.com/results?search_query=valorant+pro+vods+${pick}">${pick}</a></div>`;
    const actionZoneTitle = document.getElementById('actionZoneTitle');
    actionZoneTitle.innerHTML = "You can pick another pro";
})

