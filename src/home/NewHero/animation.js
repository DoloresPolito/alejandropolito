export const slideUp = {
    initial: {
      y: 100,  // Ajusta la posición inicial para que esté cerca de la vista
      opacity: 0,  // Inicia invisible
    },
    enter: {
      y: 0,  // Se desplaza a la posición final
      opacity: 1,  // Se vuelve visible
      transition: {
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };


export const opacity = {
    initial: {
        opacity: 0,
    },
    enter: {
      opacity:1,
        transition: {duration: 1.5, ease: [0.33, 1, 0.68, 1], delay: 0.5}
    }
}

export const slideUp2 = {
  initial: {
    y: 50,  // Ajusta la posición inicial para que esté cerca de la vista
    opacity: 0,  // Inicia invisible
  },
  enter: {
    y: 0,  // Se desplaza a la posición final
    opacity: 1,  // Se vuelve visible
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1], delay:0.5
    },
  },
}

export const slideUp3 = {
  initial: {
    y: 100,  // Ajusta la posición inicial para que esté cerca de la vista
    opacity: 0,  // Inicia invisible
  },
  enter: {
    y: 0,  // Se desplaza a la posición final
    opacity: 1,  // Se vuelve visible
    transition: {
      duration: 1.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
}