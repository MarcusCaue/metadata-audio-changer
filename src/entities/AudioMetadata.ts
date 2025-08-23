interface ImageTags {
  mime: string, // image's extension
  type: {
    id: number,
    name: string,
  },
  description: string
  imageBuffer: Buffer
}

export interface AudioMetadata {
  title: string,
  artist: string,
  album: string,
  genre: string,
  date: string,
  year: string,
  language: string,
  trackNumber: string,
  image: ImageTags
}