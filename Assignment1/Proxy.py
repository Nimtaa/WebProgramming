import socket
from threading import Thread
import json
import requests

filename = "urls.json"


class ClientThread(Thread):
    def __init__(self,ip,port):
        Thread.__init__(self)
        self.ip = ip
        self.port= port
        print ("Server Thread created ip ",ip) 
    
    def run(self):
        while(True):
            data = conn.recv(1024)
            if not data:
                break
            temp = data.decode("utf-8")
            print("data came from browser: ",data)
            webserver, port = (ClientThread.extractAddress(temp))
            print("webserver ", webserver,"port ", port)

            if (ClientThread.URLFiltered("http://"+webserver, url_list)):
                print("Filtered website")
                conn.send(b'HTTP/1.0 200 OK\n')
                conn.send(b'Content-Type: text/html\n')
                conn.send(b'\n') 
                conn.send(b"""
                    <html>
                    <head><meta charset="utf-8"/></head>
                    <body>
                    <h1>Filtered &#x1F62D</h1>
                    <p>This website is in the list you have defined, so you cannot enter here! </p>
                    </body>
                    </html>
                """)
            else:
                ClientThread.proxyConnection(webserver, port, data)

    
    def URLFiltered(url,url_list):
        print("Entered here with this url ", url)
        for group in url_list.values():
            for u in group:
                if(url == u):
                    return True
        return False
    
    def extractAddress(req):
        first_line = req.split('\n')[0] 
        url = first_line.split(' ')[1]           
        print("browser request: \n", url)
        http_pos = url.find("://")
        if(http_pos == -1):
            temp = url
        else:
            temp = url[(http_pos+3):]
        port_pos = temp.find(":")
        webserver_pos = temp.find("/")
        if(webserver_pos == -1):
            webserver_pos = len(temp)
        webserver = ""
        port = -1
        if (port_pos == -1 or webserver_pos < port_pos ):
            port = 80
            webserver = temp[:webserver_pos]
        else:
            port = int ((temp[(port_pos+1):])[:webserver_pos-port_pos-1])
            webserver = temp[:port_pos] 
        return webserver,port

    def proxyConnection (webserver, port, request):
        s_temp = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
        s_temp.connect((webserver, port))
        s_temp.send(request)
        s_temp.settimeout(5)
        print("proxy sent the request", request)
        while True:
            proxy_res = s_temp.recv(1024)
            print("proxy req's response: ", proxy_res)
            if not proxy_res:
                break
            else:
                conn.sendall(proxy_res) # send to browser

TCP_HOST = '127.0.0.1'
TCP_PORT = 65432
threads = []

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.setsockopt(socket.SOL_SOCKET,socket.SO_REUSEADDR,1)
s.bind((TCP_HOST,TCP_PORT))
 
with open(filename,"r") as data_file:    
    url_list = json.load(data_file)

while(True):
    s.listen(3)
    (conn, (ip,port)) = s.accept()
    newThread = ClientThread(ip,port)
    newThread.start()
    threads.append(newThread)
for t in threads:
    t.join()


