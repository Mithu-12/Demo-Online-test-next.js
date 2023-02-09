
import Layout from '../Components/Layout'
import MCQ from '../Components/MCQ'
import { chemistryData } from '../utils/data';


export default function Chemistry() {
  return (
    <div>
    <Layout>
      <MCQ data={chemistryData}/>
    </Layout>
     </div>
  )
}