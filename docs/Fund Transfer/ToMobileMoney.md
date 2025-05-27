---
title: To Mobile Money
sidebar_position: 5.1
---

# Transfer Funds from Merchant Float Account

This section describes how to transfer funds from merchant float account to mobile money or bank account.

TheTeller API helps you create any type of payments flow from payment acceptance, e-commerce, recurring billing and a whole lots more.

One of the core functionalities of Theteller API is to make transferring funds as easy as it gets, regardless of the payment channels or mode of collection, the process 
of moving funds is meant to be effortless and secure.

To complete a successful fund trasfer, ensure you have setup a merchant transfer float account on the Theteller Dashboard.
[Login now](#) to setup float account.
When a transfer request is initiated, the merchant transfer float account is debited. In cases of failed fund transfers, a reversal is done.

## Request Parameters

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
| merchant_id | true | string | Your merchant API key provided when you create an account. |
| transaction_id | true | string | Unique transaction reference provided by you. |
| amount | true | string | Amount to charge. |
| processing_code | true | string | This is a transaction type identifier.**404000** is default for transfer to mobile money. **404000** for bank transfer |
| r-switch | true | string | Account issuer or network on which the account to be debited resides. default is "FLT" for float |
| desc | true | string | Text to be displayed as a short transaction narration. |
| pass_code | true | string | Unique pass code generated when you create a float account. |
| account_number | true | string | Recipient account number or wallet number for transfer transaction. |
| account_issuer | true | string | The network the account belongs to. e.g <br />  "MTN" for MTN <br /> "ATL" for Airtel <br /> "ZPY" for Zeepay <br /> "GMY" for G-money <br /> "VDF" for Vodafone <br /> "TGO" for Tigo <br /> "GIP" for bank account transfer |
| account_bank | true | string | The recipient bank account, e.g "GCB" for Ghana commercial bank. [See All Banks](#) |

## To Mobile Money

Theteller API makes it possible to transfer funds to any mobile money service provider in Ghana. This allows merchants transfer funds from their merchant transfer 
float account to any valid mobile money number subscribed on MTN, Airtel, Tigo, Vodafone network instantly.

### Request

```
Method: POST
Endpoint: /v1.1/transaction/process

//Request Headers
Content-Type: application/json
Authorization: Basic base64_encode('your API username:your API Key')
Cache-Control: no-cache

//Request Body
{
  "account_number":"0240000000",
  "account_issuer":"MTN",
  "merchant_id":"Your Merchant ID",
  "transaction_id":"000000000000",
  "processing_code":"404000",
  "amount":"000000000020",
  "r-switch":"FLT",
  "desc":"Float Transfer Test",
  "pass_code":"Your Pass code"
}
```

### PHP

```php
$data = json_encode(["account_number"=>"0240000000", "account_issuer"=>"MTN", "merchant_id"=>"Your Merchant ID",
"transaction_id"=>"000000000000", "processing_code"=>"404000", "amount"=>"000000000020",
"r-switch"=>"FLT", "desc"=>"Float Transfer Test", "pass_code"=>"Your Pass code"]);

$curl = curl_init();

curl_setopt_array($curl, array(
   CURLOPT_URL => "https://test.theteller.net/v1.1/transaction/process",
   CURLOPT_RETURNTRANSFER => true,
   CURLOPT_ENCODING => "",
   CURLOPT_MAXREDIRS => 10,
   CURLOPT_TIMEOUT => 30,
   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
   CURLOPT_CUSTOMREQUEST => "POST",
   CURLOPT_POSTFIELDS => $data,
   CURLOPT_HTTPHEADER => array(
       "Authorization: Basic base64_encode('Your API Username:Your API Key')",
       "Cache-Control: no-cache",
       "Content-Type: application/json",
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

### C#

```csharp
string authorization = your api user + ":" + your api key;
var conversion = Encoding.UTF8.GetBytes(authorization);
var encoded_authorization = Convert.ToBase64String(conversion);

var client = new RestClient("https://test.theteller.net/v1.1/transaction/process");
var request = new RestRequest(Method.POST);
request.AddHeader("Cache-Control", "no-cache");
request.AddHeader("Authorization", "Basic "+encoded_authorization);
request.AddHeader("Content-Type", "application/json");
request.AddParameter("{ \r\n \"account_number\": \"0240000000\",\r\n \"account_issuer\": \"MTN\",\r\n \"merchant_id\": \"Your merchant ID\",\r\n \"transaction_id\": \"000000000000\",\r\n \"processing_code\": \"404000\",\r\n \"amount\": \"000000000020\",\r\n \"r-switch\": \"FLT\",\r\n \"desc\": \"Float Transfer Test\",\r\n \"pass_code\": \"Your pass code\" \r\n}\r\n", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

### Java

```java
byte[] code = "Your_API_User:Your_API_KEY ".getBytes(StandardCharsets.UTF_8);
String encoded = Base64.getEncoder().encodeToString(code);


OkHttpClient client = new OkHttpClient();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType,
"{ \r\n \"account_number\": \"0240000000\",\r\n \"account_issuer\": \"MTN\",\r\n \"merchant_id\": \"Your merchant ID\",\r\n \"transaction_id\": \"000000000000\",\r\n \"processing_code\": \"404000\",\r\n \"amount\": \"000000000020\",\r\n \"r-switch\": \"FLT\",\r\n \"desc\": \"Float Transfer Test\",\r\n \"pass_code\": \"Your pass code\" \r\n}\r\n");
Request request = new Request.Builder()
  .url("https://test.theteller.net/v1.1/transaction/process")
  .post(body)
  .addHeader("Content-Type", "application/json")
  .addHeader("Authorization", "Basic "+encoded)
  .addHeader("Cache-Control", "no-cache")
  .build();
Response response = client.newCall(request).execute();
```
