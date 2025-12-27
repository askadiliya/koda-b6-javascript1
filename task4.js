let temp = 13;
let tempSource = "celcius";
let converTo = "fahrenheit";

if (typeof temp !== "number") {
  console.log('temp "harus angka"');
} else {
  // celcius
  if (tempSource === "celcius") {
    if (converTo === "fahrenheit") {
      let fahrenheit = temp * (9 / 5) + 32;
      console.log(fahrenheit);
    } else if (converTo === "kelvin") {
      let kelvin = temp + 273.15;
      console.log(kelvin);
    } else if (converTo === "reamur") {
      let reamur = (4 / 5) * temp;
      console.log(reamur);
    }

  // fahrenheit
  } else if (tempSource === "fahrenheit") {
    if (converTo === "celcius") {
      let celcius = (temp - 32) * (5 / 9);
      console.log(celcius);
    } else if (converTo === "reamur") {
      let reamur = (temp - 32) * (4 / 9);
      console.log(reamur);
    } else if (converTo === "kelvin") {
      let kelvin = (temp - 32) * (5 / 9) + 273.15;
      console.log(kelvin);
    }

  // kelvin
  } else if (tempSource === "kelvin") {
    if (converTo === "celcius") {
      let celcius = temp - 273.15;
      console.log(celcius);
    } else if (converTo === "fahrenheit") {
      let fahrenheit = (temp - 273.15) * (9 / 5) + 32;
      console.log(fahrenheit);
    } else if (converTo === "reamur") {
      let reamur = (temp - 273.15) * (4 / 5);
      console.log(reamur);
    }

  // reamur
  } else if (tempSource === "reamur") {
    if (converTo === "celcius") {
      let celcius = (5 / 4) * temp;
      console.log(celcius);
    } else if (converTo === "fahrenheit") {
      let fahrenheit = (temp * 9) / 4 + 32;
      console.log(fahrenheit);
    } else if (converTo === "kelvin") {
      let kelvin = (temp * 5) / 4 + 273.15;
      console.log(kelvin);
    }
  }
}
