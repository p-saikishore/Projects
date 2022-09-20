let btn = document.querySelector('#new-quote');
let quoty = document.querySelector('.text');
let person = document.querySelector('.author');


let finalApiQ = [];

function NewQuote() {
    const quote = finalApiQ[Math.floor(Math.random() * finalApiQ.length)];
    quoty.textContent = quote.text;
    person.textContent = quote.author;
    console.log(quote);
}

async function GetQuotes() {
    const Apiurl = 'https://type.fit/api/quotes';

    try {
        const apiQ = await fetch(Apiurl);
        finalApiQ = await apiQ.json();
        NewQuote();
    } catch (error) {
        ////;
    }
}

GetQuotes();


btn.addEventListener("click", NewQuote);