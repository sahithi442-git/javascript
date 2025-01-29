// let obj ={
//     name : "abhi" ,
//     id : 1 ,
//     designation : "developer"
// }
// console.log(obj);

// let obj1 = JSON.stringify(obj)
// console.log(obj1);

// let obj2 = JSON.parse(obj1)
// console.log(obj2);

//3-ways
//1)fetch() method
//2) ajax\
//Axios

// window.fetch("data.json")
// .then((data) => console.log(data)
// .then((res) => {
//     console.log(res);
    
// })
// )

// window.fetch("data.json")
// .then((data) => data.json())
// .then((res) => {
//     console.log(res)
//     // console.log(res[0])
//     // console.log(res[1])
//     res.map((x) => {
//         console.log(x)
//         console.log(x.name)
//         console.log(x.id)

//         document.body.innerHTML  += `<h1>${res.name}</h1>`
//         document.body.innerHTML  += `<h2>${res.id}</h2>`

    
//     })
// })
 
let btn = document.getElementById("btn")
console.log(btn);

btn.onclick = () => {
    let search = document.getElementById("search").value 
    console.log(search);
    let page = 60
    window.fetch(`https://pixabay.com/api/?key=36434946-acc22cf6e0589aeef704c8b24&q=${search}&image_type=photo&pretty=true&per_page=${page}`)
    .then((data) => data.json())
    .then((res) => {
        console.log(res);
        console.log(res.hits);
        res.hits.map((x) => {
            console.log(x)

            let demo = document.getElementById("demo")
            console.log(demo)
            demo.innerHTML +=`<img src = ${x.previewURL} />`
        })
    })
}