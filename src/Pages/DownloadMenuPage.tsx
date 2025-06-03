import React, { useEffect } from "react";
import "./DownloadMenuPage.css";
import DownloadMenu from "../Components/DownloadMenu";

const DownloadMenuPage: React.FC = () => {
  useEffect(() => {
    document.title = "Tongdak | Menu";
  }, []);

  return (
    <div>
      <div>
        <div>
          <DownloadMenu />
        </div>
      </div>
    </div>
  );
};

export default DownloadMenuPage;
