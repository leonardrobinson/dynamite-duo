const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        {    id: 1,
            name: "Scummy",
            power: "Garlic Gas"
        },
        {       
            id: 2, 
            name: "Glowria",
            power: "Time Travel"
        }
  
    ]
}

export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}
export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}