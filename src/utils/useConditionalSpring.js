import { useTransition, easings } from "@react-spring/web";

const useSectionStyles = (inView) => {
  return {
    width: "100%",
    scale: inView ? 1 : 0.9,
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(40px)",
    transition: "0.8s ease-in-out",
  };
};

const useHeroSectionStyles = {
  from: {
    scale: 0.6,
    opacity: 0,
    transform: "translateY(-80px)",
  },
  to: { scale: 1, opacity: 1, transform: "translateY(0)" },
  config: {
    duration: 1500,
    easing: easings.easeInOutBack,
  },
};

const useHeroImageStyles = {
  reset: true,
  loop: { reverse: true },
  from: { rotateZ: 0, scale: 0.95 },
  to: { rotateZ: -5, scale: 1 },

  config: {
    mass: 9,
    tension: 35,
    friction: 26,
    clamp: true,
    transition: "0.8s ease-in-out",
  },
};

const useTriangleBlueBigStyles = {
  reset: true,
  loop: { reverse: true },
  from: { rotateZ: 0, scale: 0.99, x: -5 },
  to: { rotateZ: 2, scale: 1, x: 0 },

  config: {
    mass: 4,
    tension: 30,
    friction: 14,
    clamp: true,
    transition: "0.8s ease-in-out",
  },
};

const useTriangleBlueStyles = {
  reset: true,
  loop: { reverse: true },
  from: { scale: 0.9, rotateX: 0 },
  to: { scale: 1, rotateX: 10 },
  config: {
    mass: 6,
    tension: 25,
    friction: 12,
    clamp: true,
    transition: "0.8s ease-in-out",
  },
};

const useTriangleGreenSmallStyles = {
  reset: true,
  loop: true,
  from: { rotateZ: 0, scale: 0.9 },
  to: [
    { rotateZ: 20, scale: 1 },
    { rotateZ: 10, scale: 1.1 },
    { rotateZ: 0, scale: 1.2 },
    { rotateZ: 0, scale: 0.9 },
  ],
  config: {
    mass: 7,
    tension: 20,
    friction: 20,
    clamp: true,
    transition: "0.8s ease-in-out",
  },
};

const useTriangleRoseStyles = {
  reset: true,
  loop: { reverse: true },
  from: { rotateZ: 0, scale: 0.9, x: 0 },
  to: { rotateZ: 5, scale: 1, x: 10 },

  config: {
    mass: 10,
    tension: 25,
    friction: 23,
    clamp: true,
    transition: "0.8s ease-in-out",
  },
};

const useTriangleGreenStyles = {
  reset: true,
  loop: { reverse: true },
  from: { rotateZ: 0, scale: 0.9 },
  to: { rotateZ: 10, scale: 1 },
  config: {
    mass: 4,
    tension: 25,
    friction: 20,
    clamp: true,
    transition: "0.8s ease-in-out",
  },
};

const useButtonStyles = {
  reset: true,
  loop: true,
  from: { scale: 0.9, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" },
  to: [
    { scale: 1, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" },
    { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.3)" },
    { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.4)" },
    { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.5)" },
    { scale: 1, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" },
    { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.3)" },
    { scale: 1.1, boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.4)" },
    { scale: 1, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" },
    { scale: 0.9, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" },
  ],
  config: {
    mass: 5,
    tension: 400,
    friction: 45,
    clamp: true,
    transition: "0.8s ease-in-out",
  },
};

const useConditionalBurgerMenuTransition = (condition) => {
  return useTransition(condition, {
    from: {
      opacity: 0.9,
      transform: "translateY(-100%)",
    },
    enter: {
      opacity: 1,
      transform: "translateY(0px)",
    },
    leave: {
      opacity: 0.9,
      transform: "translateY(-70%)",
    },
    config: {
      duration: 500,
      easing: easings.easeInQuart,
    },
  });
};

const useConditionalSingleCourseDetailsTransition = (condition) => {
  return useTransition(condition, {
    from: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    enter: {
      opacity: 1,
      transform: "translateY(0)",
    },
    leave: {
      opacity: 0,
    },
    config: {
      duration: 400,
    },
    exitBeforeEnter: true,
  });
};

const useConditionalListsTransition = (condition) => {
  return useTransition(condition, {
    from: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    enter: {
      opacity: 1,
      transform: "translateY(0px)",
    },
    leave: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    config: {
      duration: 400,
    },
  });
};

const useConditionalSubListsTransition = (condition) => {
  return useTransition(condition, {
    from: {
      opacity: 0,
      transform: "translateY(-20px)",
      height: 0,
    },
    enter: {
      opacity: 1,
      transform: "translateY(0px)",
      height: "auto",
    },
    leave: {
      opacity: 0,
      transform: "translateY(-20px)",
      height: 0,
    },
    config: {
      duration: 50,
    },
  });
};

const useConditionalModalsTransition = (condition) => {
  return useTransition(condition, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 600,
      easing: easings.easeInOutBack,
    },
  });
};

const useConditionalSpring = {
  useSectionStyles,
  useHeroSectionStyles,
  useHeroImageStyles,
  useTriangleBlueBigStyles,
  useTriangleBlueStyles,
  useTriangleGreenSmallStyles,
  useTriangleRoseStyles,
  useTriangleGreenStyles,
  useButtonStyles,
  useConditionalBurgerMenuTransition,
  useConditionalSingleCourseDetailsTransition,
  useConditionalListsTransition,
  useConditionalSubListsTransition,
  useConditionalModalsTransition,
};

export default useConditionalSpring;
