const we = {
  name: "",
  are: {
    the: {
      best: "Koda",
    },
  },
};
console.log(we.are.the.best);

const hello = {
    world : "Hello World"
}
console.log(hello.world)


const obj = {
  str: [
    "",
    "",
    "",
    [
      "",
      [
        "",
        "",
        { man: [{ tech: { academy: "Tech Academy" } }, "ngoding"] },
      ],
    ],
  ],
};

console.log(obj.str[3][1][2].man[0].tech.academy);

const my = [
  {
    favorite: ["", "", "", { fruit: { is: "Apple" } }],
  },
  "",
];
console.log(my[0].favorite[3].fruit.is);
