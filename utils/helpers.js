module.exports = {
  format_date: (date) => {
    console.log(date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(`${date} 00:00:00`).toLocaleString("en-US", options);
  },
};
 