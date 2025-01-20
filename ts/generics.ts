let name: any = "Hello, TypeScript";

// Type assertion using <>
let strLength: number = (<string>name).length;

console.log(strLength); // Output: 17
