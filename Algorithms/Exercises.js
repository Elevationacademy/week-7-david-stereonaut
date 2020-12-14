// Exercise 1

const printStars = function (num) {
    let stars = '*'
    for (let i=1; i <= num; i++){
        console.log(stars)
        stars = stars + '*'
    }
}
printStars(5)

// Exercise 2

const printBackwardsStars = function (num) {
    let stars = '*'.repeat(num)
    for (let i=1; i <= num; i++){
        console.log(stars)
        stars = stars.slice(0, -1);
    }
}
printBackwardsStars(6)

// Exercise 3

const printStarSeries = function (num, count) {
    for (let i=0; i < count; i++) {
        let stars = ''
        for (let j=0; j < ((num * 2)); j++) {
            if (j < num) {
                console.log(stars)
                stars = stars + '*'
            } else {
                console.log(stars)
                stars = stars.slice(0, -1);
            }
        }
    }
}
printStarSeries(5, 3)

// Exercise 4

const reverse = function(str){
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }
    return reversed
}

console.log(reverse("dog")) //should return "god"
console.log(reverse("race car")) //should return "rac ecar"

// Exercise 5

const isPalindrom = function(str) {
    return str.toLowerCase().replace(" ", "") === reverse(str).toLowerCase().replace(" ", "")
}

console.log(isPalindrom("Taco Cat"))
console.log(isPalindrom("hat"))

// Exercise 6

const encrypt = function(str) {
    let encrypted = ''
    for (let i = 0; i < str.length; i++){
        encrypted = encrypted + String.fromCharCode(str.charCodeAt(i) + 1)
    }
    return encrypted
}

console.log(encrypt('cat'))

// Exercise 7

const decrypt = function(str) {
    let decrypted = ''
    for (let i = 0; i < str.length; i++){
        decrypted = decrypted + String.fromCharCode(str.charCodeAt(i) - 1)
    }
    return decrypted
}

console.log(decrypt('dbu'))

// Exercise 8
