function outlineWatcher() {
  try {
    const domEvents = 'addEventListener' in document;
    let previousAction = null;

    const addListener = (type, callback) => {
      if (domEvents) {
        document.addEventListener(type, callback);
      } else {
        document.attachEvent(`on${type}`, callback);
      }
    };

    addListener('mousedown', () => {
      if (previousAction === 'mousedown') {
        return;
      }
      document.body.classList.remove('body--a11y');
      previousAction = 'mousedown';
    });

    addListener('keydown', () => {
      if (previousAction === 'keydown') {
        return;
      }
      document.body.classList.add('body--a11y');
      previousAction = 'keydown';
    });
  } catch (error) {
    // Oh well
  }
}
export default outlineWatcher;
