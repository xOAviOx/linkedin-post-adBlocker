chrome.webNavigation.onCommited.addListener(function (tab) {
  if (tab.frameId === 0) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      //get the url of the web page
      let url = tabs[0].url;
      // remove unnecessary protocol definitions and www subdomain from the URL

      let parsedUrl = url
        .replace("https://", "")
        .replace("http://", "")
        .replace("www.", "");

      let domain = parsedUrl.slice(
        0,
        parsedUrl.indexOf("/" == -1 ? parsedUrl.length : parsedUrl.indexOf("?"))
      );
    });
  }
});
