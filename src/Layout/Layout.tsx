import React from "react";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import CursorManager from "../components/CursorManager/CursorManager";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <CursorManager>
        <>
          <CustomCursor speed={0.1} />
          {children}
        </>
      </CursorManager>
    </div>
  );
};

export default Layout;
