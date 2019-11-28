const Cost = require('./cost').default;

const cost = new Cost('model', 1, 1);

test('check model in cost of delivery', () => {
    expect(cost.model)
        .toBe('model');
});

test('check cargo cost in cost of delivery', () => {
    expect(cost.cargoCost)
        .toBe(1);
});

test('check distance cost in cost of delivery', () => {
    expect(cost.distanceCost)
        .toBe(1);
});
