require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

// GET /health
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is healthy',
  });
});

// GET /chat
app.get('/chat', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Chat created successfully",
    status_code: 200,
    data: {
      response: {
        chat_id: "68866b7643ac2f5f6527beb6",
        gpt_response: "I'm sorry, but I can't assist with that request.",
        matched_keywords: [],
        credits_used: 0.0034,
        cost_inr: 0.0034,
        prompt_tokens: 29,
        response_tokens: 13,
        sanitized_input: "John and Alice are friends burt there mobile number is +1-555-123-4567 and +1-555-123-4"
      }
    }
  });
});

// GET /keyword
app.get('/keyword', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Keyword test data generated",
    status_code: 200,
    data: {
      response: {
        name_1: "John",
        name_2: "Alice",
        email_1: "john@example.com",
        email_2: "alice123@test.org",
        email_3: "hr@company.co.in",
        phone_1: "+1-555-123-4567",
        phone_2: "9876543210",
        phone_3: "080-123456",
        address_1: "123 Main Street",
        address_2: "456 Elm Street, NY",
        city: "San Francisco",
        zipcode: 94107,
        ip_1: "192.168.0.1",
        ip_2: "10.0.0.254",
        ip_3: "172.16.10.5",
        guid_1: "550e8400-e29b-41d4-a716-446655440000",
        guid_2: "a3bb189e-8bf9-3888-9912-ace4e6543002",
        keyword_1: "confidential",
        keyword_2: "proprietary",
        keyword_3: "do_not_share",
        ssn_1: "123-45-6789",
        ssn_2: "987-65-4321",
        mac_1: "00:1B:44:11:3A:B7",
        mac_2: "00-14-22-01-23-45",
        float_value_1: 123.456,
        float_value_2: 78.9,
        double_value_1: 1.7976931348623157e+308,
        double_value_2: 2.2250738585072014e-308,
        int_value_1: 100,
        int_value_2: -999,
        pin_code: 110001,
        random_1: "lorem_ipsum",
        random_2: "NDA",
        random_3: "secret123",
        hex_id: "0x1a2b3c",
        account_number: "123456789012",
        credit_card: "4111-1111-1111-1111",
        passport: "M1234567",
        pan: "ABCDE1234F",
        bank_ifsc: "SBIN0000456",
        custom_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        url: "https://example.com/secure",
        unicode_text: "नमस्ते",
        escaped_string: "Line1\\nLine2\\tTabbed",
        emoji: "🔐"
      }
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
