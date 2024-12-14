const dotnavItems = document.querySelectorAll('.dotnav-item');
const galleryItems = document.querySelectorAll('.gallery-item');

dotnavItems.forEach((item, index) => {
    item.addEventListener('click', () => {

        event.preventDefault(); // ป้องกันการเลื่อนหน้า
        
        // ซ่อนภาพทั้งหมด
        galleryItems.forEach(galleryItem => {
            galleryItem.classList.remove('current');
            galleryItem.setAttribute('aria-hidden', 'true');
        });

        // แสดงภาพที่ถูกเลือก
        galleryItems[index].classList.add('current');
        galleryItems[index].setAttribute('aria-hidden', 'false');

        // อัปเดตสถานะของจุดนำทาง
        dotnavItems.forEach(dot => {
            dot.classList.remove('current');
            dot.setAttribute('aria-selected', 'false');
        });
        item.classList.add('current');
        item.setAttribute('aria-selected', 'true');
    });
});

// แสดงภาพแรกเมื่อโหลดหน้า
galleryItems[0].classList.add('current');
galleryItems[0].setAttribute('aria-hidden', 'false');