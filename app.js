import { qrFramesStyling, defaultQrCodeConfiguration } from './consts.js'
import { buildAndDisplayQrCode, qrCode } from './qrCode.js'
import * as elements from './elementsDOM.js';

let qrCanvasElement = elements.qrCanvasElement;
let urlInputElement = elements.urlInputElement;

let dotsColorInputElement = elements.dotsColorInputElement;
let backgroundColorInputElement = elements.backgroundColorInputElement;
let cornerSquareColorInputElement = elements.cornerSquareColorInputElement;
let cornerDotsColorInputElement = elements.cornerDotsColorInputElement;
let downloadButton = elements.downloadButton;

buildAndDisplayQrCode(defaultQrCodeConfiguration, qrCanvasElement);

document.querySelectorAll('#frame-options .option-item').forEach((option) => {
    option.addEventListener('click', () => {
        const dataStyle = option.getAttribute('data-style');
        onDotsStyleSelected(option, dataStyle);
    });
});

function onDotsStyleSelected(element, style) {

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

downloadButton.addEventListener('click', () => {    
    qrCode.download();
});