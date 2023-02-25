

document.getElementById('deposite_btn').addEventListener('click',function()
{
    //deposite amount 
    const depositeFiled = document.getElementById('deposite_filed');
    const newdepositeString = depositeFiled.value;
    const newdepositeAmount = parseFloat(newdepositeString);

   
    const depositetext = document.getElementById('deposite_amount');
    const predepositestring= depositetext.innerText;
    const predepositeAmount = parseFloat(predepositestring);

    const totaldeposite = newdepositeAmount + predepositeAmount;

   depositetext.innerText = totaldeposite;
   depositeFiled.value = '';

   const balanceText = document.getElementById('fixbalace');
   const balanceString = balanceText.innerText;
   
   const balanceNum = parseFloat(balanceString);

   const totalbalance = balanceNum + newdepositeAmount;
   balanceText.innerText = totalbalance;

})

document.getElementById('withdraw_btn').addEventListener('click',function()
{
    //deposite amount 
    const withdrawFiled = document.getElementById('withdraw_filed');
    const newWithdrawString = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);

   
    const withdrawtext = document.getElementById('withdraw_amount');
    const prewithdrawstring= withdrawtext.innerText;
    const prewithdrawAmount = parseFloat(prewithdrawstring);

    const totalwithdraw = newWithdrawAmount + prewithdrawAmount;

    withdrawtext.innerText = totalwithdraw;
    withdrawFiled.value = '';

   const balanceText = document.getElementById('fixbalace');
   const balanceString = balanceText.innerText;
   
   const balanceNum = parseFloat(balanceString);

   const totalbalance = balanceNum - newWithdrawAmount;
   balanceText.innerText = totalbalance;

})