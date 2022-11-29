const slider_options = {
  direction: "rtl",
  type: "loop",
  perPage: 4,
  perMove: 1,
  autoScroll: {
    pauseOnHover: false,
    speed: 0.5,
  },
  arrows: null,
  rewind: true,
  rewindSpeed: 500,
  pagination: undefined,
  breakpoints: {
    600: {
      perPage: 3,
      autoScroll: {
        pauseOnHover: false,
        speed: 0.5,
      },
    },
  },
};
export default slider_options;
