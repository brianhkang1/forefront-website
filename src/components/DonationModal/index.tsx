import { Modal } from 'semantic-ui-react';
import DonationWidget from '../DonationWidget';
import useIsMobile from '../../hooks/useIsMobile';
import styles from './DonationModal.module.css';

interface Props {
  isOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const DonationModal = ({ isOpen, setIsModalOpen }: Props) => {
  const isMobile = useIsMobile();

  return (
    <Modal
      size='tiny'
      className={styles.modal}
      style={{ marginTop: isMobile ? '70px' : '0' }}
      open={isOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <DonationWidget />
    </Modal>
  );
};

export default DonationModal;
