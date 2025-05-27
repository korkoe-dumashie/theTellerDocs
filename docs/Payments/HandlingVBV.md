---
title: Handling VBV
sidebar_position: 6.3
---


## Handling VBV

VBV (Verified by Visa) is a security feature requiring further authorization by the cardholder for online transactions. If your payment request returns the response below, redirect the user to the URL specified in the `reason` field to complete the transaction on their card issuer's secure ACS page.

```php
{
  "status": "vbv required",
  "code": 200,
  "reason": "https://test.theteller.net/v1.1/3ds/resource/authentication/000000000000"
}
```

After authorization, the user is redirected to your `3d_redirect_url` with the transaction result appended:

```txt
https://redirect_url?code=000&status=successful&reason=transaction20%successful&transaction_id=000000000000
```
