/*
DESCRIPTION:
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

function removeUrlAnchor(url) {
  const splitUrl = url.split("");
  if (splitUrl.indexOf("#") > -1) {
    const anchorIndex = splitUrl.indexOf("#");
    const newUrl = splitUrl.slice(0, anchorIndex).join("");
    return newUrl;
  } else {
    return url;
  }
}
