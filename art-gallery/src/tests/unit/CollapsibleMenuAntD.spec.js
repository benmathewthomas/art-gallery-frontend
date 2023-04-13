import { mount } from "@vue/test-utils";
import { expect, it, describe, beforeEach } from "vitest";
import CollapsibleMenuAntD from "@/components/CollapsibleMenuAntD.vue";

describe("CollapsibleMenuAntD", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CollapsibleMenuAntD, {
      global: {
        mocks: {
          $store: {
            state: {
              account: {
                user: null,
              },
            },
          },
        },
      },
    });
  });

  it("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders the menu with sub-menus", () => {
    const subMenus = wrapper.findAll("a-sub-menu");
    expect(subMenus.length).toBe(3);
  });

  it("renders the login and signup menu items", () => {
    const loginMenuItem = wrapper.find('a-menu-item[key="login"]');
    expect(loginMenuItem.exists()).toBe(true);

    const signupMenuItem = wrapper.find('a-menu-item[key="signup"]');
    expect(signupMenuItem.exists()).toBe(true);
  });

  it("renders the correct sub-menu titles", () => {
    const subMenuTitles = wrapper.findAll("template");
    expect(subMenuTitles[0].text()).toBe("artworks");
    expect(subMenuTitles[1].text()).toBe("art & culture");
    expect(subMenuTitles[2].text()).toBe("exhibitions");
  });

  it("renders the correct number of menu items in each sub-menu", () => {
    const subMenuItems = wrapper.findAll("a-menu-item");
    expect(subMenuItems.length).toBe(9);
  });
});
