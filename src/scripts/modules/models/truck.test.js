const Truck = require('./truck').default;

const truck = new Truck('model', 'licensePlate', 1, 1, 1, 'typeOfGas');

test('check truck model', () => {
    expect(truck.model)
        .toBe('model');
});

test('check truck license plate', () => {
    expect(truck.licensePlate)
        .toBe('licensePlate');
});

test('check truck produced year', () => {
    expect(truck.producedYear)
        .toBe(1);
});

test('check truck capacity', () => {
    expect(truck.capacity)
        .toBe(1);
});

test('check truck showAverageSpeed() in km', () => {
    expect(truck.showAverageSpeed())
        .toBe(1 + 'km');
});

test('check truck type of gas', () => {
    expect(truck.typeOfGas)
        .toBe('typeOfGas');
});
