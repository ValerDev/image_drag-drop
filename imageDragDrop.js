const Cropper = this.Cropper;
const image = document.querySelector('.image-circle-block .output');
const loader = document.querySelector('.image-circle-block .preLoader');
const clear = document.querySelector('.image-circle-block .clear');
const edit = document.querySelector('.image-circle-block .edit');
const accept = document.querySelector('.image-circle-block .accept');
const imageLabel = document.querySelector('.image-circle-block label');
const editor = document.getElementById('edit');
const imgModal = document.querySelector('.image-modal');
const closer = document.querySelector('.closer');
const editableImg = document.querySelector('.img-edit-wrapper')
const imageTools = document.querySelector('.image-circle-block .image-tools');
const editImg = document.getElementById('editable')
function loadFile(event) {
    document.querySelector(".image-circle-block label").style.opacity = 0;
    clear.style.transform = "translateX(-5em)"
    edit.style.transform = "translateY(4em) scale(1.2)"
    accept.style.transform = "translateX(5em)"
    imageTools.style.zIndex = '0'
    image.style.opacity = '0'
    loader.style.transform = 'translateY(-60%)'
    image.style.transform = 'scale(1.4)'
    imageLabel.style.transform = "translateY(25%) scale(1.2)"
    setTimeout(() => {
        image.style.opacity = '1'
        image.style.transform = 'scale(1)'
        console.log(54545);
        image.src = URL.createObjectURL(event.target.files[0]);
        loader.style.transform = 'translateY(110%)'
        imageTools.style.zIndex = '2'
        clear.style.transform = "translateX(-.5em)"
        edit.style.transform = "translateY(-.4em) scale(1.2)"
        accept.style.transform = "translateX(.5em)"
    }, 800)
};
function clearImage() {
    clear.style.transform = "translateX(-5em)"
    edit.style.transform = "translateY(4em) scale(1.2)"
    accept.style.transform = "translateX(5em)"
    imageLabel.style.opacity = '1';
    image.style.opacity = '0'
    image.style.transform = 'scale(1.4)'
    imageTools.style.zIndex = '0'
    imageLabel.style.transform = "translateY(-25%) scale(1)"
    setTimeout(() => {
        image.src = '';
    }, 200)
}
function acceptImage() {
    clear.style.transform = "translateX(-5em)"
    edit.style.transform = "translateY(4em) scale(1.2)"
    accept.style.transform = "translateX(5em)"
    imageTools.style.zIndex = '0'
}
closer.onclick = (e) => {
    e.target.parentElement.style.display = 'none'
}
editor.onclick = () => {
    if(document.querySelector('.output').src){
        editableImg.src = document.querySelector('.output').src
        imgModal.style.display = 'flex';
        imgModal.style.left ='0';
    } else {
        console.error('add the image')
    }
}
editImg.addEventListener('ready', function () {
        console.log(this.cropper === cropper);
        // > true
});
// const cropper = new Cropper(editImg, {
//     crop(event) {
//         console.log(event.detail.x);
//         console.log(event.detail.y);
//         console.log(event.detail.width);
//         console.log(event.detail.height);
//         console.log(event.detail.rotate);
//         console.log(event.detail.scaleX);
//         console.log(event.detail.scaleY);
//     },
// });