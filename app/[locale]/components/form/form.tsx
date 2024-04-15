"use client";

import { useState } from "react";
import Button from "../button/button";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import "./form.css";

type FormTypes = {
  to: 'sponsor' | 'newsletter'
}

const Form = ({to}:FormTypes) => {
  const t = useTranslations("form");
  const template = to === 'sponsor' ? 'template_6adm0ax' : 'template_1lzj76j';
  const configCaptcha: string = process.env.NEXT_PUBLIC_CAPTCHA_KEY as string;
  const [captchaTrue, setCaptcha] = useState(false);
  const [openPopOver, setOpenPopOver] = useState(false);

  const validationSchema = yup.object({
    name: yup
      .string()
      .typeError(t("errorString"))
      .min(4, t("min4"))
      .required(t("required")),
    company: yup.string().typeError(t("errorString")).min(4, t("min4")),
    number: yup
      .number()
      .typeError(t("errorNumber"))
      .min(8, t("min8"))
      .required(t("required")),
    email: yup
      .string()
      .typeError(t("errorString"))
      .email(t("errorEmail"))
      .required(t("required")),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      number: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      emailjs
        .send(
          "service_2dyecpd",
          template,
          values,
          process.env.NEXT_PUBLIC_EMAILJS
        )
        .then((result: any) => {
          setOpenPopOver(true);
          setTimeout(() => {
            setOpenPopOver(false);
            formik.resetForm();
          }, 3000);
        });
    },
  });

  const onChange = (value: string | null) => {
    if (value) {
      setCaptcha(true);
    } else {
      setCaptcha(false);
    }
  };

  return (
    <form className="form-cont" onSubmit={formik.handleSubmit}>
      <input
        placeholder={t("name")}
        type="text"
        className="input-form"
        onChange={formik.handleChange}
        value={formik.values.name}
        id="name"
      />
      {formik.errors.name && formik.touched.name && (
        <div className="error-message">{formik.errors.name}</div>
      )}

      <input
        placeholder={t("mail")}
        type="email"
        className="input-form"
        onChange={formik.handleChange}
        value={formik.values.email}
        id="email"
      />
      {formik.errors.email && formik.touched.email && (
        <div className="error-message">{formik.errors.email}</div>
      )}

      <input
        placeholder={t("company")}
        type="text"
        className="input-form"
        onChange={formik.handleChange}
        value={formik.values.company}
        id="company"
      />
      {formik.errors.company && formik.touched.company && (
        <div className="error-message">{formik.errors.company}</div>
      )}

      <input
        placeholder={t("phone")}
        type="tel"
        className="input-form"
        onChange={formik.handleChange}
        value={formik.values.number}
        id="number"
      />
      {formik.errors.number && formik.touched.number && (
        <div className="error-message">{formik.errors.number}</div>
      )}

      <ReCAPTCHA
        sitekey={configCaptcha}
        onChange={(value) => onChange(value)}
        className="captcha-style"
      />
      <Button title={t("button")} type="submit" disabled={!captchaTrue} bigger/>
      {openPopOver && (
        <div className="popover">
          <p>{t("formOK")}</p>
        </div>
      )}
    </form>
  );
};

export default Form;
