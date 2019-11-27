const Transport = require('./transport').default;

test('check transport capacity', () => {
    expect(new Transport(null, null, 1, null).capacity)
        .toBe(1);
});
