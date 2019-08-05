export const directions = ["NW", "NE", "E", "SE", "S", "SW", "W"];
export const directionNames = {
  NW: "North West",
  NE: "North East",
  E: "East",
  SE: "South East",
  S: "South",
  SW: "South West",
  W: "West"
};
// appending an "empty" object into each fief, as firebase RT Database deletes the parent node if no children
export const dataReset = {
  E: {
    Bergdorf: { empty: "empty" },
    Hochweg: { empty: "empty" },
    Kranz: { empty: "empty" },
    Osttal: { empty: "empty" },
    Saegespaene: { empty: "empty" }
  },
  NE: {
    Huegelstadt: { empty: "empty" },
    "Mueller Haus": { empty: "empty" },
    Saeuferbruecke: { empty: "empty" },
    Weinrebe: { empty: "empty" },
    Weinviertiel: { empty: "empty" }
  },
  NW: {
    Ellbogen: { empty: "empty" },
    Fallenberg: { empty: "empty" },
    Kupferbach: { empty: "empty" },
    Kupferdorf: { empty: "empty" },
    Mainstadt: { empty: "empty" },
    Maishofen: { empty: "empty" },
    Nordtal: { empty: "empty" },
    Plattland: { empty: "empty" },
    Rijkslag: { empty: "empty" },
    Stark: { empty: "empty" },
    Westweg: { empty: "empty" }
  },
  S: {
    Dreiwaelder: { empty: "empty" },
    Suedwald: { empty: "empty" }
  },
  SE: {
    "Das Bollwerk": { empty: "empty" },
    Eisendorf: { empty: "empty" },
    Hain: { empty: "empty" },
    Rindermarkt: { empty: "empty" },
    Steinklippe: { empty: "empty" },
    Wiesenhuegel: { empty: "empty" }
  },
  SW: {
    "Eerste Feurstelle": { empty: "empty" },
    Eisenhuegel: { empty: "empty" },
    Fischerstadt: { empty: "empty" },
    Gruenefeld: { empty: "empty" },
    Koenigsbruecke: { empty: "empty" },
    Ostensee: { empty: "empty" },
    Stranddorf: { empty: "empty" },
    "Suedden Anlegeplatz": { empty: "empty" },
    Wildenhag: { empty: "empty" }
  },
  W: {
    "Alter Westberg": { empty: "empty" },
    Westberg: { empty: "empty" }
  }
};
export const questLevels = [3, 4, 5];
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
  4500,
  6500,
  8000,
  9000,
  10000,
  14000,
  16000,
  18000,
  22000,
  24000,
  34000,
  44000,
  50000,
  55000,
  60000
];
