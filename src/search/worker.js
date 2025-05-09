/*eslint-disable*/

export default () => {
    self.addEventListener("message", (e) => {
      if (!e) return;
  
      const { record, searchText } = e.data;
      const filteredData = performSearch(record, searchText);
  
      postMessage(filteredData);
    });
  
    const performSearch = (data, value) => {
      value = value.trim();
  
      if (value == "") return data;
  
      const filteredData = data.filter((record) => {
        return Object.keys(record).some((key) => {
          // Perform the nested search i.e. Recursive search!!
          if (Array.isArray(record[key])) {
            record[key] = performSearch(record[key], value);
            return record[key].length;
          }
          return String(record[key]).toLowerCase().includes(value.toLowerCase());
        });
      });
  
      // console.log('filteredWorker: ', filteredData, data, value)
      return filteredData;
    };
  };