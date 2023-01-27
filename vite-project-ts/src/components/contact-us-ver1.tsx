import { SubmitHandler, useForm } from "react-hook-form";
import styles from './form.module.css'

interface Inputs {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  description: string;
}

// --- not using mui
const ContactUsVer1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const submitHnadler: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHnadler)}>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Name"
      />
      <p style={{color:'red'}}>{errors.name?.message}</p>
      <input
        type="email"
        {...register("email", { required: "Email is required" })}
        placeholder="Email"
      />
      <p style={{color:'red'}}>{errors.email?.message}</p>
      <input {...register("phone")} placeholder="Phone" />
      <p style={{color:'red'}}>{errors.phone?.message}</p>
      <input
        {...register("subject", { required: "Subject is required" })}
        placeholder="Subject"
      />
      <p style={{color:'red'}}>{errors.subject?.message}</p>

      <textarea
        {...register("description", { required: "Description is required" })}
        placeholder="Description"
      />
      <p style={{color:'red'}}>{errors.description?.message}</p>

      <input type="submit" value="Click" />
    </form>
  );
};

export default ContactUsVer1;
