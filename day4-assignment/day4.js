
const title=document.getElementById('title');
const author=document.getElementById('author');
const price=document.getElementById('price');
const cover=document.getElementById('cover');

function save(){
    const titlebox=title.value;
    const authorbox=author.value;
    const pricebox=price.value;
    const coverbox=cover.value;
    localStorage.setItem(titlebox);
    localStorage.setItem(authorbox);
    localStorage.setItem(pricebox);
    localStorage.setItem(coverbox);
    
    status.innerHTML=`key ${key} saved`;
}
function load(){
    const key=keyBox.value;
    const value=localStorage.getItem(key);
    if(value){
        valueBox.value=value;
        status.innerHTML=`done`;
    } else{
        status.innerHTML=`key ${key} not found`;
        valueBox.value='';
    }
}
