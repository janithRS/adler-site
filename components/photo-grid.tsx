"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function PhotoGrid() {
  return (
    <div className="h-screen py-5 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">TKIC 2016</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        An evening of christmas music. A celebration of the season with songs
        that bring joy and warmth to the heart.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">TKIC 2016</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        An evening of christmas music. A celebration of the season with songs
        that bring joy and warmth to the heart.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Adler Weddings</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Make your special day even more memorable with the beautiful sounds of
        Adler. Our talented singers will help create the perfect atmosphere for
        your wedding.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">TKIC 2017</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        An evening of christmas music. A celebration of the season with songs
        that bring joy and warmth to the heart.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://scontent-prg1-1.xx.fbcdn.net/v/t31.18172-8/15776658_975277209273002_8977608987804586253_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4LjmAwxws9kQ7kNvgEbSlgR&_nc_ht=scontent-prg1-1.xx&oh=00_AfDPS-S2FKaz4ArGj4R4zqXWjKyWhO75HETF6kmO1MdMQA&oe=665B203E",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://scontent-prg1-1.xx.fbcdn.net/v/t31.18172-8/15777023_975276399273083_5454733797353835379_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=p6E4VVSGkwMQ7kNvgElpTsC&_nc_ht=scontent-prg1-1.xx&oh=00_AfBxEFOVOvHXLr1LQPyVm_vkrGpIEPzZM9ck7Qibcu-a3g&oe=665B1B83",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/341898318_245053137880863_3089074234246764673_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=L5Ox9S5fdG8Q7kNvgEc0dmO&_nc_oc=AdhtUNJpNMGwgocWxV90kZFKeHdJN6FH-VOfBeflrdyc8HSx9v4tiwOEElUqszbEmNE&_nc_ht=scontent-prg1-1.xx&oh=00_AfD5t_xrDQfQ-NykBSVcQgVJibiKgLCWORbcfqJEgyKEdQ&oe=6639962E",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://scontent-prg1-1.xx.fbcdn.net/v/t31.18172-8/15676468_975277462606310_1640764389763448106_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QK93taqMOpIQ7kNvgHFEAR0&_nc_ht=scontent-prg1-1.xx&oh=00_AfDMK16QBUH-erSxuZJhSiwAwBeDFn9zP75GmaYZ1h1MRQ&oe=665B2D39",
  },
];
