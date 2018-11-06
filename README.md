# Serverless/GraphQL/DynamoDB Sample Project

A sample project working with serverless (aws cloudformation, api gateway, lambda), graphql and a dynamodb backend.

### Functions

There's two test functions:

1. `getPlayerInformation` (query) - provides player information for a given player id
2. `registerPlayer` (mutation) - registers a new player and provides the player information

### Installation

```sh
# clone and install
git clone xyz && cd xyz && npm install

# install serverless
npm install -g serverless

# aws configuration setup
aws configure

# deploy your version
serverless deploy --aws-profile YOUR_PROFILE
#=> endpoint output
```

### Example Usage

Register Player:
```sh
# register new player
curl -G 'YOUR_ENDPOINT' --data-urlencode 'query=mutation {registerPlayer(handle: "Tyler", race: "Dwarf", archType: "Cleric")}'

#=> {
        "data":{
            "registerPlayer":{
                "handle":"Tyler",
                "race":"Dwarf",
                "id":"b5254563-7811-404e-b132-8a2f154f39fd",
                "archType":"Cleric"
            }
        }
    }
```

Player Information:
```sh
# get player information
curl -G 'YOUR_ENDPOINT' --data-urlencode 'query={getPlayerInformation(id: "b5254563-7811-404e-b132-8a2f154f39fd")}'

#=> {
        "data":{
            "getPlayerInformation":{
                "handle":"Tyler",
                "race":"Dwarf",
                "id":"b5254563-7811-404e-b132-8a2f154f39fd",
                "archType":"Cleric"
            }
        }
    }
```

---
_Tyler Hoersch 2018_