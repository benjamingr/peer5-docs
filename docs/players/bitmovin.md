# Bitmovin with Peer5 for HLS integration

<br>
![](./images/bitmovin.png)
<br><br>
[Bitmovin](https://bitmovin.com) is a feature rich video player that supports HLS.

The integration with Peer5 plugin is as easy as it can get.

In addition to the player script, include Peer5 client and Bitmovin plugin.
 
## Peer5 client and plugins scripts
add these two scripts to the `head` of your player's page

     <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
     <script src="//api.peer5.com/peer5.bitmovin.plugin.js"></script>
    
## Complete Example 
 
The following information needs to be filled according to your actual data:
 
- `PEER5_API_KEY` &nbsp;&nbsp;your [Peer5 API key](https://app.peer5.com/integration)
- `MANIFEST_FILE` &nbsp;&nbsp;url to your `.m3u8` file
- `BITMOVIN_LICENSE` &nbsp;&nbsp;license from [Bitmovin](https://bitmovin.com)
  
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Bitmovin Player test</title>
        <!-- peer5 client & plugin -->
        <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
        <script src="//api.peer5.com/peer5.bitmovin.plugin.js"></script>
        
        <!-- Bitmovin script -->
        <script src="//bitmovin-a.akamaihd.net/bitmovin-player/stable/6/bitmovinplayer.min.js"></script>;
        
    </head>
    <body>
        <div id="player"></div>
        <script type="text/javascript">
          var conf = {
            key: "BITMOVIN_LICENSE",
            source:    {
              hls: "MANIFEST_FILE"
            }
          };
          var player = bitmovin.player('player');
     
          player.setup(conf).then(function(value) {
            // Success
          }, function(reason) {
            // Error!
          });
        </script>
    </body>
    </html>
```


Visit the the full VideoJS docs [here](http://docs.videojs.com/)
