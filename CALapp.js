function dis(val)
{
document.getElementById("cal").value+=val
&nbsp;}
//function for evaluation
function solve()
{
let x = document.getElementById("cal").value
let y = eval(x)
document.getElementById("cal").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("cal").value = "void"
}