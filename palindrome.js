

function palindrome(){
    let entry = document.getElementById('text1').value;
    console.log(entry);
}

const chips = document.getElementById('btn1');
chips.addEventListener('click', palindrome);