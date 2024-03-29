import React, { useEffect, useState } from "react";
import "./style.css";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import { useFormik } from "formik";
import * as yup from "yup";

const TodoList = () => {
  const [itemsArr, setItemArr] = useState([]);
  const [editIdex, setEditIndex] = useState("");
  const formik = useFormik({
    initialValues: { text: "" },
    validationSchema: yup.object().shape({
      text: yup.string().required("Text is required"),
    }),
    onSubmit: (value) => {
      if (!editIdex) {
        setItemArr((prevItems) => [...prevItems, value.text]);
        handleClear();
      } else {
        console.log(formik.values.text);
        console.log(itemsArr.splice(editIdex, 1, formik.values.text));
        setItemArr([
          ...itemsArr.slice(0, editIdex),
          ...itemsArr.splice(editIdex, 1, formik.values.text),
          ...itemsArr.slice(editIdex + 1),
        ]);
        handleClear();
      }
    },
  });

  const handleClear = () => {
    formik.resetForm();
  };

  const handleClickDelete = (index) => {
    const slicedArray = [
      ...itemsArr.slice(0, index),
      ...itemsArr.slice(index + 1),
    ];
    setItemArr(slicedArray);
    handleClear();
  };
  const handleClickEdit = (index) => {
    setEditIndex(index);
    formik.setFieldValue("text", itemsArr[index]);
    console.log(itemsArr[index]);
  };

  useEffect(() => {
    console.log({ editIdex });
  }, [editIdex]);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="tw-h-auto tw-flex tw-justify-center tw-items-center tw-flex-col md:tw-w-[40vw]">
          <div className="tw-bg-slate-600 tw-w-[100%] tw-h-[50px] tw-rounded-3xl tw-text-center tw-flex tw-justify-around tw-items-center tw-border-[2px] tw-border-white">
            <input
              type="text"
              placeholder="Enter the task"
              className="tw-p-2 tw-rounded-3xl tw-bg-slate-400 tw-w-[70%]"
              id="text"
              name="text"
              onChange={formik.handleChange}
              value={formik.values.text}
            />
            <button
              type="submit"
              className="tw-bg-slate-400 tw-p-2 tw-rounded-full hover:tw-bg-slate-800 hover:tw-text-white tw-font-bold"
            >
              Add
            </button>
          </div>
          <div className="tw-bg-slate-600 tw-w-[100%] tw-h-[70vh] tw-rounded-3xl tw-text-center tw-mt-2 tw-flex tw-justify-center tw-items-center tw-border-[2px] tw-border-white">
            <div className="tw-bg-slate-400 tw-w-[95%] tw-h-[95%] tw-rounded-3xl tw-text-center tw-border-[2px] tw-border-white tw-flex tw-items-center tw-flex-col">
              {itemsArr.length > 0 ? (
                itemsArr?.map((item, index) => (
                  <div
                    key={index}
                    className="tw-bg-slate-600 tw-m-3 tw-p-3 tw-rounded-3xl tw-border-[2px] tw-border-white tw-w-full tw-flex tw-justify-around"
                  >
                    {item}
                    <div className="tw-cursor-pointer">
                      <DriveFileRenameOutlineRoundedIcon
                        onClick={() => handleClickEdit(index)}
                        color="primary"
                      />
                      <DeleteSweepRoundedIcon
                        onClick={() => handleClickDelete(index)}
                        color="error"
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="tw-text-2xl tw-font-bold tw-uppercase tw-h-[95%] tw-flex tw-justify-center tw-items-center tw-text-slate-700">
                  No task added yet !
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default TodoList;
