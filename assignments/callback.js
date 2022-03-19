function print(value)
{
    console.log(value)
}
function DoOperation(a,b,callback)
{
    let sum=a+b
    callback(sum)
}
DoOperation(2,3,print)