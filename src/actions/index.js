export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const multiply = (nr) => {
  return {
    type: "MULTIPLY",
    payload: nr,
  };
};
