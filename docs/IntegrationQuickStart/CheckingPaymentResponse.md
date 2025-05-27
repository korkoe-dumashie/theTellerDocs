---
title: Checking Payment Response
sidebar_position: 4.3
---


### Checking Payment Response/Verifying Transaction

When a transaction is completed, we append `transaction ID`, `status`, `code`, and `reason` to your redirect URL. Verify the transaction status using the transaction ID.

### Request
```php
Method: GET
Endpoint: /v1.1/users/transactions/Replace with transaction ID/status

// Request Headers
Content-Type: application/json
Merchant-Id: Your Merchant ID
Cache-Control: no-cache
```

### PHP
```php
$curl = curl_init();
$transaction_id = "000000000000";

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://test.theteller.net/v1.1/users/transactions/".$transaction_id."/status",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "Cache-Control: no-cache",
    "Merchant-Id: Your Merchant ID"
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
string transaction_id = "000000000000";
var client = new RestClient("https://test.theteller.net/v1.1/users/transactions/"+transaction_id+"/status");
var request = new RestRequest(Method.GET);
request.AddHeader("Cache-Control", "no-cache");
request.AddHeader("Merchant-Id", "Your Merchant ID");
IRestResponse response = client.Execute(request);
```

### Java
```java
String transaction_id = "000000000000";
OkHttpClient client = new OkHttpClient();
Request request = new Request.Builder()
    .url("https://test.theteller.net/v1.1/users/transactions/"+transaction_id+"/status")
    .get()
    .addHeader("Merchant-Id", "Your Merchant ID")
    .addHeader("Cache-Control", "no-cache")
    .build();
Response response = client.newCall(request).execute();
```

### Sample Callback Response
```json
{
  "code": "000",
  "status": "approved",
  "reason": "Transaction Successful",
  "transaction_id": "000000000267",
  "r_switch": "VIS",
  "subscriber_number": "************1999",
  "amount": 1
}
```