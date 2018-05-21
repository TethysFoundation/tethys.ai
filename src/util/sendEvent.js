export default (category, action, label, value) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, { event_category: category, event_label: label, value });
  }
};
