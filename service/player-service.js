const AWS = require('aws-sdk');
const { promisify } = require('./../util/promisfy');

var database = new AWS.DynamoDB.DocumentClient();

var getPlayerInformation = id => {
    return promisify(callback => database.get({ TableName: 'Players', Key: { id } }, callback)
        ).then((result) => {
            if (!result.Item) {
                return { error: true };
            }

            return result.Item;
        }).then(playerInfo => {
            if(playerInfo.error) {
                return `No player information found for ${id}`
            }

            return JSON.stringify(playerInfo);
        })    
}

var registerPlayer = (id, handle, archType, race) => {
    return promisify(callback =>
        database.update({
            TableName: 'Players',
            Key: { id },
            UpdateExpression: 'SET handle = :handle, archType = :archType, race = :race',
            ExpressionAttributeValues: {
                ':handle': handle,
                ':archType': archType,
                ':race': race
            },
        }, callback))
    .then(() => getPlayerInformation(id))
}

module.exports.getPlayerInformation = getPlayerInformation;
module.exports.registerPlayer = registerPlayer;