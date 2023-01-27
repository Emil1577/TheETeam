const Employee = require("../lib/Employee");


describe("Employee", () => {
  
 
  describe("Employee testing", () => {
    it("Testing objects name, id, and email properties", () => {
      const employee = new Employee("Rocky", 1, "Rocky@gmail.com");

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("Rocky");
      expect(employee.email).toEqual("Rocky@gmail.com");
    });
  });

  
  describe("getName", () => {
    it("return the object's name property", () => {
        const employee = new Employee("Rocky", 1, "Rocky@gmail.com");

      expect(employee.getName()).toEqual("Rocky");
    });
  });



  describe("getEmail", () => {
    it("return the object's email property", () => {
        const employee = new Employee("Rocky", 1, "Rocky@gmail.com");

      expect(employee.getEmail()).toEqual("Rocky@gmail.com");
    });
  })

})