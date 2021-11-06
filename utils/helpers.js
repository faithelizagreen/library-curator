

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

  favorite_button: (id) => {
   const button = `<a class="btn" href="/api/favorites/add/${id}" style="color: Green" role="button">X</a>`

    return new Handlebars.SafeString(button)
  }
};
