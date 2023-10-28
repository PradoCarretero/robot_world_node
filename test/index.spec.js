const { expect } = require("chai");

class World {}

describe("Create Default World", function () {
  it("should create a default world", () => {
    const world = new World();
  });
});
