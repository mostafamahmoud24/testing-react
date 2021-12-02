import react from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestAtrr } from "../../../Utils";

// Shallow render the Header component
const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe("Header Component", () => {
  // Shallow render the Header component before each test
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should rendera logo", () => {
    const wrapper = findByTestAtrr(component, "logoIMG");
    expect(wrapper.length).toBe(1);
  });
});
