export const useSearch = (data, value) => {
  let filteredData;
  filteredData = data.filter((el) => {
    return el.patientName.toLowerCase().includes(value?.toLowerCase());
  });
  return [filteredData];
};
