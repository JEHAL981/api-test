import request from "../utils/request";

test('Should retrieve postcode SW1A 1AA', async () => {
    let response = await request({
        method: "GET",
        url: 'http://api.postcodes.io/postcodes/' + "SW1A 1AA",

    });

    expect(response.statusCode).toEqual(200);
    expect(response.body.result.postcode).toEqual("SW1A 1AA");

});

test('Should return 400 when no post code is provided', async () => {
    let response = await request({
        method: "GET",
        url: "http://api.postcodes.io/postcodes/",
        headers: {
            "Accepted": "application/json"
        }
    });

    expect(response.statusCode).toEqual(400);
    expect(response.body.error).toEqual("No postcode query submitted. Remember to include query parameter");

});

test('Should return invalid postcode error message', async () => {
    let response = await request({
        method: "GET",
        url: 'http://api.postcodes.io/postcodes/' + "AB123",
        headers: {
            "Accepted": "application/json"
        }
    });

    expect(response.statusCode).toEqual(404);
    expect(response.body.error).toEqual("Invalid postcode");
});