const nameUser = document.getElementById("name");
const ageUser = document.getElementById("age");
const btn = document.getElementById("btn");

const save = () => {
  const arrUsers2 = [];
  btn.addEventListener("click", () => {
    saveUsers(nameUser.value, ageUser.value, arrUsers2);
    console.log(arrUsers2);
  });
};

save();

const saveUsers = (name, age, arr) => {
  const obj = {
    name: name,
    age: age,
  };
  arr.push(obj);
};
