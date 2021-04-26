// Created By: Patrick Gemmell
// Created On: April 2021
// This function takes the order and amount of
// food the user wants to cook and returns the
// time expected to cook

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Constants
const pizzaCookingTime = 0.75;
const subCookingTime = 1;
const soupCookingTime = 1.75;

try {
  // Input
  rl.question('Enter the food you would like cooked (pizza, sub or soup: ',
      function saveInput(foodChosen) {
        const foodChosenUpperCase = foodChosen.toUpperCase();
        console.log();

        rl.question('Enter how many items you would like to be cooked: ',
            function saveInput(numberOfItems) {
              console.log();

              // Process and outputs
              if (numberOfItems <= 3 && numberOfItems >= 1) {
                if (foodChosenUpperCase == 'PIZZA') {
                // Output time for cooking pizzas
                  const cookingTime0 = pizzaCookingTime +
                             (0.5 * pizzaCookingTime * (numberOfItems - 1));
                  console.log('The food will be cooked in', cookingTime0,
                      'minutes.');
                } else if (foodChosenUpperCase == 'SUB') {
                // Output time for cooking subs
                  const cookingTime1 = subCookingTime +
                             (0.5 * subCookingTime * (numberOfItems - 1));
                  console.log('The food will be cooked in', cookingTime1,
                      'minutes.');
                } else if (foodChosenUpperCase == 'SOUP') {
                // Output time for cooking cups of soup
                  const cookingTime2 = soupCookingTime +
                             (0.5 * soupCookingTime * (numberOfItems - 1));
                  console.log('The food will be cooked in', cookingTime2,
                      'minutes.');
                } else {
                // Output if input is not one of the three foods
                  console.log('ERROR: Invalid Input');
                }
              } else {
                console.log('ERROR: Invalid Input');
              }
              rl.close();
            });
      });
  // Catches and tells the user that an improper input was entered
} catch (err) {
  console.log('ERROR: Invalid Input');
}
