import api from '@/api/index.api';
import { useQuery } from '@tanstack/react-query';

export default function useQueryGetDeal() {
  return useQuery({
    queryKey: ['deal', { isList: false }],
    queryFn: () => api.deals.getDeal,
  });
}
