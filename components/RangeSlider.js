import React, { useRef, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Range, getTrackBackground } from "react-range";
import { useField } from "formik";

const STEP = 1;
const MIN = 0;
const MAX = 100;

const RangeSlider = (props) => {
  const { query } = useRouter();

  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;

  // console.log(field);
  // console.log(meta);
  // console.log(helpers);

  const [values, setValues] = React.useState([
    parseInt(query.minTuition / 1000),
    parseInt(query.maxTuition / 1000),
  ]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setValues(values);
          props.handleTuitionChange(values)
          // props.setFieldValue("minTuition", values[0])
          // props.setFieldValue("maxTuition", values[1])
          // field.value.minTuition=values[0]
          // field.value.maxTuition=values[1]
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",

                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#53AFFF", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "30px",
              width: "30px",
              borderRadius: "30%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: "30px" }} id="output">
        {values[0].toFixed(1)} - {values[1].toFixed(1)}
      </output>
    </div>
  );
};

export default RangeSlider;
