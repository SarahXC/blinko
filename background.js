chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    const urls = request.text.match(/\bhttps?:\/\/\S+/gi);
    if (urls) {
        urls.forEach(url => {
            chrome.tabs.create({url: url});
        });
    }
});
