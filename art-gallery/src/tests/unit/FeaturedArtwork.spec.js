import { mount } from "@vue/test-utils";
import FeaturedArtwork from "@/components/FeaturedArtwork.vue";
import CardComponent from "@/components/CardComponent.vue";
import { getArtworkOfTheDay } from "@/services/ArtworkService";
import { vi } from "vitest";

vi.mock("@/services/ArtworkService", () => ({
  getArtworkOfTheDay: vi.fn(),
}));

describe("FeaturedArtwork", () => {
  let wrapper;

  const mockArtwork = {
    title: "Artwork Title",
    primaryImageUrl: "https://example.com/image.jpg",
    mediaType: "Oil on canvas",
    yearCreated: 2020,
    contributingArtists: ["Artist 1", "Artist 2"],
    description: "An amazing artwork",
  };

  beforeEach(async () => {
    getArtworkOfTheDay.mockResolvedValue(mockArtwork);

    wrapper = mount(FeaturedArtwork);

    // Wait for fetchArtworkOfTheDay() to complete.
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

    expect(cardComponent.props().subheading).toBe(mockArtwork.title);
    expect(cardComponent.props().imageURL).toBe(mockArtwork.primaryImageUrl);
    expect(cardComponent.props().detail1).toBe(mockArtwork.mediaType);
    expect(cardComponent.props().detail2).toBe(String(mockArtwork.yearCreated));
    expect(cardComponent.props().detail3).toBe(
      mockArtwork.contributingArtists.join(", ")
    );
    expect(cardComponent.props().detail4).toBe(mockArtwork.description);
  });
});
