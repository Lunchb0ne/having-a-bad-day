import { Component } from "solid-js";
import FetcherComponent from "./FetcherComponent";
import Footer from "./Footer";

const App: Component = () => {
  return (
    <>
      <main class="overscroll-none min-h-[inherit] py-9 my-auto flex justify-center items-start md:items-center mx-2 md:mx-5">
        <FetcherComponent />
      </main>
      <Footer />
    </>
  );
};

export default App;
