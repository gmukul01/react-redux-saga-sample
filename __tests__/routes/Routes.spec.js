import React from "react";
import { shallow } from "enzyme";

import Home from "components/Home";
import Catalogues from "containers/Catalogues";
import { Routes } from "routes/Routes";

describe("Routes", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });
  it("should render Home component if path is '/'", () => {
    expect(wrapper.find({ path: "/" }).prop("component")).toEqual(Home);
  });

  it("should render Catalogues component if path is '/catalogues'", () => {
    expect(wrapper.find({ path: "/catalogues" }).prop("component")).toEqual(Catalogues);
  });
});
