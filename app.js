const images = [
    "images\\S__22478871.jpg",
    "images\\S__22478876.jpg", // เปลี่ยนเป็นชื่อไฟล์รูปภาพที่คุณต้องการ
    "images\\S__22478878.jpg" // เปลี่ยนเป็นชื่อไฟล์รูปภาพที่คุณต้องการ
    // เพิ่มรูปภาพเพิ่มเติมที่นี่
];

let currentIndex = 0;
let intervalId; // ตัวแปรสำหรับเก็บ ID ของ interval

function showImage(index) {
    const showcaseImage = document.getElementById("showcaseImage");
    showcaseImage.src = images[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length; // เปลี่ยนไปยังรูปถัดไป
    showImage(currentIndex);
    resetInterval(); // รีเซ็ตเวลาเมื่อมีการเปลี่ยนรูป
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // เปลี่ยนไปยังรูปก่อนหน้า
    showImage(currentIndex);
    resetInterval(); // รีเซ็ตเวลาเมื่อมีการเปลี่ยนรูป
}

// ฟังก์ชันสำหรับรีเซ็ต interval
function resetInterval() {
    clearInterval(intervalId); // หยุดการเปลี่ยนรูปอัตโนมัติ
    intervalId = setInterval(nextImage, 5000); // เริ่มการเปลี่ยนรูปใหม่ทุก ๆ 2 วินาที
}

// เริ่มการเปลี่ยนรูปอัตโนมัติเมื่อโหลดหน้า
resetInterval();