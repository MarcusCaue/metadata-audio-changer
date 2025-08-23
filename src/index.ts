import NodeID3 from "node-id3";
import { writeFileSync, readFileSync } from "fs";
import NodeID3Adapter from "./services/adapter/NodeID3Adapter.ts";
import type { AudioMetadata } from "./entities/AudioMetadata.ts";

const nodeId3Adapter = new NodeID3Adapter("./files");

// nodeId3Adapter.extractImage("07-1-mandamento-supersticao-adivinhacao-e-idolatria");

// console.log("Antes...");
// nodeId3Adapter.showAllTags("07-1-mandamento-supersticao-adivinhacao-e-idolatria");

// console.log("\n\n\nDepois...");
// nodeId3Adapter.writeTags("07-1-mandamento-supersticao-adivinhacao-e-idolatria", newMetadata);

