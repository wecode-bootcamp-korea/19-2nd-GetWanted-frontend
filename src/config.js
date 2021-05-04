const JYIP = '10.58.0.96:8000';
const JWIP = '10.58.6.5:8000';
const BJIP = '10.58.7.226:8000';

export const GET_LOGIN_API = `http://${JWIP}/signin`;
export const GET_APPLYLIST_API = `http://${JYIP}/applylist`;
export const GET_JOBLIST_API = `http://${JYIP}/notifications`;
export const RESUME_API = `http://${BJIP}/resumes`;
export const GET_LIKE_API = `http://${JYIP}/notifications/like`;

export const EMAIL_API = `http://${JWIP}/users/email`;
export const LOGIN_API = `http://${JWIP}/users/signin`;
export const SIGNUP_API = `http://${JWIP}/users/signup`;
export const PASS_RESET_API = `http://${JYIP}/users/reset`;
export const KAKAO_LOGIN_API_URL = `http://${JYIP}/users/kakao`;

export const STORAGE_FORMS_API = `http://${BJIP}/resumes`;
export const STORAGE_FILES_API = `http://${BJIP}/resumes/files`;
export const STORAGE_LIST_API = `http://${BJIP}/resumes/lists`;
export const RESUME_API = `http://${BJIP}/resumes`;

export const JOB_DETAILS_API = `http://${JYIP}/notifications`;
export const JOB_DETAILS_USER_API = `http://${JYIP}/apply`;
export const JOB_DETAILS_RESUME_API = `http://${JYIP}/resumes/lists`;
