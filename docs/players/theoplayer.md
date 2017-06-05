# Theoplayer with Peer5 for HLS integration

<br>
![](./images/theoplayer.svg)
<br><br>
[Theoplayer](https://www.theoplayer.com/) is a feature rich video player that supports HLS.

The integration with Peer5 plugin is as easy as it can get.

In addition to the player script, include Peer5 client and Theoplayer plugin.
 
## Peer5 client and plugins scripts
add these two scripts to the `head` of your player's page

     <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
     <script src="//api.peer5.com/peer5.theoplayer.plugin.js"></script>
    
## Complete Example 
 
The following information needs to be filled according to your actual data:
 
- `PEER5_API_KEY` &nbsp;&nbsp;your [Peer5 API key](https://app.peer5.com/integration)
- `MANIFEST_FILE` &nbsp;&nbsp;url to your `.m3u8` file
- `THEOPLAYER_LICENSE` &nbsp;&nbsp;your license key from [Theoplayer](https://www.theoplayer.com/)
  
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Theoplayer test</title>
        <!-- peer5 client & plugin -->
        <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
        <script src="//api.peer5.com/peer5.theoplayer.plugin.js"></script>
        
        <!-- theoplayer scripts & styles -->
        <script type='text/javascript' src='//cdn.theoplayer.com/latest/THEOPLAYER_LICENSE/theoplayer.loader.js'></script>
        
    </head>
    <body>
        <video class="video-player" src="MANIFEST_FILE" controls="controls"></video>
    </body>
    </html>
```


Visit the full Theoplayer docs [here](https://support.theoplayer.com/hc/en-us)
