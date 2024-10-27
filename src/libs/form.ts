import {
  NICKNAME_PATTERN,
  NICKNAME_REQUIRE_ERROR_MESSAGE,
  NICKNAME_VALIDATION_ERROR_MESSAGE,
} from '@/constants';

export const nickNameRegister = {
  required: NICKNAME_REQUIRE_ERROR_MESSAGE,
  pattern: {
    value: NICKNAME_PATTERN,
    message: NICKNAME_VALIDATION_ERROR_MESSAGE,
  },
};
