import { FC, ReactElement, FocusEvent, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IMaskInput } from "react-imask";
import { PopupFormProps } from "@interfaces/Popup";
import styles from "./styles.module.scss";

const PopupForm: FC<PopupFormProps> = ({ onClose }): ReactElement => {
  const [isFocused, setIsFocused] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    onSubmit: ({ name, phone, email }, { resetForm }) => {
      console.log(`Имя: ${name}, Номер телефона: ${phone}, E-MAIl: ${email}`);

      onClose();
      resetForm();
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .matches(/^[А-Яа-яЁё\s]+$/, "Разрешены только русские буквы и пробелы")
        .required("Поле обязательное для заполнения")
        .max(55, "Слишком много символов"),
      phone: Yup.string().required("Поле обязательное для заполнения"),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Разрешены только английские буквы",
        )
        .email("Некорректный адрес электронной почты")
        .min(4, "Ненадежный")
        .max(50, "Слишком много символов")
        .required("Поле обязательное для заполнения"),
    }),
    validateOnChange: false,
    validateOnBlur: false,
  });

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setIsFocused((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIsFocused((prev) => ({ ...prev, [name]: value !== "" }));
  };

  return (
    <div className={styles.popup_form_container}>
      <form className={styles.popup_form} onSubmit={formik.handleSubmit}>
        <label
          className={`${styles.popup_form_label} ${
            isFocused.name || formik.values.name ? styles.floating : ""
          }`}
        >
          <span
            className={styles.input_error}
            style={{
              opacity: `${formik.errors.name && formik.values.name.length < 1 ? "1" : "0"}`,
            }}
          >
            {formik.errors.name}
          </span>

          <span className={styles.placeholder}>Ваше имя</span>
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            onFocus={(e) => handleFocus(e)}
            onBlur={(e) => handleBlur(e)}
            value={formik.values.name}
            className={styles.popup_form_input}
          />
        </label>

        <label
          className={`${styles.popup_form_label} ${
            isFocused.phone || formik.values.phone ? styles.floating : ""
          }`}
        >
          <span
            className={styles.input_error}
            style={{
              opacity: `${formik.errors.name && formik.values.phone.length < 1 ? "1" : "0"}`,
            }}
          >
            {formik.errors.phone}
          </span>
          <span className={styles.placeholder}>Телефон</span>
          <IMaskInput
            mask="+{7}(000)000-00-00"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onFocus={(e) => handleFocus(e)}
            onBlur={(e) => handleBlur(e)}
            className={styles.popup_form_input}
          />
        </label>

        <label
          className={`${styles.popup_form_label} ${
            isFocused.email || formik.values.email ? styles.floating : ""
          }`}
        >
          <span
            className={styles.input_error}
            style={{
              opacity: `${formik.errors.email && formik.values.email.length < 1 ? "1" : "0"}`,
            }}
          >
            {formik.errors.email}
          </span>

          <span className={styles.placeholder}>E-mail</span>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onFocus={(e) => handleFocus(e)}
            onBlur={(e) => handleBlur(e)}
            className={styles.popup_form_input}
            lang={"eng"}
          />
        </label>

        <div className={styles.popup_form_button_wrapper}>
          <p>
            Нажимая на кнопку «Отправить», вы ознакомлены
            <br />и подтверждаете согласие с{" "}
            <span>политикой обработки персональных данных</span>
          </p>

          <button type="submit" className={styles.popup_form_button}>
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopupForm;
