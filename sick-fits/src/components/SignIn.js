import { useState } from "react";
import { useRouter } from "next/router";

import Form from "@/components/styles/Form";
import { useStore } from "@/backend/context";
import { USER } from "@/backend/data";

export default function SignIn({ header, samePage = false }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { state, dispatch } = useStore();

  return (
    <Form
      method="post"
      onSubmit={async (e) => {
        e.preventDefault();
        dispatch({
          type: "UPDATE_USER",
          user: { ...USER, ...state.user, email, password },
        });
        if (!samePage) {
          router.push("/");
        }
      }}
    >
      <fieldset>
        <h2>{header ? header : "Already have an account?"}</h2>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            placeholder="e.g. jane@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="e.g. jane-doe-rae-me"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign In!</button>
      </fieldset>
    </Form>
  );
}
