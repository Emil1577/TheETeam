const Intern = require("../lib/Intern");


describe("Engineer", () => {
  
 
  
  describe("getName", () => {
    it("return the object's name property", () => {
        const employee = new Intern("Rocky", 1, "Rocky@gmail.com");

      expect(employee.getName()).toEqual("Rocky");
    });
  });

 


  describe("getEmail", () => {
    it("return the object's email property", () => {
        const employee = new Intern("Rocky", 1, "Rocky@gmail.com");

      expect(employee.getEmail()).toEqual("Rocky@gmail.com");
    });
  })

})

