// let a= async function(){
   
// let data=await fetch("https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=77ac58d201554f3789f2bc7b65e91f13")
// let datae=await data.json()
// console.log(datae.articles);
// }
// a()
// let x=document.getElementById("breaknews")
// setTimeout(()=>{
//     x.style.display="none"
// },4000)

let arr=[{name1:"Sports",url:"sports"},
{name1:"Business",url:"business"},
{name1:"Entertainment",url:"entertainment"},
{name1:"Health",url:"health"},
{name1:"Science",url:"science"},
{name1:"Technology",url:"technology"}]


let list_items=document.querySelectorAll(".list-items")
let description_bar=document.getElementById("description_bar")
list_items.forEach((ele)=>{
    ele.addEventListener("click",()=>{
        while (description_bar.hasChildNodes()){
               description_bar.removeChild(description_bar.firstChild)
        }
       arr.forEach((x)=>{
        if(x.name1==ele.innerHTML){
            // console.log(x.url);
            //! here we can write the featch logic and change the data dynamic way
            let a= async function(){
            let data=await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${x.url}&apiKey=77ac58d201554f3789f2bc7b65e91f13`)
            let fdata=await data.json()
            let{articles}=fdata
                for (let i = 0; i < articles.length; i++) {
                    let div=document.createElement("div")
                    div.setAttribute("class","addedElements skeleton")
                    
                    let sk=function(){
                        div.classList.remove("skeleton")
                        div.innerHTML=`<p class="">${articles[i].description
                    }</p> `
                    }
                    setTimeout(()=>{
                        sk()
                    },1000)
                    
                    description_bar.append(div)
                }

            } 
            a()

            
        }
       })
    })
})

