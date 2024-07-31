var sortPeople = function (names, heights) {
  const people = names.map((name, index) => ({ name, height: heights[index] }));

  people.sort((a, b) => b.height - a.height);
  return people.map((x) => x.name);
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
