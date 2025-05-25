import { useStore } from "@/backend/context";
import { useRouter } from "next/router";
import { useState } from "react";
import { USER } from "@/backend/data";

import Form from "@/components/styles/Form";

export default function SignUp() {
  const router = useRouter();
  const { dispatch } = useStore();
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <Form
      method="post"
      onSubmit={async (e) => {
        e.preventDefault();
        dispatch({
          type: "UPDATE_USER",
          user: {
            ...USER,
            email: formData.email,
            name: formData.name,
          },
        });
        setFormData({
          email: "",
          name: "",
          password: "",
          confirmPassword: "",
        });
        router.push("/");
      }}
    >
      <fieldset>
        <h2>Sign Up for an Account</h2>
        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            placeholder="e.g. jane@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            placeholder="e.g. Jane Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="e.g. jane-doe-rae-me"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input
            type="password"
            name="confirmPassword"
            placeholder="e.g. jane-doe-rae-me"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({
                ...formData,
                confirmPassword: e.target.value,
              })
            }
          />
        </label>
        <button type="submit">Sign Up!</button>
      </fieldset>
    </Form>
  );
}
