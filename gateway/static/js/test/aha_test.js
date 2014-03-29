describe("aha game", function() {
  it("will move object down when down key is pressed", function() {
    var object = {
        x: 0,
        y: 0
    };

    handleKeyDown(37);
    expect(object.x).toBe(-5);
    expect(object.y).toBe(0);
  });
});

