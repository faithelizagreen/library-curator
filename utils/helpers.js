const { response } = require("express");

module.exports = {

  
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },

  favorite_button: async (id) => {

    const check = {
      book_id : id
    }

    try{
        const response = await fetch(`/api/favorite/check`, {
          method: 'post',
          body: JSON.stringify(check),
          headers: { 'Content-Type': 'application/json' },
      })

      if(response.ok){ 
        return ``    
      }else{
        return `<a class="btn" href="/api/favorites/add/{{book.id}}" id="favorite-btn" role="button"><i class="btn fas fa-2x fa-heart"></i></a>`
      }

    }
    catch(err){

    }

  },

  format_date: (date) => {
    console.log(date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(`${date} 00:00:00`).toLocaleString("en-US", options);
  },
};
 
