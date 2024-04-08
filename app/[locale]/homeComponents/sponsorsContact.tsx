"use client";

import { useState } from "react";
import Button from "../components/button/button";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import "./sponsorsContact.css";

const SponsorContact: React.FC = () => {
  const t = useTranslations("form");

  const configCaptcha: string = process.env.NEXT_PUBLIC_CAPTCHA_KEY as string;
  const [captchaTrue, setCaptcha] = useState(false);
  const [openPopOver, setOpenPopOver] = useState(false);

  const validationSchema = yup.object({
    name: yup
      .string()
      .typeError(t("errorString"))
      .min(4, t("min4"))
      .required(t("required")),
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
    message: yup
      .string()
      .typeError(t("errorString"))
      .min(20, t("min20"))
      .required(t("required")),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      emailjs
        .send(
          "service_pkbhc9v",
          "template_yz8otzj",
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
    <div>
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

        <textarea
          className="input-form textarea"
          placeholder={t("message")}
          onChange={formik.handleChange}
          value={formik.values.message}
          id="message"
        />
        {formik.errors.message && formik.touched.message && (
          <div className="error-message">{formik.errors.message}</div>
        )}
        <ReCAPTCHA
          sitekey={configCaptcha}
          onChange={(value) => onChange(value)}
          className="captcha-style"
        />
        <Button title={t("button")} type="submit" disabled={!captchaTrue} />
        {openPopOver && (
          <div className="popover">
            <p>{t("formOK")}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default SponsorContact;
