/* exported orderHistory */
var orderHistory = [
  {
    orderPlaced: "August 4, 2020",
    orderDelivered: "August 8, 2020",
    orderNumber: "114-3941689-8772232",
    shipTo: "JS Masher",
    total: 34.00,
    items: [{
      itemName: "JavaScript for impatient programmers",
      author: "Rauschmayer, Dr.Axel",
      returnWindow: "September 7, 2020",
      cost: 31.55
    }]
  },
  {
    orderPlaced: "July 19, 2020",
    orderDelivered: "July 20, 2020",
    orderNumber: "113-9984278-128057",
    shipTo: "JS Masher",
    deliveryNotes: "Your package was delivered. It was handed directly to resident.",
    total: 44.53,
    items: [{
      itemName: "The Timeless Way of Building",
      author: "Alexander, Christopher",
      returnWindow: "August 19, 2020",
      cost: 41.33
    }]
  },
  {
    orderPlaced: "July 4, 2020",
    orderDelivered: "July 7, 2020",
    orderNumber: "114-2875557-9059409",
    shipTo: "JS Masher",
    deliveryNotes: "Your package was delivered. It was handed directly to resident.",
    total: 17.22,
    items: [{
      itemName: "Gamecub Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter",
      returnWindow: "August 5, 2020",
      cost: 15.98
    }]
  },
  {
    orderPlaced: "July 3, 2020",
    orderDelivered: "July 5, 2020",
    orderNumber: "113-2883177-2648248",
    shipTo: "JS Masher",
    total: 138.93,
    items: [{
      itemName: "GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)",
      returnWindow: "August 4, 2020",
      cost: 94.95
    },
      {
        itemName: "The Art of Sql",
        author: "Faroult, Stephane",
        returnWindow: "August 4, 2020",
        cost: 33.99
    }]
  }
];

console.log(orderHistory);
