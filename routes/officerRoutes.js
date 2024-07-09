const express = require('express');
const router = express.Router();
const PhoneSubmission = require('../models/PhoneSubmission');
const MockApiService = require('../services/mockApiService');

// Validate officer
router.get('/validate/:badgeNumber', async (req, res) => {
  try {
    const officer = await MockApiService.validateOfficer(req.params.badgeNumber);
    if (officer) {
      res.json(officer);
    } else {
      res.status(404).json({ message: 'Officer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit phone number
router.post('/submit', async (req, res) => {
  try {
    const { badgeNumber, phoneNumber } = req.body;
    const officer = await MockApiService.validateOfficer(badgeNumber);
    if (!officer) {
      return res.status(404).json({ message: 'Officer not found' });
    }
    const submission = new PhoneSubmission({ badgeNumber, phoneNumber });
    await submission.save();
    res.status(201).json({ message: 'Phone number submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;