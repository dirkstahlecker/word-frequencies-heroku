// import * as Jasmine from "jasmine";
import {Markup} from "../src/stats/Markup";
let jasmineTs = require("jasmine-ts");

describe("Markup", () => {
  let markup: Markup;

  it("should parse markup where first name isn't display name", () => {
    markup = Markup.create("[!!Hammer|Arthur_Hammer!!]");
    expect(markup.displayName).toEqual("Hammer");
    expect(markup.firstName).toEqual("Arthur");
    expect(markup.lastName).toEqual("Hammer");
  });

  it("should handle dashes in markup properly", () => {
    markup = Markup.create("[!!Adri|Adri_Abou-Bakr!!]");
    expect(markup.displayName).toEqual("Adri");
    expect(markup.firstName).toEqual("Adri");
    expect(markup.lastName).toEqual("Abou-Bakr");
  });

  it("should trim spaces at beginning and end", () => {
    markup = Markup.create("[!!Colin|Colin_ Poler!!]");
    expect(markup.displayName).toEqual("Colin");
    expect(markup.firstName).toEqual("Colin");
    expect(markup.lastName).toEqual("Poler");

    markup = Markup.create("[!!Colin|Colin_ Poler !!]");
    expect(markup.lastName).toEqual("Poler");

    markup = Markup.create("[!! Colin|Colin_Poler!!]");
    expect(markup.displayName).toEqual("Colin");

    markup = Markup.create("[!!Colin| Colin_Poler !!]");
    expect(markup.firstName).toEqual("Colin");
    expect(markup.lastName).toEqual("Poler");
  });
});

export {};
