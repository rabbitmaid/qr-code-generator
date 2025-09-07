document.addEventListener('DOMContentLoaded', () => {

    const wrapper = document.querySelector('.wrapper');
    const button = document.querySelector('.form button');
    const input = document.querySelector('.form input');
    const image = document.querySelector('.qr-code img');


    button.addEventListener('click', () => {

        let qrCodeValue = input.value;
        if(!qrCodeValue) return;

        button.innerHTML = "Generating...";

        image.src = `http://api.qrserver.com/v1/create-qr-code/?data=${qrCodeValue}&size=200x200`;
        image.addEventListener('load', () => {
            wrapper.classList.add('active');
            button.innerHTML = "Generate QR Code";
        });
    });

});