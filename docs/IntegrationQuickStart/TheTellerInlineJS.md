---
title: TheTeller Inline JS
sidebar_position: 4.2
---



To use TheTeller Inline JS, you need your merchant API Key. Follow these steps:

1. Copy the TheTeller Inline JS script to your site.
2. Replace default API Keys and use the test URL for test payments.
3. Create a unique transaction ID.
4. Collect a test payment.

**Live Endpoint**: https://prod.theteller.net

When the user enters card details, TheTeller:
1. Validates the card.
2. Charges it.
3. Redirects to your `redirect_url` with the transaction ID appended.

### TheTeller Inline Quick Setup Method [Embed Code]
Copy the code below to your payment page and replace parameters. This generates a "Pay Now" button that opens a secure payment modal. On completion, the user is redirected to your `redirect_url`.

For production, use: `https://checkout-old.theteller.net/resource/api/inline/theteller_inline.js`

```html
<form>
  <a class="ttlr_inline"
     data-APIKey="Your API Key"
     data-transid="000000000000"
     data-amount="1"
     data-customer_email="email@customer.com"
     data-currency="GHS"
     data-redirect_url="https://yoursite.com"
     data-pay_button_text="Pay Now"
     data-custom_description="Payment Using InlineJS"
     data-payment_method="both">
  </a>
</form>

<script type="text/javascript" src="https://checkout-test.theteller.net/resource/api/inline/theteller_inline.js"></script>
```

### Sample Callback Response
```
https://redirect_url?code=000&status=successful&reason=transaction20%successful&transaction_id=000000000000
```

### TheTeller Inline Anchor Tag Parameters

| Parameter            | Required | Description                                              |
|----------------------|----------|----------------------------------------------------------|
| APIKey               | true     | Your merchant API key provided when you create an account. |
| transid              | true     | Unique transaction reference provided by you.             |
| amount               | true     | Amount to charge.                                        |
| customer_email       | true     | Customer Email.                                          |
| currency             | true     | Currency to charge customer in. Defaults to GHS.          |
| redirect_url         | true     | URL to redirect to when transaction is completed.        |
| pay_button_text      | true     | Text to show on pay button.                              |
| custom_description   | true     | Short transaction narration text.                        |
| payment_method       | true     | Choose between card or mobile money payment (e.g., card, momo, both). |
