import React from "react";
import { shallow } from "enzyme";

import DisplayCooperResault from "../components/DisplayCooperResault";

describe("<DisplayCooperResult />", () => {
  let describedComponent;
  describe("evaluates the correct result for femail/poor", () => {
    beforeAll(() => {
      describedComponent = shallow(   
        <DisplayCooperResault distance="1000" gender="female" ange="23" />
      );
    });

    it("and returns the assessment", () => {
      expect(describedComponent.find("p#cooper-result").text()).toEqual("Result: Poor");
    });

    it("and returns the data user put in", () => {
      expect(describedComponent.find("p#cooper-message").text()).toEqual(
        "23 y/o female running 1000 meters."
      );
    });
  })

  describe("evaluates the correct result for female/average", () => {
    beforeAll(() => {
      describedComponent = shallow(
        <DisplayCooperResault distance="2000" gender="female" age="23" />
      );
    });

    it("and returns the assessment", () => {
      expect(describedComponent.find("p#cooper-result").text()).toEqual("Result: Avergae");
    });

    it("and returns the data user put in", () => {
      expect(describedComponent.find("p#cooper-message").text()).toEqual(
        "23 y/o female running 2000 meters."
      );
    });
  })
});