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
    for (let i = 0; i < response.body.result.length; i++) {
        expect(response.body.result[i].query).toEqual(response.body.result[i].result.postcode);
    }
    
});