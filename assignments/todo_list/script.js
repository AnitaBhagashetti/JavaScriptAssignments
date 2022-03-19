// let count=0
// document.querySelector(' button').addEventListener('click',add)
// function add()
// {
//     let val=document.querySelector('input').value
//     let parent=document.querySelector('.todos')
//     let ele=document.createElement('p')
//     ele.innerHTML=val
//     // document.querySelector('input').value=''
//     ele.setAttribute('key',count)
//     count++
//     // console.log(ele)
//     parent.appendChild(ele)
//     ele.addEventListener('click',()=>{
//         ele.remove();
//     })
//     let RemovingEle=document.querySelector('.todos ').childNodes
// //console.log(RemovingEle)

//     for(let i=0;i<RemovingEle.length;i++)
//     {
//         RemovingEle[i].addEventListener('click',RemovingEle[i].remove)

//     }


//}

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

// ................Fetch API......................................
// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(Response=>Response.json())
// .then(data=>console.log(data))
let completed = []
let pending = []
async function getElement() 
{
    let file = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await file.json();

    console.log(data);
    for (let i = 0; i < data.length; i++) 
    {
        if (data[i]["completed"] === true) 
        {

            completed.push(data[i])
        }
        else 
        {
            pending.push(data[i])

        }


    }
    console.log(completed)
    console.log(pending)



    document.querySelector('#comp').addEventListener('click',()=>{
        console.log("completed clicked")
        document.querySelector('#tbody').innerHTML=''
        let parent=document.getElementById('tbody');
        
        for(let j=0;j<completed.length;j++)
        {
           
            console.log(completed[j])
            let r=document.createElement('tr')
            // console.log(completed[j].length)
            // for(let i=0;i<completed[j].length;i++)
            // {
            //     console.log(completed[j][i])
            //     let d=document.createElement('td')
            //     d.innerHTML=completed[j][i];
            //     r.appendChild(d);

            // }
           
            let d1=document.createElement('td')
            d1.innerHTML=completed[j]["userId"];
            r.appendChild(d1);
            

            let d2=document.createElement('td')
            d2.innerHTML=completed[j]["id"];
            r.appendChild(d2);
            

            let d3=document.createElement('td')
            d3.innerHTML=completed[j]["title"];
            r.appendChild(d3);

            let d4=document.createElement('td')
            d4.innerHTML=completed[j][ "completed"];
            r.appendChild(d4);


            parent.appendChild(r);

        }
        
        

    })




    document.querySelector('#pend').addEventListener('click',()=>{
        console.log("pend clicked")
        document.querySelector('#tbody').innerHTML='';
        let parent=document.getElementById('tbody');
        
        for(let j=0;j<pending.length;j++)
        {
           
            console.log(pending[j])
            let r=document.createElement('tr')
            // console.log(completed[j].length)
            // for(let i=0;i<completed[j].length;i++)
            // {
            //     console.log(completed[j][i])
            //     let d=document.createElement('td')
            //     d.innerHTML=completed[j][i];
            //     r.appendChild('r');

            // }
           
            let d1=document.createElement('td')
            d1.innerHTML=pending[j]["userId"];
            r.appendChild(d1);
            

            let d2=document.createElement('td')
            d2.innerHTML=pending[j]["id"];
            r.appendChild(d2);
            

            let d3=document.createElement('td')
            d3.innerHTML=pending[j]["title"];
            r.appendChild(d3);

            let d4=document.createElement('td')
            d4.innerHTML=pending[j][ "completed"];
            r.appendChild(d4);


            parent.appendChild(r);

        }
        
        

    })




    document.querySelector('#all').addEventListener('click',()=>{
        console.log("all clicked")
        document.querySelector('#tbody').innerHTML='';
        let parent=document.getElementById('tbody');
        
        for(let j=0;j<data.length;j++)
        {
           
            console.log(data[j])
            let r=document.createElement('tr')
            // console.log(completed[j].length)
            // for(let i=0;i<completed[j].length;i++)
            // {
            //     console.log(completed[j][i])
            //     let d=document.createElement('td')
            //     d.innerHTML=completed[j][i];
            //     r.appendChild('r');

            // }
           
            let d1=document.createElement('td')
            d1.innerHTML=data[j]["userId"];
            r.appendChild(d1);
            

            let d2=document.createElement('td')
            d2.innerHTML=data[j]["id"];
            r.appendChild(d2);
            

            let d3=document.createElement('td')
            d3.innerHTML=data[j]["title"];
            r.appendChild(d3);

            let d4=document.createElement('td')
            d4.innerHTML=data[j][ "completed"];
            r.appendChild(d4);


            parent.appendChild(r);

        }
        
        

    })







}
getElement(); 
