/// <reference path="fourslash.ts" />

//// interface I {}
//// interface CTor {
////     new (hour: number, minute: number): I
//// }
//// var x: {
////     B : CTor
//// };
//// class B {}
//// function foo() {
////     return {[|B|]: B};
//// }
//// class C extends (foo()).[|B|] {}
//// class C1 extends foo().[|B|] {}

verify.rangesAreRenameLocations();