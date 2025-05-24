import styled from "styled-components";
import SignUp from "@/components/SignUp";
import SignIn from "@/components/SignIn";
import RequestReset from "@/components/RequestReset";
import DemoSignupMessage from "@/components/DemoSignupMessage";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

export default function SignUpPage() {
  return (
    <>
      <DemoSignupMessage />
      <Columns>
        <SignUp />
        <SignIn />
        <RequestReset />
      </Columns>
    </>
  );
}
