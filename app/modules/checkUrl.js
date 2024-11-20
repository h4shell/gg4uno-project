function checkUrl(url) {
  // controlla che il link contenga un punto se non ha il protocollo ma ha il punto aggiungi il protocollo http

  if (url.includes(".")) {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "http://" + url;
    }
    return url;
  }

  return false;
}

module.exports = checkUrl;
