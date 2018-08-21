import React from "react";
import uniqid from "uniqid";
import ShallowRenderer from "react-test-renderer/shallow";

import CollapsiblePanel from "components/CollapsiblePanel";

jest.mock("uniqid");
uniqid.mockImplementation(() => 42);

describe("CollapsiblePanel", () => {
  it("should render correctly", () => {
    const props = {
        title: "Dummy",
        children: <p>Dummy Children</p>
      },
      renderer = new ShallowRenderer(),
      result = renderer.render(<CollapsiblePanel {...props} />);
    expect(result).toMatchSnapshot();
  });
});
