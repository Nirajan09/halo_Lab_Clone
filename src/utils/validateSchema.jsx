import * as yup from "yup";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/jpg",
];

const countLetters = (value = "") => {
  return value.replace(/\s+/g, "").length;
};

const contactSchema = yup.object().shape({
  name: yup.string()
    .trim()
    .required("Full name is required.")
    .matches(/^[A-Za-z\s]+$/, "Full name can only contain letters and spaces.")
    .test(
      "minWords",
      "Full name must be at least 6 letters.",
      value => {
        return countLetters(value) >= 6;
      }
    ),

  email: yup.string()
    .trim()
    .required("Company email is required.")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email address."
    ),

  phone: yup.string()
    .transform(value => (typeof value === "string" ? value.trim() : value))
    .required("Phone number is required.")
    .matches(
      /^(97|98)\d{8}$/,
      "Phone number must start with '97' or '98' and be exactly 10 digits."
    ),

  budget: yup.string()
    .required("Please select a budget."),

  project: yup.string()
    .trim()
    .required("Please write something about your project.")
    .test(
      "minWords",
      "Project description must be at least 50 letters.",
      value => {
        if (!value) return true;
        return countLetters(value) >= 50;
      }
    ),

  file: yup.mixed()
    .required("Please attach a file.")
    .test(
      "fileSize",
      "File size exceeds 5MB limit.",
      value => value && value.size <= MAX_FILE_SIZE
    )
    .test(
      "fileType",
      "Invalid file type. Only PDF, JPEG, JPG, PNG allowed.",
      value => value && ACCEPTED_FILE_TYPES.includes(value.type)
    ),
});

export default contactSchema;
