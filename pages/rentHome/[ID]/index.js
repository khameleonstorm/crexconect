import Footer from "../../../components/Footer"
import Navbar from "../../../components/Navbar"
import PropertyDetails from "../../../components/PropertyDetails"
import Contact from "../../../components/Contact"

export default function detailsPage({property, error}) {


  return (property &&
    <>
      <Navbar showAuth={true} black={true}/>
       <PropertyDetails details={property}/>
      <Footer />
      <Contact />
    </>
  )
}



export function getStaticPaths() {

  return {
    paths: [{
      params: {
        ID: "1"
      }
    }],
    fallback: true,
  }

}


export async function getStaticProps(context) {
  const pid = context.params.ID

  let property = '';
  let error = '';

  try {
    const res = await fetch(`https://us-real-estate.p.rapidapi.com/property-detail?property_id=${pid}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.NEW_KEY,
        'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
      }
    })
    const data  = await res.json();
    if (data.status === 200) {
      property = data
    }else {
      error = 'Could not fetch data'
    }
  } catch (err) {
    error = err.message;
    console.log(err);
  }


  return {
    props: { property, error}
  };
}

