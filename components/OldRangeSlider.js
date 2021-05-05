import React, { useRef, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Range, getTrackBackground } from "react-range";
import { useSearch } from "../utils/search";

const STEP = 1;
const MIN = 0;
const MAX = 80;

const RangeSlider = ({ initMinTuition, initMaxTuition }) => {
  const router = useRouter();

  // const {
  //   minT,
  //   maxT,
  //   onChangeOfMinTuition,
  //   onChangeOfMaxTuition,
  // } = useSearch();

  const [min, setMin] = React.useState(initMinTuition);
  const [max, setMax] = React.useState(initMaxTuition);

  // var initValues = [initMinTuition, initMaxTuition]
  // if ([minTuition, maxTuition] != [min, max]) {
  //     var values = [minTuition, maxTuition]
  // } else {
  //     var values = [min, max]
  // }

  // setMin(initMinTuition);
  // setMax(initMaxTuition);
  // onChangeOfMinTuition(initMinTuition);
  // onChangeOfMaxTuition(initMaxTuition);



  // useEffect(() => {
  //     setMin(initMinTuition);
  //     setMax(initMaxTuition);
  //     onChangeOfMinTuition(initMinTuition);
  //     onChangeOfMaxTuition(initMaxTuition);
  //   })
  // }, [initMinTuition, initMaxTuition]);

  var values = [min, max];

  // function setValues(values) {
  //     onChangeOfMinTuition(values[0])
  //     onChangeOfMaxTuition(values[1])
  // }
  // var values = [min, max]

  function setValues(values) {
    setMin(values[0]);
    setMax(values[1]);
    onChangeOfMinTuition(values[0]);
    onChangeOfMaxTuition(values[1]);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "10%",
        marginBottom: "10%",
        marginRight: "5%",
        marginLeft: "5%",
        fontFamily: "Inter",
        outline: "none !important",
      }}
    >
      <Range
        values={[min, max]}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        // onFinalChange={values => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "4px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: values,
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
        renderThumb={({ index, props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "30px",
              width: "30px",
              borderRadius: "8px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
              outline: "none !important",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-28px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, Inter, sans-serif",
                fontWeight: "400",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#53AFFF",
                outline: "none !important",
              }}
            >
              {"$" + values[index].toFixed(1) + "K"}
            </div>
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#53AFFF" : "#CCC",
                outline: "none !important",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default RangeSlider;


/*
let trackRef = React.useRef(null);

  let numberFormatter = useNumberFormatter(props.formatOptions);
  let state = useSliderState({ ...props, numberFormatter });
  let { groupProps, trackProps, labelProps, outputProps } = useSlider(
    props,
    state,
    trackRef
  );

  return (
    <div
      {...groupProps}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 300,
        touchAction: "none",
      }}
    >
      <div style={{ display: "flex", alignSelf: "stretch" }}>
        {props.label && <label {...labelProps}>{props.label}</label>}
        <output {...outputProps} style={{ flex: "1 0 auto", textAlign: "end" }}>
          {`${state.getThumbValueLabel(0)} - ${state.getThumbValueLabel(1)}`}
        </output>
      </div>
      <div
        {...trackProps}
        ref={trackRef}
        style={{
          position: "relative",
          height: 30,
          width: " 100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "grey",
            height: 3,
            top: 13,
            width: "100%",
          }}
        />
        <Thumb index={0} state={state} trackRef={trackRef} />
        <Thumb index={1} state={state} trackRef={trackRef} />
      </div>
    </div>
  );
}

<RangeSlider
  label="Price Range"
  formatOptions={{ style: "currency", currency: "USD" }}
  maxValue={500}
  defaultValue={[100, 350]}
  step={10}
/>;
*/