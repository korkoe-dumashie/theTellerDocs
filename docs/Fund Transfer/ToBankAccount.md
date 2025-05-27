---
title: To Banking Account
sidebar_position: 5.2
---

## To Bank Account

Now you can credit any local bank account in Ghana instantly with Theteller API. Theteller API provides the functionality for merchants to transfer funds from their float 
account to any bank account in Ghana.

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
  "account_number":"0082000141685300",
  "account_bank":"GCB",
  "account_issuer":"GIP",
  "merchant_id":"Your Merchant ID",
  "transaction_id":"000000000000",
  "processing_code":"404020",
  "amount":"000000000020",
  "r-switch":"FLT",
  "desc":"Float Transfer Test",
  "pass_code":"Your Pass code"
}
```

### PHP

```php
$data = json_encode(["account_number"=>"0082000141685300", "account_bank":"GCB", "account_issuer"=>"GIP", "merchant_id"=>"Your Merchant ID",
"transaction_id"=>"000000000000", "processing_code"=>"404020", "amount"=>"000000000020",
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
"Authorization: Basic ".base64_encode('Your API Username:Your API Key')."",
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
request.AddParameter("{ \r\n \"account_number\": \"0082000141685300\",\r\n \"account_bank\":\"UMB\",\r\n \"account_issuer\": \"MTN\",\r\n \"merchant_id\": \"Your merchant ID\",\r\n \"transaction_id\": \"000000000000\",\r\n \"processing_code\": \"404020\",\r\n \"amount\": \"000000000020\",\r\n \"r-switch\": \"FLT\",\r\n \"desc\": \"Float Transfer Test\",\r\n \"pass_code\": \"Your pass code\" \r\n}\r\n", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

### Java

```java
byte[] code = "Your_API_User:Your_API_KEY ".getBytes(StandardCharsets.UTF_8);
String encoded = Base64.getEncoder().encodeToString(code);


OkHttpClient client = new OkHttpClient();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType,
"{ \r\n \"account_number\": \"0082000141685300\",\r\n \"account_bank\":\"UMB\",\r\n \"account_issuer\": \"MTN\",\r\n \"merchant_id\": \"Your merchant ID\",\r\n \"transaction_id\": \"000000000000\",\r\n \"processing_code\": \"404020\",\r\n \"amount\": \"000000000020\",\r\n \"r-switch\": \"FLT\",\r\n \"desc\": \"Float Transfer Test\",\r\n \"pass_code\": \"Your pass code\" \r\n}\r\n");
Request request = new Request.Builder()
 .url("https://test.theteller.net/v1.1/transaction/process")
 .post(body)
 .addHeader("Content-Type", "application/json")
 .addHeader("Authorization", "Basic "+encoded)
 .addHeader("Cache-Control", "no-cache")
 .build();
Response response = client.newCall(request).execute();
```

## Sample Response

```json
{
  "status": "successful",
  "code": "000",
  "reference_id": "153600134089",
  "account_name": "Kweku Adjei",
  "reason": "Success"
}
```

## Complete Bank Transfer

### Request

```
Method: POST
Endpoint: /v1.1/transaction/bank/ftc/authorize

//Request Headers
Content-Type: application/json
Authorization: Basic base64_encode('your API username:your API Key')
Cache-Control: no-cache

//Request Body
{
"merchant_id":"Your Merchant ID",
"reference_id":"000000000000"
}
```

### PHP

```php
$data = json_encode(["merchant_id"=>"Your Merchant ID", "reference_id"=>"000000000000"]);
$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => "https://test.theteller.net/v1.1/transaction/bank/ftc/authorize",
CURLOPT_RETURNTRANSFER => true,
CURLOPT_ENCODING => "",
CURLOPT_MAXREDIRS => 10,
CURLOPT_TIMEOUT => 30,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
CURLOPT_CUSTOMREQUEST => "POST",
CURLOPT_POSTFIELDS => $data,
CURLOPT_HTTPHEADER => array(
  "Authorization: Basic ".base64_encode('Your API Username:Your API Key')."",
    "Cache-Control: no-cache",
    "Content-Type": "application/json",
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

var client = new RestClient("https://test.theteller.net/v1.1/transaction/bank/ftc/authorize");
var request = new RestRequest(Method.POST);
request.AddHeader("Cache-Control", "no-cache");
request.AddHeader("Authorization", "Basic "+encoded_authorization);
request.AddHeader("Content-Type", "application/json");  
request.AddParameter("{\n \"merchant_id\": \"TTM-00000001\",\n \"reference_id\": \"153600134089\"\n}", ParameterType.RequestBody);
IRestResponse response = client.Execute(request);
```

### Java

```java
byte[] code = "Your_API_User:Your_API_KEY ".getBytes(StandardCharsets.UTF_8);
String encoded = Base64.getEncoder().encodeToString(code);


OkHttpClient client = new OkHttpClient();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType,
"{\n \"merchant_id\": \"TTM-00000001\",\n \"reference_id\": \"153600134089\"\n}");
Request request = new Request.Builder()
.url("https://test.theteller.net/v1.1/transaction/bank/ftc/authorize")
.post(body)
.addHeader("Content-Type", "application/json")
.addHeader("Authorization", "Basic "+encoded)
.addHeader("Cache-Control", "no-cache")
.build();
Response response = client.newCall(request).execute();
```
