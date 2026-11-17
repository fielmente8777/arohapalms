/** Calendar dates must stay in the guest's local timezone, without UTC conversion. */
export const formatLocalDate = (date: Date | null): string =>
  date && !Number.isNaN(date.getTime())
    ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
    : "";
