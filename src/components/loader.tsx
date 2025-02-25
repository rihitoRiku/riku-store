"use client"
import React from "react";
import loaderStyle from "@/styles/loader.module.css";

const Loader = () => {
  return (
    <>
      <div className="fixed left-0 top-0 z-[50] flex h-screen w-screen items-center justify-center">
        <div className={`${loaderStyle.loaderStyle}`}></div>
      </div>
    </>
  );
};

export default Loader;
