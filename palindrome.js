let text = document.getElementById('post');

function palindrome(){
    let entry = document.getElementById('text1').value;
    let cleanEntry = entry.replace(/[^a-zA-Z0-9 ]/g, '');
    let lowerCaseEntry = cleanEntry.toLowerCase();
 let reverseString = lowerCaseEntry.split("").reverse().join("");
if (lowerCaseEntry === reverseString) {
    let answer = document.createElement('p');
    answer.textContent = entry + ' - Yes its a bloody Palindrome!';
    text.append(answer);
    console.log("Yes it's a bloody Palindrome!");
} else {
    let answer = document.createElement('p');
    answer.textContent = entry + ' - No Palindrome today cowboy!';
    text.append(answer);
    console.log("No Palindrome today cowboy!");
}
 
}

const chips = document.getElementById('btn1');
chips.addEventListener('click', palindrome);