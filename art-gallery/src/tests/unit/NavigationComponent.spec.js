import { mount } from "@vue/test-utils";
import { expect, it, describe, beforeEach } from "vitest";
import CardComponent from "@/components/CardComponent.vue";

describe("CardComponent", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CardComponent, {
      propsData: {
        heading: "Card Heading",
        imageURL: "https://example.com/image.jpg",
        subheading: "Card Subheading",
        detail1: "Detail 1",
        detail2: "Detail 2",
        detail3: "Detail 3",
        detail4: "Detail 4",
      },
    });
  });

  it("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("displays the correct heading", () => {
    const heading = wrapper.find(".card-heading");
    expect(heading.text()).toBe("Card Heading");
  });

  it("displays the correct image URL", () => {
    const image = wrapper.find(".card-img");
    expect(image.attributes("src")).toBe("https://example.com/image.jpg");
  });

  it("displays the correct subheading", () => {
    const subheading = wrapper.find(".card-subheading");
    expect(subheading.text()).toBe("Card Subheading");
  });

  it("displays the correct details", () => {
    const details = wrapper.findAll(".detail");
    expect(details.length).toBe(3);
    expect(details[0].text()).toBe("Detail 1");
    expect(details[1].text()).toBe("Detail 2");
    expect(details[2].text()).toBe("Detail 3");
  });

  it("displays the correct detail description", () => {
    const detailDescription = wrapper.find(".detail-description");
    expect(detailDescription.text()).toBe("Detail 4");
  });
});
