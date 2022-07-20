const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("gets name, id, and email of the employee", () => {
    const employee = new Employee('Roy', '1234', 'example@gamil.com');

    expect(employee.name).toBe('Roy');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('example@gamil.com')
});