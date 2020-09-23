import React from "react";
import { useForm } from "react-hook-form";

//todo add labels , add errors , endActiveHour > startActiveHour , maxNotification not negative ??

function ReactHookFormSample2() {
  const { register, handleSubmit, errors, getValues } = useForm({
    defaultValues: {
      startActiveHour: 9,
      endActiveHour: 17,
      tresholdValueKnots: 15,
      tresholdType: "max",
      notifyType: "email",
      maxNotification: 1,
    },
  });
  const onSubmit = (data) => console.log(data);
  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="number"
        placeholder="Start Active Hour [0-23]"
        name="startActiveHour"
        ref={register({
          required: true,
          min: { value: 0, message: "value must be >= 0" },
          max: { value: 23, message: "value must be <= 23" },
          validate: (value) =>
            parseInt(value) < parseInt(getValues("endActiveHour")) ||
            "start must be < end",
        })}
      />
      {errors.startActiveHour && errors.startActiveHour.message}

      <input
        type="number"
        placeholder="End Active Hour [0-23]"
        name="endActiveHour"
        ref={register({
          required: true,
          min: { value: 0, message: "value must be >= 0" },
          max: { value: 23, message: "value must be <= 23" },
          validate: (value) =>
            parseInt(value) > parseInt(getValues("startActiveHour")) ||
            "end must be > start",
        })}
      />
      {errors.endActiveHour && errors.endActiveHour.message}

      <input
        type="number"
        placeholder="Treshold Value [Knots]"
        name="tresholdValueKnots"
        ref={register({
          required: true,
          min: { value: 0, message: "value must be >= 0" },
        })}
      />
      {errors.tresholdValueKnots && errors.tresholdValueKnots.message}

      <select name="tresholdType" ref={register({ required: true })}>
        <option value="max">max</option>
        <option value="avg">avg</option>
        <option value="min">min</option>
      </select>
      {errors.tresholdType && errors.tresholdType.message}

      <select name="notifyType" ref={register({ required: true })}>
        <option value="email">email</option>
        <option value="sms">sms</option>
        <option value="voice">voice</option>
      </select>
      {errors.notifyType && errors.notifyType.message}

      <input
        type="number"
        placeholder="Max Notification"
        name="maxNotification"
        ref={register({
          required: true,
          min: { value: 0, message: "value must be >= 0" },
        })}
      />
      {errors.maxNotification && errors.maxNotification.message}

      <input type="submit" />
    </form>
  );
}

export default ReactHookFormSample2;
