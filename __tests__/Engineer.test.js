const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
 
  
  describe("getName", () => {
    it("return the object's name property", () => {
        const employee = new Engineer("Rocky", 1, "Rocky@gmail.com");

      expect(employee.getName()).toEqual("Rocky");
    });
  });



  describe("getEmail", () => {
    it("return the object's email property", () => {
        const employee = new Engineer("Rocky", 1, "Rocky@gmail.com");

      expect(employee.getEmail()).toEqual("Rocky@gmail.com");
    });
  })

})