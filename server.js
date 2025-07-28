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

app.get('/keyword', (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Keyword test data generated",
    status_code: 200,
    data: {
      response: {
        // Names
        name_1: "John",
        name_2: "Alice",
        name_3: "Robert Smith",

        // Emails
        email_1: "john@example.com",
        email_2: "alice123@test.org",
        email_3: "hr@company.co.in",

        // Phone Numbers (as strings)
        phone_1: "+1-555-123-4567",
        phone_2: "9876543210",
        phone_3: "(080)12345678",

        // Addresses
        address_1: "123 Main Street",
        address_2: "456 Elm Street, NY",
        city: "San Francisco",
        state: "California",
        zipcode: "94107",

        // IP Addresses
        ip_1: "192.168.0.1",
        ip_2: "10.0.0.254",
        ip_3: "172.16.10.5",

        // GUIDs
        guid_1: "550e8400-e29b-41d4-a716-446655440000",
        guid_2: "a3bb189e-8bf9-3888-9912-ace4e6543002",

        // Keywords for redaction testing
        keyword_1: "confidential",
        keyword_2: "proprietary",
        keyword_3: "do_not_share",
        keyword_4: "top_secret",
        keyword_5: "internal_use_only",
        keyword_6: "restricted",
        keyword_7: "classified",

        // SSNs (U.S.)
        ssn_1: "123-45-6789",
        ssn_2: "987-65-4321",

        // MAC Addresses
        mac_1: "00:1B:44:11:3A:B7",
        mac_2: "00-14-22-01-23-45",

        // Identification Numbers
        pan: "ABCDE1234F",
        aadhaar: "1234-5678-9012",
        passport: "M1234567",
        driver_license: "DL-0420110149646",
        voter_id: "XYZ1234567",
        account_number: "123456789012",
        credit_card: "4111-1111-1111-1111",
        bank_ifsc: "SBIN0000456",

        // Dates & DOB
        dob: "1990-05-15",
        issue_date: "2015-03-20",

        // Coordinates
        latitude: "37.7749",
        longitude: "-122.4194",

        // Other tokens
        jwt_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        hex_id: "0x1a2b3c",

        // Other examples
        pin_code: "110001",
        url: "https://example.com/secure",
        unicode_text: "नमस्ते",
        escaped_string: "Line1\\nLine2\\tTabbed",
        emoji: "🔐",

        // Int-like PII stored as strings for consistency
        income: "50000",
        salary: "75000",
        otp: "123456",
        one_time_code: "654321",
        loan_id: "LOAN09876"
      }
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
