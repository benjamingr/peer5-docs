# Configuring Peer5
 
Peer5 has a client-side Javascript API for configuring different parameters of the library.

## P2P Toggle

When Peer5 is loaded, it has P2P enabled by default.
If, for some reason, you want to disable P2P requests for a given user session, you can do it with the following code:

```javascript
peer5.configure({p2p: false});
```

Any requests made using `peer5.Request` after disabling P2P will use XMLHttpRequest to fetch the file from the HTTP server.

To re-enable P2P requests, you need to call configure with `{p2p:true}`:

```javascript
peer5.configure({p2p: true});
```

Any requests made using `peer5.Request` after enabling P2P will fully utilize the Peer5 mesh network.

## Upload Toggle

In some cases its required that P2P is used only for downloading without uploading.
Upload is on by default for all non-cellular network users.  
Disabling P2P upload manually can be achieved like so:

```javascript
peer5.configure({upload: false});
```

Re-enabling upload:

```javascript
peer5.configure({upload: true});
```