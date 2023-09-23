import { AtSymbolIcon } from "@heroicons/react/solid";
import React from "react";

export default function Connect() {
  return (
    <section id="connect">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <AtSymbolIcon className="w-10 inline-block mb-4" />
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-green-400">
            <a
              href="https://twitter.com/jschmidt424"
              target="__blank"
              className="px-8"
            >
              Twitter
            </a>
            <a
              href="https://github.com/jschmidt424"
              target="__blank"
              className="px-8"
            >
              Github
            </a>
            <a
              href="https://twitch.tv/spazdrum"
              target="__blank"
              className="px-8"
            >
              Twitch
            </a>
            <a
              href="https://www.linkedin.com/in/jschmidt21/"
              target="__blank"
              className="px-8"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
