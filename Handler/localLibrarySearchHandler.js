import libraryList from "@data/libraryList.json"

export default async function localLibrarySearchHandler(libCode) {
  return libraryList[libCode];
}
