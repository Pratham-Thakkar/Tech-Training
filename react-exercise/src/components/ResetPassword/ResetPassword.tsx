import { useEffect, useState } from "react";

import {
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
  Button,
} from "reactstrap";
import { NavBar } from "../NavBar/NavBar";

export const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [errorList, setErrorList] = useState<Array<string>>([]);
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);

  useEffect(() => {
    setIsPasswordVerified(false);
    const regex =
      /^(?=.*\d)(?=.*[!#$@%&? "])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    setErrorList([]);
    if (newPassword.search(/\d/) < 0)
      setErrorList((errorList) => [...errorList, "At least one number"]);
    if (newPassword.search(/[a-z]/) < 0)
      setErrorList((errorList) => [
        ...errorList,
        "At least one lower character",
      ]);
    if (newPassword.search(/[A-Z]/) < 0)
      setErrorList((errorList) => [
        ...errorList,
        "At least one Uppercharacter",
      ]);
    if (newPassword.search(/[!#$%@&? "]/) < 0)
      setErrorList((errorList) => [
        ...errorList,
        "At least one special character",
      ]);
    if (newPassword.length < 8)
      setErrorList((errorList) => [...errorList, "Minimum of eight length"]);
    if (regex.test(newPassword)) {
      setIsPasswordVerified(true);
      setErrorList([]);
    }
  }, [newPassword]);
  return (
    <>
      <NavBar />
      <FormGroup className="position-relative">
        <Label for="New Password">New Password</Label>
        {isPasswordVerified && errorList.length === 0 ? (
          <Input
            valid
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        ) : (
          <Input
            invalid
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        )}
        {isPasswordVerified && errorList.length === 0 ? (
          <FormFeedback tooltip valid>
            Sweet! Your password seems to be strong
          </FormFeedback>
        ) : (
          <FormFeedback tooltip>Create some strong password.</FormFeedback>
        )}
        <FormText>
          {errorList.map((err, index) => {
            return <li key={index}>{err}</li>;
          })}
        </FormText>
        {isPasswordVerified && errorList.length === 0 && (
          <Button>Submit</Button>
        )}
      </FormGroup>
    </>
  );
};
