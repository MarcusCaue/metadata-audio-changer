import { readFileSync } from "fs";
import NodeID3Adapter from "./services/adapter/NodeID3Adapter.ts";
import type { AudioMetadata } from "./entities/AudioMetadata.ts";

function toTitle(str: string) {
  let peaces = str.split("-")
  let newPeaces = peaces.map((peace) => {
    let firstLetter = peace[0]
    let rest = peace.substring(1)
    return firstLetter?.toUpperCase() + rest
  })
  return newPeaces.join(" ")
}

const nodeId3Adapter = new NodeID3Adapter("./files");

const imageAlbum = readFileSync("./files/images/dez-mandamentos-pe-paulo.jpg");

const files = [
  "01-elementos-basicos-da-moral-catolica-os-dez-mandamentos-escritos-no-coracao-humano",
  "02-elementos-basicos-da-moral-catolica-o-ser-humano-elevado-a-vida-sobrenatural",
  "03-o-ser-humano-desordenado-apos-o-pecado"
]

for (let i = 0; i < files.length; i++) {
  const file = files[i]

  if (file != undefined) {
    const newTags: AudioMetadata = {
      title: toTitle(file),
      artist: "Pe. Paulo Ricardo",
      album: "Curso dos Dez Mandamentos",
      genre: "Moral",
      date: "2024", year: "2024",
      language: "Português",
      trackNumber: `${i+1}`,
      image: {
        mime: "image/jpeg",
        type: {
          id: i+1,
          name: "front cover"
        },
        description: "Patriarca Moisés segurando as duas tábuas da Lei",
        imageBuffer: imageAlbum
      },
    }
    const result = nodeId3Adapter.writeTags(file, newTags)
    console.log(`Resultado do arquivo ${i}: ${result}`);
  }

}
