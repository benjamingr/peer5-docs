## iOS and tvOS Integration

Peer5 integrates with iOS and tvOS apps in a straightforward and simple way. Peer5 installs a proxy between your video player and your stream which intercepts network requests and proxies them through a [P2P mesh network](/overview/).

### Hybrid Application

Since a hybrid application is just an HTML5 application in disguise, Peer5 will work out of the box with any hybrid application. In the same page or view in which you initialize your video player, simply include the Peer5 scripts.

Delivery of content via P2P will work on all Apple devices running iOS 11.0 and up and tvOS 11.0 and up (versions with WebRTC support). Peer5's SDK falls back on native video delivery on older versions of iOS and tvOS as well.

### React Native Application

Integration through React Native depends on whether you're performing video playback using an HTML5 player or a native player.

If you're using an HTML5 player, please follow the [web integration instructions](/platforms/web). For native playback, please follow the native application instructions below.


### Native Application

Peer5 has a thin iOS/tvOS SDK that is embeddable in your native app. The SDK is installed through CocoaPods or Carthage.  

The Peer5 iOS/tvOS SDK works with any video player that supports HLS or DASH, although we recommend [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer) as it is the built-in player for Apple devices and, in our experience, produces good playback results.

At the moment, the iOS/tvOS SDK is in private beta testing. If you'd like to participate in the beta, please [send us an email](mailto:info@peer5.com?subject=iOS%20SDK%20Integration) or <a href="javascript:Intercom('show')">Chat with us</a>.
