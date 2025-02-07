import GET_PERSON_DETAILS from './data';

const Page = async ({ params }: { params: { person: string } }) => {
  const person = await GET_PERSON_DETAILS(params.person);
  console.log('📊 Results', person);
  return (
    <div>
      <p>You have found the page for {person.name}</p>
    </div>
  );
};
export default Page;
