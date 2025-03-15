/*
const inputs = document.querySelectorAll( '.controls input');

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix );
    console.log(suffix,this.name);
}
inputs.forEach(input => input.addEventListener('input', handleUpdate));
*/
const blurSlider = document.getElementById('blur-slider');
const brightnessSlider = document.getElementById('bright-slider');
const contrastSlider = document.getElementById('contrast-slider');
const grayscaleSlider  = document.getElementById('grayscale-slider');


blurSlider.addEventListener('input', (e) => {
    const value = e.target.value +'px';
    document.documentElement.style.setProperty('--blur', value);
});

brightnessSlider.addEventListener('input', (e) => {
    const value = e.target.value + "%";
    document.documentElement.style.setProperty('--brightness', value);
});

grayscaleSlider.addEventListener('input',(e) => {
    const value = e.target.value + "%";
    document.documentElement.style.setProperty('--grayscale', value);
});
/**/ 