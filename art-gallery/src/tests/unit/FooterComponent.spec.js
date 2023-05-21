import { mount } from "@vue/test-utils";
import FooterComponent from "@/components/FooterComponent.vue";
import SocialsComponent from "@/components/SocialsComponent.vue";

describe("FooterComponent", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FooterComponent);
  });

  it("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders SocialsComponent", () => {
    const socialsComponent = wrapper.findComponent(SocialsComponent);
    expect(socialsComponent.exists()).toBe(true);
  });

  it("renders footer navigation links", () => {
    const aboutLink = wrapper.get("ul.footer-nav li:first-child");
    const contactLink = wrapper.find("ul.footer-nav li:last-child ");

    expect(aboutLink.text()).toBe("About Us");
    expect(contactLink.text()).toBe("Contact Us");
  });
});
