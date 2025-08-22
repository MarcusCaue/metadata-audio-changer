import NodeID3 from "node-id3";
import { writeFileSync, readFileSync } from "fs";

const showAllMetadata = (fileName: string) => {
  const filePath = `./files/${fileName}.mp3`;
  const metadata = NodeID3.read(filePath);
  console.log(metadata);
}

function escrita(fileName: string, newMetada: object) : boolean | Error {
  const filePath = `./files/${fileName}.mp3`;
  const result = NodeID3.update(newMetadata, filePath);
  return result;
}

function extractImage(fileName: string) : boolean | Error {
  const filePath = `./files/${fileName}.mp3`;
  const { image } = NodeID3.read(filePath);

  if (typeof image == "object") {
    const imageFileName = `${fileName}.${ (image.mime == "image/jpeg") ? "jpg" : "undefined" }`
    writeFileSync("./files/images/" + imageFileName, image.imageBuffer);
    return true;
  }

  return false;
}

const imageBuffer = readFileSync("./files/images/01-elementos-basicos-da-moral-catolica-os-dez-mandamentos-escritos-no-coracao-humano.jpg")

const newMetadata = {
  title: "1º Mandamento Superstição, Adivinhação e Idolatria",
  artist: "Padre Paulo Ricardo",
  album: "Curso dos Dez Mandamentos",
  image: {
    mime: "image/jpeg",
    type: {
      id: 1,
      name: "front cover"
    },
    description: "Moisés segurando as duas Tábuas da Lei",
    imageBuffer: imageBuffer
  }
}

showAllMetadata("07-1-mandamento-supersticao-adivinhacao-e-idolatria")
const result = escrita("07-1-mandamento-supersticao-adivinhacao-e-idolatria", newMetadata)
console.log(result);
