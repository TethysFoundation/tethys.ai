export default (category, action, label, value) => {
  if (typeof window.ga === 'function') {
    window.ga('send', 'event', category, action, label, value);
  }
};
