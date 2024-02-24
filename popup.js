document.getElementById('openLinks').addEventListener('click', function() {
    const text = document.getElementById('linkText').value;
    chrome.runtime.sendMessage({text: text});
});
