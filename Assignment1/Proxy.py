import socket
from threading import Thread
from socketserver import ThreadingMixIn
import requests
import webbrowser
import json


chromePath = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
webbrowser.register('chrome', None,webbrowser.BackgroundBrowser(chromePath),1)
filename = "urls.json"

class ClientThread(Thread):
    def __init__(self,ip,port):
        Thread.__init__(self)
        self.ip = ip
        self.port= port
        print ("Server Thread created ip ",ip)        
        with open(filename,"r") as data_file:    
            urls = json.load(data_file)
        pprint(data)

    # def sendRequest(self,url):
    #     r = requests.get(url);
    #     return r
    def run(self):
        while(True):
            data = conn.recv(1024)
            if not data:
                break
            # conn.sendall(requests.get('https://google.com'));
            url = data.decode("utf-8")
            print(url+"\n")
            webbrowser.get('chrome').open_new_tab(url)            
    
    def checkURL(url):




# listen on a port to get target link
# link exists in filtered list?
# reading source websites from a file
# send request
TCP_HOST = '127.0.0.1'
TCP_PORT = 65432
threads = []

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.setsockopt(socket.SOL_SOCKET,socket.SO_REUSEADDR,1)
s.bind((TCP_HOST,TCP_PORT))
while(True):
    s.listen(3)
    (conn, (ip,port)) = s.accept()
    newThread = ClientThread(ip,port)
    newThread.start()
    threads.append(newThread)
for t in threads:
    t.join()


