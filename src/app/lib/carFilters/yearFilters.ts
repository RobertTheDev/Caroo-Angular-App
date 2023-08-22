const currentYear = new Date().getFullYear();
const years = [];

for (let i = currentYear; i >= currentYear - 24; i--) {
  years.push({ name: i.toString(), value: i });
}

const yearFilters = years;

export default yearFilters;
