export const qrFramesStyling = {
    connectHorizontal: "extra-rounded",
    default: "classy",
    dots: "dots",
    roundedFirst: "rounded",
    roundedSecond: "classy-rounded",
    square: "square",
}

export const qrDotsStyling = {
    dot: "dot",
    square: "square"
}

export const qrCornerDotsStyling = {
    dot: "dot",
    square: "square",
    extraRounded: "extra-rounded",
};

export const defaultQrCodeConfiguration = {
    width: 300,
    height: 300,
    type: "svg",
    data: window.location.href,
    dotsOptions: {
        color: "#000000ff",
        type: "square"
    },
    cornersDotOptions: {
        color: "#000000ff",
        type: "square",
    },
    cornersSquareOptions: {
        color: "#000000ff",
        type: "square",
    },
    backgroundOptions: {
        color: "#ffffffff",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    }
}