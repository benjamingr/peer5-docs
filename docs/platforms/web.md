## HTML5 Web Integration

Peer5 integrates into a variety of HLS and DASH video players and works with virtually every server side technology.

This guide assumes that you already have a server serving video in either HLS or DASH formats. If this is not the case we have a guide explaining how to set that up [for live video](guides/setting-up-hls-live-streaming-server-using-nginx/) as well as a guide [for VoD](guides/production-ready-hls-vod/). In addition we support (and recommend considering) [Wowza](guides/how-to-optimize-wowza-server/).

### Streaming server and DRM

Peer5 is fully compatible with every streaming server and DRM. This fact makes integration require no changes to your server side code.

### Video Player

Peer5 supports virtually every HTML5 video player that streams HLS or DASH. We recommend the free [Clappr](players/clappr/) or [Video.js](players/videojs/), some other popular choices are [JWPlayer](players/jwplayer-7/) and [Bitmovin](players/bitmovin/).

We also work with most custom HLS/DASH players. If you'd like to check if the player you're using is compatible with Peer5 do not hesitate to <a href="javascript:Intercom('show')">Chat with us</a> or [send us an email](mailto:info@peer5.com).

### Integration

After you've [signed up](https://app.peer5.com/register) please go to [the integration page](https://app.peer5.com/integration). Peer5 will analyze your website and streaming player for you and recommend what integration code to use. In addition that page also includes integration instructions supported players.

### Architecture

Peer5 is integrated with a broadcaster’s existing infrastructure by deploying two lines of Javascript on the web page where the video player resides. This client side Javascript implements a hybrid switcher. Once Peer5 is integrated, users can fetch video segments from either an edge server or from their peer group, depending on which channel is performing better at that given moment in time. As more chunk requests are handled by the peer group (a notion that we define as "Peer Efficiency"), the broadcaster sees dramatic reductions in server load and, consequently, higher stream quality (faster load times, less buffering, longer viewing sessions) for all viewers.

### Support

If you have any questions about integrating do not hesitate to <a href="javascript:Intercom('show')">chat with us</a> or [send us an email](mailto:info@peer5.com).