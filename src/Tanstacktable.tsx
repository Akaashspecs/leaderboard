import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { TiEyeOutline } from "react-icons/ti";
import { AiOutlineStock } from "react-icons/ai";

import { TbArrowsSort } from "react-icons/tb";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { mockData } from "./helper";

const TaskTable = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "rank",
        header: "rank",
        cell: (props: any) => (
          <p className="font-semibold">{props.getValue()}</p>
        ),
      },
      {
        accessorKey: "name",
        header: "name",
        cell: (props: any) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: "calmmer_ratio",
        header: "calmmer ratio",
        cell: (props: any) => (
          <div className="flex items-center">
            <AiOutlineStock className="text-green-700" />
            <p className="ml-1">{props.getValue()}</p>
          </div>
        ),
      },
      {
        accessorKey: "overall_profit",
        header: "overall profit",
        cell: (props: any) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: "daily_porfit",
        header: "daily porfit",
        cell: (props: any) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: "win_percent",
        header: "win percent",
        cell: (props: any) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: "price",
        header: "price",
        cell: (props: any) => <p>{props.getValue()}</p>,
      },
      {
        accessorKey: "action",
        header: "Action",
        cell: (props: any) => (
          <div
            className={`flex  items-center  underline-offset-2  ${
              props.getValue() === "View"
                ? "text-blue-700 hover:text-blue-800 hover:underline cursor-pointer"
                : "text-green-700  hover:text-green-800 hover:underline cursor-pointer"
            } `}
          >
            {props.getValue() === "View" ? <TiEyeOutline /> : <IoCartOutline />}{" "}
            <div className="ml-1">{props.getValue()}</div>
          </div>
        ),
      },
    ],
    [] // Empty dependency array ensures columns are stable
  );

  const table = useReactTable({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),

    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="no-scroll bg-gray-200  w-auto h-min overflow-hidden   rounded-b-2xl ">
      <table className=" w-full text-left">
        <thead className="bg-indigo-600">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="capitalize px-3.5 py-2 text-white"
                >
                  <div className="flex">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="h-96 overflow-hidden ">
          {mockData.length > 0 ? (
            table.getRowModel().rows.map((row, i) => (
              <tr
                key={row.id}
                className={`
                ${i % 2 === 0 ? "" : "bg-neutral-100"}
                `}
              >
                {row.getVisibleCells().map((cell, index) => {
                  return (
                    <td key={cell.id} className="px-3.5 py-2  ">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr className="text-center h-32">
              <td colSpan={12}>No Recoard Found!</td>
            </tr>
          )}
          {/* {isLoading && (
            <tr>
              <td colSpan={2}>Loading...</td>
            </tr>
          )} */}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
