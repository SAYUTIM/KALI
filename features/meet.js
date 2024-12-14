const disableCameraMic = () => {
    const cameraButton = document.querySelector('[aria-label="カメラをオフ"]');
    if (cameraButton) cameraButton.click();
        
    const micButton = document.querySelector('[aria-label="マイクをオフ"]');
    if (micButton) micButton.click();      
};

const clickJoinButton = () => {
    const joinButton = Array.from(document.querySelectorAll('button'))
        .find(button => button.textContent.includes('今すぐ参加'));

    if (joinButton) joinButton.click();
};

const observer = new MutationObserver(() => {
    disableCameraMic();
    clickJoinButton();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});