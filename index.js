// uninitialized 8 byte buffer
var uninitialized_8_byte_buffer = new Buffer(8);
var u8bb = uninitialized_8_byte_buffer;
// initialized integer array buffer
var initialized_integer_array_buffer = new Buffer([8,6,7,5,3,9]);
var iiab = initialized_integer_array_buffer;
// initialized binary encoded buffer
var initialized_binary_encoded_buffer = new Buffer("I'm a string!","utf-8");
var ibeb = initialized_binary_encoded_buffer;
