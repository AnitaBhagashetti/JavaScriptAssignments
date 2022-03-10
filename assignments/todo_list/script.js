let count=0
document.querySelector(' button').addEventListener('click',add)
function add()
{
    let val=document.querySelector('input').value
    let parent=document.querySelector('.todos')
    let ele=document.createElement('p')
    ele.innerHTML=val
    // document.querySelector('input').value=''
    ele.setAttribute('key',count)
    count++
    // console.log(ele)
    parent.appendChild(ele)
    ele.addEventListener('click',()=>{
        ele.remove();
    })
//     let RemovingEle=document.querySelector('.todos ').childNodes
// //console.log(RemovingEle)

//     for(let i=0;i<RemovingEle.length;i++)
//     {
//         RemovingEle[i].addEventListener('click',RemovingEle[i].remove)

//     }


}

/* <html>
    <head>
        <title>Todo List</title>
    </head>
    <body>
        <div>
            <input type='text' name='todo_input'>
            <button type='submit'>Add Todo</button>
            <div class='todos'></div>
        </div>
    </body>
    <script src='./script.js'></script>
</html> */