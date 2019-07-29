PIXI.DisplayObject.prototype.applyParams = function applyParams(params, except = [])
{
    for (const i in params)
    {
        if (except.indexOf(i) !== -1)
        {
            continue;
        }

        this[i] = params[i];
    }

    return this;
};

PIXI.DisplayObject.prototype.addTo = function addTo(where, index)
{
    if (typeof index === 'undefined')
    {
        where.addChild(this);
    }
    else
    {
        where.addChildAt(this, index);
    }

    return this;
};

Object.defineProperties(PIXI.DisplayObject.prototype,
    {
        responsive:
        {
            get()
            {
                return this.interactive;
            },

            set(value)
            {
                this.interactive = value;

                this.buttonMode = value;
            }
        },

        anchorX:
        {
            get()
            {
                return this.anchor.x;
            },

            set(value)
            {
                this.anchor.x = value;
            }
        },

        anchorY:
        {
            get()
            {
                return this.anchor.y;
            },

            set(value)
            {
                this.anchor.y = value;
            }
        },

        anchorXY:
        {
            get()
            {
                return { x: this.anchor.x, y: this.anchor.y };
            },

            set(value)
            {
                this.anchor.x = value;

                this.anchor.y = value;
            }
        },

        scaleX:
        {
            get()
            {
                return this.scale.x;
            },

            set(value)
            {
                this.scale.x = value;
            }
        },

        scaleY:
        {
            get()
            {
                return this.scale.y;
            },

            set(value)
            {
                this.scale.y = value;
            }
        },

        scaleXY:
        {
            get()
            {
                return { x: this.scale.x, y: this.scale.y };
            },

            set(value)
            {
                this.scale.x = value;

                this.scale.y = value;
            }
        },

        skewX:
        {
            get()
            {
                return this.skew.x;
            },

            set(value)
            {
                this.skew.x = value;
            }
        },

        skewY:
        {
            get()
            {
                return this.skew.y;
            },

            set(value)
            {
                this.skew.y = value;
            }
        }
    });
