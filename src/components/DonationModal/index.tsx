import { Modal } from 'semantic-ui-react';
import DonationWidget from '../DonationWidget';
import useIsMobile from '../../hooks/useIsMobile';

interface Props {
  isOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const DonationModal = ({ isOpen, setIsModalOpen }: Props) => {
  const isMobile = useIsMobile();

  return (
    <Modal
      size='tiny'
      style={{ marginTop: isMobile ? '70px' : '0' }}
      open={isOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <Modal.Content scrolling>
        <DonationWidget />
      </Modal.Content>
    </Modal>
  );
};

export default DonationModal;
