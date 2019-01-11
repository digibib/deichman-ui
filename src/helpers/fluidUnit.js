const unit = str => (isNaN(str) ? str.substr(str.length - 2) : 'px');

export default function fluidUnit({
  key = 'font-size',
  minUnit = '16px',
  maxUnit = '30px',
  minScreenSize = 480,
  maxScreenSize = 1920,
}) {
  const u1 = unit(minUnit);
  const u2 = unit(maxUnit);
  const u3 = unit(minScreenSize);
  const u4 = unit(maxScreenSize);

  if (u1 === u2 && u1 === u3 && u1 === u4) {
    const units = u1;
    const styles = {
      [key]: minUnit,
    };

    if (minScreenSize !== maxScreenSize) {
      styles[`@media only screen and (min-width: ${minScreenSize}${units})`] = {
        [key]: `calc(${parseInt(minUnit, 10)}${units} + ${parseInt(maxUnit, 10) -
          parseInt(minUnit, 10)} * ((100vw - ${minScreenSize}${units}) / ${parseInt(
          maxScreenSize,
          10,
        ) - parseInt(minScreenSize, 10)}))`,
      };
    }

    styles[`@media only screen and (min-width: ${maxScreenSize}${units})`] = {
      [key]: maxUnit,
    };

    return styles;
  }

  throw new Error('Detected mixed units. Please use the same units for all parameters.');
}
