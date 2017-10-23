# Video.js with Peer5 for DASH integration

<br>
![](./images/videojs.png)
<br><br>
[Video.js](http://videojs.com/) is a free and open source HTML5 video player that supports DASH.

The integration with Peer5 plugin is as easy as it can get.
In addition to the player script, include Peer5 client and Video.js plugin.
 
### Video.js + dash.js Integration
add these two scripts to the `head` of your player's page

     <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
     <script src="//api.peer5.com/peer5.videojs.dashjs.plugin.js"></script>
    
### Video.js + Shakaplayer Integration
add these two scripts to the `head` of your player's page

     <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
     <script src="//api.peer5.com/peer5.videojs.shakaplayer.plugin.js"></script>

## Complete Example 
 
The following information needs to be filled according to your actual data:
 
- `PEER5_API_KEY` &nbsp;&nbsp;your [Peer5 API key](https://app.peer5.com/integration)
- `MANIFEST_FILE` &nbsp;&nbsp;url to your `.mpd` file
  
```html
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Video.js Player test</title>
        <!-- peer5 client & plugin -->
        <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
        <script src="//api.peer5.com/peer5.videojs.dashjs.plugin.js"></script>
    
        <!-- video.js5 scripts & styles -->
        <link href="//vjs.zencdn.net/5.19.0/video-js.css" rel="stylesheet">
        <script src="//vjs.zencdn.net/5.19.0/video.js"></script>
        <!-- video.js5 dash plugin -->
        <script src="//cdn.dashjs.org/latest/dash.all.min.js"></script>
        <script src="//cdn.jsdelivr.net/npm/videojs-contrib-dash/dist/videojs-dash.min.js"></script>
    
    </head>
    <body>
        <video id="player" class="video-js vjs-default-skin" height="360" width="640" controls preload="none">
            <source src="MANIFEST_FILE" type="application/dash+xml" />
        </video>
        <script>
            var player = videojs('#player');
        </script>
    </body>
    </html>
```

Visit the full Video.js docs [here](http://docs.videojs.com/)
