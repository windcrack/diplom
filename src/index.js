"use strict";

import {Form} from "./send";
import {timer} from "./timer";
import {img} from "./img";
import {valid} from "./validator";
import {tabs} from "./windowtab";
import {calc} from "./calc";

window.addEventListener("DOMContentLoaded", function () {
    Form();
    timer();
    img();
    valid();
    tabs();
    calc();
});