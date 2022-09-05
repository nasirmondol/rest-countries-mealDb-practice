const loadQuotes = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}

loadQuotes();

const displayQuotes = quote =>{
    const quoteElement = document.getElementById('quotes')
    quoteElement.innerText = quote.quote;
    quoteElement.style.color = 'white';
    quoteElement.style.fontStyle = 'italic'
    quoteElement.style.backgroundColor = 'orange'
    quoteElement.style.margin = '20px'
    quoteElement.style.padding = '10px'
    quoteElement.style.border = '1px solid green'
    quoteElement.style.borderRadius = '15px'
    
}