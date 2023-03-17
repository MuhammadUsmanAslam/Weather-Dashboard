const itemsCounter = (list) => list.length;

const commentsCounter = (comments) => comments.length;

describe('Items Counter', () => {
  test('Weather List items Counter', async () => {
    const response = await itemsCounter([{ id: 1 }]);
    expect(response).toBe(1);
  });
  test('Comments Counter', async () => {
    const response = await commentsCounter([{ username: '', comment: '', creation_date: '' }]);
    expect(response).toBe(1);
  });
});
