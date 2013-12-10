// uninitialized 8 byte buffer
var uninitialized_8_byte_buffer = new Buffer(8);
var u8bb = uninitialized_8_byte_buffer;
// initialized integer array buffer
var initialized_integer_array_buffer = new Buffer([8,6,7,5,3,9]);
var iiab = initialized_integer_array_buffer;
// initialized binary encoded buffer
var initialized_binary_encoded_buffer = new Buffer("I'm a string!","utf-8");
var ibeb = initialized_binary_encoded_buffer;
// write to five bytes of the uninitialized buffer
// the uninitialized array will contain garbage
//  each character in the string happens to be 8 bits
//  8 bits x 5 characters = 40 bits
//  8 bytes x 8 bits = 64 bit buffer
//  40 bits / 64 bit buffer = ~2/3 of the buffer
var b = new Buffer(8);
b = new Buffer(16);
console.log(b.write('hello','utf-8'));
console.log(b.toString());
console.log(b.write(' world!',5,'utf-8'));
