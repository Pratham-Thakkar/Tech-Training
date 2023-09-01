exports.randomSkills = (skills) => {
  let noOfSkills = Math.ceil(Math.random() * 4 + 1);
  let randomSkills = [];
  while (noOfSkills) {
    let randomIndex = Math.ceil(Math.random() * 6 + 1);
    if (!randomSkills.includes(skills[randomIndex])) {
      randomSkills.push(skills[randomIndex]);
      noOfSkills--;
    }
  }
  return randomSkills;
};
