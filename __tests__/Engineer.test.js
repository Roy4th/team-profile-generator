const Engineer = require('../lib/Engineer')

test('gets name, id, email, and github of engineer', () => {
    const engineer = new Engineer ('Roy', '123', 'roy@gmail.com', 'royboy');
    expect(engineer.name).toBe('Roy');
    expect(engineer.id).toBe("123");
    expect(engineer.email).toBe("roy@gmail.com");
    expect(engineer.github).toBe('royboy');
});