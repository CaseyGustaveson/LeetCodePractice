In a queue of n people waiting to purchase tickets, where the front of the line is the 0th person and the back is the (n - 1)th person, the number of tickets each person wants to buy is represented by the 0-indexed integer array tickets of length n.

The array tickets, denoting the desired number of tickets for each person, is given. Each person requires 1 second to purchase a ticket. A person is allowed to buy only 1 ticket at a time and must return to the end of the line instantly to make additional purchases. If a person runs out of tickets to buy, they will exit the line.

The task is to determine the time it takes for the person at position k (0-indexed) to complete purchasing tickets.

Example:

Input: tickets = [7,1,1,1], k = 0
Output: 10

Input: tickets = [2,3,2], k = 2
Output: 6


//make a variable for the person of intrest, or "k" and a variable to count the number of loops until k = 0
//do a for loop, where the first index is subtracted by 1, and then moved to the end of the array.
// once K = 0, return the counter variable.







Suppose you are managing a queue of people at a registration counter. Each person is represented by a pair of integers where the first integer is the person's height and the second integer is the number of people in front of this person who have a height greater than or equal to theirs.

Write a function to reconstruct the queue. The function should take an array of these pairs of integers and return the queue of people in the correct order.

Example:

Input: [ [8, 0], [5, 5], [9, 1], [5, 0], [6, 2], [5, 2] ]
Output: [ [ 5, 0 ], [ 8, 0 ], [ 5, 2 ], [ 9, 1 ], [ 6, 2 ], [ 5, 5 ] ]

//Sort person's height in descending order.
//[ [9,1], [8,0], [6,2], [5,5], [5,2], [5,0] ] 

//If heights are ===, sort by # of people in front of person in ascending order.

//Create empty array, and insert people by their 2nd integer at the that index ([5,0] at index of 0, [5,2] at index of 2, etc.)

// [9, 1] at index 1: [[9, 1]] then 
//[8, 0] at index 0: [[8, 0], [9, 1]] then 
// [6, 2] at index 2: [[8, 0], [9, 1], [6, 2]] then 
//[5, 0] at index 0: [[5, 0], [8, 0], [9, 1], [6, 2]] then 
// [5, 2] at index 2: [[5, 0], [8, 0], [5, 2], [9, 1], [6, 2]] then 
// [5, 5] at index 5: [[5, 0], [8, 0], [5, 2], [9, 1], [6, 2], [5, 5]] then


const queue(s) {
  //take the parameter of s, and sort it by height and people in front
  s.sort((a, b) => {
    //if the params of two people are the same, subtract people in front from eachother.
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    //otherwise, subtract b from a. 

    return b[0] - a[0];
  });
  ////since .sort arranges in ascending order, lesser negative values will go first followed by the larger value

  //build new array to store sorted 
  let array = [];
  //loop through array and add people based on their 2nd int.
  for (let i = 0; i < s.length; i++) {
    //splice manipulates the array, with the current user array in the loop being identified to be added to the array. 0 tells it we don't remove anything, and then lastly inserting the user into the array and the given index.
    array.splice(s[i][1], 0, s[i]);
  }
  return array;
}
