import * as React from "react"
const PlaceSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={512}
    height={512}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      d="M237.5 47.5c70.027-4.24 123.527 23.093 160.5 82 21.558 38.902 28.225 80.235 20 124-7.651 37.627-22.651 71.96-45 103-31.04 42.043-68.207 77.543-111.5 106.5-4 .667-8 .667-12 0-43.32-28.985-80.486-64.485-111.5-106.5-22.349-31.04-37.349-65.373-45-103-11.514-67.465 7.986-123.965 58.5-169.5 25.289-20.145 53.956-32.312 86-36.5Zm17 32c59.5 3.481 101 32.481 124.5 87 11.911 33.08 12.578 66.413 2 100-12.94 38.888-33.273 73.221-61 103-19.759 21.244-41.259 40.244-64.5 57-38.409-27.576-70.909-60.909-97.5-100-21.839-32.852-33.673-69.019-35.5-108.5 1.033-46.063 19.366-83.396 55-112 23.03-16.732 48.697-25.565 77-26.5Z"
      clipRule="evenodd"
      opacity={0.964}
    />
    <path
      stroke="currentColor"
      d="M243.5 143.5c39.684-3.088 67.184 13.579 82.5 50 9.675 36.991-1.158 66.158-32.5 87.5-35.873 17.539-67.707 12.039-95.5-16.5-17.324-23.285-20.991-48.618-11-76 11.343-24.52 30.176-39.52 56.5-45Zm3 33a130.32 130.32 0 0 0-14 6.5c-18.96 15.683-22.793 34.516-11.5 56.5 14.647 18.537 32.813 23.037 54.5 13.5 15.534-9.902 22.367-24.069 20.5-42.5-6.759-25.228-23.259-36.562-49.5-34Z"
      clipRule="evenodd"
      opacity={0.965}
    />
  </svg>
)
export default PlaceSVG
