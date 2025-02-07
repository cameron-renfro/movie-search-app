const GET_PERSON_DETAILS = async (person: string) => {
  const url = `${process.env.MOVIE_DB_HOST_NAME}/3/person/${person}?language=en-US&api_key=${process.env.MOVIE_DB_API_KEY}`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  console.log('Data', data);
  return data;
};
export default GET_PERSON_DETAILS;
