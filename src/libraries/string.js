String.prototype.getIndicesOf = function(searchStr, caseSensitive) {
  let str = this;
  const searchStrLen = searchStr.length;
  if (searchStrLen == 0) {
    return [];
  }
  let startIndex = 0,
    index,
    indices = [];
  if (!caseSensitive) {
    str = str.toLowerCase();
    searchStr = searchStr.toLowerCase();
  }
  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
}

String.prototype.is = function (text) {
  text ||= this;
  let correct = true;
  for (const frag of text.split("*")) {
      if (!text.includes(frag)) {
          correct = false;
      }
  }
  return correct;
}

String.prototype.proper = function (text) {
  text ||= this;
  const res = text[0].toUpperCase() + text.slice(1).toLowerCase();
  return res;
}
