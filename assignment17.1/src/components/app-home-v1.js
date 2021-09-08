import React from 'react';

let quotes = [
    {
        "quote": "Sleep is good, he said, and books are better.",
        "author": "George R.R. Martin"
    },
    {
        "quote": "Stories are the credle of human civilization, it's true history and treasure",
        "author": "Vivek Dutta Mishra"
    },
    {
        "quote": "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.",
        "author": "Charles W. Eliot"
    },
    {
        "quote": "Every book is a story told differently. book matters because stories matters",
        "author": "Vivek Dutta Mishra"
    },
    {
        "quote": "If there is a book that you want to read, but it hasn’t been written yet, you must be the one to write it.",
        "author": "Toni Morrison",
        "reference": "print from Brighton Gifts"
    },
    {
        "quote": "Books are everywhere; and always the same sense of adventure fills us. Second-hand books are wild books, homeless books; they have come together in vast flocks of variegated feather, and have a charm which the domesticated volumes of the library lack",
        "author": "Virginia Woolf",
        "reference": "in Street Haunting"
    },
    {
        "quote": "Take a good book to bed with you—books do not snore.",
        "author": "Thea Dorn"
    },
    {
        "quote": "Books are the plane, and the train, and the road. They are the destination, and the journey. They are home.",
        "author": "Anna Quidlen ",
        "reference": "in How Reading Changed My Life"
    },

];

let images = [
    '/images/coverpage01.jpg',
    '/images/coverpage02.jpg',
    '/images/coverpage03.jpg',
    '/images/coverpage04.jpg',
    '/images/coverpage05.jpg',
    '/images/coverpage06.jpg',
    '/images/coverpage07.jpg',
    '/images/coverpage08.jpg'

]


class component extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getRandomQuotesAndImages();
        this.iid=setInterval(this.refresh,5000);
    }

    getRandomQuotesAndImages = () => {
        let imageIndex = Math.floor(Math.random() * images.length);
        let quoteIndex = Math.floor(Math.random() * quotes.length);

        let image = images[imageIndex];
        let quote = quotes[quoteIndex];

        return { quote, image };
    }

    refresh = () => {
        this.setState(this.getRandomQuotesAndImages());
    }

    componentDidMount=()=> {
        //you can write code to update the state   
    }

    componentWillUnmount=()=>{
        if(this.iid){
            clearInterval(this.iid);
            this.iid=null;
        }

    }

    render() {

        
        return (
            <div className='app-home'>                
                <img className='coverimage' src={this.state.image} alt="Book's Home" />
                <p className='quote'>{this.state.quote.quote}</p>
                <p className='author'>— {this.state.quote.author}</p>
                <p className='reference'>{this.state.quote.reference}</p>                
                <button onClick={this.refresh} className='btn btn-primary '>Refresh</button>
            </div>)
    }


}

const _component = () => {

    let imageIndex = Math.floor(Math.random() * images.length);
    let quoteIndex = Math.floor(Math.random() * quotes.length);

    let image = images[imageIndex];
    let quote = quotes[quoteIndex];



    const refresh = () => {
        let imageIndex = Math.floor(Math.random() * images.length);
        let quoteIndex = Math.floor(Math.random() * quotes.length);

        let image = images[imageIndex];
        let quote = quotes[quoteIndex];
    }

    return <div className='body'>
        <h2>Home!</h2>
        <p>{quote.quote}</p>
        <img className='coverimage' src={image} alt="Book's Home" />
        <p />
        <button onClick={refresh} className='btn btn-primary '>Refresh</button>
    </div>

};

export default component;