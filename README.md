# markThirteen (Build Basics)

## If the entered birthdate is not a palindrome:

Problem Statement
- Ask the user to input his/her birth date
- Check if the entered birthdate is a palindrome, if yes, show a message
If the entered birthdate is not a palindrome:
1. Find the nearest palindrome date
2. Find how many days they missed

**Step 1: Building the logic**
**Ex-01: Write a function in JS that takes a string and reverses it**

You can use inbuilt javascript methods like split, reverse and join


**Ex-02: Write a JS function to check for palindrome**

Use the reverse string function you made in Ex.1 for this


**Ex-03: Write a function that converts the date from number to string**

// Input: { day: 14, month: 9, year: 2020 }
// Output: { day: '14', month: '09', year: '2020' }

// Take care of '0' when day/month is less than 10

Solution

- .toString() method.

**Ex-04: Write a JS function that takes a date and returns all variations of it**

Your function will return an array of strings for these date formats

// DD-MM-YYYY
// MM-DD-YYYY
// YYYY-MM-DD
// DD-MM-YY
// MM-DD-YY
// YY-MM-DD

// The hyphen (-) is for representation only, return the strings without hyphens

// Input: { day: 10, month: 9, year: 2020 }
// output: ['10092020', '09102020', '20200910', '091020', '100920', '200910']

Solution

- slice() method.

**Ex-05: Write a function that checks palindrome for all the date formats**

Use the previous function to get all formats and loop through it

// Input: { day: '10', month: '09', year: '2020' }

// Output: Array of six elements having boolean value for each date format
  > [false, false, false, false, false, false]

Solution

- .push() array method.

**Ex-06: Find the next palindrome date, also how many days are in between**

If the current date is not a palindrome, find the next palindrome date

// Input: { day: 5, month: 1, year: 2020 }
// Output: [28, { day: 2, month: 2, year: 2020 }]

## Step 2: Building the UI

**Ex-08: Get date from user and console.log it on button click**

// Use input element for getting date
// Simply console.log the input date when the user clicks the button

**Ex-09: Joining all the dots**

Stitch all the functions together to build the app

If the current date is not a palindrome, find the next palindrome date

Currently, we are showing days even when the missed by day is 1
// Use a ternary operator to decide whether 'day' or 'days' should be printed
Use CSS to style the web app, you can use SVG for background, cakes, and balloon images for a more attractive look
Use setTimeout() to create artificial delay and show "Processing..." text or gif to make your user experience even better
