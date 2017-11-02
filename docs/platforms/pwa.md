## Peer5 and Progressive Web Apps (PWAs)

At Peer5, we are big believers in Progressive Web Apps as they deliver a native-app like experience to web browsers.

### Integrating Peer5 with PWAs

This guide assumes that you already have a media server that can output HLS or DASH streams. If this is not the case, we have a guide that explains how to set that up [for live video](guides/setting-up-hls-live-streaming-server-using-nginx/) as well as [for VoD](guides/production-ready-hls-vod/). In addition to nginx / nimble / ffmpeg, we also support (and recommend) [Wowza](guides/how-to-optimize-wowza-server/).

In order to integrate Peer5 with your PWA, you first need to choose a video player. Peer5 supports virtually every HTML5 player. Among the free options, we recommend [Clappr](players/clappr/) or [Video.js](players/videojs/). Among the paid options, popular choices are [JWPlayer](players/jwplayer-7/) and [Bitmovin](players/bitmovin/).

Then, [register with Peer5](https://app.peer5.com/register), obtain your API key (available in the [integration tab](https://app.peer5.com/integration)) and complete integration according to the details there.

### Peer5 on Mobile Connections

By default, Peer5 does not allow users on cellular connections (3G / 4G) to upload content. This setting can be configured [in the deployment tab](https://app.peer5.com/deployment) of your account.
