import { useState } from "react";

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <Modal name="mint" container="board" />}
    </div>
  );
};
