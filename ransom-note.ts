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
