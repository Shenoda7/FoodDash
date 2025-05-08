import { FaCheck, FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Input,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import TableElement from "./TableElement";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const TABLE_HEAD = ["ID", "Img", "Name", "Price", "Tag", "Edit"];
const emptyDish = {
  img: "",
  name: "",
  price: 0,
  tag: "popular",
};
export default function TransactionsTable({ menu, setIsUpdate }) {
  const classes = "p-4 border-b border-grey-dark";
  const [search, setSearch] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [newDish, setNewDish] = useState(emptyDish);
  const handleSaveAdd = () => {
    const URL = import.meta.env.VITE_API_URL;
    Swal.fire({
      title: "Do you want to Add the Dish?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Add",
      denyButtonText: `Don't Add`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          const res = await axios({
            method: "POST",
            url: `${URL}/products/`,
            data: newDish,
          });
          console.log(res.data);
          setIsAdding(false);
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Added!", "", "success");
        setIsUpdate(Date.now());
      } else if (result.isDenied) {
        Swal.fire("Dish Is Not Added", "", "warning");
        setIsAdding(false);
      }
      setNewDish(emptyDish);
    });
  };
  return (
    <div className="bg-orange-light">
      <Card className="h-full w-full bg-orange-light container py-5">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none bg-orange-light"
        >
          <div className="flex justify-between pt-3 md:px-32 w-full shrink-0">
            <div className="w-72">
              <Input
                label="Search"
                icon={<FaMagnifyingGlass className="h-5 w-5" />}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button
              className="flex items-center gap-3"
              size="sm"
              color="green"
              onClick={() => setIsAdding(true)}
            >
              <FaPlus className="h-4 w-4" /> Add
            </Button>
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
              {isAdding ? (
                <tr>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-body-md"
                    >
                      id
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        value={newDish.img}
                        onChange={(e) => {
                          setNewDish({
                            ...newDish,
                            img: e.target.value,
                          });
                        }}
                        className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-dark focus:border-transparent"
                        placeholder="Enter image URL"
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <input
                      type="text"
                      value={newDish.name}
                      onChange={(e) => {
                        setNewDish({
                          ...newDish,
                          name: e.target.value,
                        });
                      }}
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-dark focus:border-transparent"
                      placeholder="Enter Dish Name"
                    />
                  </td>
                  <td className={classes}>
                    <input
                      type="text"
                      value={newDish.price}
                      onChange={(e) => {
                        setNewDish({
                          ...newDish,
                          price: e.target.value,
                        });
                      }}
                      className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-dark focus:border-transparent"
                      placeholder="Enter Dish Price"
                    />
                  </td>
                  <td className={classes}>
                    <select
                      className=" px-3 py-2 border font-semibold text-body-sm border-orange-light rounded-md focus:outline-none focus:ring-2 focus:ring-orange-mid bg-white"
                      value={newDish.tag}
                      onChange={(e) =>
                        setNewDish({
                          ...newDish,
                          tag: e.target.value,
                        })
                      }
                    >
                      <option value="popular">Popular</option>
                      <option value="snacks">Snacks</option>
                      <option value="menu">Menu</option>
                    </select>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Tooltip content="Save Edits">
                        <IconButton variant="text" onClick={handleSaveAdd}>
                          <FaCheck className="h-5 w-5" />
                        </IconButton>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              ) : (
                ""
              )}
              {menu
                .filter(
                  (dish) =>
                    dish.name.toLowerCase().includes(search.toLowerCase()) ||
                    dish.tag.toLowerCase().includes(search.toLowerCase()),
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
