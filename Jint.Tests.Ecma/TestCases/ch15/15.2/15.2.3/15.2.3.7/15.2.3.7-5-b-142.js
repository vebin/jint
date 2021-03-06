/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-5-b-142.js
 * @description Object.defineProperties - 'writable' property of 'descObj' is own data property that overrides an inherited data property (8.10.5 step 6.a)
 */


function testcase() {
        var obj = {};

        var proto = {
            writable: true
        };

        var Con = function () { };
        Con.prototype = proto;

        var descObj = new Con();

        descObj.writable = false;

        Object.defineProperties(obj, {
            property: descObj
        });

        obj.property = "isWritable";

        return obj.hasOwnProperty("property") && typeof (obj.property) === "undefined";
    }
runTestCase(testcase);
