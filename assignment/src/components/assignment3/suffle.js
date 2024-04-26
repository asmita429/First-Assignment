// Function to move each item to a different position in the list
// Suffle
function moveItems(list) {
  let movedList = [];
  // make a copy of original list
  let tempList = list.slice();

  // move each item in list to a different position
  list.forEach((item) => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * tempList.length);
    // Remove randon idx item from tempList and
    // use 0 idx so there will be a list, not a list of lists
    const movedItem = tempList.splice(randomIndex, 1)[0];
    // push item to the movedList
    movedList.push(movedItem);
  });

  return movedList;
}

// Example list
// let list = ["apple", "banana", "cherry", "durian", "emblica"];
// let movedList = moveItems(list);
export default moveItems;
