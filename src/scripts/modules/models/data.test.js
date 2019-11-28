const Data = require('./data').default;

test('check ship list', () => {
    expect(new Data().shipList)
        .toBeTruthy();
});

test('check truck list', () => {
    expect(new Data().truckList)
        .toBeTruthy();
});

test('check cost list', () => {
    expect(new Data().costList)
        .toBeTruthy();
});
