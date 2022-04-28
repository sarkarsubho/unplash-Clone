// make an api and return data

async function makeAPIcall(url){
    try{

        let res= await fetch(url);

        let data= await res.json();

        return data;

    }catch(err){
        console.log("err",err)
    }
};


function appenddata(data,parent){

    data.forEach(element => {

        let div= document.createElement("div");


        let img = document.createElement("img");
        img.src=element.urls.small;

        let title =document.createElement("p");
        title.textContent=element.user.first_name;

        div.append(img,title);
        div.onclick=()=>{
            let clickedarr=[element];
            localStorage.setItem("clicked_img",JSON.stringify(clickedarr));
        }
        parent.append(div);
        
    });

}

 export {makeAPIcall,appenddata};

 
