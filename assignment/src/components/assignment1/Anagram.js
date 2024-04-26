function areAnagrams(str1, str2) {
  // Check if the lengths of the strings are different
  if (str1.length !== str2.length) {
    return false;
  }

  // Create objects to count the frequency of characters in each string
  const charCount1 = {};
  const charCount2 = {};

  // Count the frequency of characters in str1
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  // Count the frequency of characters in str2
  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  // Check if the character counts are the same for both strings
  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  // If all characters have the same frequency, strings are anagrams
  return true;
}

// console.log(areAnagrams("abc", "bcd")); // Outputs: false

export default areAnagrams;
