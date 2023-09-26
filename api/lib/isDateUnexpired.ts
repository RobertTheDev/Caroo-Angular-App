export default function isDateUnexpired(dateString: Date) {
  // Parse the input date string into a Date object
  const inputDate = new Date(dateString);

  // Get the current date
  const currentDate = new Date();

  // Compare the input date with the current date
  return inputDate > currentDate;
}
