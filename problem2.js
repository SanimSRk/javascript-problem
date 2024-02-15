function password(obj) {
  if (!obj.name || !obj.birthYear || !obj.siteName) {
    return 'invalid';
  }
  if (obj.birthYear.toString().length !== 4) {
    return 'invalid';
  }
  const nems = obj.siteName + '#' + obj.name + '@' + obj.birthYear;
  const value = nems[0].toUpperCase() + nems.slice(1);
  return value;
}
console.log(
  password({ name: 'Dolimuddin', birthYear: 1999, siteName: 'google' })
);
