chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const urls = request.text.match(/\bhttps?:\/\/\S+/gi);
    if (urls && urls.length > 0) {
        // Create a new window
        chrome.windows.create({url: urls[0], focused: true}, function(window) {
            // After the window has been created, open the rest of the URLs in new tabs in this window
            urls.slice(1).forEach(url => {
                chrome.tabs.create({windowId: window.id, url: url});
            });
        });
    }
});
