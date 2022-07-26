const axios= require("axios") //npm modulel for getting http client
const prompt=require("prompt-sync")({ sigint: true }); //npm module for getting stdin

async function callingAPI() {
    var blogName=prompt("give blogName= ");
    var postRange=prompt("give post range start-end= ").split("-");
    const apiResponce=await axios.post(`https://${blogName}.tumblr.com/api/read/json?type=photo&num=${postRange[1]}&start=${postRange[0]}`)
    var result=getResultInObject(apiResponce.data);
    printBlogDeatail(result)
}

function getResultInObject(apiResponce) {
    var JSONtoObject=JSON.parse(apiResponce.slice(21,res.length-2))
    return JSONtoObject;
}

function printBlogDeatail(result) {
    console.log("title: "+result.tumblelog.title+"\n"+"name: "+result.tumblelog.name+"\ndescription: "+result.tumblelog.description)
    console.log("no of post: "+result["posts-total"])
    result.posts.forEach((element, index) => {         //getting posts data from fatched data.
    console.log(index+1+" "+element["photo-url-1280"])
    });
}

callingAPI()
