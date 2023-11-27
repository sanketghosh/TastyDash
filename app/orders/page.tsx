import PageWrapper from "@/components/PageWrapper";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const orders = [
  {
    orderId: "AF516GEDAG273",
    date: "24-08-2023",
    price: "$23.99",
    product:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur praesentium impedit ipsa odio eos!",
    status: "Delivered",
  },
  {
    orderId: "AF516GEDAu273",
    date: "24-08-2023",
    price: "$23.99",
    product:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur praesentium impedit ipsa odio eos!",
    status: "On The way",
  },
  {
    orderId: "1F516GEDAu273",
    date: "24-08-2023",
    price: "$23.99",
    product:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur praesentium impedit ipsa odio eos!",
    status: "delivered",
  },
  {
    orderId: "AJ516GEDAu273",
    date: "24-08-2023",
    price: "$23.99",
    product:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, consectetur praesentium impedit ipsa odio eos!",
    status: "On The way",
  },
];

const tableHeaders = ["OrderID", "Date", "Price", "Product", "Status"];

export default function Orders() {
  return (
    <Table>
      <TableCaption>Your Orders</TableCaption>
      <TableHeader>
        <TableRow>
          {tableHeaders.map((item, idx) => {
            return <TableHead key={idx}>{item}</TableHead>;
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell>{item.orderId}</TableCell>
            <TableCell>{item.date}</TableCell>
            <TableCell>{item.product}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>
              <Badge
                className={`${
                  // let the status be in upper or lower case
                  item.status.toLocaleLowerCase() === "delivered"
                    ? "bg-green-600"
                    : "bg-red-600"
                } capitalize`}
              >
                {item.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

/* 

 <>
      <PageWrapper className="pt-4 md:pt-10">
        <div className="flex flex-col shadow-md overflow-hidden">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-primary text-zinc-100">
                    <tr>
                      {tableHeaders.map((item) => (
                        <th
                          key={item}
                          scope="col"
                          className="px-6 py-3.5 text-left text-[15px] font-semibold"
                        >
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {orders.length === 0 ? (
                      <h1 className="text-center py-5 font-semibold">
                        Order something, Nothing to show
                      </h1>
                    ) : (
                      <>
                        {orders.map((item) => (
                          <tr key={item.orderId} className="font-medium">
                            <td className="max-w-xs mx-auto px-4 py-4 text-[13px]">
                              <span className="bg-indigo-600 text-zinc-100 px-2 py-1 rounded-2xl font-medium">
                                {item.orderId}
                              </span>
                            </td>
                            <td className="max-w-xs mx-auto px-4 py-4 text-[13px]">
                              {item.date}
                            </td>
                            <td className="max-w-xs mx-auto px-4 py-4 text-[13px] font-semibold">
                              {item.price}
                            </td>
                            <td className="max-w-xs mx-auto px-4 py-4 text-[13px]">
                              {item.product}
                            </td>

                            <td className="whitespace-nowrap px-4 py-4 text-[13px]">
                              <span
                                className={`px-2 text-zinc-100 py-1 rounded-2xl
                          ${
                            item.status.toLocaleLowerCase() === "delivered"
                              ? "bg-emerald-600"
                              : "bg-red-600"
                          }
                          `}
                              >
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>

*/
