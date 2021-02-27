# jpx.js

https://www.npmjs.com/package/jpx.js

日本取引所グループからリアルタイムで株価指数を取得します。

Get real-time stock indices from the Japan Exchange Group

## Example
```javascript
const Jpx = require('jpx.js');
// import Jpx from 'jpx.js'

Jpx.daysAgo(2).then(r => {
    console.log(
        r.MainStockIndex.Topix.currentPrice
    )
})
```

## Docs

### static Jpx.daysAgo(day?: number = 0): Promise<Indices>

n 日前の株価指数をPromiseとして返却します。

Return the stock index of n days ago as Promise.

## See
https://www.jpx.co.jp/markets/indices/realvalues/index.html

## Response Structure
https://github1s.com/Kotlia/jpx.js/blob/HEAD/src/types/Indices.ts
https://github1s.com/Kotlia/jpx.js/blob/HEAD/src/types/Index.ts
