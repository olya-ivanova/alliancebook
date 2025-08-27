export const formatBirthYear = (birth: string) => {
  if (birth.toLowerCase() === "unknown") return "Unknown";

  const match = birth.match(/^(\d+(\.\d+)?)(aby|bby)$/i);
  if (!match) return birth;

  const [_, year, __, era] = match;

  return era.toUpperCase() === "BBY"
    ? `${year} BBY (Before the Battle of Yavin)`
    : `${year} ABY (After the Battle of Yavin)`;
}