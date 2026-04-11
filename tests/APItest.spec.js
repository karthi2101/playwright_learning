import { test, expect } from '@playwright/test';

test.describe('API tests', () => {

  test('GET — fetch data', async ({ request }) => {
    const response = await request.get('https://httpbin.org/get');

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);

    expect(body.url).toBe('https://httpbin.org/get');
  });

  test('POST — send data', async ({ request }) => {
    const response = await request.post('https://httpbin.org/post', {
      data: {
        username: 'SK123',
        password: 'SK@1234'
      }
    });

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);

    expect(body.json.username).toBe('SK123');
  });

  test('PUT — update data', async ({ request }) => {
  const response = await request.put('https://httpbin.org/put', {
    data: {
      username: 'SK123',
      firstName: 'James'
    }
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.json.firstName).toBe('James');
});

test('DELETE — delete data', async ({ request }) => {
  const response = await request.delete('https://httpbin.org/delete');

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.url).toBe('https://httpbin.org/delete');
});

});