## iOS and tvOS Integration

Peer5 integrates with iOS and tvOS in a straightforward and simple way. Peer5 installs a proxy between your video player and your stream which intercepts network requests and proxies them through a [P2P mesh network](/overview/).

### Hybrid Application

Since a hybrid application is just an HTML5 application in disguise Peer5 will work out of the box with hybrid applications. In the same page or view in which you initialize your video player - include the Peer5 scripts.

Delivery of P2P content will work on all iOS devices from 11.0 and up (versions with WebRTC support). 

### React Native Application

Integration through React Native depends on whether or not you're performing video playback using an HTML5 player or a plugin playing natively through a native player.

For HTML5 player playback please follow the [web integration instructions](/platforms/web). For native playback please follow the native integration instructions below.


### Native Application

Peer5 has a thin native iOS SDK that is embeddable in your native app. The SDK is installed through CocoaPods or Carthage.  

The Peer5 iOS/tvOS SDK works with any video player streaming DASH/HLS although we recommend [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) which is built in and we've found to give good playback results.

At the moment, the iOS SDK integration is available for premium customers only. If you'd like to apply please [send us an email](mailto:info@peer5.com?subject=iOS%20SDK%20Integration). If you have any questions about applying or integration do not hesitate to <a href="javascript:Intercom('show')">Chat with us</a> or [send us an email](mailto:info@peer5.com).
