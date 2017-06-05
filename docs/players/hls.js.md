# Hls.js with Peer5 for HLS integration

<br>
![](./images/hlsjs.png)
<br><br>
[Hls.js](https://github.com/video-dev/hls.js) is an Open source HLS player.

The integration with Peer5 plugin is as easy as it can get.  
In addition to the player script, include Peer5 client and Hls.js plugin.
 
## Peer5 client and plugins scripts
add these two scripts to the `head` of your player's page

     <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
     <script src="//api.peer5.com/peer5.hlsjs.plugin.js"></script>
    
## Complete Example
 
The following information needs to be filled according to your actual data:
 
- `PEER5_API_KEY` &nbsp;&nbsp;your [Peer5 API key](https://app.peer5.com/integration)
- `MANIFEST_FILE` &nbsp;&nbsp;url to your `.m3u8` file
  
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Hls.js Player test</title>
        <!-- peer5 client & plugin -->
        <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
        <script src="//api.peer5.com/peer5.hlsjs.plugin.js"></script>
        
        <!-- Hls.js script -->
        <script src="//cdn.jsdelivr.net/hls.js/latest/hls.min.js"></script>
        
    </head>
    <body>
        <video id="player"></video>
        <script>
            if (Hls.isSupported()) {
                var video = document.getElementById('player');
                var player = new Hls();
                player.loadSource('MANIFEST_FILE');
                player.attachMedia(video);
                player.on(Hls.Events.MANIFEST_PARSED, function() {
                    video.play();
                });
            }
        </script>
    </body>
    </html>
```


Visit the full Hls.js docs [here](https://github.com/video-dev/hls.js/blob/master/doc/API.md)

## Custom Hls.js Based players

Its also possible to integrate Peer5 with custom players that are based on Hls.js.
For the integration to work, the `Hls` global must be exposed, and the `peer5.hlsjs.plugin.js` must be loaded before the player is initiated (e.g. before `new Hls()`).
