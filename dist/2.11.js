"use strict";
var _a, _b;
{
    // ternary operator
    const age = 15;
    const isAdult = age >= 18 ? 'Adult' : 'non Adult';
    console.log({ isAdult });
    // nullish operator
    const isAuthenticated = null; // undefined
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "guest";
    console.log({ result });
    const user = {
        name: "manik",
        address: {
            city: 'dhaka',
            rod: 'thakurgaon',
            permanentAddress: 'dhaka'
        },
    };
    const permanentAddressMe = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "no permanent Address";
    console.log(permanentAddressMe);
}
