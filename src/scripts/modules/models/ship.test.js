const Ship = require('./ship').default;

const ship = new Ship('model', 'name', 1, 1, 1, 1);

test('check ship model', () => {
    expect(ship.model)
        .toBe('model');
});

test('check ship name', () => {
    expect(ship.name)
        .toBe('name');
});

test('check ship produced year', () => {
    expect(ship.producedYear)
        .toBe(1);
});

test('check ship capacity', () => {
    expect(ship.capacity)
        .toBe(1);
});

test('check ship showAverageSpeed() in nm', () => {
    expect(ship.showAverageSpeed())
        .toBe(1 + 'nm');
});

test('check ship count of team', () => {
    expect(ship.countOfTeam)
        .toBe(1);
});
