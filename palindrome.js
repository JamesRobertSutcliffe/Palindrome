
function palindrome(){
    let entry = document.getElementById('text1').value;
    let cleanEntry = entry.replace(/[^a-zA-Z0-9 ]/g, '');
    let lowerCaseEntry = cleanEntry.toLowerCase();

    //create reverse of lower case entry//
    // the if else statements writing html and apppending whether entry is palindrone // 

    console.log(lowerCaseEntry);
}

const chips = document.getElementById('btn1');
chips.addEventListener('click', palindrome);