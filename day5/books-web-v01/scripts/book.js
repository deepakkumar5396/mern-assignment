
const sampleBooks=[
    {
        "_id": "5f4fd116c277b45acc698bce",
        "isbn": "9781393495574",
        "title": "The Accursed God",
        "author": "Vivek Dutta Mishra",
        "pages": "380",
        "price": "199",
        "rating": "4.9",
        "votes": "49",
        "description": "THE LOST EPIC ============ The story of the epic battle of Kurukshetra has been told and retold for ages. Millennia of dust, fables, imaginations — and the epic itself is lost. What remained is the story of a family feud and ambition of Kauravas and Pandavas. But why, then, was this an epic war? Why entire Aryavart plunged into this first real world-war? Why the echo of this ancient war still resonates after all those centuries? Rediscover the lost epic whose origin lies in the birth of the Kurukshetra that had tasted its first blood over a hundred years before the final Mahabharata war. Discover the complete saga of Mahabharata which goes far and beyond just Kauravas and Pandavas and their ambitions. THE ACCURSED GOD ================ Long before the epic battle, long before even the birth of Kurukshetra, a man swore on his father’s pyre to avenge against the mightiest empire, any civilization had ever seen. Between his might and near-certain destruction of the Empire, stood a warrior, who rose like a phoenix from the ashes of his seven dead brothers — taking the mantle of a fabled Accursed God. In the clash that followed, Aryavart heard several more oaths by the side of more burning pyres, until, a young king decided that no price is too high for peace. Little did he know that the price would be a war engulfing the entire Aryavart, where few would live to tell the tale. And only one man can delay the inevitable if not prevent it. He is the accursed God and even he doesn’t know that destiny is like a quicksand, the more he tries to prevent it, the faster Aryavart moves towards the ultimate catastrophe. Discover the saga of a man’s journey to that of a legendary and universally hated Accursed God, the saga of the ruthless ambitions and unfulfilled loves, endless deceits and vengeful oaths, and the saga of the battles to prevent the ultimate war. TESTIMONIALS ============= When is the last time you finished a book and discover something? Here is a gripping and intriguing take on the greatest epic of all time through the eyes of its pivotal character that leaves your mind exhilarated, adding a fresh perspective to the tale that’s known, yet unknown. Throughout the fast action-packed book, the author masterfully blends politics, war and science and blurs the gap between love and hate, peace and war, and fiction and reality. A must-read novel which will leave you wanting for more. --- Colonel Avanish, Indian Army",
        "tags": [
            "epic",
            "indian",
            "mahabharata",
            "bhishma",
            "history"
        ],
        "series": "The Lost Epic",
        "seriesIndex": "1",
        "releaseDate": "2020-01-14T18:30:00.000Z",
        "cover": "http://thelostepic.com/wp-content/uploads/2021/04/THE-ACCURSED-GOD-Front-780x1100-1.jpg"
    },
    {
        "_id": "5f4fb1e86980a8fb2b76e84b",
        "isbn": "9781408855652",
        "title": "Harry Potter and the Philosopher's Stone",
        "author": "JK Rowling",
        "pages": "352",
        "price": "340",
        "rating": "4.7",
        "votes": "10192",
        "description": "Harry Potter and the Philosopher's Stone was J.K. Rowling's first novel, followed by the subsequent six titles in the Harry Potter series, as well as three books written for charity: Fantastic Beasts and Where to Find Them, Quidditch Through the Ages and The Tales of Beedle the Bard. The Harry Potter novels have now sold over 450 million copies worldwide and been translated into 78 languages.",
        "tags": [
            "harry potter",
            "fiction",
            "fantasy",
            "best-seller"
        ],
        "series": "Harry Potter",
        "seriesIndex": "1",
        "releaseDate": "1997-06-25T18:30:00.000Z",
        "cover": "https://mlvzdnfuf2oo.i.optimole.com/se54NOM._Oyg~2dae4/w:auto/h:auto/q:90/https://www.setantabooks.com/wp-content/uploads/2016/04/02/j-k-rowling-harry-potter-and-the-philosophers-stone.jpg"
    },
    {
        "_id": "5f4fb4e66980a8fb2b76e84c",
        "isbn": "1408855666",
        "title": "Harry Potter and theHarry Potter and the Chamber of Secrets ",
        "author": "JK Rowling",
        "pages": "384",
        "price": "259",
        "rating": "4.7",
        "votes": "8518",
        "description": "Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone . Dobby's sinister predictions seem to be coming true.",
        "tags": [
            "harry potter",
            "fiction",
            "fantasy",
            "best-seller"
        ],
        "series": "Harry Potter",
        "seriesIndex": "2",
        "releaseDate": "1998-07-01T18:30:00.000Z",
        "cover": "https://kbimages1-a.akamaihd.net/1c469dcb-5d48-47cb-a61b-5298babdb0d3/1200/1200/False/harry-potter-and-the-chamber-of-secrets-6.jpg"
    }
];

class  BookManager{



    constructor(){
        this.books=this.loadBooks(); //load from localStorage
        if(!this.books){   //there was no book in the localStorage
            this.books=sampleBooks; 
            this.saveBooks(); //save   
        }
    }

    saveBooks(){
        //we will save all books in localStorage
        //but loclcalStorage can contain only string
        if(this.books && this.books.length>0) //if this.books is valid and has length greater than 0
            localStorage.setItem("books", JSON.stringify(this.books)); //save all books as a JSON string
    }

    loadBooks(){
        let localStoreBooks = localStorage.getItem("books");
        if(!localStoreBooks){
           return undefined;
        }
        try{
        let books= JSON.parse(localStoreBooks); //try to convert json data as books
        return books; //return it
        }catch(err){
            return undefined; //if you fail return undefined.
        }
            
        
    }

    addBook(book){
        this.books.push(book);
        this.saveBooks();
    }

    getAllBooks(){
        return this.books;
    }

    getBookById(id){
        for(let book of this.books){
            if(book._id===id)
                return book;
        }

        return undefined;
    }

    removeBook(id){
        let newCollection=[];
        for(let book of this.books){
            if(book._id!==id)
                newCollection.push(book);

        }
        this.books=newCollection;
        this.saveBooks();
    }

    


}
var search_title = document.getElementById('search-type');
var searchkey=document.getElementById('search');
const find =function (values, matching){
    let results=[];
    for(let value of values ){
        if(matching(value))
            results.push(value);
    }
    return results;
}



let Booksr= find(sampleBooks, function(){

    let index= sampleBooks.title('searchkey');

    return index!==-1;

});
//console.log(Booksr);


