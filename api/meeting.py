import requests
import json

API_KEY = "airclass_default_secret"
# airclass_URL = "http://localhost:3000/api/v1/meeting"
# airclass_URL = "https://airclass.herokuapp.com/api/v1/meeting"
airclass_URL = "https://airclass.up.railway.app/api/v1/meeting"

headers = {
    "authorization": API_KEY,
    "Content-Type": "application/json",
}

response = requests.post(
    airclass_URL,
    headers=headers
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("meeting:", data["meeting"])
