
const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "jessicaldaley";
    const employeeInstance = new Engineer("jess", 2, "jessicadaley127@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "jessicaldaley";
    const employeeInstance = new Engineer("jess", 2, "jessicadaley127@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("jess", 2, "jessicadaley127@gmail.com", "jessicaldaley");
    expect(employeeInstance.getRole()).toBe(returnValue);
});