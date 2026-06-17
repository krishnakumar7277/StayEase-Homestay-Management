import { useState } from "react";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

const ComponentDemo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">
        StayEase UI Library
      </h1>

      {/* Buttons */}
      <div className="mb-10 space-x-3">
        <Button>Primary</Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="outline">
          Outline
        </Button>
      </div>

      {/* Input */}
      <div className="max-w-md mb-10">
        <Input
          label="Destination"
          placeholder="Enter destination"
        />
      </div>

      {/* Modal */}
      <div className="mb-10">
        <Button
          onClick={() => setModalOpen(true)}
        >
          Open Modal
        </Button>

        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="StayEase Modal"
        >
          <p>
            Welcome to StayEase Homestay Platform.
          </p>
        </Modal>
      </div>

      {/* Toast */}
      <div className="mb-10">
        <Button
          variant="secondary"
          onClick={() => setToastOpen(true)}
        >
          Show Toast
        </Button>

        <Toast
          show={toastOpen}
          message="Booking Successful!"
          onClose={() => setToastOpen(false)}
        />
      </div>

      {/* Loader */}
      <Loader />
    </div>
  );
};

export default ComponentDemo;