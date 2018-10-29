export const isImage = (input) => {
    const filePath = input.value;
    const img = filePath.substring(filePath.lastIndexOf(".")).toLowerCase();
    return img.match(/.png|.jpg|.jpeg/);
};

export const base64toBlob = (urlData) => {
    let arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
}

export const zipImg = (file, callback) => {
    const MAX_SIZE = 500;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        let re = reader.result;
        const image = new Image();
        image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            if (image.height > MAX_SIZE && image.height >= image.width) {
                image.width *= MAX_SIZE / image.height;
                image.height = MAX_SIZE;
            }
            if (image.width > MAX_SIZE && image.width > image.height) {
                image.height *= MAX_SIZE / image.width;
                image.width = MAX_SIZE;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0, image.width, image.height);

            const base64 = canvas.toDataURL('image/jpeg');
            callback(base64)
        };

        image.src = re;
    };

};