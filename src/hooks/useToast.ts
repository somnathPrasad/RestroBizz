import NotificationContext from '@/context/NotificationProvider';
import { useContext } from 'react';

export default function useToast() {
  return useContext(NotificationContext);
}
