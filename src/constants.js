export const OstariaDirections = ["NW", "NE", "E", "SE", "S", "SW", "W"];
export const LiangyunDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

export const directionNames = {
  NW: "North West",
  NE: "North East",
  E: "East",
  SE: "South East",
  S: "South",
  SW: "South West",
  W: "West"
};
// order to display the quests in a neat way
export const OstariaDisplayOrder = {
  NW: {
    Westweg: "Westweg",
    Mainstadt: "Mainstadt",
    Nordtal: "Nordtal",
    Fallenberg: "Fallenberg",
    Kupferbach: "Kupferbach",
    Stark: "Stark",
    Kupferdorf: "Kupferdorf",
    Plattland: "Plattland",
    Rijkslag: "Rijkslag",
    Maishofen: "Maishofen",
    Ellbogen: "Ellbogen"
  },
  NE: {
    Saeuferbruecke: "Saeuferbruecke",
    Huegelstadt: "Huegelstadt",
    Weinviertiel: "Weinviertiel",
    Weinrebe: "Weinrebe",
    "Mueller Haus": "Mueller Haus"
  },
  E: {
    Bergdorf: "Bergdorf",
    Kranz: "Kranz",
    Osttal: "Osttal",
    Saegespaene: "Saegespaene",
    Hochweg: "Hochweg"
  },
  SE: {
    Wiesenhuegel: "Wiesenhuegel",
    Steinklippe: "Steinklippe",
    Hain: "Hain",
    Rindermarkt: "Rindermarkt",
    "Das Bollwerk": "Das Bollwerk",
    Eisendorf: "Eisendorf"
  },
  S: {
    Dreiwaelder: "Dreiwaelder",
    Suedwald: "Suedwald"
  },
  SW: {
    Koenigsbruecke: "Koenigsbruecke",
    Fischerstadt: "Fischerstadt",
    Ostensee: "Ostensee",
    "Suedden Anlegeplatz": "Suedden Anlegeplatz",
    Stranddorf: "Stranddorf",
    "Eerste Feurstelle": "Eerste Feurstelle",
    Eisenhuegel: "Eisenhuegel",
    Gruenefeld: "Gruenefeld",
    Wildenhag: "Wildenhag"
  },
  W: {
    "Alter Westberg": "Alter Westberg",
    Westberg: "Westberg"
  }
};
// appending an "empty" object into each fief, as firebase RT Database deletes the parent node if no children
export const LiangyunDisplayOrder = {
  N: {
    Kuanggong: "Kuanggong",
    Xiaocheng: "Xiaocheng",
    Yumi: "Yumi",
    Caishi: "Caishi",
    Heng: "Heng"
  },
  NE: {
    Gaoda: "Gaoda",
    Samat: "Samat",
    Jindai: "Jindai",
    Hongsong: "Hongsong",
    Tsakhir: "Tsakhir",
    Daolu: "Daolu"
  },
  E: {
    Yangma: "Yangma",
    Yuanxin: "Yuanxin",
    "He'an": "He'an",
    Zaoliang: "Zaoliang",
    Heishan: "Heishan",
    Narth: "Narth"
  },
  SE: {
    Hani: "Hani",
    Yixi: "Yixi",
    Tiekuang: "Tiekuang",
    Senlin: "Senlin"
  },
  S: {
    Haoliang: "Haoliang",
    Yue: "Yue",
    "Gao Qiang": "Gao Qiang",
    Kangtu: "Kangtu"
  },
  SW: {
    Jishi: "Jishi",
    Yichu: "Yichu",
    Renlin: "Renlin",
    Dahe: "Dahe"
  },
  W: {
    Hebao: "Hebao",
    Jiedi: "Jiedi",
    Jianggong: "Jianggong",
    Aikou: "Aikou",
    Louge: "Louge",
    Maang: "Maang",
    Shanlu: "Shanlu"
  },
  NW: {
    Helie: "Helie",
    Zandin: "Zandin",
    Lanshi: "Lanshi",
    Mingyu: "Mingyu",
    Baoshao: "Baoshao",
    Danqi: "Danqi",
    Caolai: "Caolai"
  }
};
export const OstariaDataReset = {
  "Alter Westberg": {
    direction: "W"
  },
  Bergdorf: {
    direction: "E"
  },
  "Das Bollwerk": {
    direction: "SE"
  },
  Dreiwaelder: {
    direction: "S"
  },
  "Eerste Feurstelle": {
    direction: "SW"
  },
  Eisendorf: {
    direction: "SE"
  },
  Eisenhuegel: {
    direction: "SW"
  },
  Ellbogen: {
    direction: "NW"
  },
  Fallenberg: {
    direction: "NW"
  },
  Fischerstadt: {
    direction: "SW"
  },
  Gruenefeld: {
    direction: "SW"
  },
  Hain: {
    direction: "SE"
  },
  Hochweg: {
    direction: "E"
  },
  Huegelstadt: {
    direction: "NE"
  },
  Koenigsbruecke: {
    direction: "SW"
  },
  Kranz: {
    direction: "E"
  },
  Kupferbach: {
    direction: "NW"
  },
  Kupferdorf: {
    direction: "NW"
  },
  Mainstadt: {
    direction: "NW"
  },
  Maishofen: {
    direction: "NW"
  },
  "Mueller Haus": {
    direction: "NE"
  },
  Nordtal: {
    direction: "NW"
  },
  Ostensee: {
    direction: "SW"
  },
  Osttal: {
    direction: "E"
  },
  Plattland: {
    direction: "NW"
  },
  Rijkslag: {
    direction: "NW"
  },
  Rindermarkt: {
    direction: "SE"
  },
  Saegespaene: {
    direction: "E"
  },
  Saeuferbruecke: {
    direction: "NE"
  },
  Stark: {
    direction: "NW"
  },
  Steinklippe: {
    direction: "SE"
  },
  Stranddorf: {
    direction: "SW"
  },
  "Suedden Anlegeplatz": {
    direction: "SW"
  },
  Suedwald: {
    direction: "S"
  },
  Weinrebe: {
    direction: "NE"
  },
  Weinviertiel: {
    direction: "NE"
  },
  Westberg: {
    direction: "W"
  },
  Westweg: {
    direction: "NW"
  },
  Wiesenhuegel: {
    direction: "SE"
  },
  Wildenhag: {
    direction: "SW"
  }
};
export const LiangyunDataReset = {
  Aikou: {
    direction: "W"
  },
  Baoshao: {
    direction: "NW"
  },
  Caishi: {
    direction: "N"
  },
  Caolai: {
    direction: "NW"
  },
  Dahe: {
    direction: "SW"
  },
  Danqi: {
    direction: "NW"
  },
  Daolu: {
    direction: "NE"
  },
  "Gao Qiang": {
    direction: "S"
  },
  Gaoda: {
    direction: "NE"
  },
  Hani: {
    direction: "SE"
  },
  Haoliang: {
    direction: "S"
  },
  "He'an": {
    direction: "E"
  },
  Hebao: {
    direction: "W"
  },
  Heishan: {
    direction: "E"
  },
  Helie: {
    direction: "NW"
  },
  Heng: {
    direction: "N"
  },
  Hongsong: {
    direction: "NE"
  },
  Jianggong: {
    direction: "W"
  },
  Jiedi: {
    direction: "W"
  },
  Jindai: {
    direction: "NE"
  },
  Jishi: {
    direction: "SW"
  },
  Kangtu: {
    direction: "S"
  },
  Kuanggong: {
    direction: "N"
  },
  Lanshi: {
    direction: "NW"
  },
  Louge: {
    direction: "W"
  },
  Maang: {
    direction: "W"
  },
  Mingyu: {
    direction: "NW"
  },
  Narth: {
    direction: "E"
  },
  Renlin: {
    direction: "SW"
  },
  Samat: {
    direction: "NE"
  },
  Senlin: {
    direction: "SE"
  },
  Shanlu: {
    direction: "W"
  },
  Tiekuang: {
    direction: "SE"
  },
  Tsakhir: {
    direction: "NE"
  },
  Xiaocheng: {
    direction: "N"
  },
  Yangma: {
    direction: "E"
  },
  Yichu: {
    direction: "SW"
  },
  Yixi: {
    direction: "SE"
  },
  Yuanxin: {
    direction: "E"
  },
  Yue: {
    direction: "S"
  },
  Yumi: {
    direction: "N"
  },
  Zandin: {
    direction: "NW"
  },
  Zaoliang: {
    direction: "E"
  }
};
export const questLevels = [2, 3, 4, 5];
export const materials = [
  "Rough Cotton",
  "Coarse Cotton",
  "Long Cotton",
  "Fine Cotton",
  "Siderite Ore",
  "Magnetite",
  "Limonite",
  "Haematite",
  "Chalcopyrite",
  "Chalcocite",
  "Digenite",
  "Cuperite",
  "Pigskin",
  "Sheepskin",
  "Goat Hide",
  "Cow Hide",
  "Pine Timber",
  "Ash Timber",
  "Oak Timber",
  "Cedar Timber",
  "Sandstone",
  "Limestone",
  "Marble",
  "Granite",
  "Food",
  "Jennet",
  "Courser",
  "Barb",
  "Rouncey",
  "Common Rebel Melee Weapons",
  "Uncommon Rebel Melee Weapons",
  "Rare Rebel Melee Weapons",
  "Elite Rebel Melee Weapons",
  "Common Rebel Ranged Weapons",
  "Uncommon Rebel Ranged Weapons",
  "Rare Rebel Ranged Weapons",
  "Elite Rebel Ranged Weapons",
  "Common Rebel Cavalry Weapons",
  "Uncommon Rebel Cavalry Weapons",
  "Rare Rebel Cavalry Weapons",
  "Elite Rebel Cavalry Weapons",
  "New Rebel Officer's Personal Items",
  "Junior Rebel Officer's Personal Items",
  "Senior Rebel Officer's Personal Items",
  "Elite Rebel Officer's Personal Items"
];
export const materialCount = [
  2,
  4,
  6,
  7,
  9,
  12,
  14,
  18,
  24,
  30,
  60,
  70,
  120,
  140,
  180,
  300,
  4000,
  4500,
  6500,
  7000,
  8000,
  9000,
  10000,
  14000,
  15000,
  16000,
  18000,
  22000,
  24000,
  28000,
  34000,
  38000,
  44000,
  50000,
  55000,
  58000,
  60000,
  74000
];
