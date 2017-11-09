The export endpoints allows you to export analytics metrics collected by Peer5.

## Authentication

See [authentication](/server-api/general#authentication) docs in the general section of the API.

## Limits

In addition to the [general rate limits](/server-api/general#limits) set on the API, there are currently 2 kinds of limits set on the /export endpoint:

1. Intervals limit:  
  When you query the export API, you must select a time interval in which you want the data split upon.
  Depending on the time interval you select, different limits may apply:
  
    - `1m`, `5m` - Limited to a query range of up to 6 hours, and within the last 7 days.
    - `10m`, `30m` - Limited to a query range of up to 7 days, and within the last 14 days.
    - `1h`, `3h`, `12h` - Limited to queries within the last 14 days.
    - `1d` - Not limited.  
  
2. Dimensions:  
  A nice feature of the API is the ability of split the data by multiple partitions, i.e country, browser, etc.  
  This feature is limited to up to 2 dimensions at any given query.
  For example, you can partition the data by both country & browser at the same time, but not by country, browser & os.
  
  
## Structure

- Method: `POST`
- Querystring parameters:
    - `format=json` for json output (optional, default).
    - `format=csv` for csv output (optional).
- Request body fields (JSON):


| name | type | required | notes |
|------|------|----------|-------|
| from | number | yes | UTC UNIX timestamp marking the start of the query range<br>**Timestamp must be rounded to the same interval as you are requesting.** |
|  to  | number | yes | UTC UNIX timestamp marking the start of the query range<br>**Timestamp must be rounded to the same interval as you are requesting.** |
| interval | string | yes | Time interval to split data by.<br>Available values:<br>- `1m`, `5m` - 1, 5 minutes<br>- `10m`, `30m` - 10, 30 minutes<br>- `1h`, `3h`, `12h` - 1, 3, 12 hours<br>- `1d`, `7d`, `14d` - 1, 7, 14 days|
| metrics | array | yes | The metrics to get data on.<br>Available values:<br>- `http` - number of bytes delivered via http<br>- `p2p` - number of bytes delivered via p2p<br>- `played` - number of milliseconds the player was playing<br>- `rebuffered` - number of milliseconds the player was buffering<br>- `sessions` - average number of sessions for the given time interval|
| filters | object | no | Filters to filter data by.<br>The keys of the object are the fields you want to filter by,<br>and the values are the values to filter each field by.<br>Available keys:<br>- `browser.name`<br>- `country.code`<br>- `city.name`<br>- `isp.name`<br>- `os.name`<br>- `session.page`|
| dimensions | array | no | Dimensions to split data by.<br>Available values:<br>- `browser.name`<br>- `country.code`<br>- `city.name`<br>- `isp.name`<br>- `os.name`<br>- `session.page`|

## Examples:

### # Get HTTP & P2P bytes delivered per minute for a given hour range.
  
- Request (CURL):
```bash
curl -s -XPOST "https://control.peer5.com/v1/export" \
-H "Content-Type: application/json" \
-H "X-Auth-Token: YOUR_AUTH_TOKEN" \
-d '
'
{
  "from": 1509494400000,
  "to": 1509498000000,
  "interval": "1m",
  "metrics": ["http", "p2p"]
}
'
```

- Response (json):
```js
{
  "error": false,
  "data": [
    {
      "timestamp": 1509494400000, // 2017-07-01T00:00:00.000Z
      "http": 1000, // number of http bytes delivered in this minute
      "p2p": 2500 // number of p2p bytes delivered in this minute
    },
    {
      "timestamp": 1509494460000, // 2017-07-01T00:01:00.000Z
      "http": 2000, // number of http bytes delivered in this minute
      "p2p": 500 // number of p2p bytes delivered in this minute
    }
  ]
}
```

- Response (csv):
```csv
"timestamp","http","p2p"
1509494400000,1000,2500
1509494460000,2000,500
```
    
    
### # Get HTTP & P2P bytes delivered per minute, split by browser, for a given hour range.
  
- Request (CURL):
```bash
curl -s -XPOST "https://control.peer5.com/v1/export" \
-H "Content-Type: application/json" \
-H "X-Auth-Token: YOUR_AUTH_TOKEN" \
-d '
{
  "from": 1509494400000,
  "to": 1509498000000,
  "interval": "1m",
  "dimensions": ["browser.name"],
  "metrics": ["http", "p2p"]
}
'
```

- Response (json):
```js
{
  "error": false,
  "data": [
    {
      "timestamp": 1509494400000, // 2017-07-01T00:00:00.000Z
      "browser.name": "Chrome", // the browser this data object relates to
      "http": 1000, // number of http bytes delivered in this minute, for the "Chrome" browser
      "p2p": 2500 // number of p2p bytes delivered in this minute, for the "Chrome" browser
    },
    {
      "timestamp": 1509494460000, // 2017-07-01T00:00:00.000Z
      "browser.name": "Firefox", // the browser this data object relates to
      "http": 2000, // number of http bytes delivered in this minute, for the "Firefox" browser
      "p2p": 500 // number of p2p bytes delivered in this minute, for the "Firefox" browser
    }
  ]
}
```

- Response (csv):
```csv
"timestamp","browser.name","http","p2p"
1509494400000,"Chrome",1000,2500
1509494460000,"Firefox",2000,500
```
    
    
### # Get HTTP & P2P bytes delivered per minute, for a specific browser, for a given hour range.
  
- Request (CURL):
```bash
curl -s -XPOST "https://control.peer5.com/v1/export" \
-H "Content-Type: application/json" \
-H "X-Auth-Token: YOUR_AUTH_TOKEN" \
-d '
{
  "from": 1509494400000,
  "to": 1509498000000,
  "interval": "1m",
  "filters": {
    "browser.name": ["Chrome"]
  },
  "metrics": ["http", "p2p"]
}
'
```

- Response (json):
```js
{
  "error": false,
  "data": [
    {
      "timestamp": 1509494400000, // 2017-07-01T00:00:00.000Z
      "http": 1000, // number of http bytes delivered in this minute, for the "Chrome" browser
      "p2p": 2500 // number of p2p bytes delivered in this minute, for the "Chrome" browser
    },
    {
      "timestamp": 1509494460000, // 2017-07-01T00:01:00.000Z
      "http": 1500, // number of http bytes delivered in this minute, for the "Chrome" browser
      "p2p": 3000 // number of p2p bytes delivered in this minute, for the "Chrome" browser
    }
  ]
}
```

- Response (csv):
```csv
"timestamp","http","p2p"
1509494400000,1000,2500
1509494460000,1500,3000
```