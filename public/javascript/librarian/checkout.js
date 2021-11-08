
async function checkCard(){

    const cardNum = document.getElementById('scanCard').value.trim()

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
            document.getElementById('libCard').style.display = "none";
            document.getElementById('cardNum').innerHTML = person.card_number
            document.getElementById('namespace')
            .innerHTML = `Checking out books for ${person.reader.first_name} ${person.reader.last_name}`;
            document.getElementById('bookScan').style.display = "inline";
            
         }else{
            $("#scanCard").val("Unable to find Library Card. Try again")
            $("#scanCard").attr("style","color:red")        
            setTimeout(function(){
                $("#scanCard").val("")
                $("#scanCard").attr("style","") 
             }, 1500);
        }
        
        
    }
    catch(err){
        console.log(err);
   
    }
    finally{

    }

}

async function checkOutBook(){

    const bookNum = document.getElementById('scanBook').value.trim()

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
            $("#scanBook").val("Book checked out!")  
            setTimeout(function(){
                $("#scanBook").val("")
             }, 1500);
        }else{
            $("#scanBook").val("Unable to find book")  
            $("#scanBook").attr("style","color:red")     
            setTimeout(function(){
                $("#scanBook").val("")
                $("#scanBook").attr("style","") 
             }, 1500);
        }
        
    }
    catch(err){
        console.log("error in checkout");
    }
    finally{
        
    }

}


async function checkInBook(){

    const bookNum = document.getElementById('scanBook').value.trim()

    const book = {
        book_id: bookNum,
        card: document.getElementById('cardNum').innerHTML
    }
    try{
        const response = await fetch(`/api/books/in`, {
            method: 'put',
            body: JSON.stringify(book),
            headers: { 'Content-Type': 'application/json' },
        })

        if(response.ok){
            $("#scanBook").val("Book checked in!")  
            setTimeout(function(){
                $("#scanBook").val("")
             }, 1500);
        }else{
            $("#scanBook").val("Unable to find book")  
            $("#scanBook").attr("style","color:red")     
            setTimeout(function(){
                $("#scanBook").val("")
                $("#scanBook").attr("style","") 
             }, 1500);
        }
        
    }
    catch(err){
        console.log("error in checkout");
    }
    finally{
        
    }
}



$(".dropdown-item").click(function(event){
    event.preventDefault();
    console.log(event.target);
    const option = event.target.innerHTML;
    
    switch (option){

        case "Check Out":
            $("#libCard").attr("style","display:inline")
            $("#bookScan").attr("style","display:none")
            $(".dropdown-toggle").html("Checking Out")
            break;
        
        case "Check In":
            $("#libCard").attr("style","display:none")
            $("#bookScan").attr("style","display:inline")
            $("#namespace").html("")
            $("#cardNum").html("")
            $(".dropdown-toggle").html("Checking In")
            break;
    }

})

$("#checkCard").on("submit",  function(event){
    event.preventDefault();
    checkCard();
})

$("#checkBook").on("submit",  function(event){
    event.preventDefault();

    const option = $(".dropdown-toggle").html();
    console.log(option);

    option == "Checking Out" ? checkOutBook() : checkInBook();

})
