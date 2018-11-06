const { graphql } = require('graphql');
const { playerSchema } = require('./api/player-api');

module.exports.query = async (event, _, callback) => {
    try {
        const result = await graphql(playerSchema, event.queryStringParameters.query);
        return callback(null, { statusCode: 200, body: JSON.stringify(result) });
    }
    catch (err) {
        return callback(err);
    }
}