import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaInfoCircle } from "react-icons/fa";
import { getUserHackathons, updateUserHackathon, deleteHackathon } from "../Services/Api";
import { Modal } from "./Modal";
import EditModal from "./EditModal";
import { useNavigate } from "react-router-dom";

const ManageHackathon = () => {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const email = localStorage.getItem("userEmail");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHackathons = async () => {
      try {
        const data = await getUserHackathons(email);
        setHackathons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHackathons();
  }, [email]);

  const handleShowModal = (hackathon) => {
    setSelectedHackathon(hackathon);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedHackathon(null);
  };

  const handleShowEditModal = (hackathon) => {
    setSelectedHackathon(hackathon);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedHackathon(null);
  };

  const handleSaveChanges = async (updatedHackathon) => {
    try {
      await updateUserHackathon(updatedHackathon, selectedHackathon._id);
      const data = await getUserHackathons(email);
      setHackathons(data);
      setShowEditModal(false);
      alert("Hackathon Updated Successfully ");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (hackathonId) => {
    try {
      await deleteHackathon(hackathonId); // Pass the hackathon ID for deletion
      const data = await getUserHackathons(email);
      setHackathons(data);
      setShowEditModal(false);
      alert("Hackathon Deleted Successfully ");
    } catch (err) {
      setError(err.message);
    }
  };

  const moveToOrganizehackathon = () => {
    navigate("/organizehack");
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 mt-20 mb-[300px]">
      <h1 className="text-3xl font-bold text-purple-600 mb-6 text-center">
        {hackathons.length !== 0 ? <> Your Hackathons</> : <></>}
      </h1>

      {hackathons.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-purple-500 text-[50px]">
            You have not organised any Hackathons Yet.
          </p>
          <button
            className="p-2 border-2 border-purple-400 rounded-md text-purple-500 hover:bg-purple-600 hover:text-white transition-all duration-200 mt-4"
            onClick={moveToOrganizehackathon}
          >
            Organise a hackathon
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Hackathon Name</th>
                <th className="px-4 py-3 text-left">Organizer</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Registrations</th>
                <th className="px-4 py-3 text-left">City</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {hackathons.map((hackathon, index) => (
                <tr key={hackathon._id} className="hover:bg-gray-100 border-b">
                  <td className="px-4 py-3">{index + 1}</td>
                  <td className="px-4 py-3 font-medium text-purple-700">
                    {hackathon.hackathonName}
                  </td>
                  <td className="px-4 py-3">{hackathon.fullName}</td>
                  <td className="px-4 py-3">
                    {new Date(hackathon.tentativeDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    {hackathon.expectedRegistrations}
                  </td>
                  <td className="px-4 py-3">{hackathon.city}</td>
                  <td className="px-4 py-3 flex gap-3">
                    <button
                      className="text-purple-600 hover:text-purple-800 flex items-center gap-1"
                      title="View Details"
                      onClick={() => handleShowModal(hackathon)}
                    >
                      <FaInfoCircle />
                    </button>
                    <button
                      className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                      onClick={() => handleShowEditModal(hackathon)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 flex items-center gap-1"
                      onClick={() => handleDelete(hackathon._id)} // Pass the hackathon ID
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Info Modal */}
      <Modal show={showModal} hackathon={selectedHackathon} onClose={handleCloseModal} />

      {/* Edit Modal */}
      <EditModal
        show={showEditModal}
        hackathon={selectedHackathon}
        onClose={handleCloseEditModal}
        onSave={handleSaveChanges}
      />
    </div>
  );
};

export default ManageHackathon;
