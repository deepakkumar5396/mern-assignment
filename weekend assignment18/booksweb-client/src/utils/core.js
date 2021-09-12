

export const contains=(str)=>{    
    return this.toLowerCase().indexOf(str.toLowerCase)>=0;
}

export const copyObject=(target,source)=>{

    for(let key in source){

        let value= source[key];
        if(typeof(value)!=='function'){
            target[key]=value;
        }
    }
}

export const delay =  time => new Promise(resolve=>setTimeout(resolve,time));