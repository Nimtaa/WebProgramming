import requests
from pprint import pprint   
import json
print( requests.get('https://google.com').text)


# filename = "./urls.json"
# with open(filename,"r") as data_file:    
#     urls = json.load(data_file)
#     for group in urls.values():
#         for url in group:
#             print(url)