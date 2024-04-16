const formateDate = date => {
  // Convert Unix timestamp to milliseconds
  const milliseconds = date * 1000;

  // Create a new Date object
  const dateObject = new Date(milliseconds);

  const options = {
    year: dateObject.getFullYear(),
    month: dateObject.getMonth() + 1, // Months are zero-indexed
    day: dateObject.getDate(),
    hour: dateObject.getHours(),
    minutes: dateObject.getMinutes(),
  };
  return `${options.year}-${options.month}-${options.day} 
          ${options.hour}:${options.minutes}`;
};

export default formateDate;
