import { shallowMount, createLocalVue } from "@vue/test-utils";
import TableAntDesign from "@/components/TableAntDesign.vue";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("TableAntDesign.vue", () => {
  let store;
  let state;
  let wrapper;

  beforeEach(() => {
    state = {
      account: {
        user: {
          role: "Admin",
        },
      },
    };

    store = new Vuex.Store({
      state,
    });

    wrapper = shallowMount(TableAntDesign, {
      store,
      localVue,
      propsData: {
        exhibitions: [],
        fields: [],
      },
    });
  });

  it("renders the add exhibition button when isAdmin returns true", () => {
    const addButton = wrapper.find(".plus-button");
    expect(addButton.exists()).toBe(true);
  });

  it("emits updateData event after adding an exhibition", async () => {
    // Mock the postExhibition function to simulate a successful post request
    const postExhibition = jest.fn().mockResolvedValue({
      name: "Test Exhibition",
    });
    wrapper.vm.postExhibition = postExhibition;

    // Populate input fields
    wrapper.setData({
      name: "Test Exhibition",
      description: "Test Description",
      backgroundImageUrl: "test.jpg",
      startDate: "10/04/2023",
      endDate: "15/04/2023",
    });

    // Trigger the addExhibition method
    await wrapper.vm.addExhibition();

    // Check if the updateData event was emitted
    expect(wrapper.emitted().updateData).toBeTruthy();
  });
});
