import { LogInDto } from '@/api/auth.api/auth.dto';
import api from '@/api/index.api';
import { useMutation } from '@tanstack/react-query';

export default function useMutationLogIn() {
  return useMutation<unknown, unknown, LogInDto>({
    mutationFn: api.auth.logIn,
  });
}
