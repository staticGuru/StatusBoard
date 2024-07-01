import { useState } from "react";
import "./App.css";
import { Button, Modal } from "./components/intex";

function App() {
  const [showAddContainerModal, setShowAddContainerModal] = useState(false);

  return (
    <div className="mx-auto max-w-7xl">
       <Modal
        showModal={showAddContainerModal}
        setShowModal={setShowAddContainerModal}
      >
        <div className="flex flex-col w-full items-start gap-y-4">
          <h1 className="text-gray-800 text-xl md:text-2xl font-bold text-center mx-auto">
            Add Container
          </h1>
      
        </div>
      </Modal>
      <div className="flex items-center justify-between gap-y-2">
        <h1 className="text-gray-800 text-xl md:text-3xl font-bold">
          StatusBoard
        </h1>
        <Button
          onClick={() => setShowAddContainerModal(true)}
          label="Add a new status board"
        />
      </div>
    </div>
  );
}

export default App;
