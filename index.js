// Iteration 1: Names and Input
const hacker1 = "Mark";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "David";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i]);
}

for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
}


if(hacker1.charCodeAt(0) < hacker2.charCodeAt(0)) {
    console.log(`The driver's name goes first.`);
} else if(hacker1.charCodeAt(0) > hacker2.charCodeAt(0)) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else if(hacker1 === hacker2){
    console.log(`What?! You both have the same name?`);
}else {
    console.log("No order applicable");
}




// Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue vitae nunc at facilisis. Nulla porta libero ut malesuada condimentum. Sed ullamcorper ipsum orci, vitae finibus est malesuada euismod. In vehicula sem non egestas hendrerit. Nam interdum purus eget tellus porta commodo. Cras nec eleifend tellus. Maecenas id ullamcorper diam, quis venenatis massa. Morbi tincidunt a mauris ut viverra. Duis in ligula volutpat, tincidunt velit vitae, molestie tortor. Quisque facilisis nisi et sagittis hendrerit. Pellentesque venenatis felis tortor, in auctor elit eleifend tempus. Morbi aliquam dolor nec mauris tincidunt ultrices. Integer quis elit et urna vulputate sollicitudin consectetur eget dolor. Sed dictum semper tincidunt. Nam eget ligula pellentesque, volutpat lectus sed, pulvinar nisi. Curabitur vitae maximus orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse semper, nisl et gravida auctor, urna est tempus arcu, sed faucibus nulla mauris a nunc. Proin ornare risus non eros vulputate consectetur. Suspendisse pretium risus sed pulvinar rutrum. Maecenas ac felis tempor, blandit felis non, finibus mi. Etiam quis nibh at nunc gravida lobortis sit amet in urna. In odio nisi, interdum ut egestas quis, efficitur sit amet purus. Aenean auctor, eros at laoreet feugiat, leo metus porta metus, faucibus posuere erat nibh eu elit. Fusce eget turpis eget nunc imperdiet sollicitudin in quis tortor. Nulla pharetra ultricies tortor id porta. Integer id lectus ut neque lobortis aliquet vitae sed sem. Pellentesque vel diam eleifend, vehicula orci non, sagittis sem. Aliquam scelerisque id purus et consequat. Pellentesque ligula quam, pulvinar vel laoreet id, dignissim et tellus. Fusce eget semper turpis. Ut sollicitudin quam mi, vel ullamcorper dui facilisis eget. Ut varius nisl eu condimentum congue. Pellentesque porta felis eget nulla venenatis finibus. Donec efficitur lacus a dolor aliquet, et aliquam urna consectetur. Praesent pulvinar consequat sollicitudin. Maecenas feugiat maximus purus dapibus placerat. Etiam molestie est ut risus congue, nec imperdiet odio pharetra. Aliquam tincidunt tortor congue, scelerisque libero non, laoreet risus.";

let wordCounter = 0;
let specificWordCounter = 0;

for (let i = 0; i < longText.length; i++) {
    if(longText[i] === " ") {
        wordCounter += 1;
    }


    if (longText.substring(i+4, i) === " et "){
        specificWordCounter +=1; 
    }
}

console.log(wordCounter, specificWordCounter);



// Bonus 2

/* steps:
1) remove whitespace and symbols
2) nested for loop (forward / backward comparison)
*/
let sentence = "Stack cats. ".toLowerCase();
const replaced = sentence.replace(/[^a-z]/gi, '');
let palindrome = true;


for (let i = 0; i < replaced.length; i += 1) {

        if(replaced[i] === replaced[replaced.length - 1 - i]){
            continue;
        } else {
            palindrome = false;
            break;
        }
}

if (palindrome){
    console.log("It's a palindrome");
} else {
    console.log("No palindrome");
}