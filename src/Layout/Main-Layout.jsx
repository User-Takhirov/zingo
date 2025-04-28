// import { Outlet } from "react-router-dom";
// import { Header } from "./Header";
// import { Footer } from "./Footer";

// export const MainLayout = () => {
//   return (
//     <>
//       <header>
//         <Header />
//       </header>
//       <main>
//         <Outlet />
//       </main>
//       <footer>
//         <Footer />
//       </footer>
//     </>
//   );
// };

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      <header>
        <Header active={active} setActive={setActive} />
      </header>
      <main>
        <Outlet context={{ active, setActive }} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
