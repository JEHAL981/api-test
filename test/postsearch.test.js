import request from "../utils/request";
import Fixtures from "../fixture/fixture";
import PostcodeSearchFixture from '../fixture//postcode/postcode';

test('Should retieve list of post codes ', async () => {
    let response = await request({
        method: "POST",
        url: 'http://api.postcodes.io/postcodes/',
        body: PostcodeSearchFixture.postcodeSearch

    });

    expect(response.statusCode).toEqual(200);

});