import { Component } from "solid-js";
import CatComponent from "./CatComponent";
import Footer from "./Footer";

const App: Component = () => {
  return (
    <>
      <main class="min-h-[inherit] py-9 my-auto flex justify-center items-start md:items-center mx-2 md:mx-5">
        <CatComponent />
      </main>
      <Footer />
    </>
  );
};

export default App;
