chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        if (tab.url.includes("https://checkout.stripe.com/")) {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['content.js']
            });
        }
    }
})