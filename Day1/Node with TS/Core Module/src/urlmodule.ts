import { URL } from "url";

const myUrl = new URL(
  "https://example.com:8080/career?name=John&age=25#section"
);

console.log("Protocol:", myUrl.protocol); // https:
console.log("Host:", myUrl.host); // example.com:8080
console.log("Pathname:", myUrl.pathname); // /career
console.log("Search Params:", myUrl.searchParams.get("name")); // John
console.log("Hash:", myUrl.hash); // #section