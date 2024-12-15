function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const chatToggleButton = document.getElementById('chat-toggle');
    const chatIcon = document.getElementById('icon');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
        chatIcon.src = 'images\\close-icon.png';
        hidePopupTel();
        hidePopupLine();
        hidePopupFacebook();
    } else {
        chatContainer.style.display = 'none';
        chatIcon.src = 'images\\chat-icon.png'; 
    }
}
