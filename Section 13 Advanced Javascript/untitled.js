const array = [{
    username: "john",
    team: "red",
  },
  {
    username: "becky",
    team: "blue",
  },];

const mapArray = array.map(username => array.username + "?");

console.log('map', mapArray);