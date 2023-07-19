function add()
{
    let a =parseInt(document.getElementById("value1").value);
    let b =parseInt(document.getElementById("value2").value);
    let c=a+b;
    document.getElementById("ans1").innerHTML="Addition is "+c;
    document.getElementById("name").innerHTML="Addition";

}   
function sub()
{
    let a=parseInt(document.getElementById("value1").value);
    let b =parseInt(document.getElementById("value2").value);
    let c=a-b;
    document.getElementById("ans1").innerHTML="Subtraction is "+c;
    document.getElementById("name").innerHTML="Subtraction";
}
function mul()
{
    let a=parseInt(document.getElementById("value1").value);
    let b =parseInt(document.getElementById("value2").value);
    let c=a*b;
    document.getElementById("ans1").innerHTML="Multiplication is "+c;
    document.getElementById("name").innerHTML="Multiplication";
}
function div()
{
    let a=parseInt(document.getElementById("value1").value);
    let b =parseInt(document.getElementById("value2").value);
    let c=a/b;
    document.getElementById("ans1").innerHTML="Division is "+c;
    document.getElementById("name").innerHTML="Division";
}
function mod()
{
    let a=parseInt(document.getElementById("value1").value);
    let b =parseInt(document.getElementById("value2").value);
    let c=a%b;
    document.getElementById("ans1").innerHTML="Modulus is "+c;
    document.getElementById("name").innerHTML="Modulus";
}