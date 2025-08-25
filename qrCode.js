export let qrCode = null;

export function buildAndDisplayQrCode(qrCodeConfigurations, canvas) {
    qrCode = new QRCodeStyling(qrCodeConfigurations);
    qrCode.append(canvas);
}