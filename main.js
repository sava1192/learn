/***   ======= OBJECTS ======= ***/
// in vs hasOwnProperty
var ob = {
    own: 'ownProperty'
};
console.log('own' in ob);                   // true
console.log('toString' in ob);              // true
console.log(ob.hasOwnProperty('own'));      // true
console.log(ob.hasOwnProperty('toString')); // false

// ENUMERATION. (defined by internal property [[Enumerable]])
Object.keys(object); // returns object own enumerable properties.
for (property in object) {} // goes throug objects and prototypes enumerable props
object.propertyIsEnumerable('propName'); // returns [bool]

// GETTERS/SETTERS
var object = {
    _prop: 'propertyValue',
    get prop () {
        console.log('read prop');
        return this._prop;
    },
    set prop (value) {
        console.log('write prop');
        this._prop = value;
    }
}, a;

a = object.prop;          // logs: "read prop"
object.prop = 'new value';// logs: "write prop"
/** You don’t need to define both a getter and a setter; you can choose one or both.
If you define only a getter, then the property becomes read-only, and attempts to
write to it will fail silently in nonstrict mode and throw an error in strict mode.
If you define only a setter, then the property becomes write-only, and attempts to
read the value will fail silently in both strict and nonstrict modes. */

// DEFYING PROPERTIES
/**
 * DefineProperty method
 * enumrable    - [default: true]
 * configurable - [default: true] let us configure (chagne data/accessor props, delete, redefine) property
 * writable     - [default: true]
 * value        -
 *
 * Object.defineProperties(object, {
 *     name: 'prop',
 *     configurable: true
 * }, {
 *     name: 'prop2',
 *     configurable: true
 * });
 * all except configurable will be set to true automatically!!!
 */
var object = {
    property: 'propertyValue'
}
Object.defineProperty(object, 'property', {
    enumerable: false,                      // [default: true]
    configurable: false                     // [default: true]
});
console.log(object.propertyIsEnumerable("property")); // false
for (prop in object) {
    console.log(prop);                      // will never happen
}
delete object.property;
console.log('property' in object);          // true
Object.defineProperty(object, "property", { // error!!!
    configurable: true
});

Object.getOwnPropertyDescriptor(object, 'property'); // gets descriptor with info about prop

// OBJECT EXTENSIONS
var object = {a: 1}
Object.isExtensible(object);     // true
Object.preventExtension(object); // prevent from adding new props
object.b = 2;                    // error in strict mode
Object.seal(object);             // nonExtendable + all props nonConfigurable
Object.isSealed(object);         // true
Object.freeze(object);           // sealed + all props read-only
Object.isFrozen(object)          // true
