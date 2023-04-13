import { mount } from "@vue/test-utils";
import FeaturedArtist from "@/components/FeaturedArtist.vue";
import CardComponent from "@/components/CardComponent.vue";
import { getArtistOfTheDay } from "@/services/ArtistService";
import { vi } from "vitest";

vi.mock("@/services/ArtistService", () => ({
  getArtistOfTheDay: vi.fn(),
}));

describe("FeaturedArtist", () => {
  let wrapper;

  const mockArtist = {
    displayName: "Artist Name",
    profileImageUrl: "https://example.com/image.jpg",
    yearOfBirth: 1980,
    placeOfBirth: "New York",
  };

  beforeEach(async () => {
    getArtistOfTheDay.mockResolvedValue(mockArtist);

    wrapper = mount(FeaturedArtist);

    // Wait for fetchArtistOfTheDay() to complete.
    await wrapper.vm.$nextTick();
  });

  it("renders correctly", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders the CardComponent", () => {
    const cardComponent = wrapper.findComponent(CardComponent);
    expect(cardComponent.exists()).toBe(true);
  });

  it("passes the correct props to CardComponent", () => {
    const cardComponent = wrapper.findComponent(CardComponent);

    expect(cardComponent.props().subheading).toBe(mockArtist.displayName);
    expect(cardComponent.props().imageURL).toBe(mockArtist.profileImageUrl);
    expect(cardComponent.props().detail1).toBe(
      `Born: ${mockArtist.yearOfBirth}, ${mockArtist.placeOfBirth}`
    );
  });
});
