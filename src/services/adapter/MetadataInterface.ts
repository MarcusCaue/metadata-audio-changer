import { type AudioMetadata } from "../../entities/AudioMetadata.ts"

export interface MetadataInterface {
  showAllTags(fileName: string): void;
  writeTags(fileName: string, newTags: AudioMetadata): boolean | Error;
  extractImage(fileName: string): boolean | Error;
}