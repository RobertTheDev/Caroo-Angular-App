const checkPassword = isPasswordCorrect(body.password, findUser.password);

if (!checkPassword) {
  return res.status(StatusCodes.BAD_REQUEST).send({
    message: `Password not successful.`,
  });
}
