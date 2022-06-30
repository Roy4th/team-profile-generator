const Employee = require('../lib/Employee');

test("Creates a Employee object", () => {
    const employee = new Employee("Roy","123","Roy@gmail.com");
    expect(employee.name).toBe("Roy");
    expect(employee.id).toBe("123");
    expect(employee.email).toBe("Roy@gmail.com");
});
