import { Component } from "solid-js";
import CatComponent from "./CatComponent";
import Footer from "./Footer";

const App: Component = () => {
  return (
    <>
      <main class="flex h-full justify-center items-center mx-2 md:mx-5">
        <CatComponent />
      </main>
      <Footer />
    </>
  );
};

export default App;
