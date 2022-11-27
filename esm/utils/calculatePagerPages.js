function calculatePagerPages(current, total) {
  var arr = getUniqueArray(getOriginArray(current, total)).sort(function (a, b) {
    return a - b;
  });
  var base = [];
  var pages = arr.reduce(function (prev, item) {
    prev.push(item);
    var length = prev.length;
    var temp = prev[length - 2];

    if (temp && item - temp > 1) {
      prev.splice(prev.length - 1, 0, "...");
    }

    return prev;
  }, base);
  return pages.filter(function (n) {
    return n >= 1 && n <= total || n === "...";
  });
}

function getOriginArray(current, total) {
  if (current <= 4) {
    return [1, 2, 3, 4, 5, 6, 7, current - 1, current - 2, current, current + 1, current + 2, total];
  }

  if (current >= total - 3) {
    return [1, current - 1, current - 2, current, current + 1, current + 2, total - 6, total - 5, total - 4, total - 3, total - 2, total - 1, total];
  }

  return [1, current - 1, current - 2, current, current + 1, current + 2, total];
}

function getUniqueArray(arr) {
  var map = {};
  var results = [];
  arr.forEach(function (item) {
    if (!map[item]) {
      results.push(item);
      map[item] = true;
    }
  });
  return results;
}

export default calculatePagerPages;