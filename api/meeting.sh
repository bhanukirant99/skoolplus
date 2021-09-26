#!/bin/bash

API_KEY="airclass_default_secret"
# airclass_URL="http://localhost:3000/api/v1/meeting"
# airclass_URL=https://airclass.herokuapp.com/api/v1/meeting
airclass_URL=https://airclass.up.railway.app/api/v1/meeting

curl $airclass_URL \
    --header "authorization: $API_KEY" \
    --header "Content-Type: application/json" \
    --request POST