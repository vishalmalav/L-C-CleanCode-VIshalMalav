const axios= require("axios")
const prompt=require("prompt-sync")({ sigint: true });

async function callingAPI(){
    var blogName=prompt("give blogName= ");
    var postRange=prompt("give post range start-end= ").split("-");   
    var start,end=postRange[0],postRange[1]
    const responce=await axios.post(`https://${blogName}.tumblr.com/api/read/json?type=photo&num=${end}&start=${start}`)
    var result=getResultInObject(responce.data);
    printResult(result)
}

function getResultInObject(res){
    var JSONtoObject=JSON.parse(res.slice(21,res.length-2))
    return JSONtoObject;
}

function printResult(result) {
    console.log("title: "+result.tumblelog.title+"\n"+"name: "+result.tumblelog.name+"\ndescription: "+result.tumblelog.description)
    console.log("no of post: "+result["posts-total"])
    result.posts.forEach((element,index) => {
    console.log(index+1+" "+element["photo-url-1280"])
    });
}

callingAPI()