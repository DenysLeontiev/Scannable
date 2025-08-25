import { qrFramesStyling, qrDotsStyling, qrCornerDotsStyling, defaultQrCodeConfiguration } from './consts.js'
import { buildAndDisplayQrCode, qrCode } from './qrCode.js'
import * as elements from './elementsDOM.js';

let qrCanvasElement = elements.qrCanvasElement;
let urlInputElement = elements.urlInputElement;

let dotsColorInputElement = elements.dotsColorInputElement;
let backgroundColorInputElement = elements.backgroundColorInputElement;
let cornerSquareColorInputElement = elements.cornerSquareColorInputElement;
let cornerDotsColorInputElement = elements.cornerDotsColorInputElement;
let downloadButton = elements.downloadButton;

let extensionSelector = elements.extensionSelector;

let logoUploadInput = elements.imageUploadInput;
let removeImageButton = elements.removeUploadImage;

buildAndDisplayQrCode(defaultQrCodeConfiguration, qrCanvasElement);

document.querySelectorAll('#frame-options .option-item').forEach((option) => {
    option.addEventListener('click', () => {
        const dataStyle = option.getAttribute('data-style');
        onQrCodeStyleSelected(option, dataStyle);
    });
});

function onQrCodeStyleSelected(element, style) {

    document.querySelectorAll('#frame-options .option-item').forEach((item) => {
        item.classList.remove('active');
    });

    element.classList.add('active');

    qrCode.update({
        dotsOptions: {
            type: qrFramesStyling[style]
        }
    });
}

document.querySelectorAll('#qr-dots-options .option-item').forEach((option) => {
    option.addEventListener('click', () => {
        const dataStyle = option.getAttribute('data-style');
        onDotsStyleSelected(option, dataStyle);
    });
});

function onDotsStyleSelected(element, style) {
    document.querySelectorAll('#qr-dots-options .option-item').forEach((item) => {
        item.classList.remove('active');
    });

    element.classList.add('active');

    qrCode.update({
        cornersDotOptions: {
            type: qrDotsStyling[style]
        }
    });
}

document.querySelectorAll('#qr-corners-options .option-item').forEach((option) => {
    option.addEventListener('click', () => {
        const dataStyle = option.getAttribute('data-style');
        onCornerSquareStyleSelected(option, dataStyle);
    });
});

function onCornerSquareStyleSelected(element, style) {
    document.querySelectorAll('#qr-corners-options .option-item').forEach((item) => {
        item.classList.remove('active');
    });

    element.classList.add('active');

    qrCode.update({
        cornersSquareOptions: {
            type: qrCornerDotsStyling[style]
        }
    });
}

document.querySelectorAll('#logo-options .option-item').forEach((option) => {
    option.addEventListener('click', () => {
        document.querySelectorAll('#logo-options .option-item').forEach((item) => {
            item.classList.remove('active');
        });
        option.classList.add('active');
    });
});

urlInputElement.addEventListener('input', () => {
    let value = urlInputElement.value;
    if (value) {
        qrCode.update({
            data: value
        });
    }
});

dotsColorInputElement.addEventListener('input', () => {
    let value = dotsColorInputElement.value;

    qrCode.update({
        dotsOptions: {
            color: value
        }
    });
});

backgroundColorInputElement.addEventListener('input', () => {
    let value = backgroundColorInputElement.value;

    qrCode.update({
        backgroundOptions: {
            color: value
        }
    });
});

cornerSquareColorInputElement.addEventListener('input', () => {
    let value = cornerSquareColorInputElement.value;

    qrCode.update({
        cornersSquareOptions: {
            color: value
        }
    });
});

cornerDotsColorInputElement.addEventListener('input', () => {
    let value = cornerDotsColorInputElement.value;

    qrCode.update({
        cornersDotOptions: {
            color: value
        }
    });
});

extensionSelector.addEventListener('change', function () {
    const selectedValue = this.value;

    qrCode.update({
        type: selectedValue
    });
});

downloadButton.addEventListener('click', () => {
    let qrCodeExtension = qrCode._options.type;
    qrCode.download({ extension: qrCodeExtension });
});

removeImageButton.addEventListener('click', () => {
    qrCode.update({
        image: undefined
    });
});

logoUploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        const imageUrl = URL.createObjectURL(file);

        qrCode.update({
            image: imageUrl
        });
    }
});