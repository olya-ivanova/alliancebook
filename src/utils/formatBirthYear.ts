export const formatBirthYear = (birth: string) => {
  if (birth.toLowerCase() === 'unknown') return 'Unknown';

  const match = birth.match(/^(\d+(\.\d+)?)(aby|bby)$/i);
  if (!match) return birth;

  const [year, , era] = match;

  if (!era) return birth;

  return era.toUpperCase() === 'BBY'
    ? `${year} BBY (Before the Battle of Yavin)`
    : `${year} ABY (After the Battle of Yavin)`;
};
