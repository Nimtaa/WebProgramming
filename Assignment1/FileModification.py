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
    
def main(argv):
    group = ''
    address = ''
    try:
        opts, args = getopt.getopt(argv,"hg:a:")
    except getopt.GetoptError:
        print 'FileModification.py -g <group> -a <address>'
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print 'Adding URL to the file: python FileModification.py -g <group> -a <address>' 
            sys.exit()
        elif opt in ("-g"):
            group  = arg
            # addGroup(group)
        elif opt in ("-a"):
            address = arg
    if(group and address):
        addAddress(group,address)
    else:
        addGroup(group)
    print 'Group is "', group
    print 'Address is "', address

if __name__ == "__main__":
   main(sys.argv[1:])
