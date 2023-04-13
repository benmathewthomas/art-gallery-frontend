import { shallowMount } from "@vue/test-utils";
import SignUpView from "@/views/SignUpView.vue";

describe("SignUpView.vue", () => {
  let wrapper;
  let mockStore;

  beforeEach(() => {
    mockStore = {
      state: {
        account: {
          status: {},
        },
      },
      actions: {
        account: {
          register: vi.fn(),
        },
      },
      dispatch: vi.fn(),
    };

    wrapper = shallowMount(SignUpView, {
      global: {
        provide: {
          store: mockStore,
        },
      },
    });
  });

  it("renders the component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("calls handleSubmit() method when form is submitted", async () => {
    const handleSubmit = vi.spyOn(wrapper.vm, "handleSubmit");
    await wrapper.find("form").trigger("submit");
    expect(handleSubmit).toHaveBeenCalled();
  });

  it("calls register action when handleSubmit() method is called", async () => {
    await wrapper.vm.handleSubmit();
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      "account/register",
      wrapper.vm.user
    );
  });

  it("navigates back to the home page when cancel button is clicked", async () => {
    const back = vi.spyOn(wrapper.vm, "back");
    await wrapper.find(".cancel-button").trigger("click");
    expect(back).toHaveBeenCalled();
    expect(wrapper.vm.$route.path).toBe("/");
  });
});
