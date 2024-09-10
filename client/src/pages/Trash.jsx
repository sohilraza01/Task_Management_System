import clsx from "clsx";
import React, { useState } from "react";
import {
  MdDelete,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
  MdOutlineRestore,
} from "react-icons/md";
import Title from "../components/Title";
import Button from "../components/Button";
import { PRIOTITYSTYELS, TASK_TYPE } from "../utils";
import ConfirmatioDialog from "../components/Dialogs";
import { useDeleteRestoreTastMutation, useGetAllTaskQuery } from "../redux/slices/Api/taskApiSlice";
import Loading from "../components/Loader";
import { toast } from "sonner";

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const Trash = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [msg, setMsg] = useState(null);
  const [type, setType] = useState("delete");
  const [selected, setSelected] = useState("");

  const { data, isLoading, refetch } = useGetAllTaskQuery({
    strQuery: "",
    isTrashed: "true",
    search: "",
  });

  const [deleteRestoreTask] = useDeleteRestoreTastMutation();

  const deleteRestoreHandler = async () => {
    try {
      let result;
      switch (type) {
        case "delete":
          result = await deleteRestoreTask({
            id: selected,
            actionType: "delete",
          }).unwrap();
          break;
        case "deleteAll":
          result = await deleteRestoreTask({
            id: selected,
            actionType: "deleteAll",
          }).unwrap();
          break;
        case "restore":
          result = await deleteRestoreTask({
            id: selected,
            actionType: "restore",
          }).unwrap();
          break;
        case "restoreAll":
          result = await deleteRestoreTask({
            id: selected,
            actionType: "restoreAll",
          }).unwrap();
          break;
      }

      toast.success(result?.message);
      setTimeout(() => {
        setOpenDialog(false);
        refetch();
      }, 500);
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || error);
    }
  };

  const deleteClick = (id) => {
    setSelected(id);
    setType("delete");
    setMsg("Are you sure you want to delete this task?");
    setOpenDialog(true);
  };

  const restoreClick = (id) => {
    setSelected(id);
    setType("restore");
    setMsg("Are you sure you want to restore this task?");
    setOpenDialog(true);
  };

  const restoreAllClick = () => {
    setSelected("all");
    setType("restoreAll");
    setMsg("Are you sure you want to restore all tasks?");
    setOpenDialog(true);
  };

  const deleteAllClick = () => {
    setSelected("all");
    setType("deleteAll");
    setMsg("Are you sure you want to delete all tasks?");
    setOpenDialog(true);
  };

  if (isLoading)
    return (
      <div className="py-10">
        <Loading />
      </div>
    );

  const TableHeader = () => (
    <thead className="border-b border-gray-300">
      <tr className="text-black text-left">
        <th className="py-2">Task Title</th>
        <th className="py-2">Priority</th>
        <th className="py-2">Stage</th>
        <th className="py-2 line-clamp-1">Modified On</th>
      </tr>
    </thead>
  );

  const TableRow = ({ item }) => (
    <tr className="border-b border-gray-200 text-gray-600 hover:bg-gray-400/10">
      <td className="py-2">
        <div className="flex items-center gap-2">
          <div
            className={clsx("w-4 h-4 rounded-full", TASK_TYPE[item.stage])}
          />
          <p className="w-full line-clamp-2 text-base text-black">
            {item?.title}
          </p>
        </div>
      </td>

      <td className="py-2 capitalize">
        <div className="flex gap-1 items-center">
          <span className={clsx("text-lg", PRIOTITYSTYELS[item?.priority])}>
            {ICONS[item?.priority]}
          </span>
          <span>{item?.priority}</span>
        </div>
      </td>

      <td className="py-2 capitalize text-center md:text-start">
        {item?.stage}
      </td>
      <td className="py-2 text-sm">
        {new Date(item?.date).toDateString()}
      </td>

      <td className="py-2 flex gap-1 justify-end">
        <Button
          icon={<MdOutlineRestore className="text-xl text-gray-500" />}
          onClick={() => restoreClick(item._id)}
        />
        <Button
          icon={<MdDelete className="text-xl text-red-600" />}
          onClick={() => deleteClick(item._id)}
        />
      </td>
    </tr>
  );

  return (
    <>
      <div className="w-full md:px-1 px-0 mb-6">
        <div className="flex items-center justify-between mb-8">
          <Title title="Trashed Tasks" />

          <div className="flex gap-2 md:gap-4 items-center">
            <Button
              label="Restore All"
              icon={<MdOutlineRestore className="text-lg hidden md:flex" />}
              className="flex flex-row-reverse gap-1 items-center text-black text-sm md:text-base rounded-md 2xl:py-2.5"
              onClick={() => restoreAllClick()}
            />
            <Button
              label="Delete All"
              icon={<MdDelete className="text-lg hidden md:flex" />}
              className="flex flex-row-reverse gap-1 items-center text-red-600 text-sm md:text-base rounded-md 2xl:py-2.5"
              onClick={() => deleteAllClick()}
            />
          </div>
        </div>
        <div className="bg-white px-2 md:px-6 py-4 shadow-md rounded">
          <div className="overflow-x-auto">
            <table className="w-full mb-5">
              <TableHeader />
              <tbody>
                {data?.tasks?.map((tk, id) => (
                  <TableRow key={id} item={tk} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ConfirmatioDialog
        open={openDialog}
        setOpen={setOpenDialog}
        msg={msg}
        setMsg={setMsg}
        type={type}
        setType={setType}
        onClick={() => deleteRestoreHandler()}
        confirmLabel={type === "restoreAll" ? "Restore" : "Delete"} // Adjust the label based on action
      />
    </>
  );
};

export default Trash;
