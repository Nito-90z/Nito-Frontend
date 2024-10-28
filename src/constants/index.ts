// nickname
export const NICKNAME_VALIDATION_ERROR_MESSAGE =
  "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합";
export const NICKNAME_DUPLICATE_ERROR_MESSAGE = "이미 사용중인 닉네임이에요";
export const NICKNAME_VALID_MESSAGE = "사용 가능한 닉네임이에요";

// regex
export const NICKNAME_PATTERN = /^[a-zA-Z0-9]{6,16}$/;
export const IOS_PATTERN = /iPhone|iPad|iPod/i;

// product-ordering
export const PRESENT_PRICE = "present_price";
export const DISCOUNT_RATE = "-discount_rate";

// notion error
export const NOTION_SERVICE_ERROR = "NEXT_PUBLIC_NOTION_TERMS_OF_SERVICE is not defined";
export const NOTION_POLICY_ERROR = "NEXT_PUBLIC_NOTION_PRIVACY_POLICY is not defined";