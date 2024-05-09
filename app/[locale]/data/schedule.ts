export type scheduleType = {
  id:number,
  card:string,
  time:string,
  image:string,
  speakers?:
    {name: string, url:string}[]
  
}

export const schedule:scheduleType[] = [
  {id:1, card:"register", time:"15:00 - 15:20", image:"/event-start.png"},
  {id:2, card:"sponsor1", time:"15:20 - 15:30", image:"/event-sponsor1.png"},
  {id:3, card:"speakers", time:"15:30 - 17:30", image:"/event-speakers.png", 
    speakers:[
    {name: "Angeles Lucero Bringas", url:"/speaker-angeles-lucero-bringas.png"},
    {name: "Noelia Sánchez", url:"/speaker-noelia-sanchez.png"},
    {name: "Claudia Lalloz", url:"/speaker-claudia-lalloz.png"},
    {name: "Susana Benavente", url:"/speaker-susana-benavente.png"},
    {name: "César Shlain", url:"/speaker-cesar-shlaim.png"},

  ]},
  {id:4, card:"sponsor2", time:"17:30 - 17:40", image:"/event-sponsor2.png"},
  {id:5, card:"cocktail", time:"17:40 - 19:00", image:"/event-networking.png"},
]