interface Player {
  name: string;
  club: string;
  salary: number;
  wife?: string;
  previousCLub?: string;
}

const messy: Player = {
  name: "L Messy",
  club: "Abahoni",
  salary: 12000,
  wife: "Nosimon Ara Begum",
};

const hannan: Player = {
  name: "A. Hannan",
  club: "Kolabagan",
  salary: 2000,
};

interface Employee {
  name: string;
  designation: string;
  salary: number;
  age: number;
}

interface Developer extends Employee {
  language: string;
  codeEditor: string;
  typingSpeed: number;
}

const zuku: Developer = {
  name: "Zukerbrg",
  salary: 11000,
  age: 31,
  designation: "Facebooker",
  language: "js",
  codeEditor: "VS Code",
  typingSpeed: 65,
};
