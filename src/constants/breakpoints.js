// All sizes min-width
const breakpoints = {
  infant: 20,
  baby: 30,
  child: 37.5,
  teen: 48,
  adult: 67.5,
  elder: 83,
};

const customBreakpoints = {
  onlyBase: '(min-width: 0em) and (max-width: 20em)',
  onlyInfant: '(min-width: 20em) and (max-width: 30em)',
  onlyBaby: '(min-width: 30em) and (max-width: 37.5em)',
  onlyChild: '(min-width: 37.5em) and (max-width: 48em)',
  onlyTeen: '(min-width: 48em) and (max-width: 67.5em)',
  onlyAdult: '(min-width: 67.5em) and (max-width: 83em) )',
  onlyElder: '(min-width: 83em)',
};

export { breakpoints, customBreakpoints };
