// 

// function run(title, description) {
//     let result;
//     if(title.search("A") >=0 && description.search("A") >=0){
//         result = true;
//     }else{
//         result = false;
//     }
//     return result;
// }

function run(title) {
    let string = "Javascript";
    let index = title.search("Javascript");
    let language = title.slice(index,index+string.length);
    let rest = title.slice(index+string.length);
    return `Language is ${language} and rest is ${rest}`;
}

// let a = "Học Javascript tại F8";
// a.toLowerCase();
// b.toUpperCase();
// function run(a, b) {
//     a = a.toLowerCase()
//     b = b.toUpperCase();
//     return a + '|' + b;
//     // console.log(a,b)
// }



// let a = "HI";
// let b = "hi";
// console.log(a.toLowerCase())
// console.log(run('HI','hi'))
// function run(anArray) {
//     if(anArray.length <=3){
//         anArray.shift();
//     }else{ 
//         anArray.pop();
//         anArray.pop();
//     }

//     return anArray;
// }
// console.log()


// function run(animals) {
//     if(animals.length <=0 ){
//         animals.push('Cat','Mouse');
//     }else if(animals.length === 1){
//         animals.unshift('Elephant');
//     }else if(animals.length >=2){
//         animals.splice(1,1);
//         animals.push('Monkey','Tiger');
//     }
//     return animals;
// }

// console.log(run(['Cat', 'Mouse','Dat']))
// function sum(a,b){
//     if(typeof a === 'number' && typeof b ==='number'){
//         return a + b;
//     }else{
//         return false;
//     }
// }
// console.log(sum(-1,'abc'))
// function checkPositiveInteger(number){
//     if(number > 0 && !isNaN(number) ){
//         return true;
//     }
//     return false
// }
// console.log(checkPositiveInteger('aaaaa'))
function stringInString(needle , haystack){
    if(typeof needle ==='string' && typeof haystack ==='string'){
        if(haystack.includes(needle)){
            return true
        }
        return false
    }
    return false
} 
console.log(stringInString('m','asdfasdf'))