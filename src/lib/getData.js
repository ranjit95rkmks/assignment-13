export default async function getData() {

    const data = await fetch('http://localhost:3000/api/get-cookies');
     return data;

}