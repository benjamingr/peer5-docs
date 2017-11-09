# JWPlayer with Peer5 for HLS integration

![](./images/jwplayer.jpg)

[JWPlayer](https://www.jwplayer.com/) is a feature rich video player that supports HLS.

The integration with Peer5 plugin is as easy as it can get.
In addition to the player script, include Peer5 client and JWPlayer plugin.
 
## Peer5 client and plugins scripts
add these two scripts to the `head` of your player's page
```html
<script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
<script src="//api.peer5.com/peer5.jwplayer7.plugin.js"></script>
```

## Complete Example 
 
The following information needs to be filled according to your actual data:
 
- `PEER5_API_KEY` &nbsp;&nbsp;your [Peer5 API key](https://app.peer5.com/integration)
- `JWPLAYER_KEY`  &nbsp;&nbsp;&nbsp;&nbsp;your [JWPlayer API key](https://dashboard.jwplayer.com/#/account/properties)
- `MANIFEST_FILE` &nbsp;&nbsp;url to your `.m3u8` file
  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JWPlayer test</title>
    <!-- peer5 client & plugin -->
    <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
    <script src="//api.peer5.com/peer5.jwplayer7.plugin.js"></script>

    <!-- jwplayer - You can change to your self hosted script -->
    <script src="//ssl.p.jwpcdn.com/player/v/7.12.0/jwplayer.js"></script>

    <!-- jwplayer license key -->
    <script>jwplayer.key = 'JWPLAYER_KEY';</script>
</head>
<body>
    <div id="player"></div>
    <script>
        var player = jwplayer('player').setup({
            file: 'MANIFEST_FILE'
        });
    </script>
</body>
</html>
```

## Complete Example With JW Cloud Platform

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JW7 Player test</title>
    <!-- peer5 client & plugin -->
    <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
    <script src="//api.peer5.com/peer5.jwplayer7.plugin.js"></script>
</head>
<body>
    <div>
        <!-- JWPlayer cloud platform script -->
        <script src="//content.jwplatform.com/players/abcd-efghij12.js"></script>
    </div>
</body>
</html>
```


visit [here](https://developer.jwplayer.com/jw-player/) for the full JWPlayer docs