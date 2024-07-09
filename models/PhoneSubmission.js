const mongoose = require('mongoose');

const PhoneSubmissionSchema = new mongoose.Schema({
  badgeNumber: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('PhoneSubmission', PhoneSubmissionSchema);