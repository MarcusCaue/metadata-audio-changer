import { type AudioMetadata } from "../../entities/AudioMetadata.ts";
import { type MetadataInterface } from "./MetadataInterface.ts";
import { writeFileSync } from "fs";
import NodeID3 from "node-id3";

export default 
class NodeID3Adapter implements MetadataInterface {
  private nodeId3: typeof NodeID3;
  private path: string;

  public constructor(filePath: string) {
    this.nodeId3 = NodeID3;
    this.path = filePath;
  }
  
  public showAllTags(fileName: string): void {
    const fullPath = `${this.path}/${fileName}.mp3`
    const tags = this.nodeId3.read(fullPath)
    console.log(tags);
  }

  writeTags(fileName: string, newTags: AudioMetadata): boolean | Error {
    const fullPath = `${this.path}/${fileName}.mp3`
    const result = this.nodeId3.update(newTags, fullPath);
    return result;
  }

  extractImage(fileName: string): boolean | Error {
    const fullPath = `${this.path}/${fileName}.mp3`
    const { image } = this.nodeId3.read(fullPath);
  
    if (typeof image == "object") {
      const imageFileName = `${fileName}.${ (image.mime == "image/jpeg") ? "jpg" : "undefined" }`
      writeFileSync(`${this.path}/images/` + imageFileName, image.imageBuffer);
      return true;
    }
  
    return false;
  }
  
}