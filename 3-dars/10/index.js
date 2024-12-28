const url = new URL("https://www.example.com/search?name=Ali&age=25");

const nameValue = url.searchParams.get("name");

console.log(nameValue);
