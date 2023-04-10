import { mount } from "@vue/test-utils";
import LoginComponent from "../../components/LoginComponent.vue";
import { expect, it, describe, beforeEach } from "vitest";
import { Form, Field, ErrorMessage } from "vee-validate";

describe("LoginComponent", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(LoginComponent, {
      global: {
        components: {
          Form,
          Field,
          ErrorMessage,
        },
      },
    });
  });

  it("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("shows an error message if email field is empty", async () => {
    const emailField = wrapper.find('input[type="email"]');
    const errorMessage = wrapper.find(".error-message");

    expect(errorMessage.text()).toBe("");
    await emailField.setValue("");
    await emailField.trigger("blur");

    expect(errorMessage.text()).toBe("This field is required");
  });

  it("shows an error message if password field is empty", async () => {
    const passwordField = wrapper.find('input[type="password"]');
    const errorMessage = wrapper.find(".error-message");

    expect(errorMessage.text()).toBe("");
    await passwordField.setValue("");
    await passwordField.trigger("blur");

    expect(errorMessage.text()).toBe("This field is required");
  });
});
