# Radiant Media Player with Peer5 for HLS integration

<br>
![](./images/radiant.png)
<br><br>
[Radiant Media Player](https://www.radiantmediaplayer.com/) is a feature rich video player that supports HLS.

The integration with Peer5 plugin is as easy as it can get.

In addition to the player script, include Peer5 client and Radiant Player plugin.
 
## Peer5 client and plugins scripts
add these two scripts to the `head` of your player's page
```html
<script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
<script src="//api.peer5.com/peer5.radiant.plugin.js"></script>
```

## Complete Example 
 
The following information needs to be filled according to your actual data:
 
- `PEER5_API_KEY` &nbsp;&nbsp;your [Peer5 API key](https://app.peer5.com/integration)
- `MANIFEST_FILE` &nbsp;&nbsp;url to your `.m3u8` file
- `RADIANT_LICENSE` &nbsp;&nbsp;license from [Radiant Media Player](https://www.radiantmediaplayer.com)
  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Radiant MP test</title>
    <!-- peer5 client & plugin -->
    <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
    <script src="//api.peer5.com/peer5.radiant.plugin.js"></script>
    
    <!-- Radiant script -->
    <script src="https://cdn.radiantmediatechs.com/rmp/v3/latest/js/rmp.min.js"></script>
    
</head>
<body>
    <div id="rmpPlayer"></div>
    <script>
        var settings = {
          licenseKey: 'RADIANT_LICENSE',
          bitrates: {
            hls: 'MANIFEST_FILE'
          },
          delayToFade: 3000,
          width: 640,
          height: 360
        };

        var rmp = new RadiantMP('rmpPlayer');
        rmp.init(settings);
    </script>
</body>
</html>
```


Visit the full Radiant Media Player docs [here](https://www.radiantmediaplayer.com/documentation.html)
