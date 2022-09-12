import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import InputGroup from "../../Components/Login/InputGroup";
import Joi from "joi-browser";
import axios from "axios";
import { motion } from "framer-motion";
import { AsyncSubmitButton } from "../../Components/";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

const ResetPage: NextPage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [backendError, setBackendError] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });
  const router = useRouter();
  const schema = Joi.object({
    email: Joi.string()
      .min(3)
      .max(100)
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .label("Email"),
    password: Joi.string().min(8).max(40).required().label("Password")
  });
  const onSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const { error } = schema.validate({ email, password }, { abortEarly: false });
    if (error) {
      const { details } = error;
      const errors = {
        email: details.find((item: any) => item.path[0] == "email") ? details.find((item: any) => item.path[0] == "email").message : "",
        password: details.find((item: any) => item.path[0] == "password") ? details.find((item: any) => item.path[0] == "password").message : ""
      };

      setErrors(errors);
    } else {
      setErrors({
        email: "",
        password: ""
      });
      try {
        setLoading(true);
        const payload = { email, password };
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/auth`, payload);
        setBackendError("");
        setCookie("token", res.data.token, {
          path: "/",
          expires: new Date(Date.now() + 2 * 86400000)
        });
        router.push("/dashboard");
      } catch (err: any) {
        try {
          if (err.response.data.message) setBackendError(err.response.data.message);
        } catch (err: any) {
          alert("Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
      // alert("Form submitted")
    }
  };
  useEffect(() => {
    if (cookies.token)
      try {
        const user = jwt_decode(cookies.token);
        router.push("/dashboard");
      } catch (ex) {
        removeCookie("token");
      }
  }, []);
  return (
    <>
      <h1>Reset</h1>
    </>
  );
};

export default ResetPage;
