/** "Villa Paradiso" -> "villa-paradiso", "Suite De Onyx" -> "suite-de-onyx" */
export const villaSlug = (title: string) =>
  title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
