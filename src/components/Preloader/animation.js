export const opacity = {
  initial: { opacity: 0 },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: { top: 0 },
  exit: {
    top: "-100vh",
    transition: { duration: 1, ease: [0.42, 0, 0.58, 1], delay: 0 },
  },
};

// export const background = {
//   initial: {
//     height: 0,
//   },
//   open: {
//     height: "100vh",
//     transition: {
//       duration: 1.2, // Duración sincronizada con el slideUp
//       ease: [0.42, 0, 0.58, 1],
//     },
//   },
//   closed: {
//     height: 0,
//     transition: {
//       duration: 1.2,
//       ease: [0.42, 0, 0.58, 1],
//     },
//   },
// };

export const background = {
  initial: {
    height: "100vh",
    backgroundColor: "#f0ebe3", // Color sólido inicial
  },
  // open: {
  //   height: "100vh",
  //   backgroundColor: "red", // Color sólido durante la apertura
  //   transition: {
  //     duration: 1.2, // Duración sincronizada con el slideUp
  //     ease: [0.42, 0, 0.58, 1],
  //   },
  // },
  closed: {
    height: 0,
    backgroundColor: "#f0ebe3", // Asegura que no se haga transparente
    transition: {
      duration: 5,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};
