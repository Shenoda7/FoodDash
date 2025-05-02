import React, { useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import {
  Typography,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import axios from "axios";
import Swal from "sweetalert2";
const TableElement = ({ dish, setIsUpdate }) => {
  const classes = "p-4 border-b border-grey-dark";
  const [updatedDish, setUpdatedDish] = useState(dish);
  const [isEdit, setIsEdit] = useState(false);

  const handleSave = () => {
    const URL = import.meta.env.VITE_API_URL;
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          await axios({
            method: "put",
            url: `${URL}/products/${dish.id}`,
            data: updatedDish,
          });
          setIsEdit(false);
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Saved!", "", "success");
        setIsUpdate(Date.now());
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
        setUpdatedDish(dish);
        setIsEdit(false);
      }
    });
  };
  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    const URL = import.meta.env.VITE_API_URL;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios({
            method: "delete",
            url: `${URL}/products/${dish.id}`,
          });

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });

          setIsUpdate(Date.now());
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to delete the product.",
            icon: "error",
          });
          console.error(error);
        }
      }
    });
  };

  return (
    <tr key={dish.name}>
      <td className={classes}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal text-body-md"
        >
          {dish.id}
        </Typography>
      </td>
      <td className={classes}>
        <div className="flex items-center gap-3">
          {isEdit ? (
            <input
              type="text"
              value={updatedDish.img}
              onChange={(e) => {
                setUpdatedDish({ ...updatedDish, img: e.target.value });
              }}
              className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-dark focus:border-transparent"
              placeholder="Enter image URL"
            />
          ) : (
            <Avatar
              src={dish.img}
              alt={dish.name}
              size="lg"
              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
            />
          )}
        </div>
      </td>
      <td className={classes}>
        {isEdit ? (
          <input
            type="text"
            value={updatedDish.name}
            onChange={(e) => {
              setUpdatedDish({ ...updatedDish, name: e.target.value });
            }}
            className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-dark focus:border-transparent"
            placeholder="Enter Dish Name"
          />
        ) : (
          <Typography
            variant="small"
            color="blue-gray"
            className="font-bold text-body-sm"
          >
            {dish.name}
          </Typography>
        )}
      </td>
      <td className={classes}>
        {isEdit ? (
          <input
            type="text"
            value={updatedDish.price}
            onChange={(e) => {
              setUpdatedDish({ ...updatedDish, price: e.target.value });
            }}
            className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-dark focus:border-transparent"
            placeholder="Enter Dish Price"
          />
        ) : (
          <Typography
            variant="small"
            color="blue-gray"
            className="font-semibold text-body-md"
          >
            {dish.price}$
          </Typography>
        )}
      </td>
      <td className={classes}>
        {isEdit ? (
          <select
            className=" px-3 py-2 border font-semibold text-body-sm border-orange-light rounded-md focus:outline-none focus:ring-2 focus:ring-orange-mid bg-white"
            value={updatedDish.tag}
            onChange={(e) =>
              setUpdatedDish({ ...updatedDish, tag: e.target.value })
            }
          >
            <option value="popular">Popular</option>
            <option value="snacks">Snacks</option>
            <option value="menu">Menu</option>
          </select>
        ) : (
          <div className="w-max">
            <Chip
              size="sm"
              variant="ghost"
              value={dish.tag}
              color={
                dish.tag === "popular"
                  ? "green"
                  : dish.tag === "snacks"
                    ? "amber"
                    : "blue"
              }
            />
          </div>
        )}
      </td>
      <td className={classes}>
        <div className="flex items-center gap-3">
          {isEdit ? (
            <Tooltip content="Save Edits">
              <IconButton variant="text" onClick={handleSave}>
                <FaCheck className="h-5 w-5" />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip content="Edit Product">
              <IconButton variant="text" onClick={handleEdit}>
                <FaPencil className="h-5 w-5" />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip content="Delete Product">
            <IconButton variant="text" onClick={handleDelete}>
              <FaRegTrashAlt className="h-5 w-5" />
            </IconButton>
          </Tooltip>
        </div>
      </td>
    </tr>
  );
};

export default TableElement;
