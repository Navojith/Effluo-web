import apiRequestService from '../utils/apiRequestService';

const EFFLUO_NODE_BASE_URL = `${
  import.meta.env.VITE_EFFLUO_NODE_BASE_URL
}/console`;

export const getPrs = async (token: string) => {
  try {
    const response = await apiRequestService.sendRequest(
      `${EFFLUO_NODE_BASE_URL}/prs`,
      'get',
      token
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getRepositories = async (token: string) => {
  try {
    const response = await apiRequestService.sendRequest(
      `${EFFLUO_NODE_BASE_URL}/repositories`,
      'get',
      token
    );
    return response;
  } catch (error) {
    console.error(error);
    throw new Error((error as Error).message);
  }
};

export const getReviews = async (token: string) => {
  try {
    const response = await apiRequestService.sendRequest(
      `${EFFLUO_NODE_BASE_URL}/reviews`,
      'get',
      token
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getReviewSummary = async (token: string) => {
  try {
    const response = await apiRequestService.sendRequest(
      `${EFFLUO_NODE_BASE_URL}/review-summary`,
      'get',
      token
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};