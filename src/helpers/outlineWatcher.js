function outlineWatcher() {
  const styleEl = document.createElement('STYLE');
  const domEvents = 'addEventListener' in document;
  let previousAction = null;

  const addListener = (type, callback) => {
    if (domEvents) {
      document.addEventListener(type, callback);
    } else {
      document.attachEvent(`on${type}`, callback);
    }
  };
  const setCss = css => {
    if (styleEl.styleSheet) {
      styleEl.styleSheet.cssText = css;
    } else {
      styleEl.innerHTML = css;
    }
  };

  document.getElementsByTagName('HEAD')[0].appendChild(styleEl);
  addListener('mousedown', () => {
    if (previousAction === 'mousedown') {
      return;
    }
    setCss(':focus{outline:0; box-shadow: none;}::-moz-focus-inner{border:0;}');
    previousAction = 'mousedown';
  });

  addListener('keydown', () => {
    if (previousAction === 'keydown') {
      return;
    }
    setCss('');
    previousAction = 'keydown';
  });
}

export default outlineWatcher;
