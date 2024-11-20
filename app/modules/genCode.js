function genCode() {
  const code = Math.random().toString(36).substring(2, 8);
  return code;
}

module.exports = genCode;
