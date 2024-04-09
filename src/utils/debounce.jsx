const debounceRaf = (callback) => {
  let raf = 0;
  return (...args) => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      callback(...args);
      raf = 0;
    });
  };
};

export default debounceRaf;
