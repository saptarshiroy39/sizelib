import type { MetadataRoute } from "next";

const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sizelib.hirishi.in",
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://sizelib.hirishi.in/introduction",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sizelib.hirishi.in/installation",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sizelib.hirishi.in/size",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sizelib.hirishi.in/human_size",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sizelib.hirishi.in/time",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sizelib.hirishi.in/human_time",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sizelib.hirishi.in/freq",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sizelib.hirishi.in/human_freq",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sizelib.hirishi.in/rate",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sizelib.hirishi.in/human_rate",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    {
      url: "https://sizelib.hirishi.in/author",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://sizelib.hirishi.in/resources",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
