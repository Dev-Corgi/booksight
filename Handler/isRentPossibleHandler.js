export default async function isRentPossibleHandler(libCode,isbn13) {
  async function fetchIsRentPossible(libCode,isbn13) {
    try {
      const response = await fetch(`${process.env.DOMAIN}/api/isRentPossible?libCode=${libCode}&isbn13=${isbn13}`);

      if (!response.ok) {
        throw new Error("Failed to fetch isRentPossible");
      }

      const result = await response.json();

      return result;
    } catch (error) {
      console.log(error);
    }
  }

  const isRentPossibleResult = await fetchIsRentPossible(libCode,isbn13);
  return isRentPossibleResult;

}



