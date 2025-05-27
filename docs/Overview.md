---
title: Overview
sidebar_position: 1
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
