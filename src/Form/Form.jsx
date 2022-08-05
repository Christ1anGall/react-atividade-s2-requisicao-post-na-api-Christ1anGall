import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormMain from "./style";
import * as yup from "yup";
import axios from "axios";

const Form = () => {
  const schema = yup.object({
    username: yup.string().required("obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <FormMain onSubmit={handleSubmit(onSubmit)}>
      <p>{errors.username?.message}</p>
      <input placeholder="Insira seu Nome" {...register("username")} />
      <input
        placeholder="Insira sua Senha"
        type="password"
        {...register("password")}
      />
      <button type="submit">Login</button>
    </FormMain>
  );
};

export default Form;
