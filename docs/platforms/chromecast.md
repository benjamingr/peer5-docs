## Chromecast Integration

In addition to integrating to your applciation or website - Peer5 integrates into Chromecast receiver apps built using Cast SDK v2, Cast SDK v1 or Cast Application Framework.

### Supported Players

Peer5 supports [every web player](platforms/web) including [Shaka Player](players/shaka-player) which is the built in player on the Chromecast. Peer5 supports HLS and DASH playback on Chromecast receiver apps. Note that Chromecast receiver apps play video with Shaka player in a special accelerated way - which is why we recommend to use Shaka player unless you need more custominzation - we also recommend [Clappr](players/clappr).

### Integration

Since a Cast receiver app is basically an HTML5 application so integration is simple and straightforward. iIclude [the relevant code](//app.peer5.com/integration) in your receiver application and you're good to go.

### Support

If you have any questions about integrating do not hesitate to <a href="javascript:Intercom('show')">chat with us</a> or [send us an email](mailto:info@peer5.com).
