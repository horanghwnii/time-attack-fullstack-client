import { SignUpDto } from '@/api/auth.api/auth.dto';
import api from '@/api/index.api';
import { useMutation } from '@tanstack/react-query';

export default function useMutationSignUp() {
  return useMutation<unknown, unknown, SignUpDto>({
    mutationFn: api.auth.signUp,
  });
}
