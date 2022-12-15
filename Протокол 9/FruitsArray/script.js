//nqkav masiv s plodove
var arr = ["Apple", "Banana", "Cherry", "Mango"];

//sazdavane na nepodreden spisak
var list = document.createElement("ul");
for (let i of arr) {
    //sazdavane na li elementi
  let item = document.createElement("li");
  item.innerHTML = i;
  list.appendChild(item);
}

//izvejdane
document.getElementById("fruits").appendChild(list);