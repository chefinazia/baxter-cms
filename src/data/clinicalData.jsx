import React from "react";
import { render } from "react-dom";
import CameraSvgComp from "../svg/camera.svg?react";
import FilterComp from "../svg/filter.svg?react";
export const columns = [
  {
    title: "Patient Name",
    dataIndex: "name",
    key: "name",
    width: 300,
    align: "center",
  },
  {
    title: "Date of Birth",
    dataIndex: "age",
    key: "age",
    width: 300,
    align: "center",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    width: 300,
    align: "center",
  },
  {
    title: "Baxter Patient ID",
    dataIndex: "pId",
    key: "pId",
    width: 300,
    align: "center",
  },
  {
    title: "Attending Physician",
    dataIndex: "phy",
    key: "phy",
    width: 300,
    align: "center",
  },
  {
    title: "Actions",
    dataIndex: "act",
    key: "",
    width: 100,
    className: "p-2",
    render: () => (
      <>
        <div>
          <CameraSvgComp />
        </div>
        <div>
          <FilterComp />
        </div>
      </>
    ),
  },
];

export const data = [
  {
    name: "001, Patient Name",
    age: "07 December 1897",
    address: "assassoffji af faiojf i",
    pId: "O-BXEUS-1145",
    phy: "Ms Benty Physician 1",
  },
  {
    name: "002, Clipat",
    age: "09 January 1993",
    address: "jfallfaafa afjaa j af",
    pId: "O-BXEUS-1124",
    phy: "Ms Benty Physician 1",
  },
];
