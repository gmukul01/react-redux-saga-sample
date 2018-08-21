import React from "react";
import sinon from "sinon";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";

import history from "util/history";
import NavigationBar from "components/NavigationBar";

describe("Teams page", () => {
  let stub = sinon.stub(history.location, "pathname");

  afterEach(() => {
    stub.restore();
  });

  it("should render correctly", () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<NavigationBar />);
    expect(result).toMatchSnapshot();
  });

  it("should show home link as active when pathname is '/'", () => {
    stub.value("/");
    const wrapper = shallow(<NavigationBar />);
    expect(wrapper.find({ to: "/" }).prop("className")).toEqual("link--active");
  });

  it("should show home link as active when pathname is '/catalogues'", () => {
    stub.value("/catalogues");
    const wrapper = shallow(<NavigationBar />);
    expect(wrapper.find({ to: "/catalogues" }).prop("className")).toEqual("link--active");
  });
});
