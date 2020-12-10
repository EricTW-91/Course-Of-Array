let myString = 'have a good day.';
let myStringArray = myString.split(' ');

for (i = 0; i < myStringArray.length; i++) {
    let myWordArray = myStringArray[i].split('');
    myWordArray[0] = myWordArray[0].toUpperCase();
    myStringArray[i] = myWordArray.join('');
}

console.log(myStringArray.join(' '));

