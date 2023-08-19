export default function isPasswordCorrect(
  inputtedPassword: string,
  correctPassword: string,
) {
  if (inputtedPassword === correctPassword) {
    return true;
  } else {
    return false;
  }
}
