"use strict";
const a = { email: "a@.com", userId: 122,
    githubToken: "github",
    startTrial: () => {
        return "Trial";
    },
    getCoupon(name, value) {
        return value;
    },
};
//difference between Interface and Type
/*Extending an interface using extends keyword and type can be extended using intersection (&)*/ 
