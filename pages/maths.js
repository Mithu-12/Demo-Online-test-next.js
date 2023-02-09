import Layout from '../Components/Layout';
import MCQ from '../Components/MCQ';
import { mathData } from '../utils/data';

export default function Maths() {
  return (
    <div>
      <Layout>
        <MCQ data={mathData} />
      </Layout>
    </div>
  );
}
