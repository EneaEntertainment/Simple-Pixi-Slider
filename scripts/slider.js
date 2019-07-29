/**
 *
 * Slider
 *
 * @version : 1.0.0
 * @author  : http://www.enea.sk
 *
 * @export
 * @class Slider
 * @extends {PIXI.Container}
 */
export default class Slider extends PIXI.Container
{
    /**
     * Creates an instance of Slider.
     *
     * @param {object} params
     */
    constructor(params)
    {
        super();

        this.params = params;

        this.isDown = false;

        this._value = 1;

        this.create();
    }

    /**
     *
     * create
     *
     */
    create()
    {
        // bg
        this.bg = new PIXI.Sprite().addTo(this).applyParams(this.params.bg);

        this.bg.responsive = true;
        this.bg.on('pointerdown', this.onDown, this);
        this.bg.on('pointermove', this.onMove, this);
        this.bg.on('pointerup', this.onUp, this);
        this.bg.on('pointerupoutside', this.onUp, this);

        // fg
        this.fg = new PIXI.Sprite().addTo(this).applyParams(this.params.fg);

        this.fg.width = this.bg.width;

        // update foreground
        this.update();
    }

    /**
     *
     * onDown
     *
     * @param {InteractionEvent} e
     */
    onDown(e)
    {
        this.isDown = true;

        this.onMove(e);
    }

    /**
     *
     * onMove
     *
     * @param {InteractionEvent} e
     */
    onMove(e)
    {
        if (!this.isDown)
        {
            return;
        }

        const y = e.data.getLocalPosition(this).y;

        this.value = -y / this.bg.height;
    }

    /**
     *
     * onUp
     *
     */
    onUp()
    {
        this.isDown = false;
    }

    /**
     *
     * update
     *
     */
    update()
    {
        this.fg.height = this.value * this.bg.height;
    }

    /**
     *
     * value
     *
     */
    get value()
    {
        return this._value;
    }

    /**
     *
     * value
     *
     * @param {number} val
     */
    set value(val)
    {
        val = Math.min(Math.max(val, 0), 1);

        this._value = val;

        this.update();
    }
}
