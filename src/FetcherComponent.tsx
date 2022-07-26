import { Component, createResource, createSignal, Suspense } from "solid-js";
import ImageLoader from "./ImageLoader";

type fetchAPIResp = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const fetchRandom = async () => {
  const API_INDEXES = ["thedogapi", "thecatapi"];
  const apiResp: Array<fetchAPIResp> = await (
    await fetch(
      `https://api.${
        API_INDEXES[~~(Math.random() * API_INDEXES.length)]
      }.com/v1/images/search`
    )
  ).json();
  const cleanedResp = (({ id, url, width, height }) => ({
    id,
    url,
    width,
    height,
  }))(apiResp[0]);
  return cleanedResp;
};

const Spinner: Component = () => {
  return (
    <div role="status">
      <svg
        class="inline mr-2 w-8 h-8 text-grey-200 animate-spin dark:text-grey-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  );
};
const FetcherComponent: Component = () => {
  const [fetched, { refetch }] = createResource(fetchRandom);
  return (
    <div class="card w-11/12 md:w-auto md:min-w-fit md:max-w-3/4">
      <div class="card-header mx-4 my-4">
        <a blur-shadow-image="true">
          {fetched.loading ? (
            <div class="mx-auto max-w-full rounded-lg w-96 h-96 animate-pulse bg-grey-200 shadow-sm" />
          ) : (
            <ImageLoader {...fetched()} />
          )}
        </a>
      </div>
      <div class="card-body ">
        <span class="text-sm font-bold uppercase text-orange-500">
          API Response
        </span>
        <a href="#">
          <h5 class="mt-2 font-medium">JSON:</h5>
        </a>

        <div
          class={`rounded-lg max-w-full text-sm whitespace-pre overflow-x-scroll overflow-y-hidden ${
            fetched.loading && "animate-pulse text-transparent bg-grey-200"
          }`}
        >
          <pre>{JSON.stringify(fetched(), null, 2)}</pre>
        </div>
      </div>
      <div class="card-footer">
        <button
          class="button button-blue button-gradient"
          data-ripple-dark="true"
          onClick={refetch}
        >
          Gimme more
          {fetched.loading && (
            <svg
              class="inline mx-2 w-4 h-4 text-grey-200 align-text-bottom animate-spin dark:text-grey-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#1C64F2"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default FetcherComponent;
