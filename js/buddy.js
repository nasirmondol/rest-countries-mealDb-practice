const loadBuddy = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddy(data))
}
loadBuddy();

const displayBuddy = (data) => { 
    console.log(data)
    const buddies = data.results;
    const buddiesDiv  = document.getElementById('buddy')
    for(const buddy of buddies){
        // console.log(buddy.name.first)
        const p = document.createElement('p')
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last} ${buddy.gender}`
        buddiesDiv.appendChild(p)
    }
}
