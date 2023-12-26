import { Dialog } from '@material-ui/core';
import DonationWidget from '../DonationWidget';
import useIsMobile from '../../hooks/useIsMobile';

interface Props {
  isOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const DonationModal = ({ isOpen, setIsModalOpen }: Props) => {
  const isMobile = useIsMobile();

  return (
    <Dialog style={{ marginTop: isMobile ? '70px' : '0' }} open={isOpen} onClose={() => setIsModalOpen(false)}>
      <div>
        <DonationWidget />
      </div>
    </Dialog>
  );
};

export default DonationModal;
