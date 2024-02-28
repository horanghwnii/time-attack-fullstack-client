import api from '@/api/index.api';
import { useMutation } from '@tanstack/react-query';

export default function useMutationUpdateDeal() {
  return useMutation({ mutationFn: api.deals.updateDeal });
}
