# F.A.Q

Need extra help? <a href="javascript:Intercom('show')">Chat with us</a> or [send us an email](mailto:info@peer5.com)

# Integration, devices, protocols and technologies

**Why is my stream is not accepted/is invalid?** 

In order to use peer5 you will need either an HLS stream or an MPEG-DASH stream. Unlike regular video files, these streams have a manifest file as their entry point.
  
- HLS - `.m3u8` manifest file.  
- DASH - `.mpd` manifest file.

If you are trying to integrate peer5 with any of these `.mp4` `.flv` `.mp3` `.ogg` `.webm` `.jpg` etc...  
it will not work since these are not valid streams.  

---

**How do I setup an HLS/DASH stream?** 

In order to create an HLS/DASH stream you need to convert your `rtmp` or video file to the correct format.

You can either use a hosted service to convert and host the files for you such as:  

- [akamai](https://www.akamai.com/)
- [bitmovin](https://bitmovin.com/)
- [level3](http://www.level3.com/)
- [wowza streaming cloud](https://www.wowza.com/)

or use self hosted media servers such as:

- [wowza](https://www.wowza.com/)
- [nimble](https://wmspanel.com/nimble)
- [nginx-rtmp-module](https://github.com/arut/nginx-rtmp-module)

---

**How do I integrate Peer5 with my existing video streaming service?** 

Peer5 is integrated with a broadcaster’s existing infrastructure by deploying two lines of Javascript on the web page where the video player resides. This client side Javascript implements a hybrid switcher. Once Peer5 is integrated, users can fetch video segments from either an edge server or from their peer group, depending on which channel is performing better at that given moment in time. As more chunk requests are handled by the peer group (a notion that we define as "Peer Efficiency"), the broadcaster sees dramatic reductions in server load and, consequently, higher stream quality (faster load times, less buffering, longer viewing sessions) for all viewers.
 
---

**What is WebRTC?** 

If you know what the Internet and the World Wide Web are, then you’ve heard about [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol). What you might not know is that HTTP is based on a client-server communication model – an HTTP client (web browser) makes a request to an HTTP server and gets a response. For years, the only communication protocol that web browsers supported was HTTP. This meant that browsers could only communicate with HTTP servers. While this client-server communication model has enabled the Web to become the world changing communication network that it is today, we’re beginning to see strains in the system, mostly driven by the explosive growth of streaming video.

Today, video accounts for 70% of all Internet traffic and broadcasters are already encountering huge scalability and stream quality issues due to the client-server HTTP approach. Basically, it is becoming impossible to deploy HTTP servers fast enough to keep up with the demand from HTTP clients.

A different approach was needed and into the void stepped Google with [WebRTC](https://webrtc.org/) which enables individual web browsers to communicate directly with each other, without having to pass through an intervening server. Google Hangouts is built on top of WebRTC, as are services such as Snapchat, Whatsapp and Facebook Messenger. While it is not widely recognized (even among people in the computing industry), we believe that WebRTC will eventually become as important to the Internet as HTTP. In fact, WebRTC has already been incorporated into the [HTML5](http://www.w3schools.com/html/html5_intro.asp) standard and it is supported in every version of Chrome, Firefox and Opera, with Microsoft Edge and Apple Safari support coming in 2017.

When Google introduced WebRTC back in 2012, we saw an opportunity to create a truly seamless p2p service, one that did not require end users to install a proprietary p2p client. Now that WebRTC is broadly deployed, our vision of creating a massively distributed, infinitely scalable and geographically ubiquitous video CDN has been realized!

---

**How do I disable Peer5 on a specific page?** 

In order to disable the Peer5 technology for specific pages, you can use our [Javascript API](/apis/configuring-peer5/#p2p-toggle) to disable and enable Peer5.
 
---

**What video streaming protocols and players does Peer5 support?** 

Peer5 currently supports HLS and MPEG Dash streaming protocols. We also support JW, Video.js, Shaka, Radiant, Flow, Kaltura, Theo, Bitmovin and Clappr players. We constantly integrate with new technologies. If you are interested in using Peer5 with different technologies, please let us know and we will see if we can accommodate you.

---

**Does Peer5 work on mobile devices?** 

Yes. Mobile devices will not upload data if they are on cellular networks, but they can still benefit from P2P by downloading from other peers.
We make our upload decisions based on a variety of factors, including but not limited to a user’s available resources, upload capacity and type of network (cellular or other).
To change the default behavior of mobile/cellular peers you can use the [deployment section](https://app.peer5.com/deployment) of your account's dashboard or the [Javascript API](/apis/configuring-peer5/#p2p-toggle)

---

**How secure is the Peer5 service?** 

Peer5 uses the [WebRTC data channel](https://www.html5rocks.com/en/tutorials/webrtc/datachannels/) to transfer data between users. The data channel is secured using [SCTP](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) protocols and [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) encryption. Communication with the Peer5 backend is done via secured WebSocket, which also uses TLS encryption.

Existing content protection and geo-fencing schemes remain the same when Peer5 is enabled. Each user session starts with a standard client-server exchange, manifest request and media request. P2P activity only starts to work after the user is authorized. The server sees the same exact requests (tokens, keys, cookies, etc.) with and without Peer5.

Peer5 does not interfere with DRM and stream encryption since the segments sent between users are the same as the segments that users receive from the edge server. The Peer5 service doesn't compromise the stream in any way, since the only users that view the stream have already been authenticated by the server and have received a decryption key - which, importantly, isn't transferred through the Peer5 network. Content is also never stored locally or in any persistent data storage.

---

**Does Peer5 work with DRM?** 

Yes. Peer5 works with DRM. Our P2P CDN is completely agnostic to content protection.

---

# Video CDN Technology

**Why is Peer5 the Serverless CDN?** 

We coined the term “Serverless CDN” because no servers are involved in the delivery of bytes through our network. However, we don’t aim to completely get rid of servers. Servers do the important work of ingesting, encoding, transmuxing and more. We believe that the optimal content delivery solution for broadcasters is a hybrid model where Peer5 is used in combination with their existing HTTP-based CDNs. Our goal is to enable limitless video delivery by unifying the existing server infrastructure with an elastic computing layer (comprised of individual viewers) that grows with demand.

---

**How does Peer5 work?** 

Peer5 works alongside of a publisher’s origin server, CDN or Multi-CDN architecture. We use WebRTC to create a peer-to-peer mesh network that helps users load video content from each other. Our hybrid switching algorithm determines whether a viewer should load the next segment from Peer5’s p2p network or the publisher’s alternative delivery system. This allows Peer5 to shrink a content provider’s bandwidth usage, while also maximizing a user’s viewing experience.

---

**So Peer5 is a Multi-CDN?** 

Sort of. Peer5’s technology creates a hybrid Multi-CDN delivery architecture alongside of a publisher’s current CDN or origin server. Peer5 also works for publishers that already have a Multi-CDN approach set up. While we aren’t a Multi-CDN ourselves, we always work as part of a multi-source delivery system.

---

**How does your platform increase reliability?** 

The use of a P2P platform built on top of a client-server distribution system increases transmission reliability. All of the typical HTTP protocols are followed, but the P2P layer makes transfer more geographically agnostic, less susceptible to peak demand issues and reduces failures in other abnormal conditions.

---

**How do you improve rebuffering and video loading speeds?** 

Peer5 boosts video streams by using our proprietary P2P CDN. Our CDN fetches a stream from other people watching the same content. By retrieving streams from closer to the viewer, videos load faster using P2P technology. The faster a video segment loads, the less likely your entire stream is to rebuffer. Rebuffering is a big problem for most publishers, especially those who want to offer live streams without adding latency. At the same time that a stream is being transmitted using our P2P mesh network, it is also concurrently loading through servers. This means that data will never transfer slower than if the P2P layer did not exist.

---

**How popular does my content need to be?** 

Peer5 views content popularity in terms of number of concurrent users. With our P2P system, the higher the concurrency, the better. At peaks, Peer5 has held hundreds of thousands of concurrent viewers and offloaded over 96% of all bandwidth. However, a swarm with only 10 viewers can experience bandwidth offloading rates of approximately 50%. This means that even content that isn't highly popular can be efficiently delivered with Peer5. With only 20 concurrent peers in the swarm, Peer5 reaches 70% offloading.

---

**How do you lower bandwidth for content providers? How much money can they really save?** 

Most content providers use CDNs to speed up their content delivery processes. These CDNs charge for transmitting data through their servers. By transferring data using P2P connections whenever possible, we minimize the amount of data going through servers. Not only does this offloading save publishers money, especially at peak times when they spend the most on bandwidth, but it also reduces their need to have many additional servers that are only used at peaks, saving them even more. 

How much content publishers save depends on a variety of factors, including user base, traffic patterns and CDN payment agreements, as well as many others. Many of our customers have saved 70+% during recent live events.

---

**Why is your technology more scalable than other CDNs?** 

The platform is scalable thanks to the P2P aspect of our content distribution protocol. When using P2P technology, user’s computers interact, connecting to form a node. This is how the network allows computers to upload to and download from each other. The more of these nodes there are, the better the connection an individual has to the content that he or she is trying to load. As more people use the Peer5 platform, a greater number of nodes exist, which in turn improves the system's content delivery capabilities. This is the opposite of the traditional CDN model, in which each user connects to and gets streams from servers individually. This is the reason that our P2P CDN is so effective during peak demand and why it increases our customer’s server capacity by so much.

---

**Is it possible to stream video from one peer to another without using a server?** 

No. In order to use peer5, a proper HLS/DASH stream is needed - we recommend using [nimble](https://wmspanel.com/nimble) as server software

---

**What is Peer Efficiency and Why Does it Matter?** 

Peer Efficiency is the percentage of content delivery that is offloaded to the P2P network at a given time. HTTP-based CDNs use the term “cache hit ratio”, which is a very similar concept. CDNs usually measure the ratio as requests served from the CDN divided by the total number of requests. Peer Efficiency is calculated by dividing the number of bytes delivered from the P2P network by the total number of bytes delivered (P2P + HTTP). As Peer Efficiency increases, one is able to achieve massive scalability gains while simultaneously improving the stream quality for each viewer, as illustrated in the table below where we assume viewers receive a 1 Mbps stream from a single origin server:

|Peer Efficiency|Avg p2p Bitrate|Avg HTTP Bitrate|Increase in Scalability|
|---------------|---------------|----------------|-----------------------|
|(% Off-load)|(Mbps)|(Mbps)|
|0|0.00|1.00|None|
|50|0.50|0.50|2X|
|90|0.90|0.10|10X|
|98|0.98|0.02|50X|
|99|0.99|0.01|100X|
|99.9|0.999|0.001|1000X|

If you’re able to off-load half of the requests for segments to the P2P network (50% Peer Efficiency), then your origin server is working 50% less than it was before and you can now service an audience that is twice (2x) as large without having to deploy additional hardware. If peer efficiency reaches 99%, then your server is doing 1% of the work it previously did and you can now service an audience that is 100x bigger (1 / 0.01 = 100). Because it is a logarithmic function, small gains in Peer Efficiency (e.g., from 99% to 99.9%) result in an order of magnitude improvement in scalability (100X to 1000X).

Peer5 recently broadcasted an event that reached 440,000 concurrent viewers and achieved 99% Peer Efficiency – 2 milestones that no one else in the P2P CDN industry has achieved.

While Peer Efficiency is typically highest during large events (the most popular content), Peer5 has achieved excellent off-loading ratios even when there is a small number of concurrent viewers. In fact, Peer5 has seen 50% Peer Efficiency for streams with only 5 concurrent viewers. This means that even less popular content can be efficiently delivered with Peer5.

---



# User Experience

**How much benefit will users see from Peer5?** 

How big of a benefit user’s experience depends on their number of peers, their connections and other factors. Nevertheless, our P2P transfer is a very efficient system and the benefit can be very significant. In many cases, we can reduce instances of rebuffering by roughly 50%. Further, our video streaming technology makes sure the user gets the best possible experience at all times. We do so by obtaining data from the very best peers using our proprietary mapping algorithm. This optimizes the user’s network connection and ensures a low latency viewing experience with minimal interruption.

---

**Can Peer5 ever harm user experience?** 

No. Peer5 can never deteriorate user experience. Peer5's guiding principles include maximizing experience and reliability, so our hybrid switching algorithm only uses peers when end users will benefit from it. Most video streams load faster, are watched for longer and experience less rebuffering with Peer5's CDN than without it. When a user has no peers or when using them might deteriorate user experience, Peer5 only uses the server.

---

**Does Peer5 keep information secure?** 

Data is protected using end-to-end encryption methods that are compliant with Google, Mozilla and IETF standards.

---

**Can Peer5 add a delay to a user's stream?** 

No. Video segments are never played later than they would be without Peer5. If a video segment cannot be loaded from peers in a timely manner, it is fetched from servers. This means that Peer5 will never add a delay to a video stream.

---

**How does Peer5 impact a user's upstream bandwidth?** 

Peer5 works with whatever bandwidth is free for upstream use and will not impact other applications that require uploads at the same time as Peer5. Changes to upstream bandwidth are unnoticeable to the end user.

---

**Does your technology require any user side plugins?** 

No. There are absolutely no plugins or add-ons necessary for a viewer to watch streams powered by Peer5. The entire viewing experience is completely seamless to the user.

---

**What happens if a user doesn’t have WebRTC?** 

If a user doesn't have WebRTC, the user will seamlessly fallback to normal server usage. However, WebRTC has become increasingly popular in the last few years. Facebook Messenger, Google Hangouts, Twilio and many other well-known companies use WebRTC. Approximately 72% of potential viewers have access to WebRTC.

---

# Peer5 Accounts and Billing

**How can I get a Peer5 account?** 

You can click here and sign up for an account.

---

**How much does Peer5 cost?** 

Peer5 offers multiple pricing tiers. You can click here to see the options we offer. If you’d like a per Gigabyte price quote, just send us a message.

---

**Is it possible to switch plans?** 

Yes. If you want to switch plans, just let us know. We’d be happy to help you upgrade. You can also go to the accounts tab in your dashboard and upgrade there.

---

**How does billing work with Peer5?** 

For the pay-per-Gigabyte tiers, Peer5 charges you at the end of the month based on the agreed upon price and actual amount of data delivered through our P2P CDN during the period. For the Starter and Pro tiers, Peer5 bills the flat rate and additional overage at the end of the month. For the free, Starter tier, there is no billing, but we do cap your P2P delivery at 1 TB per month.

---

**What methods of payment does Peer5 accept?** 

Peer5 accepts virtually all credit cards including, but not limited to: Visa, Mastercard, American Express and JCB. Want to use another form of payment? Send us a message and we will try to accommodate you.

---

Need extra help? <a href="javascript:Intercom('show')">Chat with us</a> or [send us an email](mailto:info@peer5.com)
