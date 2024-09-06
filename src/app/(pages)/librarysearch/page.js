"use client"

import MapBrowser from "./components/MapBrowser";
import InfoTab from "./components/InfoTab";
import LibList from "./components/LibList";
import { Provider } from "react-redux";
import store from "@redux/store";

export default function LibrarySearchPage(props) {
  return (
    <Provider store={store}>
    <div className="flex flex-row">
      <MapBrowser></MapBrowser>

      <div className="ml-[108.8px] flex-grow h-min flex flex-col">
        <InfoTab></InfoTab>
        <LibList></LibList>
      </div>
    </div>
    </Provider>
  );
}
