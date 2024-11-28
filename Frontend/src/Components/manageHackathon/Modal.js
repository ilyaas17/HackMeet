import { FaTimes } from "react-icons/fa";
export const Modal = ({ show, hackathon, onClose }) => {
    if (!show) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg w-3/4 md:w-1/2 h-[600px] overflow-auto relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl"
          >
            <FaTimes />
          </button>
          <h2 className="text-3xl font-bold text-purple-600 mb-4">{hackathon.hackathonName}</h2>
          <img 
            src={hackathon.image} 
            alt={hackathon.hackathonName} 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="mb-4"><strong>Organizer:</strong> {hackathon.fullName}</p>
          <p className="mb-4"><strong>City:</strong> {hackathon.city}</p>
          <p className="mb-4"><strong>Date:</strong> {new Date(hackathon.tentativeDate).toLocaleDateString()}</p>
          <p className="mb-4"><strong>Registrations:</strong> {hackathon.expectedRegistrations}</p>
          <p className="mb-4"><strong>Brief:</strong> {hackathon.brief}</p>
          <p className="mb-4"><strong>Previous Hackathon Link:</strong> {hackathon.previousHackathonLink || "N/A"}</p>
          <p className="mb-4"><strong>Team Size Range:</strong> {hackathon.teamSizeRange}</p>
        </div>
      </div>
    );
  };
  