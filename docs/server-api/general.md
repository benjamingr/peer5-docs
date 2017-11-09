# Server API

Peer5 provides a server API that enabled customers to export their analytics data in several formats.

The API domain is `https://control.peer5.com/v1`  

## Authentication
In order to authenticate yourself with the Peer5 server-side API, an authentication token is required.
You can get your private authentication token by going to your [user settings page](https://app.peer5.com/user).

!!! warning "Note"
    The server API is currently in beta.  
    If you want to participate in our beta testing program, [send us an email](mailto:info@peer5.com). 

The authentication token must be passed as the value of the `X-Auth-Token` header for all API requests, for example:

```js
X-Auth-Token: XXXXXXXXXXXX
```

!!! info "Don't forget"
    Replace `XXXXXXXXXXXX` with your own personal authentication token, otherwise you will get an authentication error.

## Limits

All API requests have a hard limit on the number of requests per minute you can make.  
If a request bypasses that limit, a status code of `429` will be returned as the response for that request and all future requests while the limit is crossed.  
In that case just wait some time before making another request. Using an exponential backoff mechanism is highly recommended.

## Endpoints

- Data export [/export](server-api/endpoints/export)
