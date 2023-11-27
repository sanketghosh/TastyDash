function parseDateFromString(dateStr: string): Date | null {
  // Parse the input date string and create a Date object
  const day = parseInt(dateStr.slice(0, 2), 10);
  const month = parseInt(dateStr.slice(2, 4), 10) - 1; // Months in JavaScript are 0-based
  const year = parseInt(dateStr.slice(4, 8), 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    return null;
  }

  const date = new Date(year, month, day);

  // Validate if the Date object is valid (e.g., 30th of February would be invalid)
  if (
    date.getDate() !== day ||
    date.getMonth() !== month ||
    date.getFullYear() !== year
  ) {
    return null;
  }

  return date;
}

export function countdownFromNowTo(dateStr: string): void {
  const targetDate = parseDateFromString(dateStr);

  if (!targetDate) {
    console.log("Invalid date format.");
    return;
  }

  const intervalId = setInterval(() => {
    const now = new Date();
    const timeRemaining = targetDate.getTime() - now.getTime();

    if (timeRemaining <= 0) {
      clearInterval(intervalId);
      console.log("Countdown finished!");
    } else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      console.log(
        `Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
      );
    }
  }, 1000); // Update the countdown every second
}

/*   // Example usage:
  const inputDate = '08082023'; // August 8, 2023
  countdownFromNowTo(inputDate); */
