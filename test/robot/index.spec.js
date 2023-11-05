const { expect } = require("chai");
import Robot from "../../src/robot"; 
import World from "../../src/world"; 

describe("Robot", function () {
  it("should create a Robot", () => {
    const robot = new Robot();
    expect (robot).to.be.an.instanceOf(Robot);
  });

  it("updates knowledge on move", () => {
    const world = new World();
    const robot = new Robot(0, 0, "", world);
    robot.scan();

    expect(robot.factAt(5, 6)).equal("fact");

    robot.move(1, 1);

    expect(robot.factAt(4, 5)).equal("fact");
    expect(robot.factAt(5, 6)).equal("");
  });
});

