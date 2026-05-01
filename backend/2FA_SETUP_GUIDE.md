# Two Factor Authentication Setup Guide

## Overview
The backend now has OTP 2FA support integrated. The feature gracefully handles the optional speakeasy module.

## Installation

To enable OTP 2FA with authenticator apps, install the speakeasy package:

```bash
npm install speakeasy
```

## API Endpoints

All 2FA endpoints are now available in the backend:

### 1. Setup 2FA (Generate Secret)
- **Route:** `GET /api/users/2fa/setup`
- **Auth:** Required (Bearer token)
- **Response:**
  ```json
  {
    "secret": "base32_encoded_secret",
    "otpauthUrl": "otpauth://totp/...",
    "message": "Use this secret in your authenticator app and verify with the code"
  }
  ```
- **Note:** User scans the QR code from otpauthUrl with Google Authenticator, Microsoft Authenticator, or Authy

### 2. Verify 2FA Setup (Enable 2FA)
- **Route:** `POST /api/users/2fa/verify`
- **Auth:** Required (Bearer token)
- **Body:**
  ```json
  {
    "code": "123456"
  }
  ```
- **Response:** `{ "message": "Two factor authentication enabled" }`

### 3. Login with 2FA
**Step 1: Normal login**
- **Route:** `POST /api/users/login`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response (2FA Enabled):**
  ```json
  {
    "twoFactorRequired": true,
    "tempToken": "jwt_temp_token",
    "message": "Enter OTP to complete login"
  }
  ```

**Step 2: Verify OTP**
- **Route:** `POST /api/users/2fa/verify-login`
- **Auth:** Pass tempToken in Authorization header: `Authorization: tempToken`
- **Body:**
  ```json
  {
    "code": "123456"
  }
  ```
- **Response:**
  ```json
  {
    "token": "final_jwt_token",
    "user": {
      "id": "user_id",
      "name": "User Name",
      "email": "user@example.com",
      "role": "user"
    }
  }
  ```

### 4. Disable 2FA
- **Route:** `POST /api/users/2fa/disable`
- **Auth:** Required (Bearer token)
- **Body:**
  ```json
  {
    "code": "123456"
  }
  ```
- **Response:** `{ "message": "Two factor authentication disabled" }`

## How It Works

### Without speakeasy installed:
- All 2FA endpoints return a 500 error with message: "Two factor authentication is not configured"
- Backend continues to work normally
- Users can still login without 2FA

### With speakeasy installed:
- Users can generate a 2FA secret
- Users scan the QR code in Google Authenticator or similar apps
- Users enter the OTP code to confirm setup
- On next login, users must provide a valid OTP code
- Users can disable 2FA anytime by providing a current OTP code

## Installation Command for speakeasy

Run this in the backend directory to enable full 2FA support:

```bash
npm install speakeasy --save
```

## Frontend Integration Required

The frontend needs to be updated to:
1. Show a 2FA setup page where users can view QR codes
2. Modify login to check for `twoFactorRequired` response
3. Show OTP input form when 2FA is required
4. Send OTP code to `/api/users/2fa/verify-login` endpoint

## Code Comments

All functions and lines are fully commented with:
- Top-level descriptions explaining what each section does
- Inline comments for every important line
- Clear, simple language without special symbols
- Proper structure for easy understanding

## Testing the Backend

The backend is now running without errors. To test manually:

1. Register a new user: `POST /api/users/register`
2. Login: `POST /api/users/login`
3. Setup 2FA: `GET /api/users/2fa/setup` (requires auth token)
4. Verify setup: `POST /api/users/2fa/verify` (scan QR code first)
5. Next login will require OTP
