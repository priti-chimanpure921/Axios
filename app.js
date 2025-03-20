//axios to send http request
let p = document.querySelector("#fact");

let btn = document.querySelector("button");

btn.addEventListener("click" , async ()=>{
    let fact = await getCatFact();
    console.log(fact);
    p.innerText += fact;
} );

let url = "https://catfact.ninja/fact";

async function getCatFact() {
    try
    {
        let res = await axios.get(url);//sending http request using axios
        console.log(res.data);// no need to parse the data 
        return res.data.fact;
    }
    catch(err)
    {
        console.log(err);
        return "NO FACT FOUND";
    }    
}

//sending headers with http requests to get data in json format

let url2 = "https://icanhazdadjoke.com/";

async function getJokes()
{
    try
    {
        const config = { headers: { Accept : "application/json" }};
        let res = await axios.get(url2,config);
        console.log(res.data.joke);// get data in html format if headers not sent with url in axios
    }
    catch(err)
    {
        console.log(err);
    }
    
}
getJokes();
