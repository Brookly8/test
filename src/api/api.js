import axios from "axios";
const url = "https://randomuser.me/api/";
export async function getPerson(personList, setPersonList) {
  try {
    const { data } = await axios(url);
    console.log(data.results[0]);
    setPersonList([...personList, data]);
  } catch (error) {
    console.log(error);
  }
}
