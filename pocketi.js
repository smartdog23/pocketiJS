 /*!
 * pocketiJS - A Lightweight Simple Javascript library v1.0.0
 * Copyright (c) 2019 Valdir Pereira Lourenco
 * https://github.com/smartdog23/pocketiJS
 * Licensed under the MIT license
 * https://valdir.dev/mit-license
 */

function pocketi() {
    return {
        _object : null,
        // get the element by id
        id(__id) {
            this._object = document.getElementById(__id);
            return this;
        },
        // get the element by classname
        cl(__class) {
            this._object = document.getElementsByClassName(__class);
            return this;
        },
        
        // ##### basic #####
        // get or set the value 
        value(__value) {
            if(__value == undefined) {
                return this._object.value;
            }
            this._object.value = __value;
        },
        // show the selected element
        show() {
            this._object.style.display = "block";
        },
        // hide the selected element
        hide() {
            this._object.style.display = "none";
        },

        // ##### events #####
        _eventsGlobal(__object, __event, __action) {
            if(Array.isArray(__object)) {
                __object.forEach(element => {
                    element.addEventListener(__event, __action, false);
                });
                return __object;   
            }
            __object.addEventListener(__event, __action, false);
            return __object;
        },
        // click event
        click(__action) {
            this._eventsGlobal(this._object, 'click', __action);
            return this;
        }
    }
}

const _p = pocketi();