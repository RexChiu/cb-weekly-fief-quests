export const OstariaDirections = ["NW", "NE", "E", "SE", "S", "SW", "W"];
export const LiangyunDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

export const directionNames = {
  N: "North",
  NW: "North West",
  NE: "North East",
  E: "East",
  SE: "South East",
  S: "South",
  SW: "South West",
  W: "West",
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
    Ellbogen: "Ellbogen",
  },
  NE: {
    Saeuferbruecke: "Saeuferbruecke",
    Huegelstadt: "Huegelstadt",
    Weinviertiel: "Weinviertiel",
    Weinrebe: "Weinrebe",
    "Mueller Haus": "Mueller Haus",
  },
  E: {
    Bergdorf: "Bergdorf",
    Kranz: "Kranz",
    Osttal: "Osttal",
    Saegespaene: "Saegespaene",
    Hochweg: "Hochweg",
  },
  SE: {
    Wiesenhuegel: "Wiesenhuegel",
    Steinklippe: "Steinklippe",
    Hain: "Hain",
    Rindermarkt: "Rindermarkt",
    "Das Bollwerk": "Das Bollwerk",
    Eisendorf: "Eisendorf",
  },
  S: {
    Dreiwaelder: "Dreiwaelder",
    Suedwald: "Suedwald",
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
    Wildenhag: "Wildenhag",
  },
  W: {
    "Alter Westberg": "Alter Westberg",
    Westberg: "Westberg",
  },
};
// appending an "empty" object into each fief, as firebase RT Database deletes the parent node if no children
export const LiangyunDisplayOrder = {
  N: {
    Kuanggong: "Kuanggong",
    Xiaocheng: "Xiaocheng",
    Yumi: "Yumi",
    Caishi: "Caishi",
    Heng: "Heng",
  },
  NE: {
    Gaoda: "Gaoda",
    Samat: "Samat",
    Jindai: "Jindai",
    Hongsong: "Hongsong",
    Tsakhir: "Tsakhir",
    Daolu: "Daolu",
  },
  E: {
    Yangma: "Yangma",
    Yuanxin: "Yuanxin",
    "He'an": "He'an",
    Zaoliang: "Zaoliang",
    Heishan: "Heishan",
    Narth: "Narth",
  },
  SE: {
    Hani: "Hani",
    Yixi: "Yixi",
    Tiekuang: "Tiekuang",
    Senlin: "Senlin",
  },
  S: {
    Haoliang: "Haoliang",
    Yue: "Yue",
    "Gao Qiang": "Gao Qiang",
    Kangtu: "Kangtu",
  },
  SW: {
    Jishi: "Jishi",
    Yichu: "Yichu",
    Renlin: "Renlin",
    Dahe: "Dahe",
  },
  W: {
    Hebao: "Hebao",
    Jiedi: "Jiedi",
    Jianggong: "Jianggong",
    Aikou: "Aikou",
    Louge: "Louge",
    Maang: "Maang",
    Shanlu: "Shanlu",
  },
  NW: {
    Helie: "Helie",
    Zandin: "Zandin",
    Lanshi: "Lanshi",
    Mingyu: "Mingyu",
    Baoshao: "Baoshao",
    Danqi: "Danqi",
    Caolai: "Caolai",
  },
};
export const OstariaDataReset = {
  "Alter Westberg": {
    direction: "W",
  },
  Bergdorf: {
    direction: "E",
  },
  "Das Bollwerk": {
    direction: "SE",
  },
  Dreiwaelder: {
    direction: "S",
  },
  "Eerste Feurstelle": {
    direction: "SW",
  },
  Eisendorf: {
    direction: "SE",
  },
  Eisenhuegel: {
    direction: "SW",
  },
  Ellbogen: {
    direction: "NW",
  },
  Fallenberg: {
    direction: "NW",
  },
  Fischerstadt: {
    direction: "SW",
  },
  Gruenefeld: {
    direction: "SW",
  },
  Hain: {
    direction: "SE",
  },
  Hochweg: {
    direction: "E",
  },
  Huegelstadt: {
    direction: "NE",
  },
  Koenigsbruecke: {
    direction: "SW",
  },
  Kranz: {
    direction: "E",
  },
  Kupferbach: {
    direction: "NW",
  },
  Kupferdorf: {
    direction: "NW",
  },
  Mainstadt: {
    direction: "NW",
  },
  Maishofen: {
    direction: "NW",
  },
  "Mueller Haus": {
    direction: "NE",
  },
  Nordtal: {
    direction: "NW",
  },
  Ostensee: {
    direction: "SW",
  },
  Osttal: {
    direction: "E",
  },
  Plattland: {
    direction: "NW",
  },
  Rijkslag: {
    direction: "NW",
  },
  Rindermarkt: {
    direction: "SE",
  },
  Saegespaene: {
    direction: "E",
  },
  Saeuferbruecke: {
    direction: "NE",
  },
  Stark: {
    direction: "NW",
  },
  Steinklippe: {
    direction: "SE",
  },
  Stranddorf: {
    direction: "SW",
  },
  "Suedden Anlegeplatz": {
    direction: "SW",
  },
  Suedwald: {
    direction: "S",
  },
  Weinrebe: {
    direction: "NE",
  },
  Weinviertiel: {
    direction: "NE",
  },
  Westberg: {
    direction: "W",
  },
  Westweg: {
    direction: "NW",
  },
  Wiesenhuegel: {
    direction: "SE",
  },
  Wildenhag: {
    direction: "SW",
  },
};
export const LiangyunDataReset = {
  Aikou: {
    direction: "W",
  },
  Baoshao: {
    direction: "NW",
  },
  Caishi: {
    direction: "N",
  },
  Caolai: {
    direction: "NW",
  },
  Dahe: {
    direction: "SW",
  },
  Danqi: {
    direction: "NW",
  },
  Daolu: {
    direction: "NE",
  },
  "Gao Qiang": {
    direction: "S",
  },
  Gaoda: {
    direction: "NE",
  },
  Hani: {
    direction: "SE",
  },
  Haoliang: {
    direction: "S",
  },
  "He'an": {
    direction: "E",
  },
  Hebao: {
    direction: "W",
  },
  Heishan: {
    direction: "E",
  },
  Helie: {
    direction: "NW",
  },
  Heng: {
    direction: "N",
  },
  Hongsong: {
    direction: "NE",
  },
  Jianggong: {
    direction: "W",
  },
  Jiedi: {
    direction: "W",
  },
  Jindai: {
    direction: "NE",
  },
  Jishi: {
    direction: "SW",
  },
  Kangtu: {
    direction: "S",
  },
  Kuanggong: {
    direction: "N",
  },
  Lanshi: {
    direction: "NW",
  },
  Louge: {
    direction: "W",
  },
  Maang: {
    direction: "W",
  },
  Mingyu: {
    direction: "NW",
  },
  Narth: {
    direction: "E",
  },
  Renlin: {
    direction: "SW",
  },
  Samat: {
    direction: "NE",
  },
  Senlin: {
    direction: "SE",
  },
  Shanlu: {
    direction: "W",
  },
  Tiekuang: {
    direction: "SE",
  },
  Tsakhir: {
    direction: "NE",
  },
  Xiaocheng: {
    direction: "N",
  },
  Yangma: {
    direction: "E",
  },
  Yichu: {
    direction: "SW",
  },
  Yixi: {
    direction: "SE",
  },
  Yuanxin: {
    direction: "E",
  },
  Yue: {
    direction: "S",
  },
  Yumi: {
    direction: "N",
  },
  Zandin: {
    direction: "NW",
  },
  Zaoliang: {
    direction: "E",
  },
};
export const questLevels = [2, 3, 4, 5];
export const materials = [
  { name: "Rough Cotton", rarity: 0 },
  { name: "Coarse Cotton", rarity: 1 },
  { name: "Long Cotton", rarity: 2 },
  { name: "Fine Cotton", rarity: 3 },
  { name: "Siderite Ore", rarity: 0 },
  { name: "Magnetite", rarity: 1 },
  { name: "Limonite", rarity: 2 },
  { name: "Haematite", rarity: 3 },
  { name: "Chalcopyrite", rarity: 0 },
  { name: "Chalcocite", rarity: 1 },
  { name: "Digenite", rarity: 2 },
  { name: "Cuperite", rarity: 3 },
  { name: "Pigskin", rarity: 0 },
  { name: "Sheepskin", rarity: 1 },
  { name: "Goat Hide", rarity: 2 },
  { name: "Cow Hide", rarity: 3 },
  { name: "Pine Timber", rarity: 0 },
  { name: "Ash Timber", rarity: 1 },
  { name: "Oak Timber", rarity: 2 },
  { name: "Cedar Timber", rarity: 3 },
  { name: "Sandstone", rarity: 0 },
  { name: "Limestone", rarity: 1 },
  { name: "Marble", rarity: 2 },
  { name: "Granite", rarity: 3 },
  { name: "Food", rarity: 0 },
  { name: "Jennet", rarity: 1 },
  { name: "Courser", rarity: 2 },
  { name: "Barb", rarity: 3 },
  { name: "Rouncey", rarity: 3 },
  { name: "Common Rebel Melee Weapons", rarity: 0 },
  { name: "Uncommon Rebel Melee Weapons", rarity: 1 },
  { name: "Rare Rebel Melee Weapons", rarity: 2 },
  { name: "Elite Rebel Melee Weapons", rarity: 3 },
  { name: "Common Rebel Ranged Weapons", rarity: 0 },
  { name: "Uncommon Rebel Ranged Weapons", rarity: 1 },
  { name: "Rare Rebel Ranged Weapons", rarity: 2 },
  { name: "Elite Rebel Ranged Weapons", rarity: 3 },
  { name: "Common Rebel Cavalry Weapons", rarity: 0 },
  { name: "Uncommon Rebel Cavalry Weapons", rarity: 1 },
  { name: "Rare Rebel Cavalry Weapons", rarity: 2 },
  { name: "Elite Rebel Cavalry Weapons", rarity: 3 },
  { name: "New Rebel Officer's Personal Items", rarity: 0 },
  { name: "Junior Rebel Officer's Personal Items", rarity: 1 },
  { name: "Senior Rebel Officer's Personal Items", rarity: 2 },
  { name: "Elite Rebel Officer's Personal Items", rarity: 3 },
];
export const materialsCountMap = {
  "Rough Cotton": {
    3: "55000",
    4: "",
    5: "",
  },
  "Coarse Cotton": {
    3: "",
    4: 44000,
    5: "",
  },
  "Long Cotton": {
    3: 18000,
    4: 38000,
    5: "",
  },
  "Fine Cotton": {
    3: 16000,
    4: "",
    5: 34000,
  },
  "Siderite Ore": {
    3: 22000,
    4: "",
    5: "",
  },
  Magnetite: {
    3: "",
    4: 17500,
    5: "",
  },
  Limonite: {
    3: 7000,
    4: 15000,
    5: "",
  },
  Haematite: {
    3: 6500,
    4: "",
    5: 14000,
  },
  Chalcopyrite: {
    3: 14000,
    4: "",
    5: "",
  },
  Chalcocite: {
    3: "",
    4: "",
    5: "",
  },
  Digenite: {
    3: 4500,
    4: 10000,
    5: "",
  },
  Cuperite: {
    3: 4000,
    4: "",
    5: 9000,
  },
  Pigskin: {
    3: 28000,
    4: "",
    5: "",
  },
  Sheepskin: {
    3: "",
    4: 22000,
    5: "",
  },
  "Goat Hide": {
    3: 9000,
    4: 19000,
    5: "",
  },
  "Cow Hide": {
    3: 8000,
    4: "",
    5: 17000,
  },
  "Pine Timber": {
    3: 55000,
    4: "",
    5: "",
  },
  "Ash Timber": {
    3: "",
    4: 44000,
    5: "",
  },
  "Oak Timber": {
    3: 18000,
    4: 38000,
    5: "",
  },
  "Cedar Timber": {
    3: 16000,
    4: "",
    5: 34000,
  },
  Sandstone: {
    3: 74000,
    4: "",
    5: "",
  },
  Limestone: {
    3: "",
    4: 58000,
    5: "",
  },
  Marble: {
    3: 24000,
    4: 50000,
    5: "",
  },
  Granite: {
    3: 22000,
    4: "",
    5: 46000,
  },
  Food: {
    3: 60000,
    4: 100000,
    5: "",
  },
  Jennet: {
    3: "",
    4: "",
    5: "",
  },
  Courser: {
    3: "",
    4: 6,
    5: "",
  },
  Barb: {
    3: 2,
    4: 4,
    5: "",
  },
  Rouncey: {
    3: 2,
    4: 4,
    5: "",
  },
  "Common Rebel Melee Weapons": {
    3: 300,
    4: "",
    5: "",
  },
  "Uncommon Rebel Melee Weapons": {
    3: "",
    4: 180,
    5: "",
  },
  "Rare Rebel Melee Weapons": {
    3: 70,
    4: 140,
    5: "",
  },
  "Elite Rebel Melee Weapons": {
    3: 60,
    4: "",
    5: 120,
  },
  "Common Rebel Ranged Weapons": {
    3: 300,
    4: "",
    5: "",
  },
  "Uncommon Rebel Ranged Weapons": {
    3: "",
    4: 180,
    5: "",
  },
  "Rare Rebel Ranged Weapons": {
    3: 70,
    4: 140,
    5: "",
  },
  "Elite Rebel Ranged Weapons": {
    3: 60,
    4: "",
    5: 120,
  },
  "Common Rebel Cavalry Weapons": {
    3: 60,
    4: "",
    5: "",
  },
  "Uncommon Rebel Cavalry Weapons": {
    3: "",
    4: 36,
    5: "",
  },
  "Rare Rebel Cavalry Weapons": {
    3: 14,
    4: 28,
    5: "",
  },
  "Elite Rebel Cavalry Weapons": {
    3: 12,
    4: "",
    5: 24,
  },
  "New Rebel Officer's Personal Items": {
    3: 30,
    4: "",
    5: "",
  },
  "Junior Rebel Officer's Personal Items": {
    3: "",
    4: 18,
    5: "",
  },
  "Senior Rebel Officer's Personal Items": {
    3: 7,
    4: "",
    5: "",
  },
  "Elite Rebel Officer's Personal Items": {
    3: 6,
    4: "",
    5: 12,
  },
};
export const rarityColours = ["#FFFFFF", "#00D15B", "#3C8AFF", "#A352FF"];
