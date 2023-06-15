// Iteration 1: Names and Input
let hacker1 = "Mark";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "David";
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
// 3.1.
hacker1.toUpperCase();
let nameSpaced = '';

for (let i = 0; i < hacker1.length; i++) {
    nameSpaced += hacker1[i].toUpperCase() + " ";
}

console.log(nameSpaced.trim());

//3.2
let nameBackwards = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameBackwards += hacker2[i];
}
console.log(nameBackwards);


//3.3
hacker1.toUpperCase();
hacker2.toUpperCase();

if(hacker1.localeCompare(hacker2)) {
    console.log(`The driver's name goes first.`);
} else if(hacker2.localeCompare(hacker1)) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}




// Bonus 1
const longText = `this is a test

let's see if that works

yes?`
const longerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra, felis ac sagittis efficitur, nisl est ullamcorper urna, id hendrerit massa lorem eget tellus. In congue porta ante et porta. Vivamus bibendum viverra cursus. Suspendisse lacinia justo orci, sit amet faucibus massa condimentum ac. Morbi porta augue nec ipsum tristique, non sodales urna dapibus. Nunc tristique egestas massa, ut molestie mauris ullamcorper at. Integer iaculis accumsan augue, et dapibus dui congue a. Pellentesque eu vestibulum nisi.

Sed eget convallis quam, vitae egestas purus. Vivamus bibendum tellus gravida efficitur porttitor. Aenean finibus convallis leo, id varius lorem laoreet id. Donec posuere eleifend massa eget elementum. Nullam eleifend volutpat neque, quis efficitur urna accumsan sed. Etiam bibendum, mauris varius tincidunt malesuada, lorem tellus maximus arcu, vitae imperdiet lacus magna vitae nunc. Aenean pulvinar risus sit amet vehicula tincidunt. Nunc posuere felis in erat venenatis, auctor facilisis est tristique. Aenean interdum ipsum sed elit sagittis aliquet. Nam a augue sollicitudin, porttitor erat ut, varius risus.

Mauris ut dapibus felis. Phasellus eget elit lorem. Integer semper non mi quis dictum. Suspendisse a lacus lorem. Vestibulum eget interdum eros, et sollicitudin felis. Fusce sodales non mauris fermentum congue. Praesent hendrerit maximus massa, ut gravida lectus porta vel. Nunc ultrices vestibulum libero, in blandit nisi egestas quis.`;



let wordCounter = 1;
let specificWordCounter = 0;

for (let i = 0; i < longText.length; i++) {
    if(longText[i] === " " || longText.substring(i, i+2) === "\n\n") {
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