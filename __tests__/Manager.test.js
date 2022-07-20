const Manager = require('../lib/Manager');

test('gets name, id, email, amd officeNumber of manager', () => {
    const manager = new Manager ('Roy', '1234', 'example@gamil.com', '1');

    expect(manager.name).toBe('Roy');
    expect(manager.id).toBe('1234');
    expect(manager.email).toBe('example@gamil.com');
    expect(manager.officeNumber).toBe('1')
})