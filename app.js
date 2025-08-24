import { qrFramesStyling } from './consts.js'

const qrCanvasElement = document.getElementById('qrCanvas');
const urlInputElement = document.getElementById('url-input');

const dotsColorInputElement = document.getElementById('dots-color');
const backgroundColorInputElement = document.getElementById('background-color');
const cornerSquareColorInputElement = document.getElementById('corner-square-color');
const cornerDotsColorInputElement = document.getElementById('corner-dots-color');

const downloadButton = document.getElementById('download-btn');

let qrCode = null;

const qrCodeOptions = {
    width: 300,
    height: 300,
    type: "svg",
    data: "www.spohady.com/home",
    // image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    dotsOptions: {
        color: "#000000ff",
        type: "rounded"
    },
    cornersSquareOptions: {
        color: "#00BCD4",
        type: "extra-rounded",
    },
    cornersDotOptions: {
        color: "#00BCD4",
        type: "dot",
    },
    backgroundOptions: {
        color: "#FFFFFF",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    }
};

initializeQrCode();

function initializeQrCode() {
    qrCode = new QRCodeStyling(qrCodeOptions);
    qrCode.append(qrCanvasElement);
}

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