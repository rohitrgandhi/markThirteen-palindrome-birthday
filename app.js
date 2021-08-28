//taking variables from HTML world to Javascript world
const dob=document.querySelector("#date-of-birth");
const output=document.querySelector("#output");
const checkButton=document.querySelector("#button");

//when button is clicked check function is called.
checkButton.addEventListener("click", check);

function check()
{
    let birthDate=dob.value;
    calculateSum(birthDate);
}
function calculateSum(birthDate) //returns addition of digits
{   
    //this removes dashes to make it a string of numbers
    birthDate=birthDate.replaceAll("-","");
    let count=birthDate.length;
    let add=0;
    for(let i=0;i<count;i++)
    {   
        if
        (((birthDate.charAt(i))===((birthDate.charAt((count-1)-i)))))
        {
        add=add+1;
        }
    }
        if (add===8)
        {
            output.innerText="Your birthday is palindrome"
        }
        else
        {
            output.innerText="ultapulta"
        }
    
    
}


// checked in console
  /* const date="02-02-2020"
  const d=date.replaceAll("-","")
  const l=date.length;
  var count=0
  for(let i=0;i<8;i++){if(d.charAt(i)===d.charAt(l-i)){count=count+1}else{"hi here"}} if(count===8){console.log("done")} */