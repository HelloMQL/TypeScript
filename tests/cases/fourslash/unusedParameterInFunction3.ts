/// <reference path='fourslash.ts' />

// @noUnusedParameters: true
////function [|greeter(x,y)|] {
////    y++;
////}

verify.codeFixAtPosition("greeter(y)");