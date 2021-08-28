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
        (((birthDate.charAt(i))===((birthDate.charAt(count-i)))))
        {
        add=add+1;
        }
        else{
            output.innerText="i am here";
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

