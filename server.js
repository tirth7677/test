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
  const keywords = [
    "john@example.com", "alice123@test.org", "hr@company.co.in", "admin@domain.com", "support@web.net",
    "192.168.0.1", "10.0.0.254", "172.16.10.5", "8.8.8.8", "127.0.0.1",
    "+1-555-123-4567", "9876543210", "(080)12345678", "+44 7700 900123", "123-456-7890",
    "allan", "john", "alice", "robert smith", "michael", "sarah", "emily", "david", "linda", "james",
    "123 main street", "456 elm street ny", "789 broadway", "101 first avenue", "22 second street",
    "san francisco", "new york", "los angeles", "chicago", "houston",
    "california", "texas", "new york", "florida", "illinois",
    "94107", "110001", "560001", "400001", "700001",
    "sbin0000456", "abcd1234567", "123456789012", "987654321098", "hdfc0001234",
    "4111-1111-1111-1111", "5500-0000-0000-0004", "3400-0000-0000-009", "3000-0000-0000-04", "6011-0000-0000-0004",
    "confidential", "proprietary", "do_not_share", "top_secret", "internal_use_only", "restricted", "classified",
    "ssn", "social security number", "aadhaar", "pan", "passport", "driver_license", "voter_id",
    "123-45-6789", "987-65-4321", "ABCDE1234F", "1234-5678-9012", "m1234567", "dl-0420110149646", "xyz1234567",
    "550e8400-e29b-41d4-a716-446655440000", "a3bb189e-8bf9-3888-9912-ace4e6543002", "eyjhbgi", "0x1a2b3c",
    "1990-05-15", "2015-03-20", "2020-12-31", "01/01/2023", "31/12/2022",
    "https://example.com/secure", "http://mybank.com/login", "https://confidential.org/data", "https://private.net",
    "loan09876", "otp", "one_time_code", "income", "salary", "unicode_text", "escaped_string", "emoji",
    "🔐", "🔒", "🚫", "⚠️", "💼",
    "date_of_birth", "birthdate", "mother_maiden_name", "place_of_birth", "nationality",
    "credit_card_number", "bank_account", "routing_number", "account_holder", "security_code",
    "cvv", "pin", "password", "passcode", "secret_key",
    "latitude", "longitude", "city_code", "area_code", "postal_code",
    "balance", "transaction_id", "payment_reference", "invoice_number",
    "internal_use", "authorized_personnel", "security_clearance", "confidential_report"
  ];

  res.status(200).json({
    status: "success",
    message: "Keyword list generated",
    status_code: 200,
    data: {
      keywords
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
