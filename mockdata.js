const faker = require('faker');

// generate 100 restuarants
for (let i = 0; i < 100; i++) {
  const restaurantName = faker.company.companyName();
  console.log(restaurantId, restaurantName);
}

//generate reviews for each reataurant
for (let i = 0; i < 100; i++) {
const userName = faker.internet.userName();
const rating = faker.random.number({'min': 1,'max': 5});
const review = faker.lorem.paragraph();
console.log(userName, rating, review);
}