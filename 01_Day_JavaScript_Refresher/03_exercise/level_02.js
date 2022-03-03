const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

manySkillObject = "sd";
max = 0;
for (const user in users) {
  count = 0;
  for (const i of users[user].skills) {
    count += 1;
  }
  max = max >= count ? max : count;
  //   console.log("max:", max);
  if (count === max) {
    manySkillObject = user;
  }
}
console.log(manySkillObject);

// 3
const MERN = ["MongoDB", "Express", "React", "Node"];

const MERNDeveloper = [];
for (const user in users) {
  isMERN = true;
  for (const skill of MERN) {
    have = false;
    users[user].skills.forEach((one) => {
      if (one === skill) {
        have = true;
      }
    });
    if (have === false) {
      isMERN = false;
      console.log("yes");
    }
  }
  if (isMERN) {
    MERNDeveloper.push(user);
  }
}

console.log(MERNDeveloper);
// 4
users.Aryan = {};

// 5
const keys = Object.keys(users);

// 6
const values = Object.values(users);

// 7
const countries = {
  India: {
    name: "India",
    capital: "New Delhi",
    populations: "100 million",
    language: ["Hindi", "English", "Tamil"],
  },
};
