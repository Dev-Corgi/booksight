export default async function reverseGeoCodeHandler({latitude,longitude}) {


    async function fetchReverseGeoCode(latitude, longitude) {

      const coords = `${longitude},${latitude}`;

      console.log(coords)

        const response = await fetch(`/api/reverseGeoCode?coords=${coords}`);
        const data = await response.json();
        return data;
      };

  const reverseGeoCodeResult = await fetchReverseGeoCode(latitude,longitude);
  const region = reverseGeoCodeResult.results[0].region;
  const area1 = region.area1.name + " ";
  const area2 = region.area2.name + " ";
  const area3 = region.area3.name + " ";
  const area4 = region.area4.name + " ";
  const resultData = `${area1}${area2}${area3}${area4 != " " ? area4: "" }`
  return resultData;




}
