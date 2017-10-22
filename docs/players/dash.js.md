# Dash.js with Peer5 for DASH integration

<br>
![](./images/dashjs.png)
<br><br>
[Dash.js](https://github.com/Dash-Industry-Forum/dash.js) is an open source DASH player.

The integration with Peer5 plugin is as easy as it can get.  
In addition to the player script, include the Peer5 client and the Peer5 dash.js plugin.
 
## Peer5 client and plugins scripts
Add these two scripts to the `head` of your player's page

     <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
     <script src="//api.peer5.com/peer5.dash.plugin.js"></script>
    
## Complete Example
 
The following information needs to be filled according to your actual data:
 
- `PEER5_API_KEY` &nbsp;&nbsp;your [Peer5 API key](https://app.peer5.com/integration)
- `MANIFEST_FILE` &nbsp;&nbsp;url to your `.mpd` file
  
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Dash.js Player test</title>
        <!-- peer5 client & plugin -->
        <script src="//api.peer5.com/peer5.js?id=PEER5_API_KEY"></script>
        <script src="//api.peer5.com/peer5.dashjs.plugin.js"></script>
        
        <!-- Dash.js script -->
        <script src="https://cdn.dashjs.org/latest/dash.all.min.js"></script>
        
    </head>
    <body>
        <video data-dashjs-player autoplay src="MANIFEST_FILE" controls></video>
    </body>
    </html>
```


Visit the full Dash.js docs [here](http://cdn.dashjs.org/latest/jsdoc/index.html)