import  socket
import time


HOST = '127.0.0.1'
PORT = 65432
s_temp = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
a = s_temp.connect((HOST,  PORT))
print(a)
print(s_temp)
s_temp.sendall( b'Hello, world')
s_temp.settimeout(5)
while 1:
    response =s_temp.recv(1024)
    if not response:
        break
    else:
        print(response)