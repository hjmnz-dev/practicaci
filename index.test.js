const holaMundo = require('./index');

test('Debería devolver "Hola Mundo"', () => {
    expect(holaMundo()).toBe("Hola Mundo");
});