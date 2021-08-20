let Books=
 [
	{
        title:'The Accursed God',
        author:'Vivek Dutta Mishra',
        price:399,
        rating:4.9
	
	},

	{
		
        title:'The Magic          ',
        author:'Rhonda Byme   ',
        price:399,
        rating:4.5	
	
	},
    {
		
        title:'Think and Grow Rich!',
        author:'Nepoleon Hill    ',
        price:199,
        rating:4.7	
	
	},
    {
		
        title:'Bhagvad gita as it is',
        author:' Swami Prabhupada   ',
        price:235,
        rating:4.8	
	
	}



];
//console.log('Title\t                  Author              \tPrice\t             Rating');
function printarray()
  {
for(let contact of Books){
    console.log(`[${contact.title}\t${contact.author}\t${contact.price}\t  ${contact.rating}]`)
}
console.log('Array will be printed');
  }
 function priceaverage()
 {
     var result=0;

     for(let val of Books )
      {
        result= result + parseFloat(Books.price); 
      }
    return result;
       
 }
  printarray();
 // var author=findbyauthor();
 // console.log('author',author);
  var avg=priceaverage();
  console.log(avg);
  var rat=avgrating();
  var titleandprice=titleandPrice();