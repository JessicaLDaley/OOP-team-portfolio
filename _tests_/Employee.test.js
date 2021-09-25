const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "jess";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Jess", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "jessicadaley127@gmail.com";
    const employeeInstance = new Employee("Jess", 2, email);
    expect(employeeInstance.email).toBe(email);
})

