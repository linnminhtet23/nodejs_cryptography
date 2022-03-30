const{createHash} = required('crypto');

//create a string hash

function hash(input){
    return createHash('sha256').update(input).digest('hex');
}
//Comparing two hashed passwords

  let password = "hello there";
const hash1 = hash(password);
console.log(hash1);

password = "hello there";
const hash2 = hash(password);

const match = hash1===hash2;
console.log(match? 'good password':'password does not match');