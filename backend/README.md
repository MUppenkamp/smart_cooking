
const enviroment = process.env?.isDocker;

Add to the docker-compose.yml file if you want to use that
  environment:
      isDocker: true
      
***

Baseurl: 'localhost:3000'

GET recipe/{userId}

GET recipe/{userId}/favorite

GET recipe/{userid}/calendar

GET recipe/{userid}/shopping/list

POST recipe/{userId}/favorite

Body:

    {
        "Id": number,
        "isFavorite": boolean
    }
