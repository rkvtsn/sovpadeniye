export const formatTime = (seconds: number): string => {
  if (seconds <= 60) {
    return seconds.toString().padStart(2, "0");
  }
  let minutes = Math.ceil(seconds / 60);
  seconds = seconds - minutes * 60;
  if (minutes <= 60) {
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
  const hours = Math.ceil(minutes / 24);
  minutes = minutes - hours * 24;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
