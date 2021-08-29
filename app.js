//taking variables from HTML world to Javascript world
const dob=document.querySelector("#date-of-birth");
const output=document.querySelector("#output");
const checkButton=document.querySelector("#button");

//when button is clicked check function is called.
checkButton.addEventListener("click", timeBomb);
// checkButton.addEventListener("click", checkPalindrome);
function properStr(){
    let birthDate=dob.value;
    birthDate=birthDate.replaceAll("-","");
    return birthDate;
}

function reverseStrConverter(birthDate){
    var splitStr=birthDate.split('');
    var reverseStr=splitStr.reverse();
    var joinreverseStr=reverseStr.join('');
    return joinreverseStr;
}
function checkPalindrome(){
    var birthDate=properStr(dob);
    var reverseBirthDate=reverseStrConverter(birthDate);
    return reverseBirthDate===birthDate;
    // if( reverseBirthDate===birthDate){
    //     output.innerText="I am a P";
    // }
    // else{
    //     output.innerText="I am not a P";
    // }
}


function timeBomb()
{
    // var dateStr=[day='', month='', year=''];
    var year=2000;
        if(year % 400 === 0)
        {
          output.innerText= "400";
        }
        if(year % 100 === 0)
        {
          output.innerText= "100";
        }
        if(year % 4 === 0)
        {
          output.innerText= "4";
        }
        output.innerText= "false";
    }
