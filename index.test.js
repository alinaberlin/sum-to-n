const sumFromOneToN = require('./index')

it('should calculate the sum from 1 to 5', () => {
    const sum = sumFromOneToN(5)
    expect(sum).toEqual(15)
})