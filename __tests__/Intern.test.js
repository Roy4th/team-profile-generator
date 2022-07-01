const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const Intern = require('../lib/Intern');

test('Gets name, id, email, and school of Intern', () => {
    const intern = new Intern('Roy', '123', 'roy@gmail.com', 'school');

    expect(intern.name).toBe('Roy');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('roy@gmail.com');
    expect(intern.school).toBe('school');
});