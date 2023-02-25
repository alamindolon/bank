document.getElementById('submit_btn').addEventListener('click', function () {
    //for input user 
    const userInput = document.getElementById('user_input');
    const userValue = userInput.value;

    // for password
    const passWord = document.getElementById('user_pass');
    const passvalue = passWord.value;

    if (userValue === 'dolon@gmail.com' && passvalue === 'dolon1234') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Please! try again');
    }
})

document.getElementById('forget_btn').addEventListener('click',function(){
    alert('ami jani tumi parba');
})