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

function showContactOptionsTel() {
    const overlay = document.getElementById("overlayTel");
    const popup = document.getElementById("popupTel");
    overlay.style.display = "block";
    popup.style.display = "block";
}
function showContactOptionsLine() {
    const overlay = document.getElementById("overlayLine");
    const popup = document.getElementById("popupLine");
    overlay.style.display = "block";
    popup.style.display = "block";
}
function showContactOptionsFacebook() {
    const overlay = document.getElementById("overlayFacebook");
    const popup = document.getElementById("popupFacebook");
    overlay.style.display = "block";
    popup.style.display = "block";
}

function hidePopupTel() {
    document.getElementById("overlayTel").style.display = "none";
    document.getElementById("popupTel").style.display = "none";
}
function hidePopupLine() {
    document.getElementById("overlayLine").style.display = "none";
    document.getElementById("popupLine").style.display = "none";
}
function hidePopupFacebook() {
    document.getElementById("overlayFacebook").style.display = "none";
    document.getElementById("popupFacebook").style.display = "none";
}

function openLine() {
    hidePopupLine(); // ซ่อน popup ก่อน
    window.open("https://line.me/ti/p/yourlineid", "_blank"); // เปลี่ยนเป็นลิงก์ Line ของคุณ
}

function callPhone() {
    hidePopupTel(); // ซ่อน popup ก่อน
    window.location.href = "tel:+66636655254"; // เปลี่ยนเป็นหมายเลขโทรศัพท์ของคุณ
}

function openFacebook() {
    hidePopupFacebook(); // ซ่อน popup ก่อน
    window.open('https://m.me/100063692028425', '_blank');
}