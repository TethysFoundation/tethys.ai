export default (action, category, label, value) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, { event_category: category, event_label: label, value });
  }
};
