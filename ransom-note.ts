// Given two strings ransomNote and magazine, return true if ransomNote
// can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:
// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

const canConstruct = function (ransomNote: string, magazine: string) {
  let myRansomNote: string[] = ransomNote.split('');
  let myMagazine: string[] = magazine.split('');
  while (myRansomNote.length) {
    const foundMagazineIndex = myMagazine.indexOf(myRansomNote[0]);
    if (foundMagazineIndex >= 0) {
      myMagazine.splice(foundMagazineIndex, 1);
      myRansomNote.splice(0, 1);
    } else return false;
  }
  return true;
};

console.log(canConstruct('aa', 'aab'));
