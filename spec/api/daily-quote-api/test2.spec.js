'use strict';

beforeEach(async () => {
    await fakehttpserver.start('data.json');
});

afterEach(async () => {
    await fakehttpserver.end();
});

test('Get Weather - weather is sunny in Tel Aviv - should return 37 celcius', async () => {
    const weather = await request.get(`http://localhost:8080/weather?location=TelAviv`);
    expect(weather).toEqual(37);
});


