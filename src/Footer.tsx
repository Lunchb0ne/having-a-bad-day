import { Component } from "solid-js";
import Logo from "../assets/logo.svg";

const Footer: Component = () => (
  <footer class="flex place-content-around dark:bg-grey-800">
    <a target="_blank" rel="noreferrer">
      <img
        src={Logo}
        class="inline-block h-5 mr-2 w-5 align-text-bottom"
        alt="logo"
      />
      I'm Having a Really Really Bad Day
    </a>
    <a
      class="text-blue-500"
      href="https://thecatapi.com/"
      target="_blank"
      rel="noreferrer"
    >
      <code>CatAPI</code>
    </a>
  </footer>
);

export default Footer;
