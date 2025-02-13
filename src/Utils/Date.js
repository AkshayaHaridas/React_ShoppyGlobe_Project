const date = (dateInput) => {
  // Ensure the input is a valid Date object
  const date = new Date(dateInput);

  // Handle invalid date scenarios
  if (isNaN(date)) {
    return "Invalid Date";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate; // Example: 13/02/2025
};

export default date;
