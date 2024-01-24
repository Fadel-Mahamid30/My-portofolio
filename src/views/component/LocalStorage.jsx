const saveData = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Error saving data to local storage:', error);
  }
};

const getData = (key) => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData ? JSON.parse(serializedData) : null;
  } catch (error) {
    console.error('Error retrieving data from local storage:', error);
    return null;
  }
};

const updateData = (key, newData) => {
  saveData(key, newData);
};

export default { saveData, getData, updateData };
