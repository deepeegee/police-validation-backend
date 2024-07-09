const axios = require('axios');

class MockApiService {
  constructor() {
    this.apiUrl = "https://run.mocky.io/v3/0f6c148e-9adb-41eb-b878-a40a25f93535";
  }

  async fetchOfficers() {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching officer data:', error);
      throw error;
    }
  }

  async validateOfficer(badgeNumber) {
    const officers = await this.fetchOfficers();
    return officers.find(officer => officer.badgeNumber.toString() === badgeNumber);
  }
}

module.exports = new MockApiService();