# Live Streaming Server

An NGiNX server that can take a stream from OBS, using the Real-Time-Messaging Protocol (RTMP), and encode it to an HTTP Live Streaming Protocol (HLS) so that we can consume it on a client.


Everything here is based on my other video streaming work which can be found here:<br/>
https://github.com/krynv/video-streaming/ <br/>
https://github.com/krynv/video-streaming-with-mongodb/ 

## Setup 

Have `docker`, `docker-compose`, OBS and VLC installed.

```
git clone git@github.com:krynv/live-streaming-server.git && cd auth && npm i && cd ..
```

```
docker-compose build
```

```
docker-compose up -d
```

Open OBS and set the server to: 
```
rtmp://localhost:1935/live 
```

With the following stream key:
```
krynv?key=supersecret
```

Open VLC, click Open then select Network Stream

Set the url to:
```
rtmp://localhost:1935/live/krynv
```

