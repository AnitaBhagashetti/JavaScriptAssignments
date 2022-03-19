function CreateObject(arr) {
   
    let n=arr.length;
    const obj=new Object();
    for(let i=0;i<n;i+=2)
    {
        obj[arr[i]]=arr[i+1]

    }
    return obj

}

module.exports = CreateObject;
