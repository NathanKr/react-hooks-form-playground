import React from "react";
import { useForm } from "react-hook-form";


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

  const getOptionsElements = array => array.map((it, index) => (
    <option key={index} value={it}>
      {it}
    </option>
  ));
  const users = ["userName1", "userName2", "userName3"];
  const stations = ["stationName1", "stationName2", "stationName3"];

  const usersOptionsElements = getOptionsElements(users);
  const stationsOptionsElements = getOptionsElements(stations);

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
      <span className="validationError">
        {errors.startActiveHour && errors.startActiveHour.message}
      </span>

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
      <span className="validationError">
        {errors.endActiveHour && errors.endActiveHour.message}
      </span>

      <input
        type="number"
        placeholder="Treshold Value [Knots]"
        name="tresholdValueKnots"
        ref={register({
          required: { value: true, message: "treshold value is required" },
          min: { value: 0, message: "treshold value must be >= 0" },
        })}
      />
      <span className="validationError">
        {errors.tresholdValueKnots && errors.tresholdValueKnots.message}
      </span>

      <select
        name="tresholdType"
        ref={register({ required: "treshold type is required" })}
      >
        <option value="max">max</option>
        <option value="avg">avg</option>
        <option value="min">min</option>
      </select>
      <span className="validationError">
        {errors.tresholdType && errors.tresholdType.message}
      </span>

      <select
        name="notifyType"
        ref={register({ required: "notify type is required" })}
      >
        <option value="email">email</option>
        <option value="sms">sms</option>
        <option value="voice">voice</option>
      </select>
      <span className="validationError">
        {errors.notifyType && errors.notifyType.message}
      </span>

      <input
        type="number"
        placeholder="Max Notification"
        name="maxNotification"
        ref={register({
          required: "max notification is required",
          min: { value: 0, message: "max notification must be >= 0" },
        })}
      />
      <span className="validationError">
        {errors.maxNotification && errors.maxNotification.message}
      </span>

      <select
        name="userName"
        ref={register({ required: "user name is required" })}
      >
        {usersOptionsElements}
      </select>
      <span className="validationError">
        {errors.userName && errors.userName.message}
      </span>

      <select
        name="stationName"
        ref={register({ required: "station name is required" })}
      >
        {stationsOptionsElements}
      </select>
      <span className="validationError">
        {errors.stationName && errors.stationName.message}
      </span>

      <input type="submit" />
    </form>
  );
}

export default ReactHookFormSample2;
