const just = {
  thing: "the",
  got: function () {
    return this.thing;
  },
};

console.log(just.hasOwnProperty("thing"));
