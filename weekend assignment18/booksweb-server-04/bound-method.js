
class Controller{

    constructor(data){
        this.data=data;
    }

    showObjectData(){
        if(this)
            console.log('this.data',this.data);
        else
            console.log('no this found');
    
    }


}

const c=new Controller('My Controller Data');

c.showObjectData();  //should get data easily from c.data

const show=c.showObjectData; // we get showObjectData but not 'c'

show(); //no dot call so this pointer

//solution is bind this to a method

c.showObjectData= c.showObjectData.bind(c); //now this method will have c as its this. always


const show2=c.showObjectData;  //we will still have access to 'c' as thi

show2();  //this still points to to c
