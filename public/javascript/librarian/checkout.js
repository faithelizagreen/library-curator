
async function checkCard(){

    const cardNum = document.getElementById('librarycard').value.trim()

    const card = {
        card: cardNum
    }

    try{
        const response = await fetch(`/api/cards/check`, {
            method: 'post',
            body: JSON.stringify(card),
            headers: { 'Content-Type': 'application/json' },
        })

        if(response.ok){
            const person = await response.json();
            console.log(person);
            document.getElementById('box1').style.display = "none";
            document.getElementById('cardNum').innerHTML = person.card_number
            document.getElementById('namespace')
            .innerHTML = `${person.reader.first_name} ${person.reader.last_name}`;
            document.getElementById('box2').style.display = "inline";
            
         }
        
    }
    catch(err){
        console.log(err);
    }

}

async function checkoutBook(){

    const bookNum = document.getElementById('scanner').value.trim()

    const book = {
        book_id: bookNum,
        card: document.getElementById('cardNum').innerHTML
    }

    try{
        const response = await fetch(`/api/books/out`, {
            method: 'put',
            body: JSON.stringify(book),
            headers: { 'Content-Type': 'application/json' },
        })

        if(response.ok){
            console.log("success!");
            document.getElementById("bookscan").reset();
        }
        
    }
    catch(err){
        console.log("error in checkout");
    }
    finally{
        

    }


}

document
.getElementById('bookscan')
.addEventListener('submit', function(event){
    event.preventDefault();
    checkoutBook();
});




document
.getElementById('librarySearch')
.addEventListener('submit', function(event){
    event.preventDefault();
    checkCard();
});

