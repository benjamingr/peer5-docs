## Peer5 and Progressive Web Apps

At Peer5, we are big believers in the web platform. Progressive web apps are a step forward in that direction and allow web developers to deliver native-app like experience to web browsers.

Peer5's mission is to enable efficient distributed video delivery, even in places with poor internet coverage. Progressive web apps aim to provide rich applications that are thin in download size and often perform better on poor connections than "native" applications. Since both aim to help people with connectivity and user experience the connection is quite natural. 

### Integrating Peer5 with Progressive Web Apps

Since Peer5 and progressive web apps both leverage tools that are from the web platform like WebRTC integrating Peer5 with Progressive Web Apps is very easy since every PWA is a web app first.

This guide assumes that you already have a server serving video in either HLS or DASH formats. If this is not the case we have a guide explaining how to set that up [for live video](guides/setting-up-hls-live-streaming-server-using-nginx/) as well as a guide [for VoD](guides/production-ready-hls-vod/). In addition we support (and recommend considering) [Wowza](guides/how-to-optimize-wowza-server/).

In order to integrate Peer5 into your PWA, first one needs to choose a video player to integrate to. Peer5 supports virtually every HTML5 video player that streams HLS or DASH. We recommend the free [Clappr](players/clappr/) or [Video.js](players/videojs/), some other popular choices are [JWPlayer](players/jwplayer-7/) and [Bitmovin](players/bitmovin/).

Then, [register to Peer5](https://app.peer5.com/register) and obtain your Peer5 token (available in the [integration tab](https://app.peer5.com/integration)) and complete integration according to the details there.

### Peer5 on mobile connections

By default, Peer5 will not distribute video from peers on mobile (4G, 3G) connections. Although many places in the world have unlimited mobile data plans - Peer5 prefers to err on the side of caution and not distribute the video from mobile connections by default. This can be configured [in the deployment tab](https://app.peer5.com/deployment) of your account.

