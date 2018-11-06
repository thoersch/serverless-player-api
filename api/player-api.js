const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull } = require('graphql');
const { getPlayerInformation, registerPlayer } = require('./../service/player-service');
const uuid = require('uuid');

const playerSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'GetPlayerInformation',
      fields: {
        getPlayerInformation: {
          args: { id: { name: 'id', type: new GraphQLNonNull(GraphQLString) } },
          type: GraphQLString,
          resolve: (_, args) => getPlayerInformation(args.id)
        }
      }
    }),
    mutation: new GraphQLObjectType({
        name: 'RegisterPlayer',
        fields: {
          registerPlayer: {
            args: {
              handle: { name: 'handle', type: new GraphQLNonNull(GraphQLString) },
              archType: { name: 'archType', type: new GraphQLNonNull(GraphQLString) },
              race: { name: 'race', type: new GraphQLNonNull(GraphQLString) }
            },
            type: GraphQLString,
            resolve: (_, args) => registerPlayer(uuid.v4(), args.handle, args.archType, args.race),
          },
        },
    }),
})

module.exports.playerSchema = playerSchema;