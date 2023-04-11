import { mount } from "@vue/test-utils";
import HeaderComponent from "@/components/HeaderComponent.vue";
import SocialsComponent from "@/components/SocialsComponent.vue";

describe("HeaderComponent", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(HeaderComponent);
  });

  it("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders the logo", () => {
    const logo = wrapper.find(".header-logo");
    expect(logo.exists()).toBe(true);
  });

  it("renders the SocialsComponent", () => {
    const socialsComponent = wrapper.findComponent(SocialsComponent);
    expect(socialsComponent.exists()).toBe(true);
  });

  it("renders the router link with correct to attribute", () => {
    const routerLink = wrapper.find("router-link");
    expect(routerLink.props("to")).toBe("/");
  });

  it("renders the logo with correct aria-label", () => {
    const routerLink = wrapper.find("router-link");
    expect(routerLink.attributes("aria-label")).toBe("Gallery Home Page");
  });
});
