export * from './extensions.js';

import Slider from './slider.js';

// init app
const app = new PIXI.Application({
    width           : window.innerWidth,
    height          : window.innerHeight,
    autoDensity     : true,
    backgroundColor : 0x3a7ccd
});

document.body.appendChild(app.view);

// create slider
const sliderParams =
{
    bg:
    {
        texture : PIXI.Texture.WHITE,
        anchorX : 0.5,
        anchorY : 1,
        tint    : 0x404040,
        width   : 32,
        height  : 256
    },

    fg:
    {
        texture : PIXI.Texture.WHITE,
        anchorX : 0.5,
        anchorY : 1
    }
};

const slider = new Slider(sliderParams).addTo(app.stage);

slider.value = 0.25;

// handle window resize
window.addEventListener('resize', onResize);

onResize();

function onResize()
{
    // resize renderer
    const { innerWidth, innerHeight } = window;

    app.renderer.resize(innerWidth, innerHeight);

    // reposition slider
    slider.x = innerWidth >> 1;
    slider.y = (innerHeight >> 1) + (slider.bg.height >> 1);
}
