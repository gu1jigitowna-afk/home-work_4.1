const getActiveEmployees = (users) => {
  if (users.length === 0) {
    return "Список пуст";
  }

  const activeUsers = users.filter(
    (user) => user.age >= 18 && user.isActive === true
  );

  return activeUsers.map((user) => user.name);
};

const EMPLOYEES_LIST = [
  { id: 1, name: "Alin", age: 29, isActive: false },
  { id: 2, name: "Amina", age: 55, isActive: true },
  { id: 3, name: "Bek", age: 36, isActive: false },
  { id: 4, name: "Syrgaim", age: 19, isActive: true }
];

const activeNames = getActiveEmployees(EMPLOYEES_LIST);
console.log("Допущены к работе:", activeNames);

const emptyResult = getActiveEmployees([]);
console.log("Результат для пустого списка:", emptyResult);