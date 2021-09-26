var dob=document.querySelector("#date-of-birth");
var btn=document.querySelector("#button");
var output=document.querySelector("#output");


function reverseStr(str) {
  return reversedString = str.split("").reverse().join("");
}

function checkPalindrome(str) {
  var reversedString = reverseStr(str);
  return str === reversedString;
}

function getDateAsString(date) {
  var dateInStr = { day: "", month: "", year: "" };

  if (date.day < 10)
   {
    dateInStr.day = "0" + date.day;
  } 
  else
   {
    dateInStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateInStr.month = "0" + date.month;
  } else {
    dateInStr.month = date.month.toString();
  }

  dateInStr.year = date.year.toString();
  return dateInStr;
}

function getDateInAllFormats(date) {
  
  var mmddyyyy = date.month + date.day + date.year;
  var ddmmyyyy = date.day + date.month + date.year;
  var yyyymmdd = date.year + date.month + date.day;
  var mmddyy = date.month + date.day + date.year.slice(-2);
  var ddmmyy = date.day + date.month + date.year.slice(-2);
  var yyddmm = date.year.slice(-2) + date.day + date.month;

  return [mmddyyyy, ddmmyyyy, yyyymmdd, mmddyy, ddmmyy, yyddmm];
}

function getNextDate(date) {
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month = 3;
      }
    } else {
      if (day > 28) {
        day = 1;
        month = 3;
      }
    }
  } else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }

  if (month > 12) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year,
  };
}

function isLeapYear(year) {
  if (year % 400 === 0) 
  return true;

  if (year % 100 === 0)
  return false;

  if (year % 4 === 0)
  return true;

  return false;
}

function getNextPalindromeDate(date) {
  var nextDate = getNextDate(date);
  var ctr = 0;

  while (1) {
    ctr++;
    var dateStr = getDateAsString(nextDate);
    var resultList = checkPalindromeForAllFormats(dateStr);

    for (let i = 0; i < resultList.length; i++) {
      if (resultList[i]) {
        return [ctr, nextDate];
      }
    }
    nextDate = getNextDate(nextDate);
  }
}

function checkPalindromeForAllFormats(date)
{
  var palindromeList = [];
  var dateFormatList = getDateInAllFormats(date);

  for (var i = 0; i < dateFormatList.length; i++)
  {
    var result = checkPalindrome(dateFormatList[i]);
    palindromeList.push(result);
  }
  return palindromeList;
}

function check() 
{
  var bdayString = dob.value; // order of date here is y-m-d

  if (bdayString !== "") 
  {
    var date = bdayString.split("-");
    var yyyy = date[0];

    var mm = date[1];
    var dd = date[2];

    var date = 
    {
      day: Number(dd),
      month: Number(mm),
      year: Number(yyyy),
    };                        // order of date here is d-m-y

    var dateStr = getDateAsString(date);
    var allFormatList = checkPalindromeForAllFormats(dateStr);
    var isPalindrome = false;

    for (let i = 0; i < allFormatList.length; i++)
    {
      if (allFormatList[i]) 
      {
        isPalindrome = true;
        break;
      }
    }

    if (!isPalindrome) 
    {
      const [ctr, nextDate] = getNextPalindromeDate(date);
      output.innerText = `The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you need to wait for ${ctr} days.`;
    } 
    else
    {
      output.innerText = "The odds of being alive on one's palindromic birthday are about 1 in 120. You are that ONE. Congratulations, your birthday is a palindrome!! ";
    }
  }
}

btn.addEventListener("click", check);