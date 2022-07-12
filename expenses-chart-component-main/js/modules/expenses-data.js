async function fetchExpensesData() {
  const url = './js/data/data.json';
  const response = await fetch(url);
  const data = response.json();

  return data;
}

export default fetchExpensesData;
