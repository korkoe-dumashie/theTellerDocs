---
title: Theteller Standard Checkout
sidebar_position: 4.1
---
# TheTeller API Documentation

## Overview

TheTeller API helps you create any type of payments flow from payment acceptance, e-commerce, recurring billing, and much more.

### On Your Website
Accept payments on your website with our JS libraries and checkout forms.  
[View Plugins](#)

### E-commerce Website
Integrate our e-commerce plugins in your online stores.  
[View Plugins](#)

### Mobile Apps
Integrate our iOS and Android SDKs in your mobile apps.  
[View SDKs](#)

**Live Endpoint**: https://prod.theteller.net  
**Test Endpoint**: https://test.theteller.net

## Setting Up an Account on TheTeller

Setting up a merchant account is simple. Sign up [here](#). After completing the signup form, a verification email will be sent to you. Upon successful verification, our support team will contact you via email or phone.

### Test Credentials
To set up a merchant account, sign up [here](#). After verification, our support team will reach out.  
[Sign in to Account](#)

### Live Credentials
To go live, contact our [support team](https://theteller.net/support).

## Adding TheTeller to Your Website

### How to Add TheTeller Inline JS Modal
The TheTeller inline JS code method is the easiest way to accept payments on your web applications. It offers a secure and convenient flow without redirecting users to another page.

![TheTeller Inline JS Modal](/img/ttimg.png)

Before proceeding, check our eCommerce and mobile app plugins to get started immediately on your platform of choice.  
[View Plugins](https://dashboard.theteller.net/login)

## TheTeller Standard Checkout

Accept payments quickly and securely using the standard method by calling the `/initiate` endpoint. The response includes a payment link to redirect users to a secure payment form. After completion, we call your `redirect_url` with payment response as query parameters.

**Live Endpoint**: https://prod.theteller.net  
**Test Endpoint**: https://test.theteller.net

### Step 1: Collect Payment Details
Collect the following data and send as a JSON payload to `/initiate`:

| Parameter      | Required | Data Type | Description                                              |
|----------------|----------|-----------|----------------------------------------------------------|
| merchant_id    | true     | string    | Your merchant ID provided when you create an account.    |
| transaction_id | true     | string    | Unique transaction reference, must be 12 digits.         |
| desc           | true     | string    | Short transaction narration text.                        |
| amount         | true     | string    | Amount to charge.                                        |
| redirect_url   | true     | string    | URL to redirect to when transaction is completed.        |
| callback_url   | true     | string    | URL to receive the response from theTeller.              |
| email          | true     | string    | Email of the customer.                                   |
| API Key        | true     | string    | Your merchant API key provided when you create an account. |
| apuiser        | true     | string    | Your merchant API username provided when you create an account. |

### Step 2: Initialize the Payment
Call our API with the payment details. Example:

#### Request
```php
LIVE EndPoint 
Method: POST
Endpoint/BaseURL: https://checkout.theteller.net/initiate

// Request Headers
Content-Type: application/json
Authorization: Basic base64_encode('your API username:your API Key')
Cache-Control: no-cache

// Request Body
{
  "merchant_id": "Your merchant ID",
  "transaction_id": "000000000000",
  "desc": "Payment Using Checkout Page",
  "amount": "000000000100",
  "redirect_url": "http://redirect_url/response",
  "callback_url": "http://callback_url/response",
  "email": "customer_email"
}
```

#### PHP
```php
$payload = json_encode([
  "merchant_id" => "Your merchant ID",
  "transaction_id" => "000000000000",
  "desc" => "Payment Using Checkout Page",
  "amount" => "000000000100",
  "redirect_url" => "https://yoursite.com",
  "email" => "mail@customer.com"
]);

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://test.theteller.net/checkout/initiate",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $payload,
  CURLOPT_HTTPHEADER => array(
    "Authorization: Basic ".base64_encode('Your API Username:Your API Key')."",
    "Cache-Control: no-cache",
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
```

#### C#
```csharp
string authorization = your api user + ":" + your api key;
var conversion = Encoding.UTF8.GetBytes(authorization);
var encoded_authorization = Convert.ToBase64String(conversion);

var client = new RestClient("https://test.theteller.net/checkout/initiate");
var request = new RestRequest(Method.POST);
request.AddHeader("Cache-Control", "no-cache");
request.AddHeader("Authorization", "Basic "+encoded_authorization);
request.AddHeader("Content-Type", "application/json");
request.AddParameter("{\r\n \"merchant_id\": \"Your Merchant ID\",\r\n \"transaction_id\":\"000000000000\",\r\n \"desc\": \"Payment Using Checkout Page\",\r\n \"amount\": \"000000000100\",\r\n \"redirect_url\": \"https://yoursite.com\",\r\n\"email\":\"email@customer.com\"\r\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

#### Java
```java
byte[] code = "Your_API_User:Your_API_KEY ".getBytes(StandardCharsets.UTF_8);
String encoded = Base64.getEncoder().encodeToString(code);

OkHttpClient client = new OkHttpClient();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n \"merchant_id\": \"Your Merchant ID\",\r\n \"transaction_id\":\"000000000000\",\r\n \"desc\": \"Payment Using Checkout Page\",\r\n \"amount\": \"000000000100\",\r\n \"redirect_url\": \"https://yoursite.com\",\r\n\"email\":\"email@customer.com\"\r\n}");
Request request = new Request.Builder()
    .url("https://test.theteller.net/checkout/initiate")
    .post(body)
    .addHeader("Content-Type", "application/json")
    .addHeader("Authorization", "Basic " + encoded)
    .addHeader("Cache-Control", "no-cache")
    .build();
Response response = client.newCall(request).execute();
```

### Sample Response
```json
{
  "status": "success",
  "code": 200,
  "reason": "Token successfully generated",
  "token": "eU1xSFN5Ky92MUt5dmpnT",
  "checkout_url": "https://test.theteller.net/checkout/checkout/eU1xSFN5Ky92MUt5dmpnT"
}
```

If successful, redirect the user to the `checkout_url`. Upon transaction completion, TheTeller validates and charges the payment method, then:

1. Calls your `redirect_url` with URL-encoded response data and appends the transaction ID as query parameters.
2. Sends an email to you and your customer (if enabled).

### Sample Redirect Response
```
https://redirect_url?code=000&status=successful&reason=transaction20%successful&transaction_id=000000000000
```
### Sample Callback Response
```json
{
   "code":"000",
   "status":"approved",
   "reason":"Approved: Transaction successful!",
   "transaction_id":"0987654321",
   "r_switch":"MTN",
   "subscriber_number":"233240987654",
   "amount":"0.10",
   "original_amount":"0.1",
   "surcharge_amount":"0",
   "taxable_amount":"0",
   "elevy_amount":"0",
   "customer_id":"0241234567",
   "order_id":"",
   "merchant_data":"233251234567"
}
```