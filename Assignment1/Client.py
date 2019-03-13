import  socket
import time


HOST = '127.0.0.1'
PORT = 65432

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST,PORT))
    s.sendall(b'http://www.facebook.com')
    # time.sleep(5)
    # s.sendall(b'http://www.yahoo.com')