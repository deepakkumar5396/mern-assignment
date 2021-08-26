const { rejects } = require("assert/strict");
const { resolve } = require("path/posix");
const { resourceLimits } = require("worker_threads");

function countDown(maxval){
    return new Promise((resolve,rejects)=>{
        let ans=[];
        let tid=setInterval(()=>{
            for(let i=maxval;i>=0;i--)
              ans.push(i);

            return ;
        },1000);
        if(maxval<0){
            return rejects(new Error("value you have enter less than 0"));

        }else{
            return resolve(ans);
        }
    });
}
countDown(10).then(ans=>{
    console.log(ans);
}).catch(error=>{
    console.log(error);
});

/*
var a=10;
setInterval(countDown,1000);
function countDown(){
    a=a-1;
    if(a>0)
    console.log(a);
    else{
     console.log("Invalid interval");
    }
}*/