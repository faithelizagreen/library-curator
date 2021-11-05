
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
            console.log(person.reader);
            document.getElementById('box1').style.display = "none";
            document.getElementById('namespace')
            .innerHTML = `${person.reader.first_name} ${person.reader.last_name}`;
            document.getElementById('box2').style.display = "inline";
         }
        
    }
    catch(err){

    }

}

document
.getElementById('librarySearch')
.addEventListener('submit', function(event){
    event.preventDefault();
    checkCard();
});

