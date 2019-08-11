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
        }
    }
}

const _p = pocketi();