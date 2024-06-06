// src/index.js

// String Utilities
const stringUtils = {
  capitalize(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  reverseString(str) {
    if (typeof str !== 'string') return '';
    return str.split('').reverse().join('');
  },

  camelCase(str) {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
  },

  shuffleString(str) {
    if (typeof str !== 'string') return '';
    return str.split('').sort(() => Math.random() - 0.5).join('');
  },

  trimSpaces(str) {
    if (typeof str !== 'string') return '';
    return str.replace(/\s+/g, ' ').trim();
  },

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  truncateString(str, num) {
    if (typeof str !== 'string') return '';
    return str.length > num ? str.slice(0, num) + '...' : str;
  },

  countWords(str) {
    if (typeof str !== 'string') return 0;
    return str.trim().split(/\s+/).length;
  },

  contains(str, substring) {
    if (typeof str !== 'string' || typeof substring !== 'string') return false;
    return str.includes(substring);
  },

  padString(str, length, char = ' ') {
    if (typeof str !== 'string') return '';
    return str.padEnd(length, char);
  }
};

// Number Utilities
const numberUtils = {
  isEven(num) {
    return num % 2 === 0;
  },

  isOdd(num) {
    return num % 2 !== 0;
  },

  formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  },

  shuffleNumberArray(arr) {
    if (!Array.isArray(arr)) return [];
    return arr.sort(() => Math.random() - 0.5);
  },

  formatNumber(num, decimals = 2) {
    return num.toFixed(decimals);
  },

  clampNumber(num, min, max) {
    return Math.min(Math.max(num, min), max);
  },

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  sumArray(arr) {
    if (!Array.isArray(arr)) return 0;
    return arr.reduce((sum, num) => sum + num, 0);
  },

  averageArray(arr) {
    if (!Array.isArray(arr)) return 0;
    const sum = arr.reduce((sum, num) => sum + num, 0);
    return sum / arr.length;
  }
};

// Export all utilities
module.exports = {
  stringUtils,
  numberUtils
};
