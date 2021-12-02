// Get HTML tag by custom test atrribute
export const findByTestAtrr = (component, atrr) => {
  const wrapper = component.find(`[data-test='${atrr}']`);
  return wrapper;
};
