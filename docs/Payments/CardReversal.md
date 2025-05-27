---
title: Card Reversal
sidebar_position: 6.2
---


## Card Reversal

TheTeller API allows reversal transactions for VISA, MasterCard, and TelaCards. Every request requires the following headers:

```php
// Request Headers
Content-Type: application/json
Authorization: Basic base64_encode('your API username:your API Key')
Cache-Control: no-cache
```

To process a reversal request, send the following:

```php
Method: POST
Endpoint: https://prod.theteller.net/rest/resources/card/reversal

// Request Headers
Content-Type: application/json
Authorization: Basic base64_encode('your API username:your API Key')
Cache-Control: no-cache

// Request Body
{
  "merchant_id": "0000000000",
  "transaction_id": "000000000000",
  "amount": "000000000100"
}
```

### Sample Response

```php
{
  "transaction_id": "000000000000",
  "status": "approved",
  "code": "000",
  "reason": "Transaction successful!"
}
```
