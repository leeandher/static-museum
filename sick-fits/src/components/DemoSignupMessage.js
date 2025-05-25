import React from "react";
import styled from "styled-components";
import { USER } from "@/backend/data";

const Wrapper = styled.div`
  border: 3px solid white;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 2rem 0;
  p {
    margin: 0;
  }
  .standout {
    border-bottom: 2px solid red;
    grid-column: 2;
  }
  .grid {
    display: grid;
    max-width: 350px;
  }
`;

export default function DemoSignupMessage() {
  return (
    <Wrapper>
      <p>
        Yo dawg, this is really just a demo so you can use these creds if you
        don't wanna make an account:
      </p>
      <br />
      <div className="grid">
        <p>Email:</p>
        <span className="standout">{USER.email}</span>
        <p>Password:</p>
        <span className="standout">{USER.password}</span>
      </div>
    </Wrapper>
  );
}
