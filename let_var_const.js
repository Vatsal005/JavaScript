console.log("let_var_const")

var a = 15
{
    var a = 20
} // this is a block
console.log(a)
// var is globally scoped it will print block value 
let b = 1130
{
    let b = 150
}
console.log(b)
// cont and val are block scpoed it will print first values
// value assigned to the const can not be changed in JS
var c = 'Hy'
var c = 'Hello' // var can be redeclared / let can only be updated
// const can neither be updated nor redeclared