import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { useEffect, useState } from "react";

import { Button } from "../components/ui/button"; // Importing Button component
import { Input } from "../components/ui/input"; // Importing Input component
import Modal from "../components/ui/Modal"; // Assuming you have a Modal component
import axiosInstance from "@/axiosInstance";
import toast from "react-hot-toast";

const Lists = () => {
  const [lists, setLists] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentList, setCurrentList] = useState(null);
  const [newName, setNewName] = useState("");

  const fetchData = async () => {
    const rawData = JSON.parse(localStorage.getItem("user"));
    const response = await axiosInstance.post(`/list/fetch`, {
      id: rawData.data.user._id,
    });
    try {
      if (response.data) {
        setLists(response.data.list);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (listId) => {
    try {
      const res = await axiosInstance.post(`/list/delete`, {
        id: listId,
      });

      if (res.data) {
        toast.success("List deleted successfully");
      }

      // remove list from array
      const updatedLists = lists.filter((list) => list._id !== listId);
      setLists(updatedLists);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditClick = (list) => {
    setCurrentList(list);
    setNewName(list.name);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      const res = await axiosInstance.post(`/list/update`, {
        id: currentList._id,
        name: newName,
      });

      if (res.data) {
        toast.success("List name updated successfully");
        // Update the list locally
        const updatedLists = lists.map((list) =>
          list._id === currentList._id ? { ...list, name: newName } : list,
        );
        setLists(updatedLists);
        setIsModalOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      {lists.length > 0 ? (
        <Accordion type="single" collapsible>
          {lists.map((list) => (
            <AccordionItem key={list._id} value={list._id} className="mb-4">
              <div className="flex justify-between items-center px-4 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600 transition-colors">
                <AccordionTrigger className="text-lg font-semibold text-white">
                  {list.name} ({list.items.length})
                </AccordionTrigger>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleEditClick(list)}
                    className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(list._id)}
                    className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <AccordionContent className="p-4 bg-white border rounded-md shadow-inner">
                <div className="space-y-4">
                  {list.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex w-2/5 mx-auto items-center gap-4 p-4 border border-gray-300 rounded-md bg-gray-50 shadow-md"
                    >
                      <h3 className="text-md font-bold text-gray-700">
                        {item.id}
                      </h3>
                      <h3 className="text-md font-bold text-gray-700">
                        {item.name}
                      </h3>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-md border"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <p className="text-center text-gray-600">No lists available</p>
      )}

      {/* Modal Component */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">Edit List Name</h2>
          <Input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter a new name for the list"
            className="border p-2 rounded w-full mb-4"
          />
          <div className="flex justify-end space-x-2">
            <Button
              onClick={() => setIsModalOpen(false)}
              className="bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
              Save
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Lists;
