const salary: number = 7500;
const friendSalaries: number[] = [75000, 12300, 17200, 94000, 8300];
const friends: string[] = ["Sakib", "Rakib", "Nakib", "Dakib"];

friendSalaries[0] = 10500;
friendSalaries.push(13100);

// friendSalaries[4] = "9800";
// friendSalaries.push("7300");

friends.push("Bakib");
friends[2] = "Kakib";

// friends.push(494040);

let max = 0;
for (const salary of friendSalaries) {
  if (salary > max) {
    max = salary;
  }
}
