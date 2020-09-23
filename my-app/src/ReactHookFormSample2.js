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
      userName: "",
      stationName: "",
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
          required: { value: true, message: "start is required" },
          min: { value: 0, message: "start must be >= 0" },
          max: { value: 23, message: "start must be <= 23" },
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
          required: { value: true, message: "end is required" },
          min: { value: 0, message: "end must be >= 0" },
          max: { value: 23, message: "end must be <= 23" },
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
          required: { value: true, message: "treshold value is required" },
          min: { value: 0, message: "treshold value must be >= 0" },
        })}
      />
      {errors.tresholdValueKnots && errors.tresholdValueKnots.message}

      <select
        name="tresholdType"
        ref={register({ required: "treshold type is required" })}
      >
        <option value="max">max</option>
        <option value="avg">avg</option>
        <option value="min">min</option>
      </select>
      {errors.tresholdType && errors.tresholdType.message}

      <select
        name="notifyType"
        ref={register({ required: "notify type is required" })}
      >
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
          required: "max notification is required",
          min: { value: 0, message: "max notification must be >= 0" },
        })}
      />
      {errors.maxNotification && errors.maxNotification.message}

      <select name="userName" ref={register({ required: "user name is required" })}>
        <option value="userName1">userName1</option>
        <option value="userName2">userName2</option>
        <option value="userName3">userName3</option>
      </select>
      {errors.userName && errors.userName.message}

      <select
        name="stationName"
        ref={register({ required: "station name is required" })}
      >
        <option value="stationName1">stationName1</option>
        <option value="stationName2">stationName2</option>
        <option value="stationName3">stationName3</option>
      </select>
      {errors.stationName && errors.stationName.message}

      <input type="submit" />
    </form>
  );
}

export default ReactHookFormSample2;
