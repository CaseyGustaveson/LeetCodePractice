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
