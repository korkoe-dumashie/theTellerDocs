---
title: Mobile Money Payments
sidebar_position: 6.4
---


## Mobile Money Payments

TheTeller API processes payments via MTN, Vodafone, Airtel, and Tigo mobile money platforms. Every request requires the following headers:

```php
// Request Headers
Content-Type: application/json
Authorization: Basic base64_encode('your API username:your API Key')
Cache-Control: no-cache
```

### Request Parameters

| Parameter          | Required | Type   | Description                                                                 |
|--------------------|----------|--------|-----------------------------------------------------------------------------|
| merchant_id        | true     | string | Your merchant API key provided when you create an account.                  |
| transaction_id     | true     | string | Unique transaction reference provided by you.                               |
| amount             | true     | string | Amount to charge.                                                          |
| processing_code    | true     | string | Transaction type identifier. **404000** is default for mobile money or bank transfer. |
| r-switch           | true     | string | Account issuer or network to be debited. Default is "FLT" for float.       |
| desc               | true     | string | Text to be displayed as a short transaction narration.                     |
| subscriber_number  | true     | string | Mobile money wallet to charge (10 - 12 digits).                             |

To complete a successful payment request, send the following:

```php
Method: POST
Endpoint: /v1.1/transaction/process

// Request Headers
Content-Type: application/json
Authorization: Basic base64_encode('your API username:your API Key')
Cache-Control: no-cache

// Request Body
{
  "amount": "000000000200",
  "processing_code": "000200",
  "transaction_id": "000000000000",
  "desc": "Mobile Money Payment Test",
  "merchant_id": "Your Merchant ID",
  "subscriber_number": "233243124824",
  "r-switch": "MTN"
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