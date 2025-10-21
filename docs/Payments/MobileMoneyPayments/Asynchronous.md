---
title: Asynchronous Transaction
sidebar_position: 6.5
---

## Mobile Money Payments (Asynchronous)

TheTeller API processes asynchronous payments via MTN, Vodafone, Airtel, and Tigo mobile money platforms. Every request requires the following headers:

```php
// Request Headers
Content-Type: application/json
Authorization: Basic base64_encode('your API username:your API Key')
request-id: 978980001237
Cache-Control: no-cache
```

**Note**: The `request-id` header must be numeric, with a minimum length of 12 and a maximum length of 19.

### Request Parameters

| Parameter          | Required | Type   | Description                                                                 |
|--------------------|----------|--------|-----------------------------------------------------------------------------|
| merchant_id        | true     | string | Your merchant API key provided when you create an account.                  |
| transaction_id     | true     | string | Unique transaction reference provided by you.                               |
| amount             | true     | string | Amount to charge (e.g., "0.1").                                            |
| processing_code    | true     | string | Transaction type identifier. **000200** is used for asynchronous mobile money payments. |
| r-switch           | true     | string | Account issuer or network to be debited (e.g., "MTN").                     |
| desc               | true     | string | Text to be displayed as a short transaction narration.                     |
| subscriber_number  | true     | string | Mobile money wallet to charge (10 - 12 digits).                             |
| callback_url       | true     | string | URL to receive the callback response (must be a POST endpoint).            |
| reference          | true     | string | Product or service name associated with the transaction.                   |
| merchant_data      | false    | string | Optional merchant-specific data to be returned in the callback.            |

To initiate an asynchronous payment request, send the following:

```php
Method: POST
Endpoint: https://prod2.theteller.net/process/transaction/async

// Request Headers
Content-Type: application/json
Authorization: Basic ZW50ZXJwcmlzZTU5YzhmNTZlZDE5MWY6WkdabFpEVmpNVE5qWXXXXXXXXXXXXXX==
request-id: 978980001237
Cache-Control: no-cache

// Request Body
{
  "merchant_id": "TTM-********",
  "r-switch": "MTN",
  "amount": "0.1",
  "processing_code": "000200",
  "transaction_id": "356689814208",
  "callback_url": "https://merchant/callback/url",
  "desc": "testing the new async api",
  "reference": "Product name",
  "subscriber_number": "xxxxxx",
  "merchant_data": "Merchant's own data"
}
```

### Sample Response

```php
{
  "code": "000",
  "reason": "request received successfully",
  "request_id": "21250325147371"
}
```

### Callback Response

The merchant’s callback URL must accept a POST request. The callback response contains the following parameters:

| Parameter             | Type   | Description                                                                 |
|-----------------------|--------|-----------------------------------------------------------------------------|
| code                  | string | Response code (e.g., "000" for success).                                    |
| status                | string | Transaction status (e.g., "Approved").                                      |
| reason                | string | Description of the transaction outcome.                                     |
| customer_id           | string | Unique identifier for the customer.                                        |
| subscriber_number     | string | Mobile money wallet charged.                                               |
| r-switch              | string | Account issuer or network debited.                                         |
| transaction_id        | string | Unique transaction reference.                                              |
| original_amount       | string | Original transaction amount.                                               |
| surcharge_amount      | string | Additional surcharge amount (if applicable).                               |
| elevy_taxable_amount  | string | Taxable amount for e-levy (if applicable).                                 |
| elevy_amount          | string | E-levy amount (if applicable).                                            |
| total_amount          | string | Total amount charged (including surcharges and taxes).                     |
| merchant_data         | string | Merchant-specific data provided in the request (if included).              |

```php
// Callback Response
{
  "code": "000",
  "status": "Approved",
  "reason": "Transaction Successful",
  "customer_id": "45678899",
  "subscriber_number": "233593973212",
  "r-switch": "MTN",
  "transaction_id": "123456789453",
  "original_amount": "0.1",
  "surcharge_amount": "0",
  "elevy_taxable_amount": "0",
  "elevy_amount": "0",
  "total_amount": "0.1",
  "merchant_data": "Merchant's own data"
}
```

**Note**: Ensure the merchant’s callback URL is configured to handle POST requests for receiving the callback response.