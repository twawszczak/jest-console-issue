test('console.Console should not be undefined in the node environment', () => {
    expect(console.Console).not.toBeUndefined();
});
