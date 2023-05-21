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
    const loginMenuItem = wrapper.find("div[class='nav-tools-login'] span");
    expect(loginMenuItem.text()).toBe("Log In");

    const signupMenuItem = wrapper.find("div[class='nav-tools-login'] span");
    expect(signupMenuItem.exists()).toBe(true);
  });

  it("renders the correct sub-menu titles", () => {
    const subMenuTitles = wrapper.findAll("a-sub-menu span");
    expect(subMenuTitles[0].text()).toBe("Artwork of the Day");
    expect(subMenuTitles[1].text()).toBe("List of Artworks");
  });

  it("renders the correct number of menu items in each sub-menu", () => {
    const subMenuItems = wrapper.findAll("a-menu-item");
    expect(subMenuItems.length).toBe(9);
  });
});
