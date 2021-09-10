const city: string = "Dhaka";
const fruits: string[] = ["Mango", "Apple", "Banana"];
type person = {
  name: string;
  age: number;
  salary: number;
};
const student: person = {
  name: "Kamal Artatuk",
  age: 115,
  salary: 4500,
};

const employee: { name: string; age: number; salary: number } = {
  name: "Solaiman",
  age: 29,
  salary: 100000,
};

function getSalary(player: { name: string; salary: number }): number {
  return player.salary;
}

getSalary({ name: "Kuddos", salary: 50 });

function getSalary2(player: person): number {
  return player.salary;
}
