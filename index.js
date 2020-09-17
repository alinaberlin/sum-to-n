const sumFromOneToN = (n) => {
    if (isNaN(n) || !Number.isInteger(n)) {
        throw new Error('n must be an integer')
    }
    return (n * (n+1))/2
}

module.exports = sumFromOneToN