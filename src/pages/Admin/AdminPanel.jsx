import { FaMagnifyingGlass } from "react-icons/fa6";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Input,
} from "@material-tailwind/react";
import TableElement from "./TableElement";
import { useState } from "react";

const TABLE_HEAD = ["ID", "Img", "Name", "Price", "Tag", "Edit"];

export default function TransactionsTable({ menu, setIsUpdate }) {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-orange-light">
      <Card className="h-full w-full bg-orange-light container">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none bg-orange-light"
        >
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center ">
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<FaMagnifyingGlass className="h-5 w-5" />}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100  bg-orange-light p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {menu
                .filter(
                  (dish) =>
                    dish.name.toLowerCase().includes(search.toLowerCase()) ||
                    dish.tag.toLowerCase().includes(search.toLowerCase())
                )
                .map((dish) => {
                  return <TableElement dish={dish} setIsUpdate={setIsUpdate} />;
                })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
