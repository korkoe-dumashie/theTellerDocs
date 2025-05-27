---
title: Card Payments
sidebar_position: 6.1
---

# Direct Payment Collection with TheTeller API

This section describes how to collect payments directly from your web application.

Merchants who are PCI DSS compliant and have a secure system in place can send card details directly from their application to TheTeller for processing.

## Request Parameters

| Parameter          | Required | Type   | Description                                                                 |
|--------------------|----------|--------|-----------------------------------------------------------------------------|
| merchant_id        | true     | string | Your merchant API key provided when you create an account.                  |
| transaction_id     | true     | string | Unique transaction reference provided by you.                               |
| amount             | true     | string | Amount to charge.                                                          |
| processing_code    | true     | string | Transaction type identifier. **404000** is default for mobile money or bank transfer. |
| r-switch           | true     | string | Account issuer or network to be debited. Default is "FLT" for float.       |
| desc               | true     | string | Text to be displayed as a short transaction narration.                     |
| customer_email     | true     | string | Your customer email.                                                       |
| card_holder        | true     | string | Card holder name on card.                                                  |
| currency           | true     | string | Currency to charge card.                                                   |
| pan                | true     | string | Card PAN number on card.                                                   |
| exp_month          | true     | string | Expiry month of card.                                                      |
| exp_year           | true     | string | Expiry year of card.                                                       |
| cvv                | true     | string | CVV on back of card.                                                       |
| 3d_redirect_url    | true     | string | Callback URL to return your user to when transaction is completed.          |
| subscriber_number  | true     | string | Mobile money wallet to charge.                                              |

## Card Payments

TheTeller API processes VISA, MasterCard, and TelaCards, with more card schemes to be added soon. Every request requires the following headers:

```php
// Request Headers
Content-Type: application/json
Authorization: Basic base64_encode('your API username:your API Key')
Cache-Control: no-cache
```

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
  "processing_code": "000000",
  "r-switch": "VIS",
  "transaction_id": "000000000000",
  "merchant_id": "Your merchant ID",
  "pan": "4310000000000000",
  "3d_url_response": "your_redirect_url",
  "exp_month": "05",
  "exp_year": "21",
  "cvv": "000",
  "desc": "Card Payment Test",
  "amount": "000000000100",
  "currency": "GHS",
  "card_holder": "Card Holder Name",
  "customer_email": "Customer Email"
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
