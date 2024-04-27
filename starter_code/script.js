const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];
  const val = str.toLowerCase();
  const filterFruit = fruit.filter((x) => x.includes(str));
  results = filterFruit;
  console.log("results", results);
  return results;
}

function searchHandler(e) {
  console.log(e.target.value);
  const results = search(e.target.value);
  showSuggestions(results, e.target.value);
}

function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";
  if (results.length > 0) {
    for (i = 0; i < results.length; i++) {
      suggestions.innerHTML += `<li>${results[i]}</li>`;
    }
    suggestions.classList.add("has-suggestions");
  } else {
    results = [];
    suggestions.innerHTML = "";
    suggestions.classList.remove("has-suggestions");
  }
}

function useSuggestion(e) {
  input.value = e.target.innerText;
  input.focus();
  suggestions.innerHTML = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
