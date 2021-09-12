import React, { useEffect, useState } from 'react';
import withDate from './with-date-hoc';
import withExpander from './with-expander-hoc';

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

const getRandomQuote = () => {
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    return quotes[quoteIndex];
}

const getRandomImage = () => {
    let imageIndex = Math.floor(Math.random() * images.length);
    let image = images[imageIndex];
    return image;
}

const Component = (props) => {

    const [image, setImage] = React.useState(getRandomImage());
    const [quote, setQuote] = useState(getRandomQuote());

   
    useEffect(()=>{
     //   console.log('setting autorefresh');
        const iid= setInterval(()=>{
            
            setImage(getRandomImage());
            setQuote(getRandomQuote());
        },5000);
   

        //cleanup code
        return ()=>{
          //  console.log('stopping the timer');
            clearInterval(iid);
        }

    },[]);

    //console.log('component updated');



    const refresh = () => {
        setImage(getRandomImage());
        setQuote(getRandomQuote());
    }

    const refreshImage = () => {
        setImage(getRandomImage());
    }

    const refreshQuote = () => {
        setQuote(getRandomQuote());
    }

    //console.log('AppHome props',props);

    return (
        <div className='app-home'>
            <h2>{props.title}</h2>
            <h3>{props.date.toLocaleTimeString()}</h3>
            <img onClick={refreshImage} className='coverimage' src={image} alt="Book's Home" />
            <div onClick={refreshQuote}>
                <p className='quote'>{quote.quote}</p>
                <p className='author'>— {quote.author}</p>
                <p className='reference'>{quote.reference}</p>
            </div>

            <button onClick={refresh} className='btn btn-primary '>Refresh</button>
        </div>);
}



export default withExpander(withDate(Component),true);