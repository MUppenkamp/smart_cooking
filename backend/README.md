
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
        "id": number,
        "isFavorite": boolean
    }

PATCH recipe/{userid}/shopping/list

Body:

    {
        "id": number,
        "isChecked": boolean
    }
PATCH user/{userid}/data

Body:

    {
        // group one (Every single is independent)
        "firstName"?: string,
        "lastName"?: string,
        "mail"?: string

        // group two (These two must be provided if you want to change the password)
        "oldPassword"?: string,
        "newPassword"?: string
    }
