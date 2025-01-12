import axios from 'axios';

export const fetchPageConfig = async () => {
  try {
    const response = await axios.get(
      'https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config'
    );
    console.log(response.data[0]?.page_config)
    return response.data[0]?.page_config || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
