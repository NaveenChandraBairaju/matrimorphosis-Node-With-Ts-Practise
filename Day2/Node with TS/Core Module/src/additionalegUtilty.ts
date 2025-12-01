import { inspect } from "util";

// Define a complex TypeScript interface
interface Company {
  name: string;
  location: string;
  departments: {
    [key: string]: {
      Head: string;
      employees: string[];
    };
  };
}
// Simulated company data
const company: Company = {
  name: "matrimony.com",
  location: "Chennai",
  departments: {
    ProductEngineering: {
      Head: "Kiran",
      employees: ["Bob", "Charlie", "Dave"],
    },
    HR: {
      Head: "Eve",
      employees: ["Frank", "Grace"],
    },
  },
};
console.log("Regular Output:", company);
console.log("Formatted Output using inpsect:");
console.log(inspect(company,{ depth: null, colors: true}));