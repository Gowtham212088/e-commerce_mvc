const bcrypt = require("bcrypt");

module.exports = {
  //? Password Encryption
  createPassword: async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  },
  verifyPassword: async (password,conformPassword)=>{
   const isPasswordMatches =  await bcrypt.compare(password,conformPassword);
   return isPasswordMatches;
  }
};
