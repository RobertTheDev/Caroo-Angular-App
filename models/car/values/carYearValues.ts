const generateCarYears = (): number[] => {
  const currentYear = new Date().getFullYear();
  const startYear = 2000;
  const years = [];

  for (let i = currentYear; i >= startYear; i--) {
    years.push(i);
  }

  return years;
};

export default generateCarYears;
