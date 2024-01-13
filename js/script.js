const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('.qrForm button');

const qrCodeInput = document.querySelector('.qrForm input')
const qrCodeImg = document.querySelector('#imgQr')

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value

    if (!qrCodeInputValue) return;// validação
    qrCodeBtn.innerText = "Gerando Código..."
    qrCodeImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener('load', ()=> {
      container.classList.add('active')
      qrCodeBtn.innerText='Código Criado!'
    })

}
qrCodeBtn.addEventListener('click', () => {
  generateQrCode();
});
