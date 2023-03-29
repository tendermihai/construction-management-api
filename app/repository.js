import fs from "fs";
import path from "path";

export function getConstruction() {
  return new Promise((resolve, reject) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const constructions = JSON.parse(data);
        resolve(constructions);
      }
    });
  });
}
