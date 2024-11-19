// Transrate Date to 8601 format
// returns {string} YYYY-MM-DD

export const getCurrentDateISO = (): string => {
  return new Date().toISOString().slice(0, 10);
};
