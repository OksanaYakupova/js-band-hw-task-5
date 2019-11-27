const Transport = require('./transport').default;

const transport = new Transport('model', 'producedYear', 1, 'averageSpeed');


test('check transport capacity', () => {
    expect(transport.capacity)
        .toBe(1);
});

test('check transport showCapacityInPounds()', () => {
    expect(transport.showCapacityInPounds())
        .toBe(2.20462262);
});

test('check transport showAverageSpeed(', () => {
    expect(transport.showAverageSpeed())
        .toBe(transport.averageSpeed);
});
