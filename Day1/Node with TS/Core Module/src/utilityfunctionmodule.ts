import { inspect } from "util";

interface addressPart1 {
    doorNo: number;
    streetName: string;
}

interface Address {
    part1: addressPart1;
    city: string;
    zip: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    address: Address;
    roles: string[];
}

const user: User = {
    id: 101,
    name: "Alice",
    email: "alice@example.com",
    address: {
        part1: {
            doorNo: 10,
            streetName: "street"
        },
        city: "New York",
        zip: "10001"
    },
    roles: ["Admin", "Editor"]
};

console.log("User Data:", user);

console.log("Formatted User Data:");
console.log(inspect(user, { depth: null, colors: true }));
