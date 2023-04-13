import { shallowMount } from "@vue/test-utils";
import CardComponent from "@/components/CardComponent.vue";

describe("CardComponent.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CardComponent, {
      propsData: {
        heading: "Test Heading",
        imageURL: "https://example.com/image.jpg",
        subheading: "Test Subheading",
        detail1: "Detail 1",
        detail2: "Detail 2",
        detail3: "Detail 3",
        detail4: "Detail 4",
      },
    });
  });

  it("renders the heading prop correctly", () => {
    const heading = wrapper.find(".card-heading");
    expect(heading.text()).toBe("Test Heading");
  });

  it("renders the imageURL prop correctly", () => {
    const img = wrapper.find(".card-img");
    expect(img.attributes("src")).toBe("https://example.com/image.jpg");
  });

  it("renders the subheading prop correctly", () => {
    const subheading = wrapper.find(".card-subheading");
    expect(subheading.text()).toBe("Test Subheading");
  });

  it("renders the detail1 prop correctly", () => {
    const detail1 = wrapper.find(".detail:nth-of-type(1)");
    expect(detail1.text()).toBe("Detail 1");
  });

  it("renders the detail2 prop correctly", () => {
    const detail2 = wrapper.find(".detail:nth-of-type(2)");
    expect(detail2.text()).toBe("Detail 2");
  });

  it("renders the detail3 prop correctly", () => {
    const detail3 = wrapper.find(".detail:nth-of-type(3)");
    expect(detail3.text()).toBe("Detail 3");
  });

  it("renders the detail4 prop correctly", () => {
    const detail4 = wrapper.find(".detail-description");
    expect(detail4.text()).toBe("Detail 4");
  });
});
