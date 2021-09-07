export const useSearch = (data, value) => {
  let filteredData;
  filteredData = data.filter((el) => {
    return el.registrationNo.toLowerCase().includes(value?.toLowerCase());
  });
  return [filteredData];
};
