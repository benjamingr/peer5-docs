## Chromecast Integration

Peer5 can be integrated with Chromecast receiver apps built using Cast SDK v2, Cast SDK v1 or Cast Application Framework.

### Supported Players and Streaming Protocols

Peer5 supports [every web player](platforms/web), including [Shaka Player](players/shaka-player) which is the built-in video player for Chromecast. Peer5 supports HLS and MPEG-DASH playback on Chromecast receiver apps. Note that Chromecast receiver apps play video with Shaka player in a special, accelerated way, which is why we recommend using Shaka player if at all possible. If Shaka player cannot be used, we also recommend [Clappr](players/clappr).

### Integration

Since a Chromecast receiver app is just an HTML5 application, integration with Peer5 is simple and straightforward. Simply include [the relevant code](//app.peer5.com/integration) in your receiver application and you're good to go.

### Support

If you have any questions about our Chromecast support, please <a href="javascript:Intercom('show')">chat with us</a> or [send us an email](mailto:info@peer5.com).
