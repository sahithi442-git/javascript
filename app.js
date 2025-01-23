//asynchrounous function

// function main(m,n)
// {
//     for(let i=m; i<=n; i++)
//     {
//         console.log(i);
//     }
// }
// main(1 , 100)

// function sample()
// {
//     console.log("no's printed");
// }
// window.setTimeout(() => {
//     console.log("iam settimeout");

// },5000)

// window.setInterval(() => {
//     console.log("iam setinterval");

// },3000)


// function main(m,n)
// {
//     setTimeout(() => {
//         for(let i=m; i<n; i++)
//         {
//             console.log(i);
//         }
//     } , 5000)
// }
// main(1 , 10)

// function sample()
// {
//     console.log("no's printed");
// }
let online = window.navigator.online

new Promise((resolve , reject) => {
    setTimeout(() => {
        if(online === true)
        {
            return resolve()
        }else{

        }
    } , 2000)
})
.then(() => console.log("online ... ")
)
.catch(() => console.log("on-line ... ")
)