
# import time

# # Define the URL
# url = 'http://api.open-notify.org/iss-now.json'

# while True:
#     # Make the request
#     response = requests.get(url)

#     # Check if the request was successful (status code 200)
#     if response.status_code == 200:
#         # Decode and parse JSON
#         obj = response.json()

#         # Create a dictionary for the latest data
#         data = {
#             "Latitude": obj['iss_position']['latitude'],
#             "Longitude": obj['iss_position']['longitude']
#         }

#         # Save the dictionary to a JSON file
#         with open('iss_data.json', 'w') as file:
#             json.dump(data, file)
#     else:
#         print("Error fetching data. Status code:", response.status_code)

#     # Wait for 2 seconds
#     time.sleep(2)

import requests
import json
import time

url = 'http://api.open-notify.org/iss-now.json'

while True:
    response = requests.get(url)

    if response.status_code == 200:
        obj = response.json()

        data = {
            "Latitude": obj['iss_position']['latitude'],
            "Longitude": obj['iss_position']['longitude']
        }

        with open('iss_data.json', 'w') as file:
            json.dump(data, file)
    else:
        print("Error fetching data. Status code:", response.status_code)

    time.sleep(2)