import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  }

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>I Accept</Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Here is an important agreement for you to accept
      </p>
    </Modal>
  );

  return <div>
    <Button onClick={handleClick} primary>
      Open Modal
    </Button>
    {showModal && modal}
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere auctor risus, vitae ultricies odio sodales ac. Donec eu mi et magna commodo aliquet. Proin euismod, magna sed tincidunt rutrum, augue metus pellentesque neque, feugiat aliquam diam ante at libero. Curabitur a odio maximus, vehicula odio eget, suscipit sem. Ut nec enim non libero tincidunt tempus eget nec mi. Praesent vulputate enim sed ultrices laoreet. Sed ut tellus tristique leo molestie pharetra. Aliquam ac euismod sem, at tincidunt metus. Nunc at libero urna. Mauris sagittis molestie magna, a maximus eros. In posuere suscipit elementum. Nullam consequat gravida sollicitudin. Phasellus hendrerit fermentum risus, ut porttitor purus auctor at. Proin ut ultricies massa, in lobortis est. Donec vulputate ante magna, sed facilisis lacus lobortis dignissim. Quisque ac interdum ipsum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere auctor risus, vitae ultricies odio sodales ac. Donec eu mi et magna commodo aliquet. Proin euismod, magna sed tincidunt rutrum, augue metus pellentesque neque, feugiat aliquam diam ante at libero. Curabitur a odio maximus, vehicula odio eget, suscipit sem. Ut nec enim non libero tincidunt tempus eget nec mi. Praesent vulputate enim sed ultrices laoreet. Sed ut tellus tristique leo molestie pharetra. Aliquam ac euismod sem, at tincidunt metus. Nunc at libero urna. Mauris sagittis molestie magna, a maximus eros. In posuere suscipit elementum. Nullam consequat gravida sollicitudin. Phasellus hendrerit fermentum risus, ut porttitor purus auctor at. Proin ut ultricies massa, in lobortis est. Donec vulputate ante magna, sed facilisis lacus lobortis dignissim. Quisque ac interdum ipsum.
    </p>
  </div>
}

export default ModalPage;