document.getElementById('deposite_btn').addEventListener('click',function()
{
    //deposite amount 
    const depositeFiled = document.getElementById('deposite_filed');
    const depositevalue = depositeFiled.value;

    const depositetext = document.getElementById('deposite_amount');
//    const depositeAmount= depositeAmount.innerText;
   depositetext.innerText = depositevalue;

})