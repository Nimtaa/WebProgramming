import sys, getopt
import json

filename = "urls.json"
def addGroup(group):
    with open(filename) as f:
        data = json.load(f)
    tmp = data
    data[group]  = []
    print(data.values())
    with open(filename, 'w') as f:
        json.dump(data, f)
    

def addAddress(group, address):    
    with open(filename) as f:
        data = json.load(f)
    tmp = data[group]
    data[group].append(address)
    print(data.values())
    with open(filename, 'w') as f:
        json.dump(data, f)
    
