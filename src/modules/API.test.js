const itemsCounter = (list) => list.length;

describe('Items Counter', () => {
  test('Counter', async () => {
    const response = await itemsCounter([{ id: 1 }]);
    expect(response).toBe(1);
  });
});