// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * String.prototype.split(separator, limit):
 * i) can be transferred to other kinds of objects for use as a method.
 * separator and limit can be any kinds of object since:
 * ii) if separator is not RegExp ToString(separator) performs and
 * iii) ToInteger(limit) performs
 *
 * @path ch15/15.5/15.5.4/15.5.4.14/S15.5.4.14_A1_T7.js
 * @description Argument is undefined, and instance is String
 */

var __split = String("undefinedd").split(undefined);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __split !== "object") {
  $ERROR('#1: __split = String("undefinedd").split(undefined); typeof __split === "object". Actual: '+typeof __split );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.constructor !== Array) {
  $ERROR('#2: __split = String("undefinedd").split(undefined); __split.constructor === Array. Actual: '+__split.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split.length !== 1) {
  $ERROR('#3: __split = String("undefinedd").split(undefined); __split.length === 1. Actual: '+__split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__split[0] !== "undefinedd") {
  $ERROR('#4: __split = String("undefinedd").split(undefined); __split[0] === "undefinedd". Actual: '+__split[0] );
}
//
//////////////////////////////////////////////////////////////////////////////
