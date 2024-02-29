import api from '@/api/index.api';
import { useQuery } from '@tanstack/react-query';

export default function useQueryGetDeals() {
  return useQuery({
    queryKey: ['deal'],
    queryFn: api.deals.getAllDeals,
    enabled: true,
  });
}
