try {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const json = await response.json();
  console.table(json);
} catch (error) {
  console.log(error);
}