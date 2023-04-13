import { mount } from "@vue/test-utils";
import DropdownMenuAntD from "@/components/DropdownMenuAntD.vue";

describe("DropdownMenuAntD", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(DropdownMenuAntD, {
      global: {
        mocks: {
          $store: {
            state: {
              account: {
                user: {
                  role: "Admin",
                },
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

  it("renders the Artworks sub-menu", () => {
    const artworksSubMenu = wrapper.find("a-sub-menu");
    expect(artworksSubMenu.exists()).toBe(true);
  });

  it("renders the Art & Culture sub-menu", () => {
    const artCultureSubMenu = wrapper.findAll("a-sub-menu")[1];
    expect(artCultureSubMenu.exists()).toBe(true);
  });

  it("renders the Exhibitions sub-menu", () => {
    const exhibitionsSubMenu = wrapper.findAll("a-sub-menu")[2];
    expect(exhibitionsSubMenu.exists()).toBe(true);
  });

  it("renders the Swagger sub-menu if user role is Admin", async () => {
    const swaggerSubMenu = wrapper.findAll("a-sub-menu")[3];
    expect(swaggerSubMenu.exists()).toBe(true);
  });

  it("does not render the Swagger sub-menu if user role is not Admin", async () => {
    wrapper = mount(DropdownMenuAntD, {
      global: {
        mocks: {
          $store: {
            state: {
              account: {
                user: {
                  role: "User",
                },
              },
            },
          },
        },
      },
    });

    const swaggerSubMenu = wrapper.find('a-sub-menu[title="Swagger"]');
    expect(swaggerSubMenu.exists()).toBe(false);
  });
});
