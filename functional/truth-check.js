function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]);
}

const checker = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

console.log(checker); // Should return false



